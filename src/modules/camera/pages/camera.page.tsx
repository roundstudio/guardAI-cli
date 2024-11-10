import DashboardLayout from "../../../layouts/dashboard.layout";
import { CameraTable, CameraToolbar } from "../features";


const CameraPage = () => {
    return(
        <DashboardLayout>
            <CameraToolbar />
            <CameraTable />
        </DashboardLayout>
    )
}

export default CameraPage;
