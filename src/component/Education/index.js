import React from "react";

const Education = () => {
  return (
    <div className="container mx-auto flex flex-col flex-grow justify-center pb-8">
      <div className="flex flex-col items-center relative">
        {/* Kronolojik Çizgi
        <div className="absolute h-full border-l-4 border-blue-500 dark:border-blue-300 left-1/2 transform -translate-x-1/2"></div> */}

        {/* Education Section */}
        <div className="w-full md:w-10/12 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-8 relative z-10">
          <h1 className="text-4xl font-bold text-center py-4 text-gray-800 dark:text-gray-100">
            Eğitim Bilgileri
          </h1>
          <div className="flex flex-col">
            {/* Doktora */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                2007 - 2012
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Doktora <br />
                Anadolu Üniversitesi, EĞİTİM BİLİMLERİ ENSTİTÜSÜ, EĞİTİM BİLİMLERİ ANABİLİM DALI, Türkiye
              </p>
            </div>
            {/* Yüksek Lisans */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                2005 - 2007
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Yüksek Lisans <br />
                Anadolu Üniversitesi, EĞİTİM BİLİMLERİ ENSTİTÜSÜ, Rehberlik Ve Psikolojik Danışmanlık (Yl) (Tezli), Türkiye
              </p>
            </div>
            {/* Lisans */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                1991 - 1995
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Lisans <br />
                Hacettepe Üniversitesi, Edebiyat Fakültesi, Psikoloji Bölümü, Türkiye
              </p>
            </div>
          </div>
        </div>

        {/* Theses Section */}
        <div className="w-full md:w-10/12 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-8 relative z-10">
          <h1 className="text-4xl font-bold text-center py-4 text-gray-800 dark:text-gray-100">
            Yaptığı Tezler
          </h1>
          <div className="flex flex-col">
            {/* Doktora Tezi */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                2012
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Doktora <br />
                Adleryen yaklaşıma dayalı grupla psikolojik danışmanın üniversite öğrencilerinin yetersizlik duygusu ve psikolojik belirti düzeylerine etkisi <br />
                Anadolu Üniversitesi, EĞİTİM BİLİMLERİ ENSTİTÜSÜ, Rehberlik Ve Psikolojik Danışmanlık (Dr)
              </p>
            </div>
            {/* Yüksek Lisans Tezi */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                2007
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Yüksek Lisans <br />
                Farklı cinsiyet rollerine sahip üniversite öğrencilerinin öfke yaşama biçimleri ve utangaçlık düzeylerinin incelenmesi <br />
                Anadolu Üniversitesi, EĞİTİM BİLİMLERİ ENSTİTÜSÜ, Rehberlik Ve Psikolojik Danışmanlık (Yl) (Tezli)
              </p>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="w-full md:w-10/12 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-8 relative z-10">
          <h1 className="text-4xl font-bold text-center py-4 text-gray-800 dark:text-gray-100">
            Yabancı Diller
          </h1>
          <div className="flex flex-col">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                B2 Orta Üstü
              </h2>
              <p className="text-gray-600 dark:text-gray-300">İngilizce</p>
            </div>
          </div>
        </div>

        {/* Research Areas Section */}
        <div className="w-full md:w-10/12 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-8 relative z-10">
          <h1 className="text-4xl font-bold text-center py-4 text-gray-800 dark:text-gray-100">
            Araştırma Alanları
          </h1>
          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300">
                Sosyal ve Beşeri Bilimler <br />
                Psikoloji <br />
                Eğitim <br />
                Eğitim Bilimleri <br />
                Psikolojik Danışma ve Rehberlik
              </p>
            </div>
          </div>
        </div>

        {/* Academic Titles Section */}
        <div className="w-full md:w-10/12 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-8 relative z-10">
          <h1 className="text-4xl font-bold text-center py-4 text-gray-800 dark:text-gray-100">
            Akademik Unvanlar / Görevler
          </h1>
          <div className="flex flex-col">
            {/* Doç. Dr. */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                2018 - Devam Ediyor
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Doç. Dr. <br />
                Anadolu Üniversitesi, EĞİTİM FAKÜLTESİ, EĞİTİM BİLİMLERİ BÖLÜMÜ
              </p>
            </div>
            {/* Yrd. Doç. Dr. */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                2013 - 2018
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Yrd. Doç. Dr. <br />
                Anadolu Üniversitesi, EĞİTİM FAKÜLTESİ, EĞİTİM BİLİMLERİ BÖLÜMÜ
              </p>
            </div>
          </div>
        </div>

        {/* Administrative Roles Section */}
        <div className="w-full md:w-10/12 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-8 relative z-10">
          <h1 className="text-4xl font-bold text-center py-4 text-gray-800 dark:text-gray-100">
            Yönetimsel Görevler
          </h1>
          <div className="flex flex-col">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                2014 - 2019
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Enstitü Müdür Yardımcısı <br />
                Anadolu Üniversitesi
              </p>
            </div>
          </div>
        </div>

        {/* Non-Academic Experience Section */}
        <div className="w-full md:w-10/12 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-8 relative z-10">
          <h1 className="text-4xl font-bold text-center py-4 text-gray-800 dark:text-gray-100">
            Akademi Dışı Deneyim
          </h1>
          <div className="flex flex-col">
            {/* Psikolog */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                2011 - 2012
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Psikolog <br />
                Üniversite, Anadolu Üniversitesi, Psychological Counseling and Guidance Center
              </p>
            </div>
            {/* Psychological Counselor */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                2003 - 2011
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Psychological Counselor <br />
                Milli Eğitim Müdürlüğü, Eskişehir Guidance and Counseling Center
              </p>
            </div>
            {/* Rehber Öğretmen */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                2003 - 2010
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Rehber Öğretmen <br />
                Milli Eğitim Bakanlığı
              </p>
            </div>
            {/* Psikolog Asteğmen */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                1996 - 1997
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Psikolog Asteğmen <br />
                GATA Haydarpaşa Askeri Hastanesi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
