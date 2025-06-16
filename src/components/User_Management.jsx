import React, { useState, useEffect, useRef } from "react";
import { Users, Activity } from "lucide-react";
import { FiUser, FiMoreVertical } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";
import { LuUserX, LuUserCheck } from "react-icons/lu";
import { FiTrash2 } from "react-icons/fi";
import Drawer from "./Drawer";

// Initial user data
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
    status: "Deactive",
    department: "Sales",
    lastLogin: "Jun 5, 2025 8:10 PM",
    created: "Apr 5, 2024 1:45 PM",
  },
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
    status: "Deactive",
    department: "Account Management",
    lastLogin: "Jun 5, 2025 6:45 PM",
    created: "Feb 20, 2024 3:15 PM",
  },
];

const User_Management = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState(null);
  const [users, setUsers] = useState(initialUsers);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleStatus = (index) => {
    setUsers((prev) =>
      prev.map((u, i) =>
        i === index
          ? { ...u, status: u.status === "Active" ? "Deactive" : "Active" }
          : u
      )
    );
    setDropdownIndex(null);
  };

  const deleteUser = (index) => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
    setDropdownIndex(null);
  };

  const stats = [
    {
      title: "Total Users",
      value: users.length,
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: "Active Clients",
      value: users.filter((u) => u.status === "Active").length,
      icon: FiUser,
      color: "text-orange-400",
    },
    {
      title: "Candidates",
      value: "5",
      icon: CgNotes,
      color: "text-green-500",
    },
    {
      title: "System Health",
      value: "98%",
      icon: Activity,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">{stat.title}</p>
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Table */}
        <div className="hidden sm:block bg-white rounded-xl shadow mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b border-gray-300 ">
              <tr>
                <th className="p-3 text-left">User</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Last Login</th>
                <th className="p-3 text-left">Created</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i} className="border-b border-gray-300">
                  <td className="p-3">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">
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
                  <td className="p-3">{user.department}</td>
                  <td className="p-3">{user.lastLogin}</td>
                  <td className="p-3">{user.created}</td>
                  <td
                    className="p-3 relative"
                    ref={i === dropdownIndex ? dropdownRef : null}
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
                      <div className="absolute z-10 right-2 top-8 bg-white border rounded-md shadow w-40">
                        <ul className="text-sm text-gray-700">
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setDrawerType("createUser");
                              setIsDrawerOpen(true);
                              setDropdownIndex(null);
                            }}
                          >
                            <div className="flex items-center">
                              <BiEdit className="mr-2 h-4 w-4" />
                              Edit User
                            </div>
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => toggleStatus(i)}
                          >
                            {user.status === "Active" ? (
                              <div className="flex items-center">
                                <LuUserX className="mr-2 h-4 w-4" />
                                Deactivate
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <LuUserCheck className="mr-2 h-4 w-4" />
                                Activate
                              </div>
                            )}
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
                            onClick={() => deleteUser(i)}
                          >
                            <div className="flex items-center">
                              <FiTrash2 className="mr-2 h-4 w-4" />
                              Delete User
                            </div>
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

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-4">
          {users.map((user, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow space-y-2">
              <div className="font-semibold">{user.name}</div>
              <div className="text-xs text-gray-500">{user.email}</div>
              <div className="flex justify-between text-sm">
                <span>Role:</span>
                <span>{user.role}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Status:</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Department:</span>
                <span>{user.department}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Last Login:</span>
                <span>{user.lastLogin}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Created:</span>
                <span>{user.created}</span>
              </div>
              <div className="flex justify-end gap-4 pt-2 text-sm">
                <button
                  onClick={() => {
                    setDrawerType("createUser");
                    setIsDrawerOpen(true);
                  }}
                  className="text-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => toggleStatus(i)}
                  className="text-yellow-600"
                >
                  {user.status === "Active" ? "Deactivate" : "Activate"}
                </button>
                <button onClick={() => deleteUser(i)} className="text-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Form */}
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
            setDrawerType(null);
          }}
          title="Edit User"
        >
          {drawerType === "createUser" && (
            <form className="space-y-4 p-4 sm:p-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
              />
              <select className="w-full border px-3 py-2 rounded">
                <option>Select Role</option>
                <option>Admin</option>
                <option>Recruiter</option>
              </select>
              <select className="w-full border px-3 py-2 rounded">
                <option>Select Department</option>
                <option>HR</option>
                <option>Sales</option>
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border px-3 py-2 rounded"
              />
              <select className="w-full border px-3 py-2 rounded">
                <option>Status</option>
                <option>Active</option>
                <option>Deactive</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Update User
                </button>
              </div>
            </form>
          )}
        </Drawer>
      </div>
    </div>
  );
};

export default User_Management;
