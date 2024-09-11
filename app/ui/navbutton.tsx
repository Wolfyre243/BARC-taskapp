// This is the nav button component. It appears on the navbar for easier navigation.
/* 
There are 2 parameters; text and source. While self-explanatory, the source has to be
a relative path, tracing from the /public directory.
*/

// Import components
import Image from 'next/image';

export default function NavButton({ 
    text, source
} : {
    text: string; source: string; // Perform typing here
}) {
    return(
        <button className="px-4 py-1 flex flex-row gap-2 items-center bg-transparent">
            <Image
                src={source}
                alt={'NavButton Icon'}
                width={20}
                height={20}
                className='invert'
            />
            <p className='align-middle h-fit text-sm'> { text } </p>
        </button>
    )
}