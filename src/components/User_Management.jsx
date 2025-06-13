import React, { useState, useEffect, useRef } from "react";
import { Users, Activity } from "lucide-react";
import { FiUser, FiMoreVertical } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";

// Initial User Data
const initialUsers = [
  {
    name: "John Smith",
    email: "john.smith@company.com",
    role: "Admin",
    status: "Active",
    department: "Administration",
    lastLogin: "Jun 5, 2025 7:30 PM",
    created: "Jan 15, 2024 2:00 PM",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    role: "Account Manager",
    status: "Active",
    department: "Account Management",
    lastLogin: "Jun 5, 2025 6:45 PM",
    created: "Feb 20, 2024 3:15 PM",
  },
  {
    name: "Mike Chen",
    email: "mike.chen@company.com",
    role: "Account Manager",
    status: "Active",
    department: "Account Management",
    lastLogin: "Jun 5, 2025 5:20 PM",
    created: "Mar 10, 2024 4:30 PM",
  },
  {
    name: "Lisa Rodriguez",
    email: "lisa.rodriguez@company.com",
    role: "Sales",
    status: "Active",
    department: "Sales",
    lastLogin: "Jun 5, 2025 8:10 PM",
    created: "Apr 5, 2024 1:45 PM",
  },
  {
    name: "David Kim",
    email: "david.kim@company.com",
    role: "Recruiter",
    status: "Active",
    department: "Recruitment",
    lastLogin: "Jun 5, 2025 4:55 PM",
    created: "May 12, 2024 7:20 PM",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@company.com",
    role: "Recruiter",
    status: "Active",
    department: "Recruitment",
    lastLogin: "Jun 5, 2025 3:30 PM",
    created: "Jun 18, 2024 9:00 PM",
  },
  {
    name: "Robert Wilson",
    email: "robert.wilson@company.com",
    role: "Sales",
    status: "Active",
    department: "Sales",
    lastLogin: "May 28, 2025 2:20 PM",
    created: "Jul 22, 2024 5:15 PM",
  },
  {
    name: "Jennifer Brown",
    email: "jennifer.brown@company.com",
    role: "Account Manager",
    status: "Deactive",
    department: "Account Management",
    lastLogin: "Never",
    created: "Apr 1, 2025 6:45 PM",
  },
];

const User_Management = () => {
  const [users, setUsers] = useState(initialUsers);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleStatus = (index) => {
    const updated = [...users];
    updated[index].status =
      updated[index].status === "Active" ? "Deactive" : "Active";
    setUsers(updated);
    setDropdownIndex(null);
  };

  const deleteUser = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    setDropdownIndex(null); // close dropdown
  };

  const stats = [
    {
      title: "Total Users",
      value: users.length,
      icon: Users,
      color: "text-[#78c5d8]",
    },
    {
      title: "Active Clients",
      value: users.filter((u) => u.status === "Active").length,
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

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              User Management
            </h1>
            <p className="text-gray-600 mt-1 text-sm">
              Manage Platform users, roles, and permissions.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

        {/* Table */}
        {/* Users Table */}
        {/* Responsive Table with Horizontal Scroll */}
        {/* Responsive Table with Horizontal Scroll on Small Screens */}
        <div className="bg-white rounded-xl p-4 shadow mt-6">
          <h2 className="text-xl font-semibold mb-4">All Users</h2>

          {/* Slider Container */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-[1000px] table-auto text-sm text-left">
              <thead className="text-gray-500 border-b border-b-gray-300">
                <tr>
                  <th className="p-3 whitespace-nowrap">User</th>
                  <th className="p-3 whitespace-nowrap">Role</th>
                  <th className="p-3 whitespace-nowrap">Status</th>
                  <th className="p-3 whitespace-nowrap">Department</th>
                  <th className="p-3 whitespace-nowrap">Last Login</th>
                  <th className="p-3 whitespace-nowrap">Created</th>
                  <th className="p-3 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i} className="border-b border-b-gray-300">
                    <td className="py-4 px-3 whitespace-nowrap">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </td>
                    <td className="py-4 px-3 whitespace-nowrap">{user.role}</td>
                    <td className="py-4 px-3 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-3 whitespace-nowrap">
                      {user.department}
                    </td>
                    <td className="py-4 px-3 whitespace-nowrap">
                      {user.lastLogin}
                    </td>
                    <td className="py-4 px-3 whitespace-nowrap">
                      {user.created}
                    </td>
                    <td
                      className="py-4 px-3 relative whitespace-nowrap"
                      ref={dropdownRef}
                    >
                      <button
                        onClick={() =>
                          setDropdownIndex(dropdownIndex === i ? null : i)
                        }
                        className="text-gray-600 hover:text-black"
                      >
                        <FiMoreVertical />
                      </button>

                      {dropdownIndex === i && (
                        <div className="absolute z-10 right-2 top-8 bg-white border rounded-md shadow-lg w-40">
                          <ul className="text-sm text-gray-700">
                            <li
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                alert("Edit User Clicked");
                                setDropdownIndex(null);
                              }}
                            >
                              Edit User
                            </li>
                            <li
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => toggleStatus(i)}
                            >
                              {user.status === "Active"
                                ? "Deactivate"
                                : "Activate"}
                            </li>
                            <li
                              className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
                              onClick={() => deleteUser(i)}
                            >
                              Delete User
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Management;
