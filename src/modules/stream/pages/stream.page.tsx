import { on_run } from "../../../config/onRun";
import Sidebar from "../../sidebar/feature/sidebar";
import { useState, useEffect } from "react";

const StreamPage: React.FC = () => {
  const cameraId = 1;
  const token = localStorage.getItem("access_token");
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const fetchFrame = () => {
      const newUrl = `${on_run}api/stream/${cameraId}/?access_token=${token}&t=${new Date().getTime()}`;
      setImageUrl(newUrl);
    };

    fetchFrame();

    const intervalId = setInterval(() => {
      fetchFrame();
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [cameraId, token]);

  return (
    <div className="stream-page">
      <Sidebar />
      <h1>صفحه استریم</h1>
      <div className="stream-container">
        <img
          src={imageUrl}
          alt="Camera Stream"
          style={{ width: "600px", maxWidth: "800px" }}
        />
      </div>
    </div>
  );
};

export default StreamPage;
