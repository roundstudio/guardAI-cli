import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const LoginPage = lazy(() => import("../modules/login").then((module) => ({ default: module.LoginPage })));
const StreamPage = lazy(() => import("../modules/stream").then((module) => ({ default: module.StreamPage })));
const CameraPage = lazy(() => import("../modules/camera").then((module) => ({ default: module.CameraPage })));
const GpioPage = lazy(() => import("../modules/gpio").then((module) => ({ default: module.GpioPage })));
const ObjectDetectionPage = lazy(() => import("../modules/object-detection").then((module) => ({ default: module.ObjectDetectionPage })));
const RulePage = lazy(() => import("../modules/rule").then((module) => ({ default: module.RulePage })));
const TelegramPage = lazy(() => import("../modules/telegram").then((module) => ({ default: module.TelegramPage })));
const ContactPage = lazy(() => import("../modules/contact").then((module) => ({ default: module.ContactPage })));

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
    {
      path: "/gpio",
      element: (
        <Suspense>
          <GpioPage />
        </Suspense>
      ),
    },
    {
      path: "/object-detection",
      element: (
        <Suspense>
          <ObjectDetectionPage />
        </Suspense>
      ),
    },
    {
      path: "/rule",
      element: (
        <Suspense>
          <RulePage />
        </Suspense>
      ),
    },
    {
      path: "/telegram",
      element: (
        <Suspense>
          <TelegramPage />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense>
          <ContactPage />
        </Suspense>
      ),
    },
  ]);

  return routes;
}
