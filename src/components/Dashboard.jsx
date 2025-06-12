// import { Users } from "lucide-react";
// import {Activity} from "lucide-react"
// import { CgNotes } from "react-icons/cg";

// import { FiUser } from "react-icons/fi";

// const Dashboard = () => {
//   const stats = [
//     {
//       title: "Total Users",
//       value: "8",
//       active: "6 active users",
//       icon:    Users,
//       color: "text-[#78c5d8]",
//     },
//     {
//       title: "Active Clients",
//       value: "5",
//       active: "6 total clients",
//       icon:   FiUser,
//       color: "text-[#f0b484]",
//     },
//     {
//       title: "Candiddates",
//       value: "5",
//       active: "In database",
//       icon:   CgNotes,
//       color: "text-[#73b386]",
//     },
//     {
//       title: "System Health",
//       value: "98%",
//       active: "Uptime",
//       icon:    Activity,
//       color: "text-[#a98fc3]",
//     },
//   ];

//   return (
//     <div className="min-h-screen w-full bg-gray-50 py-6  transition-all duration-300 ">
//       <div className="max-w-screen-2xl mx-auto px-4  md:mt-0 sm:px-6  lg:px-8 ">
//         {/* Header */}
//         <div className="mb-8 ">
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
//             <h1 className="text-2xl font-bold text-gray-900">
//               Admin Dashboard
//             </h1>
//           </div>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Platform overview and system managment.
//           </p>
//         </div>

//         {/* Stats Grid */}

//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <div
//                 key={i}
//                 className="bg-white text-gray-900 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
//               >
//                 <div className="flex items-center justify-between gap-2">
//                   <div>
//                     <p className="text-xs sm:text-sm opacity-70 mb-1">
//                       {stat.title}
//                     </p>
//                     <p className="text-2xl sm:text-3xl font-bold">
//                       {stat.value}
//                     </p>
//                     <p className="text-xs sm:text-sm opacity-70 mb-1 ">
//                       {stat.active}
//                     </p>
//                   </div>
//                   <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Dashboard;

// import React from 'react';
// import { Users,  Activity, Settings, Download, UserPlus,  AlertTriangle, CheckCircle, Clock, Wrench } from 'lucide-react';
// import { FiUser } from "react-icons/fi";
// import { CgNotes } from "react-icons/cg";

// const Dashboard = () => {

//    const stats = [
//     {
//       title: "Total Users",
//       value: "8",
//       active: "6 active users",
//       icon:    Users,
//       color: "text-[#78c5d8]",
//     },
//     {
//       title: "Active Clients",
//       value: "5",
//       active: "6 total clients",
//       icon:   FiUser,
//       color: "text-[#f0b484]",
//     },
//     {
//       title: "Candiddates",
//       value: "5",
//       active: "In database",
//       icon:   CgNotes,
//       color: "text-[#73b386]",
//     },
//     {
//       title: "System Health",
//       value: "98%",
//       active: "Uptime",
//       icon:    Activity,
//       color: "text-[#a98fc3]",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
//           <p className="text-gray-600 mt-1">Platform overview and system management.</p>
//         </div>
//         <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50">
//           <Settings className="w-4 h-4" />
//           Admin Actions
//         </button>
//       </div>

//       {/* Top Stats Cards */}

//       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <div
//                 key={i}
//                 className="bg-white text-gray-900 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
//               >
//                 <div className="flex items-center justify-between gap-2">
//                   <div>
//                     <p className="text-xs sm:text-sm opacity-70 mb-1">
//                       {stat.title}
//                     </p>
//                     <p className="text-2xl sm:text-3xl font-bold">
//                       {stat.value}
//                     </p>
//                     <p className="text-xs sm:text-sm opacity-70 mb-1 ">
//                       {stat.active}
//                     </p>
//                   </div>
//                   <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//         {/* User Distribution */}
//         <div className="bg-white p-6 rounded-lg shadow-sm ">
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">User Distribution</h3>
//           <p className="text-sm text-gray-600 mb-6">Users by role across the platform</p>

//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-4 h-4 bg-blue-500 rounded"></div>
//                 <span className="text-sm text-gray-700">Account Managers (3)</span>
//               </div>
//               <span className="text-sm font-medium text-gray-900">50%</span>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-4 h-4 bg-green-500 rounded"></div>
//                 <span className="text-sm text-gray-700">Clients (2)</span>
//               </div>
//               <span className="text-sm font-medium text-gray-900">33%</span>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-4 h-4 bg-yellow-500 rounded"></div>
//                 <span className="text-sm text-gray-700">Admins (1)</span>
//               </div>
//               <span className="text-sm font-medium text-gray-900">17%</span>
//             </div>
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-white p-6 rounded-lg shadow-sm ">
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Activity</h3>
//           <p className="text-sm text-gray-600 mb-6">Latest system events and user actions</p>

