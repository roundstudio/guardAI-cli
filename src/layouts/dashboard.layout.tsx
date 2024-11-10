import Sidebar from "../modules/sidebar/feature/sidebar";



const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return(
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
