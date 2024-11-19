import { Toolbar } from "../../../components";
import DashboardLayout from "../../../layouts/dashboard.layout";
import TelegramForm from "../features/telegram.form";
import TelegramTable from "../features/telegram.table";
import { useTelegramList } from "../hooks";


const TelegramPage = () => {

    const {refetch} = useTelegramList()
  return(
    <DashboardLayout>
        <Toolbar onRefresh={refetch} onAdd={TelegramForm} titleAdd="افزودن تلگرام" />
        <TelegramTable />
    </DashboardLayout>
  );
};

export default TelegramPage;

