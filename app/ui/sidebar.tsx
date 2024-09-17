// This is the sidebar file, which contains the sidebar used in the layout for the dashboard page.

// Import components
import Image from "next/image";
import NavButton from '@/app/ui/navbutton';

export default function SideBar() {
    return (
        <div className="flex flex-col gap-y-6 w-fit h-full text-white">
            <NavButton
                source={'/icons/home-icon-minimal.png'}
                width={40}
                height={40}
            />
            <NavButton
                source={'/icons/minimal-checklist-icon.png'}
                width={40}
                height={40}
            />
            <NavButton
                source={'/icons/home-icon-minimal.png'}
                width={40}
                height={40}
            />
        </div>
    )
}