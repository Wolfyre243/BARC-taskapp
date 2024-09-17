// This is the action buttons file. It houses the action buttons for the task cards,
// and exports all of them in a div by default.

// Import components and other stuff
import { useState } from 'react';
import Image from 'next/image';

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
    return(
        <button>
            <Image
                src={'/icons/delete-icon-minimal.png'}
                alt={'Delete Button Icon'}
                width={20}
                height={20}
                className='invert'
            />
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