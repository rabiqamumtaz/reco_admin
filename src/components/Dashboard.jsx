import React, { useState, useRef, useEffect } from "react";
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
import Drawer from "./Drawer";
import { AnalyticsDashboardModal } from "./AnalyticsDashboardModal";

const Dashboard = () => {
  const [drawerType, setDrawerType] = useState(null);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const stats = [
    { title: "Total Users", value: "8", icon: Users, color: "text-[#78c5d8]" },
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

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const activeUsers = users.filter((u) => u.status === "Active").length;
  const activeClients = clients.filter((c) => c.status === "Active").length;
  const recentLogs = systemLogs.slice(0, 10);
  const usersByRole = {
    Admin: users.filter((u) => u.role === "Admin").length,
    "Account Manager": users.filter((u) => u.role === "Account Manager").length,
    Sales: users.filter((u) => u.role === "Sales").length,
    Recruiter: users.filter((u) => u.role === "Recruiter").length,
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
    } catch {
      return "Invalid date";
    }
  };

  const getLogCategoryBadge = (category) => {
    const badgeClasses = "px-2 py-1 text-xs font-medium rounded-full";
    const categoryColors = {
      "User Management": "bg-blue-100 text-blue-800",
      System: "bg-purple-100 text-purple-800",
      Security: "bg-red-100 text-red-800",
      Data: "bg-green-100 text-green-800",
    };
    return (
      <span
        className={`${badgeClasses} ${
          categoryColors[category] || "bg-gray-100 text-gray-800"
        }`}
      >
        {category}
      </span>
    );
  };

  const ProgressBar = ({ value, className = "" }) => (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-1 text-sm">
              Platform overview and system management.
            </p>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 text-sm"
            >
              <Settings className="w-4 h-4" />
              Admin Actions
            </button>

            {isDropdownOpen && (
              <div className="absolute z-50 mt-2 w-56 sm:right-0 sm:left-auto left-0 sm:w-56 w-[90vw] bg-white border border-gray-200 rounded-md shadow-lg">
                <div className="py-2 text-sm text-gray-700">
                  <p className="px-4 py-2 font-semibold text-gray-900">
                    Quick Actions
                  </p>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => setDrawerType("createUser")}
                  >
                    <Users className="w-4 h-4" /> Create New User
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => setDrawerType("systemBackup")}
                  >
                    <Database className="w-4 h-4" /> System Backup
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Export Platform Data
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => setIsAnalyticsOpen(true)}
                  >
                    <Activity className="w-4 h-4" /> View Analytics
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white text-gray-900 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs sm:text-sm opacity-70 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-xl sm:text-2xl font-bold">
                      {stat.value}
                    </p>
                  </div>
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Middle Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* User Distribution */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 col-span-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              User Distribution
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Users by role across the platform
            </p>
            <div className="space-y-4">
              {Object.entries(usersByRole).map(([role, count]) => (
                <div key={role} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      {role} ({count})
                    </span>
                    <span>
                      {users.length > 0
                        ? Math.round((count / users.length) * 100)
                        : 0}
                      %
                    </span>
                  </div>
                  <ProgressBar
                    value={users.length > 0 ? (count / users.length) * 100 : 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Recent Activity
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Latest system events and user actions
            </p>
            <div className="h-80 overflow-y-auto pr-2 sm:pr-4">
              {recentLogs.map((log) => (
                <div key={log.id} className="flex items-start gap-4 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
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
              ))}
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
                {" "}
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
                    {" "}
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
                  </p>{" "}
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

        {/* Drawer & Analytics Modals */}
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
