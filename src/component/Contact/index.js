import React from 'react';

const Contact = () => {
  return (
    <div className= "flex items-center justify-center min-h-screen bg-transparent pt-12 pb-8">
      <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          İletişim Bilgileri
        </h1>
        <div className="text-white">
          <ul className="space-y-4">
            <li className="text-lg">
              <strong className="text-white">E-posta:</strong> 
              <a href="mailto:rakdogan@anadolu.edu.tr" className="text-blue-300 hover:underline">rakdogan@anadolu.edu.tr</a>
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
              <a href="https://avesis.anadolu.edu.tr/rakdogan" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">avesis.anadolu.edu.tr/rakdogan</a>
            </li>
            <li className="text-lg">
              <strong className="text-white">Ofis:</strong> 
              Oda no: 325
            </li>
            <li className="text-lg">
              <strong className="text-white">Posta Adresi:</strong> 
              Anadolu Üniversitesi Engelliler Araştırma Enstitüsü Yunus Emre Kampüsü Tepebaşı Eskişehir
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
