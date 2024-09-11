// This file contains the page for the dashboard.
/* 
    Plans: I may turn this into a layout in the future, as I intend to transform the
    bottom section into a "see all tasks" layout, along with other stuff.
*/

// TODO: Change the font of all the text.
export default async function Page() {
    return (
        <main className="flex flex-row items-center h-full w-full gap-x-10 px-12 py-6">
            <div id="summarySide" className="h-full w-1/2 flex flex-col justify-evenly gap-y-10">
                
                <div className="flex flex-col items-start justify-center w-fit my-20">
                    <h1 className="text-6xl">Good Morning,</h1>
                    <h1 className="text-6xl">Wolfyre!</h1>
                </div>

                <div id="widgetsContainer" className="h-full flex flex-col justify-center items-center rounded-3xl bg-slate-500">
                    <h1 className="text-3xl">Add some widgets here</h1>
                </div>

            </div>
            <div id="tasklistSide" className="h-full w-1/2 bg-slate-700">
                <h1>Hello world</h1>
            </div>
        </main>
    )
}