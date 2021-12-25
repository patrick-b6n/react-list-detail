import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="container mx-auto p-2">
            <header className="w-full p-5 text-4xl font-bold text-center">
                react-list-detail
            </header>

            <div className="max-w-screen-sm mx-auto">
                <Outlet />
            </div>
        </div>
    )
}