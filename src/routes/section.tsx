import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

// Lazy load pages
const LoginPage = lazy(() => import("../components/login"));
const DashboardPage = lazy(() => import("../components/dashboard"));

// Fallback component

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
      path: "/dashboard",
      element: (
        <Suspense>
          <DashboardPage />
        </Suspense>
      ),
    },
  ]);

  return routes;
}
