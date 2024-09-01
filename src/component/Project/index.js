import React from "react";
import projectData from "./projectData"; // Proje verilerini içe aktar

const Project = () => {
  return (
    <div className="container mx-auto flex flex-col flex-grow justify-center pb-8 px-4">
      <h1 className="text-3xl md:text-3xl font-bold text-gray-500 dark:text-gray-100 mb-6 animate-fadeIn">
        Desteklenen Projeler
      </h1>
      <div className="relative">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-start mb-12 animate-fadeIn"
            style={{
              animation: `fadeIn ${0.6 + index * 0.2}s ease-out`,
            }}
          >
            <div className="flex flex-col items-start md:pl-24 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto">
              <div
                className="flex items-start justify-between w-full p-6 rounded-lg shadow-md relative transition-transform transform hover:scale-105 hover:shadow-xl"
                style={{
                  background: project.gradient,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  maxWidth: "100%",
                }}
              >
                <div className="flex-1 text-left">
                  <h2 className="text-lg md:text-xl font-semibold text-white mb-1">
                    {project.year}
                  </h2>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  {project.type && (
                    <p className="text-white mb-1">
                      <strong>Tür:</strong> {project.type}
                    </p>
                  )}
                  {project.summary && (
                    <p className="text-white mb-1">
                      <strong>Özet:</strong> {project.summary}
                    </p>
                  )}
                  <p className="text-white mb-1">
                    <strong>Ekip:</strong> {project.team.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
