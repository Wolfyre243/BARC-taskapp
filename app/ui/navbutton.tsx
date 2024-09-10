// Import necessary components

// Import icons
import { HomeIcon } from '@heroicons/react/24/outline';
// TODO: Add more icons as needed, and create a map to allow easier customisation.

export default function NavButton({ 
    text
} : {
    text: string; // Perform typing here
}) {
    return(
        <button className="px-4 py-1 flex flex-row gap-2 items-center bg-transparent">
            <HomeIcon className='size-5'/>
            <p className='align-middle h-fit text-sm'> { text } </p>
        </button>
    )
}