// This is the task card component that displays all information about a task, in a card format.

// TODO: Figure out ways to import task data from the database

'use client' // needed for markcompleteButton to work properly

// Import components
import ActionButtons from './actionButtons';

// Import Database Access functions
import { fetchTasks } from "@/app/lib/data";

export default function TaskCard({
    text, due_date
} : {
    text: string;
    due_date?: any;
}) {

    // Parse the due date
    let dateDue;
    if (due_date != null) {
        dateDue = new Date(due_date)
        dateDue = dateDue.toLocaleDateString('en-GB');
    } else {
        dateDue = "N/A";
    }
    
    return (
        <div className="rounded-xl p-2 px-3 bg-grey-superlight">
            {/* Card Header */}
            <div id="taskcardHeader" className="flex flex-row items-center justify-between">
                <h1 className="text-xl"> {text} </h1>
                <ActionButtons />
            </div>
            
            <h2 className="text-md text-neutral-300"> 
                Due in x days ({dateDue})
            </h2>
        </div>
    );
}

