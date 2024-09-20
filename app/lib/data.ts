// This file will manage database access and create high-level functions for other components to use.

// Import helper functions

import { pool } from './db-access' // This is here for if you need it; prioritise using query first.
import { query } from './db-access' // Use this for querying
import { getClient } from './db-access' // For when a transaction is needed

// MARK: Fetching Tasks
export async function fetchTasks(
    type: "all" | "completed" | "incomplete",
    limit ?: number
) {
    try {
        if (type === "all") {
            const taskdata = await query(
                `SELECT * FROM tasks
                ORDER BY date_due ASC
                ${limit ? `LIMIT ${limit}` : ""}`
            )
            return taskdata.rows; // returns an array of task objects.
        } else {
            const taskdata = await query(
                `SELECT * FROM tasks 
                WHERE completed = ${type === "completed" ? "true" : "false"}
                ORDER BY date_due ASC
                ${limit ? `LIMIT ${limit}` : ""}`
            )
            return taskdata.rows; // returns an array of task objects.
        }
    } catch (err) {
        console.error(err);
    }
}

