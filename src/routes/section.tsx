import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPage = lazy(() => import("../modules/login").then((module) => ({ default: module.LoginPage })));
const StreamPage = lazy(() => import("../modules/stream").then((module) => ({ default: module.StreamPage })));
const HomePage = lazy(() => import("../modules/home").then((module) => ({ default: module.HomePage })));
const CameraPage = lazy(() => import("../modules/camera").then((module) => ({ default: module.CameraPage })));
const GpioPage = lazy(() => import("../modules/gpio").then((module) => ({ default: module.GpioPage })));
const ObjectDetectionPage = lazy(() => import("../modules/object-detection").then((module) => ({ default: module.ObjectDetectionPage })));
const RulePage = lazy(() => import("../modules/rule").then((module) => ({ default: module.RulePage })));
const TelegramPage = lazy(() => import("../modules/telegram").then((module) => ({ default: module.TelegramPage })));
const ContactPage = lazy(() => import("../modules/contact").then((module) => ({ default: module.ContactPage })));

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HomePage />
          </motion.div>
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoginPage />
          </motion.div>
        </Suspense>
      ),
    },
    {
      path: "/stream",
      element: (
        <Suspense>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StreamPage />
          </motion.div>
        </Suspense>
      ),
    },
    {
      path: "/camera",
      element: (
        <Suspense>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CameraPage />
          </motion.div>
        </Suspense>
      ),
    },
    {
      path: "/gpio",
      element: (
        <Suspense>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GpioPage />
          </motion.div>
        </Suspense>
      ),
    },
    {
      path: "/object-detection",
      element: (
        <Suspense>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ObjectDetectionPage />
          </motion.div>
        </Suspense>
      ),
    },
    {
      path: "/rule",
      element: (
        <Suspense>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <RulePage />
          </motion.div>
        </Suspense>
      ),
    },
    {
      path: "/telegram",
      element: (
        <Suspense>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TelegramPage />
          </motion.div>
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ContactPage />
          </motion.div>
        </Suspense>
      ),
    },
  ]);

  return routes;
}
