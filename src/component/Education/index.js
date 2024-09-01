import React from "react";
import educationSections from './educationData';

const EducationTimeline = () => {
  return (
    <div className="container mx-auto flex flex-col flex-grow justify-center pb-8 px-4">
      {educationSections.map((section, index) => (
        <div
          key={index}
          className="relative mb-12 animate-fadeIn"
          style={{
            animation: 'fadeIn 0.6s ease-out'
          }}
        >
          <div className="w-full md:w-11/12 lg:w-4/6 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              <span className="text-gray-500">{section.category}</span>
            </h1>
            <div className="relative">
              {section.category !== "Yabancı Diller" && section.category !== "Araştırma Alanları" && (
                <div className="hidden md:flex absolute inset-0 justify-start">
                  <div className="w-px bg-gray-300 dark:bg-gray-600 h-full absolute left-0"></div>
                </div>
              )}
              <div className="flex flex-col relative z-10">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="mb-8 flex flex-col md:flex-row items-center md:items-start relative"
                  >
                    {section.category !== "Yabancı Diller" && section.category !== "Araştırma Alanları" && (
                      <div
                        className="hidden md:block w-4 h-4 rounded-full absolute left-0 transform -translate-x-1/2 z-10"
                        style={{
                          background: item.gradient,
                        }}
                      ></div>
                    )}
                    <div className="md:pl-12 flex flex-col items-start md:items-start w-full">
                      <div
                        className="flex items-start justify-between w-full p-6 rounded-lg shadow-md relative transition-transform transform hover:scale-105 hover:shadow-xl"
                        style={{
                          background: item.gradient,
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                      >
                        <div className="flex-1 text-left">
                          {item.year && (
                            <h2 className="text-lg md:text-xl font-semibold text-white mb-1">
                              {item.year}
                            </h2>
                          )}
                          {item.degree && <p className="text-white mb-1">{item.degree}</p>}
                          {item.institution && <p className="text-white mb-1">{item.institution}</p>}
                          {item.title && <p className="text-white mb-1">{item.title}</p>}
                          {item.supervisor && (
                            <p className="text-white mb-1">Tez Danışmanı: {item.supervisor}</p>
                          )}
                          {item.language && <p className="text-white mb-1">{item.language}</p>}
                          {item.level && <p className="text-white mb-1">Seviye: {item.level}</p>}
                          {item.field && <p className="text-white mb-1">{item.field}</p>}
                          {item.description && <p className="text-white">{item.description}</p>}
                          {item.position && <p className="text-white mb-1">{item.position}</p>}
                          {item.company && <p className="text-white mb-1">{item.company}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
