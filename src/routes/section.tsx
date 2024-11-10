import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const LoginPage = lazy(() => import("../modules/login").then((module) => ({ default: module.LoginPage })));
const StreamPage = lazy(() => import("../modules/stream").then((module) => ({ default: module.StreamPage })));
const CameraPage = lazy(() => import("../modules/camera").then((module) => ({ default: module.CameraPage })));

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
      path: "/stream",
      element: (
        <Suspense>
          <StreamPage />
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
