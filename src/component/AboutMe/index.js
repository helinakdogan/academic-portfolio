import React, { useEffect, useState } from "react";
import profile from "../../assets/img/profile.jpeg";
import bm3 from "../../assets/img/bm3.png";
import bm9 from "../../assets/img/bm9.png";
import bm10 from "../../assets/img/bm10.png";
import bm13 from "../../assets/img/bm13.png";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Animasyonun başlaması için küçük bir gecikme
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container mx-auto flex flex-col flex-grow justify-center items-center pb-8 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
      <div 
        className="flex flex-col md:flex-row items-center justify-center mb-16 bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg shadow-2xl w-full md:w-10/12 lg:w-8/12" 
        style={{ transform: 'scale(1)', transition: 'transform 0.3s ease' }}

      >
        <div className="flex w-full md:w-5/12 justify-center md:justify-end md:pr-3 md:border-r border-gray-300">
          <img
            className="mr-4 rounded-full h-48 w-48 md:h-64 md:w-64 border-4 shadow-2xl border-white"
            src={profile}
            alt="Profile"
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
        <div className="w-full md:w-7/12 my-auto text-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold text-center py-4 text-white">Prof. Dr. Ramazan Akdoğan</h1>
          <p className="text-lg md:text-xl pl-4 pr-4 md:pr-9 text-white">
            Doç. Dr. Ramazan Akdoğan Hacettepe Üniversitesi Psikoloji bölümünden 1995 yılında lisans, Anadolu Üniversitesi Rehberlik ve Psikolojik Danışmanlık anabilim dalından 2007 yılında yüksek lisans ve 2012 yılında doktora eğitimlerini tamamlamıştır. Doktora eğitimini takiben Anadolu Üniversitesi Rehberlik ve Psikolojik Danışmanlık anabilim dalına öğretim üyesi olarak atanmış ve 2018 yılında doçent ünvanı almıştır. Lisansüstü çalışmalarından önce uzun bir süre çeşitli kurumlarda psikolog veya psikolojik danışman olarak çalışmayı seçmiştir.
          </p>
        </div>
      </div>
      
      <div className={`flex flex-col items-center mb-12 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
        <h2 className="text-3xl font-bold mb-4 text-gray-600">Metrikler</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { title: "H-İndeks (TrDizin)", value: "2", color: "from-blue-500 to-blue-300" },
            { title: "Atıf (WoS)", value: "312", color: "from-green-500 to-green-300" },
            { title: "H-İndeks (WoS)", value: "12", color: "from-yellow-500 to-yellow-300" },
            { title: "Atıf (Scopus)", value: "110", color: "from-red-500 to-red-300" },
            { title: "H-İndeks (Scopus)", value: "14", color: "from-purple-500 to-purple-300" },
            { title: "Atıf (TrDizin)", value: "11", color: "from-teal-500 to-teal-300" },
            { title: "H-İndeks (TrDizin)", value: "2", color: "from-orange-500 to-orange-300" },
            { title: "Proje", value: "6", color: "from-pink-500 to-pink-300" },
            { title: "Tez Danışmanlığı", value: "2", color: "from-indigo-500 to-indigo-300" },
            { title: "Açık Erişim", value: "39", color: "from-gray-500 to-gray-300" }
          ].map((metric, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg bg-gradient-to-r ${metric.color} text-white w-full sm:w-60 md:w-64 shadow-lg`} 
              style={{ transform: 'scale(1)', transition: 'transform 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h3 className="text-lg font-semibold">{metric.title}</h3>
              <p className="text-xl font-bold">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className={`flex flex-col items-center mb-12 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
        <h2 className="text-3xl font-bold mb-4 text-gray-600">BM Sürdürülebilir Kalkınma Amaçları</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[bm3, bm9, bm10, bm13].map((image, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-gray-300 text-white w-50 h-50 shadow-lg" 
              style={{ transform: 'scale(1)', transition: 'transform 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src={image} alt={`bm${index + 3}`} className="w-50 h-50 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
