import { Users } from "lucide-react";
import {Activity} from "lucide-react"
import { CgNotes } from "react-icons/cg";

import { FiUser } from "react-icons/fi";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "8",
      active: "6 active users",
      icon:    Users,
      color: "text-[#78c5d8]",
    },
    {
      title: "Active Clients",
      value: "5",
      active: "6 total clients",
      icon:   FiUser,
      color: "text-[#f0b484]",
    },
    {
      title: "Candiddates",
      value: "5",
      active: "In database",
      icon:   CgNotes,
      color: "text-[#73b386]",
    },
    {
      title: "System Health",
      value: "98%",
      active: "Uptime",
      icon:    Activity,
      color: "text-[#a98fc3]",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 py-6  transition-all duration-300 ">
      <div className="max-w-screen-2xl mx-auto px-4  md:mt-0 sm:px-6  lg:px-8 ">
        {/* Header */}
        <div className="mb-8 ">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Platform overview and system managment.
          </p>
        </div>

        {/* Stats Grid */}

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white text-gray-900 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs sm:text-sm opacity-70 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm opacity-70 mb-1 ">
                      {stat.active}
                    </p>
                  </div>
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
