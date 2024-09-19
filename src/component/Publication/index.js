import React, { useState } from "react";
import publications, { getGradientByCategory } from "./publicationData";

const PublicationTimeline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState(null);

  const openModal = (publication) => {
    setSelectedPublication(publication);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPublication(null);
  };

  return (
    <div className="container mx-auto flex flex-col flex-grow justify-center pb-8 px-4">
      {publications.map((section, index) => (
        <div
          key={index}
          className="relative mb-12 animate-fadeIn"
          style={{
            animation: 'fadeIn 0.6s ease-out'
          }}
        >
          <div className="w-full md:w-11/12 lg:w-5/6 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              <span className="text-gray-500">{section.category}</span>
            </h1>
            <div className="relative">
              <div className="hidden md:flex absolute inset-0 justify-start">
                <div className="w-px bg-gray-300 dark:bg-gray-600 h-full absolute left-0"></div>
              </div>
              <div className="flex flex-col relative z-10">
                {section.items.map((pub, pubIndex) => (
                  <div
                    key={pubIndex}
                    className="mb-8 flex flex-col md:flex-row items-center md:items-start relative animate-fadeIn"
                    style={{
                      animation: `fadeIn ${0.6 + pubIndex * 0.2}s ease-out`
                    }}
                  >
                    <div
                      className="hidden md:block w-4 h-4 rounded-full absolute left-0 transform -translate-x-1/2 z-10"
                      style={{
                        background: getGradientByCategory(section.category),
                      }}
                    ></div>
                    <div className="md:pl-12 flex flex-col items-start md:items-start w-full">
                      <div
                        className="flex items-start justify-between w-full p-6 rounded-lg shadow-md relative transition-transform transform hover:scale-105 hover:shadow-xl"
                        style={{
                          background: getGradientByCategory(section.category),
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                      >
                        <div className="flex-1 text-left">
                          <h2 className="text-lg md:text-xl font-semibold text-white mb-1">
                            {pub.year}
                          </h2>
                          <p className="text-white mb-1">{pub.title}</p>
                          <p className="text-white mb-1">{pub.authors}</p>
                          <p className="text-white mb-1">{pub.journal}</p>
                          {pub.description && (
                            <p className="text-white">{pub.description}</p>
                          )}
                        </div>

                        {/* PDF Link kontrolüyle butonun eklenmesi */}
                        {pub.pdfLink && (
                          <button
                            onClick={() => openModal(pub)}
                            className="absolute bottom-3 right-3 px-4 py-2 bg-white text-gray-500 font-semibold rounded shadow-md hover:bg-blue-50 transition duration-200"
                          >
                            Detayları Gör
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Custom Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-10 relative animate-fadeIn"
            style={{
              animation: 'fadeIn 0.5s ease-out'
            }}
          >
            {selectedPublication && (
              <>
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl"
                >
                  &times;
                </button>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                  {selectedPublication.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {selectedPublication.authors}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {selectedPublication.journal}
                </p>
                {selectedPublication.description && (
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    {selectedPublication.description}
                  </p>
                )}
                <div className="mt-6">
                  <a
                    href={selectedPublication.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-200"
                  >
                    PDF'yi İncele
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationTimeline;
