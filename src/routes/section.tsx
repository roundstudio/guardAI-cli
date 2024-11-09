import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const LoginPage = lazy(() => import("../Module/login").then((module) => ({ default: module.LoginPage })));
const StreamPage = lazy(() => import("../Module/stream").then((module) => ({ default: module.StreamPage })));


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

  ]);

  return routes;
}
