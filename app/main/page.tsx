// This file contains the page for the dashboard.
/* 
    Plans: I may turn this into a layout in the future, as I intend to transform the
    bottom section into a "see all tasks" layout, along with other stuff.
*/

// Import the components and fonts
import { sulphurPoint } from "../ui/fonts";

import TaskCard from "@/app/ui/dashboard/taskcard";
import { Card_Container } from "../ui/dashboard/cardContainer";
import { TaskCount_Widget } from "../ui/dashboard/widgets";
import { Quote_Widget } from "../ui/dashboard/widgets";

import { Suspense } from "react";

// Import Skeletons
import { Widget_Skeleton } from "../ui/skeletons";

// Import Database Access functions
import { fetchTasks } from "@/app/lib/data";

export default async function Page() {

    const taskData = await fetchTasks("completed");

    return (
        <main className="flex flex-col items-center h-full w-full gap-y-5 px-12 py-6">
            <div className="flex flex-col w-full h-fit gap-y-5">
                <div className="flex flex-row w-full h-fit justify-between">
                    <h1 className={`text-6xl tracking-tighter ${sulphurPoint.className}`}>
                        {`Good Morning, Wolfyre.`}
                    </h1>
                    <div>
                        a few quick action buttons here
                    </div>
                </div>
                
                <div className="flex flex-row w-full h-fit gap-x-5 justify-evenly">
                    <Suspense fallback={<Widget_Skeleton />}>
                        <TaskCount_Widget />
                    </Suspense>
                    <Suspense fallback={<Widget_Skeleton />}>
                        <Quote_Widget />
                    </Suspense>
                    <Suspense fallback={<Widget_Skeleton />}>
                        <TaskCount_Widget />
                    </Suspense>
                    <Suspense fallback={<Widget_Skeleton />}>
                        <TaskCount_Widget />
                    </Suspense>
                    <Suspense fallback={<Widget_Skeleton />}>
                        <TaskCount_Widget />
                    </Suspense>
                    
                </div>
            </div>

            <div className="flex flex-row justify-between w-full h-full gap-x-5">
                <Card_Container />

                <div id="summarySide" className="h-full w-fit flex flex-col justify-evenly gap-y-10">
                    <div id="widgetsContainer" className="h-full flex flex-col justify-center items-center rounded-3xl bg-grey-light">
                        <h1 className="text-3xl">Add some widgets here</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}