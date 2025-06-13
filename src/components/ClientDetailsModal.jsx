import React, { useState } from "react";

const ClientDetailsModal = ({ client, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const performanceMetrics = [
    { label: "Active Jobs", value: "3" },
    { label: "Candidates Placed", value: "28" },
    { label: "Avg. Time to Fill", value: "18 days" },
    { label: "Satisfaction Rating", value: "4.8/5" },
  ];
  const getRandomTextColor = () => {
    const colors = [
      "text-red-600",
      "text-green-600",
      "text-blue-600",
      "text-indigo-600",
      "text-amber-600",
      "text-emerald-600",
      "text-fuchsia-600",
      "text-violet-600",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 p-6 shadow-lg" onClick={onClose}></div>

      {/* Modal container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        {/* Modal content */}
        <div className="relative w-screen max-w-2xl">
          <div className="h-full flex flex-col bg-white shadow-xl rounded-xl">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  Client Details
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Complete client information and relationship history
              </p>
            </div>

            {/* Client Info */}
            <div className="px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-medium text-xl">
                    {client.company.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {client.company}
                  </h3>
                  <p className="text-gray-600">{client.industry}</p>
                  <p className="text-sm text-gray-500">{client.location}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-4 border-t border-b border-gray-200 bg-gray-50">
              <div className="flex flex-wrap gap-3">
                <button className="flex whitespace-nowrap flex-initial items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-lime-700 bg-white border border-lime-300 hover:bg-lime-100 hover:border-lime-400 transition-colors duration-200 shadow-sm">
                  <svg
                    className="h-5 w-5 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Send Email</span>
                </button>
                <button className="flex whitespace-nowrap flex-initial items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-fuchsia-700 bg-white border border-fuchsia-300 hover:bg-fuchsia-100 hover:border-fuchsia-400 transition-colors duration-200 shadow-sm">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Call Client</span>
                </button>
                  <button className="flex whitespace-nowrap flex-initial items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-blue-700 bg-white border border-blue-300 hover:bg-blue-100 hover:border-blue-400 transition-colors duration-200 shadow-sm">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span>Edit Details</span>
                </button>
                <button className="flex whitespace-nowrap flex-initial items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-red-700 bg-white border border-red-300 hover:bg-red-100 hover:border-red-400 transition-colors duration-200 shadow-sm">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span>Delete</span>
                </button>
              </div>
            </div>
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === "overview"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("contract")}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === "contract"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Contract
                </button>
                <button
                  onClick={() => setActiveTab("activity")}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === "activity"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Activity
                </button>
                <button
                  onClick={() => setActiveTab("notes")}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === "notes"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Notes
                </button>
              </nav>
            </div>
            {/* Tab Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              {activeTab === "overview" && (
                <div>
                  {/* Contact Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Contact Information
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Primary Contact
                          </h4>
                          <p className="mt-1 text-sm text-gray-900">
                            {client.contact}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Account Manager
                          </h4>
                          <p className="mt-1 text-sm text-gray-900">
                            Sarah Johnson
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Email Address
                          </h4>
                          <p className="mt-1 text-sm text-gray-900">
                            {client.email}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Phone Number
                          </h4>
                          <p className="mt-1 text-sm text-gray-900">
                            {client.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Performance Metrics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {performanceMetrics.map((metric, index) => (
                        <div
                          key={index}
                          className="bg-white border border-gray-200 rounded-lg p-4 text-center"
                        >
                          <p
                            className={`text-2xl font-bold ${getRandomTextColor()}`}
                          >
                            {metric.value}
                          </p>
                          <p className="text-xs text-gray-500">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Placements */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Recent Placements
                    </h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between">
                          <h4 className="font-medium">
                            Senior Software Engineer
                          </h4>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                            Successful
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Candidate: Alice Johnson
                        </p>
                        <div className="flex justify-between mt-2">
                          <p className="text-sm text-gray-500">$125,000</p>
                          <p className="text-sm text-gray-500">
                            Placed: May 15, 2025
                          </p>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Product Manager</h4>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                            Successful
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Candidate: Bob Smith
                        </p>
                        <div className="flex justify-between mt-2">
                          <p className="text-sm text-gray-500">$115,000</p>
                          <p className="text-sm text-gray-500">
                            Placed: April 22, 2025
                          </p>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between">
                          <h4 className="font-medium">UX Designer</h4>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                            Successful
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Candidate: Carol Davis
                        </p>
                        <div className="flex justify-between mt-2">
                          <p className="text-sm text-gray-500">$95,000</p>
                          <p className="text-sm text-gray-500">
                            Placed: April 10, 2025
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "contract" && (
                <div>
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Contract Details
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Contract Value
                          </h4>
                          <p className="mt-1 text-lg font-bold text-gray-900">
                            $250,000.00
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Contract Duration
                          </h4>
                          <p className="mt-1 text-sm text-gray-900">
                            12 months
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Start Date
                          </h4>
                          <p className="mt-1 text-sm text-gray-900">
                            January 15, 2024
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            End Date
                          </h4>
                          <p className="mt-1 text-sm text-gray-900">
                            January 15, 2025
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">
                            Contract Status
                          </h4>
                          <p className="mt-1 text-sm text-gray-900">
                            Contract expired
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Project Statistics
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-gray-900">12</p>
                        <p className="text-xs text-gray-500">Completed Jobs</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-gray-900">95%</p>
                        <p className="text-xs text-gray-500">Success Rate</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-gray-900">
                          $2.8M
                        </p>
                        <p className="text-xs text-gray-500">
                          Total Placements Value
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "activity" && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-indigo-500 pl-4 py-2">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">
                          Contract Renewal Meeting
                        </p>
                        <p className="text-xs text-gray-500">June 5, 2025</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Discussed renewal terms for next year's contract
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">
                          Candidate Placement
                        </p>
                        <p className="text-xs text-gray-500">May 15, 2025</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Successfully placed Senior Software Engineer
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Quarterly Review</p>
                        <p className="text-xs text-gray-500">April 28, 2025</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Conducted quarterly performance review
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notes" && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Client Notes
                  </h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-xs text-gray-500">June 1, 2025</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Client expressed interest in expanding their tech team
                        for Q3. Discussed potential for 5–7 additional
                        positions.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Mike Chen</p>
                        <p className="text-xs text-gray-500">May 28, 2025</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Contract renewal meeting scheduled for next month.
                        Client very satisfied with our services.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-xs text-gray-500">May 20, 2025</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Successfully placed Senior Developer. Client feedback
                        was excellent - candidate exceeded expectations.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsModal;
