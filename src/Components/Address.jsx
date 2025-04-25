import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";

const Address = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <span>
            <img
              src="/assets/blue-icon.png"
              alt="icon"
              //   className="w-4 h-4 md:w-8 md:h-8"
            />
          </span>
          <span className="text-blue-600">OUR</span>
          <span className="text-yellow-400">ADDRESS</span>
        </h2>

        {/* Card */}
        <div className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white p-6 sm:p-8 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold mb-4">Vadodara</h1>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Vadodara Office Address: FF-06, Kanha City, Opposite Kailash Party Plot, Ajwa Road, Vadodara - 380019, Gujarat.
          </p>

          <div className="flex justify-center">
  <a
    href="tel:8287244244"
    className="text-white flex items-center px-6 py-2 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow transition animate-blink"
  >
    <FaPhoneVolume className="mr-2" />
    8287 244 244
  </a>

  <style jsx>{`
    @keyframes blink {
      0%, 100% {
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
        </div>
      </div>
    </section>
  );
};

export default Address;
