// This file will contain all widget components used in other pages. 
// Dev Note: Widgets made in here should be adaptable and easy to expand/contract without breaking the content inside it.
// Users will be able to pick and decide what widgets they wish to "pin" on their dashboard.

// Import components
import Image from "next/image";
import { Suspense } from "react";

// Import database functions
import { fetchTasks } from "@/app/lib/data";

// MARK: Task Count Widget

// TODO: Add more options here, to pick whether to display weekly tasks completed or monthly, etc.
export async function TaskCount_Widget({}) {
    // TODO: Add actuall functionality here to fetch task data from database
    const taskData = await fetchTasks("completed");

    return (
        <div className="flex flex-col w-full p-5 bg-blue-400 text-black rounded-xl">
            <div className="flex flex-row gap-x-2 h-fit w-fit mb-3">
                <Image
                    src="/icons/clipboard-icon.svg"
                    alt="Tasks completed icon"
                    width={35}
                    height={35}
                    className="object-fill"
                />
                <h2 className="text-2xl">Tasks Completed</h2>
            </div>

            <p>This {"week"}:</p>
            
            <h2 className="text-4xl">{taskData ? taskData.length : "..."}</h2>
            
        </div>
    );
}

// MARK: Quote Widget

export function Quote_Widget() {
    return (
        <div className="flex flex-col w-full gap-y-3 p-5 bg-yellow-200 text-black rounded-xl">
            <div className="flex flex-row items-center gap-x-2 h-fit w-fit">
                <Image
                    src="/icons/clipboard-icon.svg"
                    alt="Tasks completed icon"
                    width={35}
                    height={35}
                />
                <h2 className="text-2xl">Quote of the day</h2>
            </div>
            
            <p className="text-md">"This is a very enlightening quote"</p>
            <p>- John Hammond</p>
            
        </div>
    )
}