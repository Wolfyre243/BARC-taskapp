// Import the necessary components
import NavButton from '@/app/ui/navbutton';

export default function TopNavBar() {
    return (
        <div className="flex flex-row py-6 px-10 justify-between bg-transparent text-white">
            {/* TODO: Add brand name + logo here, using components again. */}
            <h1 className='text-xl'>Hello World!</h1>
            <div className="flex flex-row gap-x-3">
                <NavButton 
                    text={'Home'}
                />
                <NavButton 
                    text={'Home'}
                />
                <NavButton 
                    text={'Home'}
                />
            </div>
        </div>
    )
}