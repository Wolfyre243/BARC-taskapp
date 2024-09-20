// This is a file. Yes it is a file.

// Import Database Access functions
import { fetchTasks } from "@/app/lib/data";

// Import components
import TaskCard from "@/app/ui/dashboard/taskcard";

export async function Card_Container() {
    
    const taskData = await fetchTasks("incomplete", 5);

    return (
        <div id="tasklistSide" className="h-full w-full px-6 py-4 rounded-3xl bg-grey-light">
            {/* TODO: Add functionality to the add task button */}
            <div id="tasklistHeader" className="w-full flex flex-row justify-between mb-5">
                <h1 className="text-2xl">Outstanding Tasks</h1>
                <button className="mr-1 text-3xl rounded-full">+</button>
            </div>
            {/* TODO: Maybe turn this tasklist div into its own component so it can be reused */}
            <div className="flex flex-col gap-y-4">
                {/* Use the map function to create a task component for every entry in the database. */}
                {taskData.map((task: any) => {
                    return (
                        <TaskCard text={task.name} due_date={task.date_due} />
                    );
                })}
            </div>
        </div>
    )
}