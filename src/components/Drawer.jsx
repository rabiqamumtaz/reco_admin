import React from "react";
import { X} from "lucide-react";

const Drawer = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px]"
            onClick={onClose}
          />
        )}

        <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-lg p-6 overflow-y-auto transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button onClick={onClose}>
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
