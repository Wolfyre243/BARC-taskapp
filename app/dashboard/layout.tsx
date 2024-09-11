// This is the layout file for the dashboard page.

// Import components from their respective files
import TopNavBar from '@/app/ui/dashboard/topnavbar';

export default function Layout({ children }: {children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen bg-grey-dark">
            <TopNavBar />
            <div className="flex-grow"> { children } </div>
        </div>
    )
}