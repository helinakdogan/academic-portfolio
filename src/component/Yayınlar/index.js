import React, { useState } from "react";

const publications = [
  {
    title:
      "Turkish adolescents' anonymous use of social networking sites (SNSs): A phenomenological study",
    year: "2024",
    authors: "Çimşir E., Akdoğan R., Akbayrak A.",
    journal: "PSYCHOLOGY IN THE SCHOOLS",
    index: "SSCI",
    license: "Creative Commons License",
    metrics: "PlumX Metrics",
    description: "Sürdürülebilir Kalkınma",
    links: ["https://example.com/link1", "https://example.com/link2"]
  },
  {
    title:
      "Inferiority feelings and internet addiction among Turkish University students in the context of COVID-19: The mediating role of emotion dysregulation",
    year: "2024",
    authors: "Çimşir E., Akdoğan R.",
    journal: "Current Psychology",
    volume: "43",
    issue: "5",
    pages: "4245-4254",
    index: "SSCI",
    license: "Creative Commons License",
    metrics: "PlumX Metrics",
    links: ["https://example.com/link3"]
  },
  {
    title:
      "Collectivistic ambivalence: A potential source of social anxiety for individuals with higher inferiority feelings",
    year: "2022",
    authors: "Akdoğan R., Çimşir E.",
    journal: "INTERNATIONAL JOURNAL OF INTERCULTURAL RELATIONS",
    volume: "89",
    pages: "195-207",
    index: "SSCI",
    license: "Creative Commons License",
    metrics: "PlumX Metrics",
    links: ["https://example.com/link4"]
  },
  // Diğer yayınlar buraya benzer şekilde eklenebilir
];

const Yayınlar = () => {
  const [selectedPub, setSelectedPub] = useState(null);

  const handleOpenModal = (pub) => {
    setSelectedPub(pub);
  };

  const handleCloseModal = () => {
    setSelectedPub(null);
  };

  return (
    <div className="container mx-auto flex flex-col flex-grow justify-center pb-8">
      <h1 className="text-4xl font-bold text-center py-8">
        Doç. Dr. Ramazan Akdoğan Yayınları
      </h1>
      <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-wrap justify-center">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">{pub.title}</div>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {pub.authors}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {pub.journal}, {pub.year} ({pub.index})
                  </p>
                  {pub.volume && pub.issue && pub.pages && (
                    <p className="text-gray-700 dark:text-gray-300 text-base">
                      Volume: {pub.volume}, Issue: {pub.issue}, Pages: {pub.pages}
                    </p>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {pub.license}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {pub.metrics}
                  </p>
                  {pub.description && (
                    <p className="text-gray-700 dark:text-gray-300 text-base">
                      {pub.description}
                    </p>
                  )}
                </div>
                <div className="px-6 pt-4 pb-2">
                  <button
                    onClick={() => handleOpenModal(pub)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Detayları Gör
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPub && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-300"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Detaylar</h2>
            <div>
              {selectedPub.links.map((link, index) => (
                <div key={index} className="mb-2">
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Yayınlar;
