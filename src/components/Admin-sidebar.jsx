import { useLocation, useNavigate } from "react-router-dom";
import { FileText, Users, MessageSquare, X } from "lucide-react";
import { MdOutlineDashboard } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { ShieldUser } from "lucide-react";
import { FiUser } from "react-icons/fi";
import { GoDatabase } from "react-icons/go";

const AdminSidebar = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: MdOutlineDashboard },
    { path: "/user", label: "User Managment", icon: Users },
    { path: "/company", label: "Company Setting", icon: CgNotes },
    { path: "/client", label: "Clients", icon: FiUser },
    { path: "/candidate", label: "Candidates", icon: Users },
    { path: "/logs", label: "System Logs", icon: GoDatabase },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md flex flex-col z-50 overflow-y-auto"
      style={{ overflowY: "auto" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-semibold text-gray-900">reco</span>
        </div>
        {/* Close button for mobile */}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          <div className=" flex gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            <ShieldUser />
            <span className="p-1">Admin Portal</span>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;

            return (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
