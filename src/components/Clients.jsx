import React, { useState, useMemo } from "react";
import ClientDetailsModal from "./ClientDetailsModal";
import { Icon } from "@iconify/react";

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clientsData = [
    {
      company: "TechCorp Inc",
      location: "San Francisco, CA",
      contact: "James Anderson",
      email: "james.anderson@techcorp.com",
      phone: "(555) 111-2222",
      industry: "Technology",
      status: "Active",
      value: "$250,000.00",
      date: "Jan 15, 2024",
    },
    // ... other client data
  ];

  const openModal = (client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };
  const clients = [
    {
      company: "TechCorp Inc",
      location: "San Francisco, CA",
      website: "https://techcorp.com",
      contactPerson: "James Anderson",
      phone: "(555) 111-2222",
      industry: "Technology",
      status: "Active",
      contractValue: "$250,000.00",
      startDate: "Jan 15, 2024",
    },
    {
      company: "Innovation Labs",
      location: "New York, NY",
      website: "https://innovationlabs.com",
      contactPerson: "María Garcia",
      phone: "(555) 222-3333",
      industry: "Research & Development",
      status: "Active",
      contractValue: "$180,000.00",
      startDate: "Mar 1, 2024",
    },
    {
      company: "Design Studio Pro",
      location: "Los Angeles, CA",
      website: "https://designstudio.com",
      contactPerson: "Alex Thompson",
      phone: "(555) 333-4444",
      industry: "Design & Creative",
      status: "Active",
      contractValue: "$120,000.00",
      startDate: "May 10, 2024",
    },
  ];
  const tableHeaders = [
    { label: "Company", key: "company" },
    { label: "Contact Person", key: "contactPerson" },
    { label: "Industry", key: "industry" },
    { label: "Status", key: "status" },
    { label: "Contract Value", key: "contractValue" },
    { label: "Start Date", key: "startDate" },
    { label: "Actions", key: "actions" },
  ];
  const stats = [
    {
      title: "Total Clients",
      value: "6",
      subtext: "6 active",
      icon: "mdi:account-group",
      
    },
    {
      title: "Active Contracts",
      value: "5",
      subtext: "Currently active",
      icon: "mdi:file-document-check-outline",
    },
    {
      title: "Total Revenue",
      value: "$1,220,000",
      subtext: "Contract value",
      icon: "mdi:currency-usd",
    },
    {
      title: "Avg Contract Value",
      value: "$203,333",
      subtext: "Per client",
      icon: "mdi:chart-bar",
    },
  ];

  // Available Tailwind text color classes
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
  // Memoize the random colors so they persist per render
  const coloredStats = useMemo(() => {
    return stats.map((stat) => {
      const randomColor =
        iconColors[Math.floor(Math.random() * iconColors.length)];
      return { ...stat, iconColor: randomColor };
    });
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-gray-50 py-6  transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto px-4  md:mt-0 sm:px-6  lg:px-8">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Clients Overview</h1>
              <p className="text-sm text-gray-600">
                Manage and monitor all client relationships and contracts.
              </p>
            </div>
            
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      {coloredStats.map((stat, index) => (
        <div
          key={index}
          className="bg-white text-gray-900 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
        >
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs sm:text-sm opacity-70 mb-1">{stat.title}</p>
              <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
              <p className="text-xs sm:text-sm opacity-70 mb-1">{stat.subtext}</p>
            </div>
            <div className={`text-3xl sm:text-4xl ${stat.iconColor}`}>
              <Icon icon={stat.icon} />
            </div>
          </div>
        </div>
      ))}
    </div>

          {/* Table - Desktop */}
          <div className="bg-white p-5 rounded-xl shadow-lg overflow-x-hidden">
            <div className="mb-6">
              <div>
                <h1 className="text-2xl mt-2 font-semibold">All Clients</h1>
                <p className="text-sm text-gray-600 mb-6">
                  Complete list of client companies and their details.
                </p>
              </div>
              <div className="hidden md:block bg-white rounded">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    <tr>
                      {tableHeaders.map((header, index) => (
                        <th
                          key={index}
                          className="px-6 py-3 text-left text-sm whitespace-nowrap font-medium text-gray-500 normal-case"
                        >
                          {header.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {clients.map((client, index) => (
                      <tr key={index} className="bg-white hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            {client.company}
                          </div>
                          <div className="text-sm text-gray-500">
                            {client.location}
                          </div>
                          <div className="text-sm text-blue-600">
                            <a
                              href={client.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {client.website.replace(/^https?:\/\//, "")}
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-900">
                            {client.contactPerson}
                          </div>
                          <div className="text-sm text-gray-500">
                            {client.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          {client.industry}
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          {client.contractValue}
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                          {client.startDate}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          <div className="flex ">
                            <div class="flex-initial flex-none ">
                              <div
                                onClick={() => openModal(client)}
                                className="mt-3 text-xs text-blue-800 p-2 rounded-sm hover:text-blue-900 whitespace-nowrap bg-blue-100 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
                              >
                                View Details
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Mobile View */}
            <div className="md:hidden space-y-4">
              {clients.map((client, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-lg">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {client.company}
                      </h3>
                      <p className="text-sm text-gray-500">{client.location}</p>
                    </div>
                    <span className="px-2 py-2 text-xs font-semibold rounded-sm bg-green-100 text-green-800">
                      {client.status}
                    </span>
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-gray-500">Contact</p>
                      <p>{client.contactPerson}</p>
                      <p className="text-gray-500">{client.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Industry</p>
                      <p>{client.industry}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Contract Value</p>
                      <p>{client.contractValue}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Start Date</p>
                      <p>{client.startDate}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <a
                      href={client.website}
                      className="text-xs text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {client.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                  <div className="flex">
                    <div class="flex-initial flex-none">
                      <div
                        onClick={() => openModal(client)}
                        className="mt-3 text-xs text-blue-800 p-2 rounded-sm hover:text-blue-900 whitespace-nowrap bg-blue-100"
                      >
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isModalOpen && selectedClient && (
          <ClientDetailsModal client={selectedClient} onClose={closeModal} />
        )}
      </div>
    </>
  );
};

export default Clients;
