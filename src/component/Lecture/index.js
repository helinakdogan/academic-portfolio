import React from "react";
import lectures from './lectureData';

const Lecture = () => {
  return (
    <div className="container mx-auto flex flex-col flex-grow justify-center pb-8 px-4">
      {lectures.map((section, index) => (
        <div
          key={index}
          className="relative mb-12 animate-fadeIn"
          style={{
            animation: `fadeIn ${0.6 + index * 0.2}s ease-out`,
          }}
        >
          <div className="w-full md:w-3/4 lg:w-1/2 p-6 bg-transparent dark:bg-gray-700 rounded-lg mb-8 relative z-10 mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              <span className="text-gray-500">{section.category}</span>
            </h1>
            <div className="flex flex-col relative z-10">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="mb-8 flex flex-col animate-fadeIn"
                  style={{
                    animation: `fadeIn ${0.6 + itemIndex * 0.2}s ease-out`,
                  }}
                >
                  <div className="flex flex-col items-start w-full">
                    <div
                      className="p-6 rounded-lg shadow-md w-full transition-transform transform hover:scale-105 hover:shadow-xl"
                      style={{
                        background: item.gradient,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <h2 className="text-lg md:text-xl font-semibold text-white mb-1">
                        {item.level}
                      </h2>
                      <p className="text-white mb-1">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lecture;
