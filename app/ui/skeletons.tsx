// This is the file containing the skeletons of elements that make use of the partial preloading feature in next.js

// Import components

// MARK: Widget Skeleton
export function Widget_Skeleton() {
    return (
        <div className="flex flex-col w-full gap-y-3 p-5 bg-zinc-700 text-black rounded-xl">
            <h1 className="text-xl text-white">Loading...</h1>
        </div>
    )
}