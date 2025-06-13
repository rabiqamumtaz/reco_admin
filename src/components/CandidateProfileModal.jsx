import React from "react";
import { Icon } from "@iconify/react";

const CandidateProfileModal = ({ candidate, onClose }) => {
  const workExperience = [
    {
      id: 1,
      position: "Senior Software Engineer",
      company: "Tech Startup Inc",
      duration: "2021 - Present",
      description:
        "Led development of React-based web applications, mentored junior developers.",
    },
    {
      id: 2,
      position: "Software Engineer",
      company: "Digital Solutions LLC",
      duration: "2019 - 2021",
      description: "Developed full-stack applications using React and Node.js.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex ">
        {/* Modal content */}
        <div className="relative w-screen max-w-2xl">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto rounded-xl">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  Candidate Profile
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Icon icon="mdi:close" className="h-6 w-6" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Complete profile and professional information
              </p>
            </div>

            {/* Candidate Info */}
            <div className="px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-medium text-2xl">
                    {candidate.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {candidate.name}
                  </h3>
                  <p className="text-gray-600">{candidate.email}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-4 border-t border-b border-gray-200 bg-gray-50">
              <div className="flex flex-wrap gap-3 ">
                <button className="flex whitespace-nowrap flex-initial items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-lime-700 bg-white border border-lime-300 hover:bg-lime-100 hover:border-lime-400 transition-colors duration-200 shadow-sm">
                  <Icon
                    icon="mdi:email-outline"
                    className="h-5 w-5 text-line-600 hover: text-lime-800"
                  />
                  <span>Send Email</span>
                </button>

                {candidate.phone && (
                  <button className="flex whitespace-nowrap flex-initial items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-fuchsia-700 bg-white border border-fuchsia-300 hover:bg-fuchsia-100 hover:border-fuchsia-400 transition-colors duration-200 shadow-sm">
                    <Icon
                      icon="mdi:phone-outline"
                      className="h-5 w-5 text-fuchsia-600"
                    />
                    <span>Call Candidate</span>
                  </button>
                )}

                <button className="flex whitespace-nowrap flex-initial items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-blue-700 bg-white border border-blue-300 hover:bg-blue-100 hover:border-gray-400 transition-colors duration-200 shadow-sm">
                  <Icon
                    icon="mdi:file-download-outline"
                    className="h-5 w-5 text-blue-600"
                  />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-y-auto ">
              {/* Skills Section */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Skills & Expertise
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Technical and professional skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills
                    .concat(["Python", "AWS"])
                    .map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>

              {/* Work Experience */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Work Experience
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Professional work history and achievements
                </p>
                <div className="space-y-6">
                  {workExperience.map((exp) => (
                    <div
                      key={exp.id}
                      className="border-l-4 border-blue-500 pl-4 py-1"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {exp.position}
                          </h4>
                          <p className="text-gray-600">{exp.company}</p>
                        </div>
                        <p className="text-sm text-gray-500">{exp.duration}</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Education
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Academic background and qualifications
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5">
                      <Icon icon="mdi:school-outline" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900">
                        {candidate.education.split(",")[0]}
                      </p>
                      <p className="text-sm text-gray-500">
                        {candidate.education.split(",")[1]}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">2019</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume & Documents */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Resume & Documents
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Uploaded documents and resume files
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center truncate">
                      <Icon
                        icon="mdi:file-pdf-box"
                        className="h-8 w-8 text-red-500"
                      />
                      <div className="ml-3">
                        <p className="font-medium truncate">
                          Alice_Johnson_Resume.pdf
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          PDF Document - 2.3 MB
                        </p>
                      </div>
                    </div>
                    <button className="whitespace-nowrap flex-initial items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-blue-700 bg-white border border-blue-300 hover:bg-blue-100 hover:border-gray-400 transition-colors duration-200 shadow-sm">
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Additional Information
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Summary and key highlights
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Career Level</p>
                    <p className="font-medium">Senior Professional</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Latest Position</p>
                    <p className="font-medium">
                      Senior Software Engineer at Tech Startup Inc
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Primary Skills</p>
                    <p className="font-medium">
                      React, Node.js, TypeScript +2 more
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Education Level</p>
                    <p className="font-medium">
                      Bachelor of Science in Computer Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfileModal;
