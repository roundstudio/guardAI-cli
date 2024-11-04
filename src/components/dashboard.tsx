import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SidebarItem {
  label: string;
  icon: JSX.Element;
}

const sidebarItems: SidebarItem[] = [
  { label: "داشبورد", icon: <i className="fas fa-tachometer-alt" /> },
  { label: "اطلاع رسانی", icon: <i className="fas fa-user" /> },
  { label: "هشدار", icon: <i className="fas fa-cogs" /> },
  { label: "تنظیمات", icon: <i className="fas fa-cogs" /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

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
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
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
            className="p-4 text-white flex items-center cursor-pointer hover:bg-gray-700"
          >
            <div className="ml-4 text-xl">{item.icon}</div>
            <span className={clsx({ hidden: !isOpen })}>{item.label}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const DashboardContent = () => {
  return (
    <div className="mr-72 p-10 text-right">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="p-4 bg-white shadow-md rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p>Here is an overview of your account.</p>
        </motion.div>
        <motion.div
          className="p-4 bg-white shadow-md rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold mb-2">Stats</h2>
          <p>Your latest statistics can be found here.</p>
        </motion.div>
        <motion.div
          className="p-4 bg-white shadow-md rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p>Adjust your settings to suit your needs.</p>
        </motion.div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="h-screen bg-gray-100" dir="rtl">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
