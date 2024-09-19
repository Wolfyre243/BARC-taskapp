// This file will set up a PostgreSQL database pool connection for the data.ts file to access.

// Import dependencies
const { Pool } = require('pg');
const { db_password } = require('@/config.json');

// Create a pool instance for PostgreSQL database connections

export const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'BARCMK1',
    user: 'postgres',
    password: db_password,
    max: 20,
    idleTimeoutMillis: 30000, // Amount of time to keep the database open for connections
    connectionTimeoutMillis: 20000 // Amount of time to wait for a connection before timing out.
})

// MARK: Add Event Listeners

pool.on('release', ( err: any ) => {
    if (!err) {
        console.log('Client released');
    } else {
        console.log(`Error while releasing client:\n${err.message}`);
    }
})

pool.on('connect', () => {
    console.log('Connected to PostgreSQL. Database: BARCMK1');
})

// MARK: Set Up Database Access Functions

export const query = async ( text: string, params?: any ) => {
    const startTime = Date.now();
    let result;
    try {
        result = await pool.query(text, params);
    } catch (err) {
        console.log(err);
    }
    const duration = Date.now() - startTime;
    console.log(`Query executed in ${duration}ms; rows: ${result.rowCount}`);
    return result; 
};

export const getClient = async () => {
    const client = await pool.connect();

    const query = client.query;
    const release = client.release;
    // If a client is checked out for more than 5s, a leak is detected.
    const timeout = setTimeout(() => {
        console.error('Client has been checked out for over 5s.');
        console.error(`Last executed query by this client: ${client.lastQuery}`);
    }, 5000);

    // Monkey Patching (I have yet to figure out what this does exactly.)
    client.query = (...args: any) => {
        client.lastQuery = args;
        return query.apply(client, args); // Applies the 'query' function to 'client'.
    }
    client.release = () => {
        clearTimeout(timeout);
        client.query = query;
        client.release = release;
        return release.apply(client);
    }

    return client;
}