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
    label: "دوربین",
    icon: <i className="fas fa-video" />,
    route: "/camera",
  },
  {
    label: "gpio",
    icon: <i className="fas fa-microchip" />,
    route: "/gpio",
  },
  {
    label: "پخش زنده",
    icon: <i className="fas fa-play" />,
    route: "/stream",
  },
  {
    label: "تشخیص اشیا",
    icon: <i className="fas fa-box" />,
    route: "/object-detection",
  },
  {
    label: "تلگرام",
    icon: <i className="fab fa-telegram" />,
    route: "/telegram",
  },
  {
    label: "تماس",
    icon: <i className="fas fa-address-book" />,
    route: "/contact",
  },
  {
    label: "قوانین",
    icon: <i className="fas fa-gavel" />,
    route: "/rule",
  },
  {
    label: "خروج",
    icon: <i className="fas fa-sign-out-alt" />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleNavigation = (route?: string) => {
    if (route) {
      navigate(route);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div
        style={{ width: isOpen ? "250px" : "80px" }}
        className="flex-shrink-0"
      />
      <motion.div
        initial={{ width: isOpen ? 250 : 80 }}
        animate={{ width: isOpen ? 250 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={clsx(
          "fixed top-0 right-0 h-screen bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl flex flex-col z-50",
          { "overflow-hidden": !isOpen }
        )}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2
            onClick={() => navigate("/")}
            className={clsx(
              "text-white text-2xl font-bold transition-opacity duration-300 cursor-pointer hover:text-gray-300",
              {
                "opacity-0": !isOpen,
              }
            )}
          >
            میزکار
          </h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            title={isOpen ? "بستن منو" : "باز کردن منو"}
          >
            <i
              className={
                isOpen ? "fas fa-chevron-right" : "fas fa-chevron-left"
              }
            />
          </button>
        </div>
        <ul className="flex-grow py-2">
          {sidebarItems.map((item) => (
            <motion.li
              key={item.label}
              whileHover={{ scale: 1.02, x: 6 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleNavigation(item.route)}
              className="px-4 py-3 mx-2 my-1 text-gray-300 cursor-pointer rounded-lg hover:bg-gray-700/50 hover:text-white transition-colors duration-200"
            >
              <div className="flex items-center">
                <div className={clsx("text-xl", { "mr-4": !isOpen })}>
                  {item.icon}
                </div>
                <span
                  className={clsx("mr-3 transition-opacity duration-300", {
                    "opacity-0": !isOpen,
                    hidden: !isOpen,
                  })}
                >
                  {item.label}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default Sidebar;
