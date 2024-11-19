import { Toolbar } from "../../../components";
import DashboardLayout from "../../../layouts/dashboard.layout";
import { CameraTable, CameraForm } from "../features";
import useCameraList from "../hooks/useCameraList";

const CameraPage = () => {
  const { refetch } = useCameraList();
  return (
    <DashboardLayout>
      <Toolbar
        onAdd={CameraForm}
        onRefresh={refetch}
        titleAdd="افزودن دوربین جدید"
      />
      <CameraTable />
    </DashboardLayout>
  );
};

export default CameraPage;
