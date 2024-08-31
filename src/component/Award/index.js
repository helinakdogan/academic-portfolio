import React from 'react';

const Award = () => {
  return (
<div className="container mx-auto flex flex-col flex-grow justify-center pb-8 px-4">
  <div className="relative mb-12">
    <div className="w-full md:w-11/12 lg:w-5/6 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
      <h1 className="text-3xl md:text-3xl font-bold text-white dark:text-gray-100 mb-6">
        <span className="text-gray-500">Ödüller</span>
      </h1>
      <div className="flex flex-col relative z-10">
        <div className="mb-8 flex flex-col">
          <div className="flex flex-col items-start w-full">
            <div className="award-box p-6 rounded-lg shadow-md w-full" style={{ background: "linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)" }}>
              <h2 className="text-lg md:text-xl font-semibold text-white mb-1">Akademik Üstün Başarı Ödülü</h2>
              <p className="text-white mb-1">Anadolu Üniversitesi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Award;