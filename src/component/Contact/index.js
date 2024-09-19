import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col flex-grow justify-center pb-8 px-4">
      <div className="relative mb-12">
        <h1 className="text-3xl md:text-3xl font-bold text-white dark:text-gray-100 mb-6 p-4">
          <span className="text-gray-500">İletişim Bilgileri</span>
        </h1>

        <div className="w-full md:w-8/12 lg:w-6/12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg mb-6 mx-auto transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <div className="text-white">
            <div className="border-b border-white border-opacity-30 py-3">
              <h2 className="text-lg font-semibold mb-2">E-posta</h2>
              <p>
                <a
                  href="mailto:rakdogan@anadolu.edu.tr"
                  className="text-white hover:underline"
                >
                  rakdogan@anadolu.edu.tr
                </a>
              </p>
            </div>
            <div className="border-b border-white border-opacity-30 py-3">
              <h2 className="text-lg font-semibold mb-2">İş Telefonu</h2>
              <p>+90 222 335 0580 Dahili: 4391</p>
            </div>
            <div className="border-b border-white border-opacity-30 py-3">
              <h2 className="text-lg font-semibold mb-2">Fax Telefonu</h2>
              <p>+90 222 335 0580</p>
            </div>
            <div className="border-b border-white border-opacity-30 py-3">
              <h2 className="text-lg font-semibold mb-2">Avesis</h2>
              <p>
                <a
                  href="https://avesis.anadolu.edu.tr/rakdogan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  avesis.anadolu.edu.tr/rakdogan
                </a>
              </p>
            </div>
            <div className="border-b border-white border-opacity-30 py-3">
              <h2 className="text-lg font-semibold mb-2">Ofis</h2>
              <p>Oda no: 325</p>
            </div>
            <div className="py-3">
              <h2 className="text-lg font-semibold mb-2">Posta Adresi</h2>
              <p>
                Anadolu Üniversitesi Engelliler Araştırma Enstitüsü Yunus Emre
                Kampüsü Tepebaşı Eskişehir
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
