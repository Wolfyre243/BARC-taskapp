// This is the task card component that displays all information about a task, in a card format.

// TODO: Figure out ways to import task data from the database

'use client' // needed for markcompleteButton to work properly

// Import components
import ActionButtons from './actionButtons';

export default function TaskCard({
    text
} : {
    text: string
}) {
    return (
        <div className="rounded-xl p-2 px-3 bg-grey-superlight">
            {/* Card Header */}
            <div id="taskcardHeader" className="flex flex-row items-center justify-between">
                <h1 className="text-xl"> {text} </h1>
                <ActionButtons />
            </div>
            
            <h2 className="text-md text-neutral-300"> Due in x days (22/22/22) </h2>
        </div>
    );
}