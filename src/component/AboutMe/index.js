import React from "react";
import profile from "../../assets/img/profile.jpeg";
import bm3 from "../../assets/img/bm3.png";
import bm9 from "../../assets/img/bm9.png";
import bm10 from "../../assets/img/bm10.png";
import bm13 from "../../assets/img/bm13.png";

const AboutMe = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col flex-grow justify-center items-center pb-8">
        <div className="flex flex-col md:flex-row items-center justify-center mb-16 bg-gradient-to-r from-blue-900 to-blue-900 p-6 rounded-lg shadow-2xl w-full md:w-10/12 lg:w-8/12">
          <div className="flex w-full md:w-5/12 justify-center md:justify-end md:pr-3 md:border-r border-gray-300">
            <img
              className="mr-4 rounded-full h-48 w-48 md:h-64 md:w-64 border-4 shadow-2xl border-white"
              src={profile}
              alt="Profile"
            />
          </div>
          <div className="w-full md:w-7/12 my-auto text-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold text-center py-4 text-white">
              Prof. Dr. Ramazan Akdoğan
            </h1>
            <p className="text-lg md:text-xl pl-4 pr-4 md:pr-9 text-white">
              Doç. Dr. Ramazan Akdoğan Hacettepe Üniversitesi Psikoloji
              bölümünden 1995 yılında lisans, Anadolu Üniversitesi Rehberlik ve
              Psikolojik Danışmanlık anabilim dalından 2007 yılında yüksek
              lisans ve 2012 yılında doktora eğitimlerini tamamlamıştır. Doktora
              eğitimini takiben Anadolu Üniversitesi Rehberlik ve Psikolojik
              Danışmanlık anabilim dalına öğretim üyesi olarak atanmış ve 2018
              yılında doçent ünvanı almıştır. Lisansüstü çalışmalarından önce
              uzun bir süre çeşitli kurumlarda psikolog veya psikolojik danışman
              olarak çalışmayı seçmiştir.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-600">Metrikler</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-300 text-white w-full sm:w-60 md:w-64 shadow-lg">
              <h3 className="text-lg font-semibold">H-İndeks (TrDizin)</h3>
              <p className="text-xl font-bold">2</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-500 to-green-300 text-white w-full sm:w-60 md:w-64 shadow-lg">
              <h3 className="text-lg font-semibold">Atıf (WoS)</h3>
              <p className="text-xl font-bold">312</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-300 text-white w-full sm:w-60 md:w-64 shadow-lg">
              <h3 className="text-lg font-semibold">H-İndeks (WoS)</h3>
              <p className="text-xl font-bold">12</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-red-500 to-red-300 text-white w-full sm:w-60 md:w-64 shadow-lg">
              <h3 className="text-lg font-semibold">Atıf (Scopus)</h3>
              <p className="text-xl font-bold">110</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-300 text-white w-full sm:w-60 md:w-64 shadow-lg">
              <h3 className="text-lg font-semibold">H-İndeks (Scopus)</h3>
              <p className="text-xl font-bold">14</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-teal-500 to-teal-300 text-white w-full sm:w-60 md:w-64 shadow-lg">
              <h3 className="text-lg font-semibold">Atıf (TrDizin)</h3>
              <p className="text-xl font-bold">11</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-300 text-white w-full sm:w-60 md:w-64 shadow-lg">
              <h3 className="text-lg font-semibold">H-İndeks (TrDizin)</h3>
              <p className="text-xl font-bold">2</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-pink-500 to-pink-300 text-white w-full sm:w-60 md:w-64 shadow-lg">
              <h3 className="text-lg font-semibold">Proje</h3>
              <p className="text-xl font-bold">6</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-300 text-white w-full sm:w-60 md:w-64 shadow-lg">
              <h3 className="text-lg font-semibold">Tez Danışmanlığı</h3>
              <p className="text-xl font-bold">2</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-gray-500 to-gray-300 text-white w-full sm:w-60 md:w-64 shadow-lg">
              <h3 className="text-lg font-semibold">Açık Erişim</h3>
              <p className="text-xl font-bold">39</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-12">
  <h2 className="text-3xl font-bold mb-4 text-gray-600">BM Sürdürülebilir Kalkınma Amaçları</h2>
  <div className="flex flex-wrap gap-4 justify-center">
    <div className="p-4 rounded-lg bg-gray-300 text-white w-50 h-50 shadow-lg">
      <img src={bm3} alt="bm3" className="w-50 h-50 mx-auto" />
    </div>
    <div className="p-4 rounded-lg bg-gray-300 text-white w-50 h-50 shadow-lg">
      <img src={bm9} alt="bm3" className="w-50 h-50 mx-auto" />
    </div>
    <div className="p-4 rounded-lg bg-gray-300 text-white w-50 h-50 shadow-lg">
      <img src={bm10} alt="bm3" className="w-50 h-50 mx-auto" />
    </div>
    <div className="p-4 rounded-lg bg-gray-300 text-white w-50 h-50 shadow-lg">
      <img src={bm13} alt="bm3" className="w-50 h-50 mx-auto" />
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default AboutMe;
