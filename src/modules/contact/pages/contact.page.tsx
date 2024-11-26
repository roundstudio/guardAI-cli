import { Toolbar } from "../../../components";
import DashboardLayout from "../../../layouts/dashboard.layout";
import ContactForm from "../features/contact.form";
import ContactTable from "../features/contact.table";
import useContactList from "../hooks/useContactList";

const ContactPage = () => {
    const { refetch } = useContactList();
    
    return (
        <DashboardLayout>
            <Toolbar onRefresh={refetch} onAdd={ContactForm} titleAdd="افزودن پیام" />
            <ContactTable />
        </DashboardLayout>
    );
};

export default ContactPage;
