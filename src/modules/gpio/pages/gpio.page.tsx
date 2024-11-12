import DashboardLayout from "../../../layouts/dashboard.layout";
import GpioTable from "../features/gpio.table";
import GpioForm from "../features/gpio.form";
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
