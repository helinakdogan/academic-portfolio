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
                className="flex flex-col p-0 w-full rounded-lg shadow-md relative transition-transform transform hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: "#ffbf80", // Ana kutu için turuncu renk
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* Başlık ve Tarih için Gradyan Arka Plan */}
                <div
                  className="p-4 w-full rounded-t-lg"
                  style={{
                    background: project.gradient, // Gradyanlı arka plan
                    padding: '2rem', // Padding eklendi
                  }}
                >
                  <h2 className="text-lg md:text-xl font-semibold text-white mb-1 text-left">
                    {project.year}
                  </h2>
                  <h3 className="text-xl md:text-xl font-bold text-white mb-1 text-left">
                    {project.title}
                  </h3>
                </div>

                {/* Proje İçeriği */}
                <div className="p-6 text-left text-white">
                  {project.type && (
                    <p className="mb-1">
                      <strong>Tür:</strong> {project.type}
                    </p>
                  )}
                  {project.summary && (
                    <p className="mb-1">
                      <strong>Özet:</strong> {project.summary}
                    </p>
                  )}
                  <p className="mb-1">
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
