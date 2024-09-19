// This is the action buttons file. It houses the action buttons for the task cards,
// and exports all of them in a div by default.

// Import components and other stuff
import { useState } from 'react';

export default function ActionButtons() {
    return(
        <div className="flex flex-row gap-x-2">
            <MarkCompleteBtn />
            <DeleteBtn />
        </div>
    )
}

// This is the delete button component
// On click, it will remove the referenced task from the database (or archive it first).
// Continue documentation here...

// TODO: Add functionality to this component
export function DeleteBtn() {
    const [hover, setHover] = useState(false);

    let strokeColour = '#ffffff';
    if (hover) {
        strokeColour = '#ff5842'; // add the relevant class names to the list.
    }

    return(
        <button 
            onPointerEnter={() => setHover(true)} // on hover in, set the hover variable to true.
            onPointerLeave={() => setHover(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={strokeColour} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                <line x1="10" x2="10" y1="11" y2="17"/>
                <line x1="14" x2="14" y1="11" y2="17"/>
            </svg>
        </button>
    )
}

// This is the mark complete button component
// On click, it will mark the current task as complete.
// Continue documentation here...

// TODO: Add functionality to this component
export function MarkCompleteBtn() {
    // Configure state here
    const [hover, setHover] = useState(false); // this creates a new variable and a helper function
    // setHover will toggle hover to true, and vice versa
    
    // we define className here since we will be making modifications to it later.
    let className = 'w-5 h-5 rounded-full border-2';
    // when hover becomes true, we want to highlight te check button.
    if (hover) {
        className += ' border-green-500'; // add the relevant class names to the list.
    }

    return(
        <button 
            className={className}
            onPointerEnter={() => setHover(true)} // on hover in, set the hover variable to true.
            onPointerLeave={() => setHover(false)}
        ></button>
    )
}