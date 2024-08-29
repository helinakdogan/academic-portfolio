import React from "react";

const Education = () => {
  return (
    <div className="container mx-auto flex flex-col flex-grow justify-center pb-8 px-4">
      <div className="relative">
        {/* Education Section */}
        <div className="w-full md:w-9/12 lg:w-2/3 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            <span className="text-gray-500">Eğitim Bilgileri</span>
          </h1>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:flex absolute inset-0 justify-start">
              <div className="w-px bg-gray-300 dark:bg-gray-600 h-full absolute left-0"></div>
            </div>
            <div className="flex flex-col relative z-10">
              {/* Doktora Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-blue-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(86deg, rgba(138,165,255,1) 42%, rgba(167,210,255,1) 94%)",
                      boxShadow: "none", // Gölgeleri kaldırmak için
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      2007 - 2012
                    </h2>
                    <p className="text-white">
                      Doktora <br />
                      Anadolu Üniversitesi, EĞİTİM BİLİMLERİ ENSTİTÜSÜ, EĞİTİM
                      BİLİMLERİ ANABİLİM DALI, Türkiye
                    </p>
                  </div>
                </div>
              </div>
              {/* Yüksek Lisans Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-blue-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(86deg, rgba(138,165,255,1) 42%, rgba(167,210,255,1) 94%)",
                      boxShadow: "none", // Gölgeleri kaldırmak için
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      2005 - 2007
                    </h2>
                    <p className="text-white">
                      Yüksek Lisans <br />
                      Anadolu Üniversitesi, EĞİTİM BİLİMLERİ ENSTİTÜSÜ,
                      Rehberlik Ve Psikolojik Danışmanlık (Yl) (Tezli), Türkiye
                    </p>
                  </div>
                </div>
              </div>
              {/* Lisans Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-blue-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(86deg, rgba(138,165,255,1) 42%, rgba(167,210,255,1) 94%)",
                      boxShadow: "none", // Gölgeleri kaldırmak için
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      1991 - 1995
                    </h2>
                    <p className="text-white">
                      Lisans <br />
                      Hacettepe Üniversitesi, Edebiyat Fakültesi, Psikoloji
                      Bölümü, Türkiye
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tez Section */}
        <div className="w-full md:w-9/12 lg:w-2/3 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            <span className="text-gray-500">Tezler</span>
          </h1>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:flex absolute inset-0 justify-start">
              <div className="w-px bg-gray-300 dark:bg-gray-600 h-full absolute left-0"></div>
            </div>
            <div className="flex flex-col relative z-10">
              {/* Doktora Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-green-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(-125deg, #B7F8DB 0%, #50A7C2 100%)",
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      2012
                    </h2>
                    <p className="text-white">
                      Doktora <br />
                      Adleryen yaklaşıma dayalı grupla psikolojik danışmanın
                      üniversite öğrencilerinin yetersizlik duygusu ve
                      psikolojik belirti düzeylerine etkisi <br />
                      Anadolu Üniversitesi, EĞİTİM BİLİMLERİ ENSTİTÜSÜ,
                      Rehberlik Ve Psikolojik Danışmanlık (Dr)
                    </p>
                  </div>
                </div>
              </div>
              {/* Yüksek Lisans Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-green-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(-125deg, #B7F8DB 0%, #50A7C2 100%)",
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      2007
                    </h2>
                    <p className="text-white">
                      Yüksek Lisans <br />
                      Farklı cinsiyet rollerine sahip üniversite öğrencilerinin
                      öfke yaşama biçimleri ve utangaçlık düzeylerinin
                      incelenmesi <br />
                      Anadolu Üniversitesi, EĞİTİM BİLİMLERİ ENSTİTÜSÜ,
                      Rehberlik Ve Psikolojik Danışmanlık (Yl) (Tezli)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="w-full md:w-9/12 lg:w-2/3 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            <span className="text-gray-500">Yabancı Diller</span>
          </h1>
          <div className="relative">
            <div className="flex flex-col relative z-10">
              {/* Doktora Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background: "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)"
                    }}
                  >
                    <p className="text-white">
                      <h2 className="text-xl font-semibold text-white">
                        B2 Orta Üstü
                      </h2>
                      <p className="text-white">İngilizce</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Areas Section */}
        <div className="w-full md:w-9/12 lg:w-2/3 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            <span className="text-gray-500">Araştırma Alanları</span>
          </h1>
          <div className="relative">
            <div className="flex flex-col relative z-10">
              {/* Doktora Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%)",
                    }}
                  >
                    <p className="text-white">
                      Sosyal ve Beşeri Bilimler <br />
                      Psikoloji <br />
                      Eğitim <br />
                      Eğitim Bilimleri <br />
                      Psikolojik Danışma ve Rehberlik
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Titles Section */}
        <div className="w-full md:w-9/12 lg:w-2/3 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            <span className="text-gray-500">Akademik Unvanlar / Görevler</span>
          </h1>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:flex absolute inset-0 justify-start">
              <div className="w-px bg-gray-300 dark:bg-gray-600 h-full absolute left-0"></div>
            </div>
            <div className="flex flex-col relative z-10">
              {/* Dç doktor */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-orange-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      2018 - Devam Ediyor
                    </h2>
                    <p className="text-white">
                      Doç. Dr. <br />
                      Anadolu Üniversitesi, EĞİTİM FAKÜLTESİ, EĞİTİM BİLİMLERİ
                      BÖLÜMÜ
                    </p>
                  </div>
                </div>
              </div>
              {/* Yüksek Lisans Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-orange-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      2013 - 2018{" "}
                    </h2>
                    <p className="text-white">
                      Yrd. Doç. Dr. <br />
                      Anadolu Üniversitesi, EĞİTİM FAKÜLTESİ, EĞİTİM BİLİMLERİ
                      BÖLÜMÜ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Administrative Roles Section */}
        <div className="w-full md:w-9/12 lg:w-2/3 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            <span className="text-gray-500">Yönetimsel Görevler</span>
          </h1>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:flex absolute inset-0 justify-start">
              <div className="w-px bg-gray-300 dark:bg-gray-600 h-full absolute left-0"></div>
            </div>
            <div className="flex flex-col relative z-10">
              {/* Doktora Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-red-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)",
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      2014 - 2019
                    </h2>
                    <p className="text-white">
                      Enstitü Müdür Yardımcısı <br />
                      Anadolu Üniversitesi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Academic Experience Section */}
        <div className="w-full md:w-9/12 lg:w-2/3 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            <span className="text-gray-500">Akademi Dışı Deneyim</span>
          </h1>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:flex absolute inset-0 justify-start">
              <div className="w-px bg-gray-300 dark:bg-gray-600 h-full absolute left-0"></div>
            </div>
            <div className="flex flex-col relative z-10">
              {/* Doktora Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-yellow-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(to top, #e6b980 0%, #eacda3 100%)",
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      2011 - 2012
                    </h2>
                    <p className="text-white">
                      Psikolog <br />
                      Üniversite, Anadolu Üniversitesi, Psychological Counseling
                      and Guidance Center
                    </p>
                  </div>
                </div>
              </div>
              {/* Doktora Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-yellow-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(to top, #e6b980 0%, #eacda3 100%)",
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      2003 - 2011
                    </h2>
                    <p className="text-white">
                      Psychological Counselor <br />
                      Milli Eğitim Müdürlüğü, Eskişehir Guidance and Counseling
                      Center
                    </p>
                  </div>
                </div>
              </div>
              {/* Doktora Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-yellow-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(to top, #e6b980 0%, #eacda3 100%)",
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      2003 - 2010
                    </h2>
                    <p className="text-white">
                      Rehber Öğretmen <br />
                      Milli Eğitim Bakanlığı
                    </p>
                  </div>
                </div>
              </div>
              {/* Doktora Card */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-start relative">
                <div className="hidden md:block w-4 h-4 bg-yellow-400 rounded-full absolute left-0 transform -translate-x-1/2 z-10"></div>
                <div className="md:pl-12 flex flex-col items-start md:items-start md:w-full">
                  <div
                    className="flex-1 text-left p-6 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(to top, #e6b980 0%, #eacda3 100%)",
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      1996 - 1997
                    </h2>
                    <p className="text-white">
                      Psikolog Asteğmen <br />
                      GATA Haydarpaşa Askeri Hastanesi
                    </p>
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

export default Education;
