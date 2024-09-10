// This is the layout file for the dashboard page.

import TopNavBar from '@/app/ui/dashboard/topnavbar';

export default function Layout({ children }: {children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <TopNavBar />
            <div className="flex-grow"> { children } </div>
        </div>
    )
}