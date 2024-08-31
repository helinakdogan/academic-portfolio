import React, { useState } from "react";

const Navbar = ({ currentSelect, setCurrentSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-600 border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <i className="text-white pr-2 text-2xl fas fa-briefcase"></i>
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
            Ramazan Akdoğan
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={handleMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "w-full" : "hidden"
          } md:inline md:w-auto" id="mobile-menu`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium justify-center">
            <li>
              <button
                onClick={() => { setCurrentSelect("Hakkında"); setIsOpen(false); }}
                className={`${
                  currentSelect === "Hakkında"
                    ? "text-gray-700 bg-gray-300 dark:bg-gray-600 dark:text-white rounded"
                    : "dark:text-gray-400 text-gray-100"
                } w-full py-2 pr-4 pl-3 hover:decoration-1 hover:text-white hover:bg-gray-400 hover:rounded md:border-0`}
                aria-current="page"
              >
                Hakkında
              </button>
            </li>
            <li>
              <button
                onClick={() => { setCurrentSelect("Eğitim"); setIsOpen(false); }}
                className={`${
                  currentSelect === "Eğitim"
                    ? "text-gray-700 bg-gray-300 dark:bg-gray-600 dark:text-white rounded"
                    : "dark:text-gray-400 text-gray-100"
                } w-full py-2 pr-4 pl-3 hover:decoration-1 hover:text-white hover:bg-gray-400 hover:rounded md:border-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-600 dark:border-gray-700`}
                aria-current="page"
              >
                Eğitim
              </button>
            </li>
            <li>
              <button
                onClick={() => { setCurrentSelect("Yayınlar"); setIsOpen(false); }}
                className={`${
                  currentSelect === "Yayınlar"
                    ? "text-gray-700 bg-gray-300 dark:bg-gray-600 dark:text-white rounded"
                    : "dark:text-gray-400 text-gray-100"
                } w-full py-2 pr-4 pl-3 text-gray-700 hover:text-white hover:bg-gray-400 md:border-0 hover:rounded md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-600 dark:border-gray-700`}
              >
                Yayınlar
              </button>
            </li>
            <li>
              <button
                onClick={() => { setCurrentSelect("Projeler"); setIsOpen(false); }}
                className={`${
                  currentSelect === "Projeler"
                    ? "text-gray-700 bg-gray-300 dark:bg-gray-600 dark:text-white rounded"
                    : "dark:text-gray-400 text-gray-100"
                } w-full py-2 pr-4 pl-3 text-gray-700 hover:text-white hover:bg-gray-400 md:border-0 hover:rounded md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-600 dark:border-gray-700`}
              >
                Projeler
              </button>
            </li>
            <li>
              <button
                onClick={() => { setCurrentSelect("Verdiği Dersler"); setIsOpen(false); }}
                className={`${
                  currentSelect === "Verdiği Dersler"
                    ? "text-gray-700 bg-gray-300 dark:bg-gray-600 dark:text-white rounded"
                    : "dark:text-gray-400 text-gray-100"
                } w-full py-2 pr-4 pl-3 text-gray-700 hover:text-white hover:bg-gray-400 md:border-0 hover:rounded md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-600 dark:border-gray-700`}
              >
                Verdiği Dersler
              </button>
            </li>
            <li>
              <button
                href="/"
                onClick={() => { setCurrentSelect("İletişim"); setIsOpen(false); }}
                className={`${
                  currentSelect === "İletişim"
                    ? "text-gray-700 bg-gray-300 dark:bg-gray-600 dark:text-white rounded"
                    : "dark:text-gray-400 text-gray-100"
                } w-full py-2 pr-4 pl-3 text-gray-700 hover:text-white hover:bg-gray-400 md:border-0 hover:rounded  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-600 dark:border-gray-700`}
              >
                İletişim
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
