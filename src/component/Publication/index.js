import React, { useState } from "react";

// Sample data for publications
const publications = [
  {
    category: "SCI, SSCI ve AHCI İndekslerine Giren Dergilerde Yayınlanan Makaleler",
    items: [
      {
        year: "2024",
        title:
          "Turkish adolescents' anonymous use of social networking sites (SNSs): A phenomenological study",
        authors: "Çimşir E., Akdoğan R., Akbayrak A.",
        journal:
          "PSYCHOLOGY IN THE SCHOOLS, sa.-, ss.1-18, 2024 (SSCI)",
        description: "Creative Commons License Sürdürülebilir Kalkınma PlumX Metrics",
        pdfLink: "https://example.com/pdf1", // Example link, replace with a real link
      },
      {
        year: "2024",
        title:
          "Inferiority feelings and internet addiction among Turkish University students in the context of COVID-19: The mediating role of emotion dysregulation",
        authors: "Çimşir E., Akdoğan R.",
        journal:
          "Current Psychology, cilt.43, sa.5, ss.4245-4254, 2024 (SSCI)",
        description: "Creative Commons License identifier PlumX Metrics",
        pdfLink: "https://example.com/pdf2", // Example link, replace with a real link
      },
      {
        year: "2022",
        title:
          "Collectivistic ambivalence: A potential source of social anxiety for individuals with higher inferiority feelings",
        authors: "Akdoğan R., Çimşir E.",
        journal:
          "INTERNATIONAL JOURNAL OF INTERCULTURAL RELATIONS, cilt.89, ss.195-207, 2022 (SSCI)",
        description: "Creative Commons License identifier identifier PlumX Metrics",
        pdfLink: "https://example.com/pdf3", // Example link, replace with a real link
      },
      {
        year: "2021",
        title:
          "Childhood Emotional Incest Scale (CEIS): Development, Validation, Cross-Validation, and Reliability",
        authors: "Çimşir E., Akdoğan R.",
        journal:
          "JOURNAL OF COUNSELING PSYCHOLOGY, cilt.68, sa.1, ss.98-111, 2021 (SSCI)",
        description: "Creative Commons License identifier identifier identifier PlumX Metrics",
        pdfLink: "https://example.com/pdf4", // Example link, replace with a real link
      },
      {
        year: "2020",
        title: "Mental health of parents as a factor in dealing with Autism",
        authors: "Tümlü C., Akdoğan R., Diken İ. H.",
        journal:
          "SOCIAL SCIENCE JOURNAL, 2020 (SSCI)",
        description: "Creative Commons License Sürdürülebilir Kalkınma identifier identifier PlumX Metrics",
        pdfLink: "https://example.com/pdf5", // Example link, replace with a real link
      },
      {
        year: "2020",
        title:
          "Does insight lead to happiness through providing satisfaction in romantic relationships?",
        authors: "Akdoğan R., Çimşir E.",
        journal: "SOCIAL SCIENCE JOURNAL, 2020 (SSCI)",
        description: "Creative Commons License identifier identifier PlumX Metrics",
        pdfLink: "https://example.com/pdf6", // Example link, replace with a real link
      },
      {
        year: "2019",
        title:
          "Linking inferiority feelings to subjective happiness: Self-concealment and loneliness as serial mediators",
        authors: "Akdoğan R., Çimşir E.",
        journal:
          "PERSONALITY AND INDIVIDUAL DIFFERENCES, cilt.149, ss.14-20, 2019 (SSCI)",
        description: "Creative Commons License identifier identifier PlumX Metrics",
        pdfLink: "https://example.com/pdf7", // Example link, replace with a real link
      },
      {
        year: "2018",
        title:
          "Insight Scale for Nonclinical University Students: Validity and Reliability Analysis",
        authors: "Akdoğan R., Türküm A. S.",
        journal:
          "MEASUREMENT AND EVALUATION IN COUNSELING AND DEVELOPMENT, cilt.51, sa.4, ss.250-262, 2018 (SSCI)",
        description: "Creative Commons License identifier identifier PlumX Metrics",
        pdfLink: "https://example.com/pdf8", // Example link, replace with a real link
      },
      {
        year: "2017",
        title:
          "A model proposal on the relationships between loneliness, insecure attachment, and inferiority feelings",
        authors: "Akdoğan R.",
        journal:
          "PERSONALITY AND INDIVIDUAL DIFFERENCES, cilt.111, ss.19-24, 2017 (SSCI)",
        description: "Creative Commons License identifier identifier PlumX Metrics",
        pdfLink: "https://example.com/pdf9", // Example link, replace with a real link
      },
    ],
  },
];

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
        <div key={index} className="relative mb-12">
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
                    className="mb-8 flex flex-col md:flex-row items-center md:items-start relative"
                  >
                    <div className="hidden md:block w-4 h-4 bg-blue-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                    <div className="md:pl-12 flex flex-col items-start md:items-start w-full">
                      <div
                        className="flex items-start justify-between w-full p-6 rounded-lg shadow-md relative"
                        style={{
               
                          background: "linear-gradient(-111.4deg, rgb(122, 192, 233) 18.8%, #318CE7",
                          boxShadow: "none",
                          maxWidth: "100%",
                          width: "100%", // Adjust width for a more expansive card
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
                        <button
                          onClick={() => openModal(pub)}
                          className="absolute bottom-3 right-3 px-4 py-2 bg-white text-blue-500 font-semibold rounded shadow-md hover:bg-blue-50 transition duration-200"
                        >
                          Detayları Gör
                        </button>
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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 max-w-2xl p-8 relative">
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
                <div className="mt-4">
                  <a
                    href={selectedPublication.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
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
