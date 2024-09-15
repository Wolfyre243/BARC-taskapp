// This file contains the page for the dashboard.
/* 
    Plans: I may turn this into a layout in the future, as I intend to transform the
    bottom section into a "see all tasks" layout, along with other stuff.
*/

// Import the components and fonts
import { sulphurPoint } from "../ui/fonts";

import TaskCard from "@/app/ui/tasks/taskcard";

export default async function Page() {
    return (
        <main className="flex flex-row items-center h-full w-full gap-x-10 px-12 py-6">
            <div id="summarySide" className="h-full w-1/2 flex flex-col justify-evenly gap-y-10">
                <h1 className={`text-6xl my-20 ${sulphurPoint.className}`}>
                    {`Good Morning,`} <br />
                    {`Wolfyre`}
                </h1>
                <div id="widgetsContainer" className="h-full flex flex-col justify-center items-center rounded-3xl bg-grey-light">
                    <h1 className="text-3xl">Add some widgets here</h1>
                </div>
            </div>
            <div id="tasklistSide" className="h-full w-1/2 px-6 py-4 rounded-3xl bg-grey-light">
                <div id="tasklistHeader" className="w-full flex flex-row justify-between mb-5">
                    <h1 className="text-2xl">Outstanding Tasks</h1>
                    <button className="mr-1 text-3xl rounded-full">+</button>
                </div>

                {/* TODO: Maybe turn this tasklist div into its own component so it can be reused */}
                <div className="flex flex-col gap-y-4">
                    <TaskCard text={"Task 1"} />
                    <TaskCard text={"Task 2"} />
                    <TaskCard text={"Task 3"} />
                    <TaskCard text={"Task 4"} />
                </div>
            </div>
        </main>
    )
}