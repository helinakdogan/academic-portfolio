import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col flex-grow justify-center pb-8 px-4">
      <div className="relative mb-12">
        <div className="w-full md:w-11/12 lg:w-5/6 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
          <div className="flex flex-col relative z-10">
            <div className="mb-8 flex flex-col">
              <div className="flex flex-col items-start w-full">
                <div
                  className="award-box p-6 rounded-lg shadow-md w-full"
                  style={{ background: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)" }}
                >
         
                  <h1 className="text-4xl font-bold text-white mb-6 text-center">
                    İletişim Bilgileri
                  </h1>
                  <div className="text-white">
                    <ul className="space-y-4">
                      <li className="text-lg">
                        <strong className="text-white">E-posta:</strong>
                        <a
                          href="mailto:rakdogan@anadolu.edu.tr"
                          className="text-blue-300 hover:underline"
                        >
                          rakdogan@anadolu.edu.tr
                        </a>
                      </li>
                      <li className="text-lg">
                        <strong className="text-white">İş Telefonu:</strong>
                        +90 222 335 0580 Dahili: 4391
                      </li>
                      <li className="text-lg">
                        <strong className="text-white">Fax Telefonu:</strong>
                        +90 222 335 0580
                      </li>
                      <li className="text-lg">
                        <strong className="text-white">Web:</strong>
                        <a
                          href="https://avesis.anadolu.edu.tr/rakdogan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:underline"
                        >
                          avesis.anadolu.edu.tr/rakdogan
                        </a>
                      </li>
                      <li className="text-lg">
                        <strong className="text-white">Ofis:</strong>
                        Oda no: 325
                      </li>
                      <li className="text-lg">
                        <strong className="text-white">Posta Adresi:</strong>
                        Anadolu Üniversitesi Engelliler Araştırma Enstitüsü
                        Yunus Emre Kampüsü Tepebaşı Eskişehir
                      </li>
                    </ul>
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

export default Contact;
