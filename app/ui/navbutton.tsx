// This is the nav button component. It appears on the navbar for easier navigation.
/* 
There are 2 parameters; text and source. While self-explanatory, the source has to be
a relative path, tracing from the /public directory.
*/

// Import components
import Image from 'next/image';

export default function NavButton({ 
    source, width, height
} : {
    source: string;
    width: number;
    height: number; // Perform typing here
}) { // TODO: Consider changing this to an anchor element
    return(
        <button className="px-4 py-1 bg-transparent">
            <Image
                src={source}
                alt={'NavButton Icon'}
                width={width}
                height={height}
                className='invert'
            />
        </button>
    )
}