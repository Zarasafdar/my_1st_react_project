import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4 bg-white shadow-md">
        <div className="lg:pl-20 flex justify-center sm:justify-start items-center space-x-2">
          <img
            src="/assets/logo.png"
            alt="Packshifts Logo"
            className="h-16 sm:h-16"
          />
        </div>

        <div className="hidden md:flex pr-20">
          <a
            href="tel:8287244244"
            className="flex items-center px-4 py-2 rounded-l-3xl rounded-tr-2xl font-bold text-base md:text-lg shadow transition animate-blink"
          >
            <FaPhoneVolume className="mr-3" />
            8287 244 244
          </a>

          <style jsx>{`
            @keyframes blink {
              0%,
              100% {
                background-color: #1e40af; /* Tailwind blue-800 */
                color: white;
              }
              50% {
                background-color: #facc15; /* Tailwind yellow-400 */
                color: black;
              }
            }

            .animate-blink {
              animation: blink 1s infinite;
            }
          `}</style>
        </div>
      </header>
    </>
  );
};

export default Header;