//           <div className="space-y-4">
//             <div className="flex items-start gap-3">
//               <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
//               <div className="flex-1">
//                 <p className="text-sm font-medium text-gray-900">User Login</p>
//                 <p className="text-xs text-gray-600">User Sarah Johnson logged into the system</p>
//                 <p className="text-xs text-gray-500">Jan 5, 2025 8:30 PM</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
//               <div className="flex-1">
//                 <p className="text-sm font-medium text-gray-900">New Candidate</p>
//                 <p className="text-xs text-gray-600">New candidate user created: Jennifer Brown</p>
//                 <p className="text-xs text-gray-500">Jan 5, 2025 6:15 PM</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
//               <div className="flex-1">
//                 <p className="text-sm font-medium text-gray-900">System Backup</p>
//                 <p className="text-xs text-gray-600">Automated daily backup completed successfully</p>
//                 <p className="text-xs text-gray-500">Jan 5, 2025 3:00 PM</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Platform Statistics */}
//         <div className="bg-white p-6 rounded-lg shadow-sm ">
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">Platform Statistics</h3>
//           <p className="text-sm text-gray-600 mb-6">Key metrics and performance indicators</p>

//           <div className="space-y-6">
//             <div>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm text-gray-700">User Adoption Rate</span>
//                 <span className="text-lg font-bold text-gray-900">87%</span>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm text-gray-700">Client Satisfaction</span>
//                 <span className="text-lg font-bold text-gray-900">4.8/5</span>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm text-gray-700">System Performance</span>
//                 <span className="text-lg font-bold text-gray-900">95%</span>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm text-gray-700">Data Backup Status</span>
//                 <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">Up to date</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* System Alerts */}
//         <div className="bg-white p-6 rounded-lg shadow-sm ">
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">System Alerts</h3>
//           <p className="text-sm text-gray-600 mb-6">Important notifications and warnings</p>

//           <div className="space-y-4">
//             <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
//               <Clock className="w-4 h-4 text-yellow-600 mt-0.5" />
//               <div className="flex-1">
//                 <p className="text-sm font-medium text-gray-900">Scheduled Maintenance</p>
//                 <p className="text-xs text-gray-600">System maintenance in 3 days</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
//               <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
//               <div className="flex-1">
//                 <p className="text-sm font-medium text-gray-900">Backup Completed</p>
//                 <p className="text-xs text-gray-600">Last backup: 2 hours ago</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
//               <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5" />
//               <div className="flex-1">
//                 <p className="text-sm font-medium text-gray-900">New User Registrations</p>
//                 <p className="text-xs text-gray-600">3 new users this week</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white p-6 rounded-lg shadow-sm ">
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Actions</h3>
//           <p className="text-sm text-gray-600 mb-6">Common administrative tasks</p>

//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-700">Database Size</span>
//               <span className="text-sm font-medium text-gray-900">2.4 GB</span>
//             </div>

//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-700">Active Sessions</span>
//               <span className="text-sm font-medium text-gray-900">5</span>
//             </div>

//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-700">Server Load</span>
//               <span className="text-sm font-medium text-gray-900">23%</span>
//             </div>

//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-700">Memory Usage</span>
//               <span className="text-sm font-medium text-gray-900">67%</span>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import {
  Users,
  Building,
  UserCheck,
  Database,
  TrendingUp,
  Activity,
  AlertTriangle,
  Settings,
} from "lucide-react";
import { FiUser } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";
import Drawer from "./Drawer";
import { AnalyticsDashboardModal } from "./AnalyticsDashboardModal";

