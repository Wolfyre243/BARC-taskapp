// This is the layout file for the dashboard page.

// Import components from their respective files
import TopNavBar from '@/app/ui/topnavbar';
import SideBar from '../ui/sidebar';

export default function Layout({ children }: {children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen bg-grey-dark">
            <TopNavBar />
            <div className='flex flex-row px-6 py-3 h-full'>
                <SideBar />
                <div className="flex-grow"> { children } </div>
            </div>
        </div>
    )
}