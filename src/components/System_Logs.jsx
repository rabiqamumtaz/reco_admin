import React, {useMemo} from "react";
import { Icon } from "@iconify/react";

const System_Logs = () => {
  // Stats cards data
  const statsData = [
    {
      title: "Total Logs",
      value: "10",
      description: "All time",
      icon: "mdi:file-document-multiple",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "User Management",
      value: "3",
      description: "User actions",
      icon: "mdi:account-cog",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "System Events",
      value: "2",
      description: "System activities",
      icon: "mdi:server",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Security Events",
      value: "3",
      description: "Security logs",
      icon: "mdi:shield-lock",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];
  const tableHeaders = [
    { key: "timestamp", label: "Timestamp" },
    { key: "action", label: "Action" },
    { key: "category", label: "Category" },
    { key: "details", label: "Details" },
    { key: "performedBy", label: "Performed By" },
  ];

  // Activity log data
  const activityLogs = [
    {
      timestamp: "Jun 5, 2025 8:30:00 PM",
      action: "User Login",
      category: "Security",
      details: "User Sarah Johnson logged into the system",
      performedBy: "System",
      icon: "mdi:login",
      color: "bg-blue-100 text-blue-800",
    },
    {
      timestamp: "Jun 5, 2025 8:25:00 PM",
      action: "User Created",
      category: "User Management",
      details: "New Recruiter user created: Jennifer Brown",
      performedBy: "Admin",
      icon: "mdi:account-plus",
      color: "bg-green-100 text-green-800",
    },
    {
      timestamp: "Jun 5, 2025 8:20:00 PM",
      action: "System Backup",
      category: "System",
      details: "Automated daily backup completed successfully",
      performedBy: "System",
      icon: "mdi:backup-restore",
      color: "bg-purple-100 text-purple-800",
    },
    {
      timestamp: "Jun 5, 2025 8:15:00 PM",
      action: "Data Export",
      category: "Data",
      details: "Platform data exported by admin user",
      performedBy: "Admin",
      icon: "mdi:database-export",
      color: "bg-amber-100 text-amber-800",
    },
    {
      timestamp: "Jun 5, 2025 8:10:00 PM",
      action: "User Status Changed",
      category: "User Management",
      details: "User Robert Wilson status changed to inactive",
      performedBy: "Admin",
      icon: "mdi:account-convert",
      color: "bg-green-100 text-green-800",
    },
    {
      timestamp: "Jun 5, 2025 8:05:00 PM",
      action: "Failed Login Attempt",
      category: "Security",
      details: "Failed login attempt for user: unknown@email.com",
      performedBy: "System",
      icon: "mdi:alert-circle",
      color: "bg-red-100 text-red-800",
    },
  ];

  // Tailwind utility colors
const iconColors = [
  "text-blue-500",
  "text-green-500",
  "text-purple-500",
  "text-red-500",
  "text-yellow-500",
  "text-pink-500",
  "text-amber-500",
  "text-teal-500",
  "text-orange-500",
  "text-indigo-500",
];

// Apply random color to each statsData item
const coloredStatsData = useMemo(() => {
  return statsData.map((stat) => {
    const randomColor =
      iconColors[Math.floor(Math.random() * iconColors.length)];
    return { ...stat, color: randomColor };
  });
}, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">System Logs</h1>
          <p className="text-gray-600 mt-1">
            Monitor system activities, user actions, and security events.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
  {coloredStatsData.map((stat, index) => (
    <div
      key={index}
      className="bg-white text-gray-900 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-xs sm:text-sm opacity-70 mb-1">{stat.title}</p>
          <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
          <p className="text-xs sm:text-sm opacity-70 mb-1">{stat.description}</p>
        </div>
        <div className={`text-3xl sm:text-4xl ${stat.color}`}>
          <Icon icon={stat.icon} />
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Activity Log */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-gray-200">
            <h2 className="text-2xl mt-2 font-semibold">
              Activity Log
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Detailed system and user activity logs
            </p>
          </div>

          {/* Table - Desktop */}
          <div className="hidden md:block overflow-x-auto p-5">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-light">
                <tr>
                  {tableHeaders.map((header, idx) => (
                    <th
                      key={idx}
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-500 normal-case whitespace-nowrap "
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activityLogs.map((log, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {log.timestamp}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex items-center">
                        <Icon
                          icon={log.icon}
                          className={`h-5 w-5 mr-2 ${log.color.split(" ")[1]}`}
                        />
                        <span className="text-sm font-medium text-gray-900">
                          {log.action}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${log.color}`}
                      >
                        {log.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {log.details}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {log.performedBy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {activityLogs.map((log, index) => (
              <div
                key={index}
                className="p-4 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <Icon
                      icon={log.icon}
                      className={`h-5 w-5 mr-2 ${log.color.split(" ")[1]}`}
                    />
                    <span className="font-medium text-gray-900">
                      {log.action}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${log.color}`}
                  >
                    {log.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{log.details}</p>
                <div className="flex justify-between mt-2">
                  <p className="text-xs text-gray-500">{log.timestamp}</p>
                  <p className="text-xs text-gray-500">By: {log.performedBy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default System_Logs;
