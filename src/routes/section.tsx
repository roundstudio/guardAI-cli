import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const LoginPage = lazy(() => import("../components/login"));
const DashboardPage = lazy(() => import("../components/dashboard"));
const CameraPage = lazy(() => import("../components/cameraTable"));


export default function Router() {
  const routes = useRoutes([
    {
      path: "/login",
      element: (
        <Suspense>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: (
        <Suspense>
          <DashboardPage />
        </Suspense>
      ),
      
    },
 
    {
      path: "/camera",
      element: (
        <Suspense>
          <CameraPage />
        </Suspense>
      ),
    },
  ]);

  return routes;
}
