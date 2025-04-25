import React from "react";

const QuoteSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-black/50 min-h-screen flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: "url('/assets/office-shifting.jpg')" }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-black/40 lg:bg-transparent backdrop-blur-sm rounded-xl lg:rounded-none p-6">
        {/* LEFT SIDE */}
        <div className="text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            PACKSHIFTS - INDIA'S BEST PACKERS AND MOVERS COMPANY
          </h1>
          <h2 className="text-xl font-semibold">
            CALL US NOW FOR A HASSLE-FREE SHIFTING.
          </h2>
          <p className="text-base">
            We Assure Safety And Time Delivery Of Items.
          </p>

          {/* Badges */}
          <div className="flex gap-4 mt-6">
            <img src="/assets/iso.png" alt="ISO" className="h-24 md:h-32" />
            <img
              src="/assets/satisfaction.png"
              alt="Guaranteed"
              className="h-16 md:h-24"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-center">
            GET A FREE MOVING QUOTE
          </h3>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Mobile Number*"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email ID*"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Location City From*"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Location City To*"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Captcha Row */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Captcha"
                className="flex-1 border rounded px-4 py-2"
              />
              <div className="bg-yellow-400 text-center px-4 py-2 rounded font-bold text-white select-none">
                668962
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-gray-600">
              By clicking the button below, you agree to receive communications from Packshifts about relocation{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
