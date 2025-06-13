import React, { useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import CandidateProfileModal from "./CandidateProfileModal";

const Candidates = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (candidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCandidate(null);
  };

  const candidates = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@email.com",
      phone: "(555) 123-4567",
      experience: "Senior",
      location: "San Francisco, CA",
      skills: ["React", "Node.js", "TypeScript"],
      additionalSkills: 2,
      education: "Bachelor of Science in Computer Science, Stanford University",
      status: "Active",
      lastActive: "2 days ago",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@email.com",
      phone: "(555) 234-5678",
      experience: "Mid-level (4 years)",
      location: "New York, NY",
      skills: ["Product Management", "Agile"],
      additionalSkills: 0,
      education: "MBA, Wharton School",
      status: "Active",
      lastActive: "1 week ago",
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol.davis@email.com",
      phone: "",
      experience: "Senior",
      location: "Remote",
      skills: ["UX Design", "Figma"],
      additionalSkills: 0,
      education: "Master of Fine Arts in Design",
      status: "Inactive",
      lastActive: "3 weeks ago",
    },
  ];

  const tableHeaders = [
    { label: "Candidate", key: "name" },
    { label: "Experience", key: "experience" },
    { label: "Location", key: "location" },
    { label: "Skills", key: "skills" },
    { label: "Education", key: "education" },
    { label: "Status", key: "status" },
    { label: "Actions", key: "actions" },
  ];

  const stats = [
    {
      title: "Total Candidates",
      value: "24",
      subtext: "18 active",
      icon: "mdi:account-group",
    },
    {
      title: "New This Month",
      value: "6",
      subtext: "Recently added",
      icon: "mdi:account-plus",
    },
    {
      title: "Placement Rate",
      value: "78%",
      subtext: "Successful placements",
      icon: "mdi:chart-line",
    },
    {
      title: "Avg Response Time",
      value: "1.2 days",
      subtext: "To initial contact",
      icon: "mdi:clock-outline",
    },
  ];

  // Random Tailwind color classes
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

  // Inside your Candidates component
  const coloredStats = useMemo(() => {
    return stats.map((stat) => {
      const randomColor =
        iconColors[Math.floor(Math.random() * iconColors.length)];
      return { ...stat, color: randomColor };
    });
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-gray-50 py-6 transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto px-4 md:mt-0 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Candidates Overview</h1>
              <p className="text-sm text-gray-600">
                View and manage all candidate profiles and information.
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
                    <p className="text-xs sm:text-sm opacity-70 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm opacity-70 mb-1">
                      {stat.subtext}
                    </p>
                  </div>
                  <div className={`text-3xl sm:text-4xl ${stat.color}`}>
                    <Icon icon={stat.icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table - Desktop */}
          <div className="bg-white p-5 rounded-xl shadow-lg">
            <div className="mb-6">
              <div>
                <h1 className="text-2xl mt-2 font-semibold">All Candidates</h1>
                <p className="text-sm text-gray-600 mb-6">
                  Complete database of candidate profiles and information.
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
                    {candidates.map((candidate, index) => (
                      <tr key={index} className="bg-white hover:bg-gray-100">
                        <td className="px-4 py-2 whitespace-nowrap">
                          <div className="font-medium text-sm text-gray-900">
                            {candidate.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {candidate.email}
                          </div>
                          {candidate.phone && (
                            <div className="text-sm text-gray-500 text-xs">
                              {candidate.phone}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-2 text-sm whitespace-nowrap">
                          <div className="text-gray-900">
                            {candidate.experience}
                          </div>
                          <div className="text-sm text-gray-500 text-xs">
                            Last active: {candidate.lastActive}
                          </div>
                        </td>
                        <td className="px-4 py-2 text-gray-500 text-sm whitespace-nowrap">
                          {candidate.location}
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex flex-wrap gap-1">
                            {candidate.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-4 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {skill}
                              </span>
                            ))}
                            {candidate.additionalSkills > 0 && (
                              <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                +{candidate.additionalSkills}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-2 text-gray-500 text-xs whitespace-break">
                          {candidate.education}
                        </td>
                        <td className="px-4 py-2">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              candidate.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {candidate.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-sm font-medium">
                          <div className="flex">
                            <div className="flex-initial flex-none">
                              <div
                                onClick={() => openModal(candidate)}
                                className="mt-3 text-xs text-blue-800 p-2 rounded-sm hover:text-blue-900 whitespace-nowrap bg-blue-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                              >
                                View Profile
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
              {candidates.map((candidate, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-lg">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {candidate.name}
                      </h3>
                      <p className="text-sm text-gray-500">{candidate.email}</p>
                    </div>
                    <span
                      className={`px-2 py-2 text-xs font-semibold rounded-sm ${
                        candidate.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {candidate.status}
                    </span>
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-gray-500">Experience</p>
                      <p>{candidate.experience}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p>{candidate.location}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Skills</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {candidate.skills.slice(0, 2).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap"
                          >
                            {skill}
                          </span>
                        ))}
                        {candidate.additionalSkills > 0 && (
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            +
                            {candidate.skills.length +
                              candidate.additionalSkills -
                              2}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Education</p>
                      <p className="truncate">
                        {candidate.education.split(",")[0]}
                      </p>
                    </div>
                  </div>

                  {candidate.phone && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{candidate.phone}</p>
                    </div>
                  )}

                  <div className="mt-3">
                    <p className="text-xs text-gray-500">
                      Last active: {candidate.lastActive}
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex-initial flex-none">
                      <div
                        onClick={() => openModal(candidate)}
                        className="mt-3 text-xs text-blue-800 p-2 rounded-sm hover:text-blue-900 whitespace-nowrap bg-blue-100"
                      >
                        View Profile
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isModalOpen && selectedCandidate && (
          <CandidateProfileModal
            candidate={selectedCandidate}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
};

export default Candidates;