const Dashboard = () => {
  const [drawerType, setDrawerType] = useState(null);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  const stats = [
    {
      title: "Total Users",
      value: "8",

      icon: Users,
      color: "text-[#78c5d8]",
    },
    {
      title: "Active Clients",
      value: "5",

      icon: FiUser,
      color: "text-[#f0b484]",
    },
    {
      title: "Candiddates",
      value: "5",

      icon: CgNotes,
      color: "text-[#73b386]",
    },
    {
      title: "System Health",
      value: "98%",

      icon: Activity,
      color: "text-[#a98fc3]",
    },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mock data to simulate the props
  const users = [
    { id: 1, role: "Admin", status: "Active" },
    { id: 2, role: "Account Manager", status: "Active" },
    { id: 3, role: "Account Manager", status: "Active" },
    { id: 4, role: "Recruiter", status: "Active" },
    { id: 5, role: "Recruiter", status: "Inactive" },
    { id: 6, role: "Sales", status: "Active" },
  ];

  const clients = [
    { id: 1, status: "Active" },
    { id: 2, status: "Active" },
    { id: 3, status: "Active" },
    { id: 4, status: "Active" },
    { id: 5, status: "Active" },
    { id: 6, status: "Inactive" },
  ];

  const candidates = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const systemLogs = [
    {
      id: 1,
      action: "User Login",
      details: "User Sarah Johnson logged into the system",
      category: "User Management",
      timestamp: "2025-01-05T20:30:00Z",
    },
    {
      id: 2,
      action: "New Candidate",
      details: "New candidate user created: Jennifer Brown",
      category: "User Management",
      timestamp: "2025-01-05T18:15:00Z",
    },
    {
      id: 3,
      action: "System Backup",
      details: "Automated daily backup completed successfully",
      category: "System",
      timestamp: "2025-01-05T15:00:00Z",
    },
    {
      id: 4,
      action: "Security Alert",
      details: "Failed login attempt detected",
      category: "Security",
      timestamp: "2025-01-05T14:30:00Z",
    },
    {
      id: 5,
      action: "Data Export",
      details: "Client data exported by admin user",
      category: "Data",
      timestamp: "2025-01-05T13:45:00Z",
    },
  ];

  const activeUsers = users.filter((user) => user.status === "Active").length;
  const activeClients = clients.filter(
    (client) => client.status === "Active"
  ).length;
  const recentLogs = systemLogs.slice(0, 10);

  const usersByRole = {
    Admin: users.filter((user) => user.role === "Admin").length,
    "Account Manager": users.filter((user) => user.role === "Account Manager")
      .length,
    Sales: users.filter((user) => user.role === "Sales").length,
    Recruiter: users.filter((user) => user.role === "Recruiter").length,
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } catch (error) {
      return "Invalid date";
    }
  };

  const getLogCategoryBadge = (category) => {
    const badgeClasses = "px-2 py-1 text-xs font-medium rounded-full";
    switch (category) {
      case "User Management":
        return (
          <span className={`${badgeClasses} bg-blue-100 text-blue-800`}>
            User Management
          </span>
        );
      case "System":
        return (
          <span className={`${badgeClasses} bg-purple-100 text-purple-800`}>
            System
          </span>
        );
      case "Security":
        return (
          <span className={`${badgeClasses} bg-red-100 text-red-800`}>
            Security
          </span>
        );
      case "Data":
        return (
          <span className={`${badgeClasses} bg-green-100 text-green-800`}>
            Data
          </span>
        );
      default:
        return (
          <span className={`${badgeClasses} bg-gray-100 text-gray-800`}>
            {category}
          </span>
        );
    }
  };

  const ProgressBar = ({ value, className = "" }) => (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Platform overview and system management.
            </p>
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            >
              <Settings className="w-4 h-4" />
              Admin Actions
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-2 text-sm text-gray-700">
                  <p className="px-4 py-2 font-semibold text-gray-900">
                    Quick Actions
                  </p>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => setDrawerType("createUser")}
                  >
                    <Users className="w-4 h-4" />
                    Create New User
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => setDrawerType("systemBackup")}
                  >
                    <Database className="w-4 h-4" />
                    System Backup
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Export Platform Data
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => setIsAnalyticsOpen(true)}
                  >
                    <Activity className="w-4 h-4" />
                    View Analytics
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}

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
                  </div>
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* User Distribution and Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="bg-white rounded-lg shadow-sm  p-6 col-span-4">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                User Distribution
              </h3>
              <p className="text-sm text-gray-600">
                Users by role across the platform
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Recruiters ({usersByRole.Recruiter})</span>
                  <span>
                    {users.length > 0
                      ? Math.round((usersByRole.Recruiter / users.length) * 100)
                      : 0}
                    %
                  </span>
                </div>
                <ProgressBar
                  value={
                    users.length > 0
                      ? (usersByRole.Recruiter / users.length) * 100
                      : 0
                  }
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>
                    Account Managers ({usersByRole["Account Manager"]})
                  </span>
                  <span>
                    {users.length > 0
                      ? Math.round(
                          (usersByRole["Account Manager"] / users.length) * 100
                        )
                      : 0}
                    %
                  </span>
                </div>
                <ProgressBar
                  value={
                    users.length > 0
                      ? (usersByRole["Account Manager"] / users.length) * 100
                      : 0
                  }
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Sales ({usersByRole.Sales})</span>
                  <span>
                    {users.length > 0
                      ? Math.round((usersByRole.Sales / users.length) * 100)
                      : 0}
                    %
                  </span>
                </div>
                <ProgressBar
                  value={
                    users.length > 0
                      ? (usersByRole.Sales / users.length) * 100
                      : 0
                  }
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Admins ({usersByRole.Admin})</span>
                  <span>
                    {users.length > 0
                      ? Math.round((usersByRole.Admin / users.length) * 100)
                      : 0}
                    %
                  </span>
                </div>
                <ProgressBar
                  value={
                    users.length > 0
                      ? (usersByRole.Admin / users.length) * 100
                      : 0
                  }
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm  p-6 col-span-3">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h3>
              <p className="text-sm text-gray-600">
                Latest system events and user actions
              </p>
            </div>
            <div className="h-80 overflow-y-auto pr-4">
              <div className="space-y-4">
                {recentLogs.length === 0 ? (
                  <p className="text-sm text-gray-500">No recent activity</p>
                ) : (
                  recentLogs.map((log) => (
                    <div key={log.id} className="flex items-start space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        <Activity className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none text-gray-900">
                          {log.action}
                        </p>
                        <p className="text-xs text-gray-500">{log.details}</p>
                        <div className="flex items-center gap-2">
                          {getLogCategoryBadge(log.category)}
                          <span className="text-xs text-gray-500">
                            {formatDate(log.timestamp)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm  p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Platform Statistics
              </h3>
              <p className="text-sm text-gray-600">
                Key metrics and performance indicators
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  User Adoption Rate
                </span>
                <span className="text-2xl font-semibold text-gray-900">
                  87%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  Client Satisfaction
                </span>
                <span className="text-2xl font-semibold text-gray-900">
                  4.8/5
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  System Performance
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold text-gray-900">
                    95%
                  </span>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  Data Backup Status
                </span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Up to date
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm  p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                System Alerts
              </h3>
              <p className="text-sm text-gray-600">
                Important notifications and warnings
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 rounded-lg bg-gray-50 shadow-sm p-3 hover:shadow-md transition-shadow duration-300 ease-in-out">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-gray-900">
                    Scheduled Maintenance
                  </p>
                  <p className="text-xs text-gray-500">
                    System maintenance in 3 days
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-lg bg-gray-50 shadow-sm p-3 hover:shadow-md transition-shadow duration-300 ease-in-out">
                <Database className="h-4 w-4 text-blue-600" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-gray-900">
                    Backup Completed
                  </p>
                  <p className="text-xs text-gray-500">
                    Last backup: 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-lg bg-gray-50 shadow-sm p-3 hover:shadow-md transition-shadow duration-300 ease-in-out">
                <Users className="h-4 w-4 text-green-600" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-gray-900">
                    New User Registrations
                  </p>
                  <p className="text-xs text-gray-500">5 new users this week</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm  p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Quick Actions
              </h3>
              <p className="text-sm text-gray-600">
                Common administrative tasks
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
                <span className="text-sm text-gray-700">Database Size</span>
                <span className="text-sm font-medium text-gray-900">
                  2.4 GB
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
                <span className="text-sm text-gray-700">Active Sessions</span>
                <span className="text-sm font-medium text-gray-900">
                  {activeUsers}
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
                <span className="text-sm text-gray-700">Server Load</span>
                <span className="text-sm font-medium text-gray-900">23%</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
                <span className="text-sm text-gray-700">Memory Usage</span>
                <span className="text-sm font-medium text-gray-900">67%</span>
              </div>
            </div>
          </div>
        </div>

        <Drawer
          isOpen={drawerType !== null}
          onClose={() => setDrawerType(null)}
          title={
            drawerType === "createUser"
              ? "Create New Admin"
              : drawerType === "systemBackup"
              ? "System Backup"
              : ""
          }
        >
          {drawerType === "createUser" && (
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Select Role</option>
                <option>Admin</option>
                <option>Recruiter</option>
              </select>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Select Department</option>
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setDrawerType(null)}
                  className="border border-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Create User
                </button>
              </div>
            </form>
          )}

          {drawerType === "systemBackup" && (
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold mb-2">Backup will include:</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>User accounts and profiles</li>
                  <li>Client information and contracts</li>
                  <li>Candidate database</li>
                  <li>System logs and audit trails</li>
                  <li>Configuration settings</li>
                  <li>Application data</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="inline-block w-4 h-4 rounded-full bg-yellow-300" />
                Estimated time: 2–3 minutes
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setDrawerType(null)}
                  className="border border-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button className="bg-black text-white px-4 py-2 rounded">
                  Start Backup
                </button>
              </div>
            </div>
          )}
        </Drawer>

        <AnalyticsDashboardModal
          isOpen={isAnalyticsOpen}
          onClose={() => setIsAnalyticsOpen(false)}
          users={users}
          clients={clients.map((client) => ({
            ...client,
            contractValue: 10000,
            industry: "Technology",
          }))}
          candidates={candidates}
        />
      </div>
    </div>
  );
};

export default Dashboard;
