import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

interface SidebarItem {
  label: string;
  icon: JSX.Element;
  route?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    label: "داشبورد",
    icon: <i className="fas fa-tachometer-alt" />,
    route: "/stream",
  },
  { label: "دوربین", icon: <i className="fas fa-camera" />, route: "/camera" },
  {
    label: "اطلاع رسانی",
    icon: <i className="fas fa-bell" />,
    route: "/notifications",
  },
  {
    label: "هشدار",
    icon: <i className="fas fa-exclamation-triangle" />,
    route: "/alerts",
  },
  { label: "تنظیمات", icon: <i className="fas fa-cogs" />, route: "/settings" },
  { label: "خروج", icon: <i className="fas fa-sign-out-alt" /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleNavigation = (route?: string) => {
    if (route) navigate(route);
  };

  return (
    <motion.div
      initial={{ width: isOpen ? 250 : 80 }}
      animate={{ width: isOpen ? 250 : 80 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "fixed top-0 right-0 h-screen bg-gray-800 shadow-lg flex flex-col",
        { "overflow-hidden": !isOpen }
      )}
    >
      <div className="flex justify-between items-center p-4">
        <h2
          className={clsx("text-white text-2xl font-bold", { hidden: !isOpen })}
        >
          میزکار
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
          title={isOpen ? "بستن منو" : "باز کردن منو"}
        >
          <i
            className={isOpen ? "fas fa-chevron-right" : "fas fa-chevron-left"}
          />
        </button>
      </div>
      <ul className="flex-grow">
        {sidebarItems.map((item) => (
          <motion.li
            key={item.label}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleNavigation(item.route)}
            className="p-4 text-white cursor-pointer hover:bg-gray-700"
          >
            <div className="flex items-center">
              <div className="ml-4 text-xl">{item.icon}</div>
              <span className={clsx({ hidden: !isOpen })}>{item.label}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
