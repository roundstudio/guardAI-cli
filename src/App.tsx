import { BrowserRouter } from "react-router-dom";
import Router from "./routes/section";
import Sidebar from "./components/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen ">
        <Sidebar />
        <div className="flex-grow   bg-gray-100 p-6">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
