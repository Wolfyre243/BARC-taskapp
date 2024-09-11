// This file contains the page for the dashboard.
/* 
    Plans: I may turn this into a layout in the future, as I intend to transform the
    bottom section into a "see all tasks" layout, along with other stuff.
*/

// Import the components and fonts
import { sulphurPoint } from "../ui/fonts";

// TODO: Change the font of all the text.
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
            <div id="tasklistSide" className="h-full w-1/2 rounded-3xl bg-grey-light">
                <h1>Hello world</h1>
            </div>
        </main>
    )
}