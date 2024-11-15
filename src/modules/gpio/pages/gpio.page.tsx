import DashboardLayout from "../../../layouts/dashboard.layout";
import {GpioForm, GpioTable} from "../features";
import {Toolbar} from "../../../components";
import {useGpioList} from "../hooks";


const GpioPage = () => {
    const { refetch } = useGpioList();
    return(
        <DashboardLayout>
            <Toolbar onAdd={GpioForm} onRefresh={refetch} titleAdd="افزودن GPIO جدید" />
            <GpioTable />
        </DashboardLayout>
    );
};

export default GpioPage;
