import { Toolbar } from "../../../components";
import DashboardLayout from "../../../layouts/dashboard.layout"
import { ObjectDetectionForm, ObjectDetectionTable } from "../feature"
import { useObjectDetectionList } from "../hooks";


const ObjectDetectionPage = () => {
    const {refetch}= useObjectDetectionList()
    return(
        <DashboardLayout>
            <Toolbar onAdd={ObjectDetectionForm} onRefresh={refetch} titleAdd="افزودن شیء جدید"/>
            <ObjectDetectionTable/>
        </DashboardLayout>
    );
}

export default ObjectDetectionPage;
