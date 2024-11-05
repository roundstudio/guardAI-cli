import React from "react";

interface DashboardTableProps {
  // Using object type instead of empty interface
  data?: object;
}

const CameraTable: React.FC<DashboardTableProps> = () => {
  return (
    <div dir="rtl" className="p-6">
      {/* Add Button */}
      <button className="mb-4 bg-blue-500 text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center">
        +
      </button>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-center border-collapse border border-gray-300">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border border-gray-300 p-2">نام</th>
              <th className="border border-gray-300 p-2">ip</th>
              <th className="border border-gray-300 p-2">port</th>
              <th className="border border-gray-300 p-2">نام کاربری</th>
              <th className="border border-gray-300 p-2">رمز</th>
              <th className="border border-gray-300 p-2">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-100">
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
            </tr>
            <tr className="bg-blue-100">
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
            </tr>
            =
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CameraTable;
