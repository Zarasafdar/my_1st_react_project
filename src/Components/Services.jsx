import React from "react";


const Services = () => {
  return (
    <>
      <section className="py-10 px-4 bg-[#F4F4F4]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <span>
            <img
              src="/assets/blue-icon.png"
              alt="icon"
            //   className="w-4 h-4 md:w-8 md:h-8"
            />
          </span>
          <span className="text-blue-600">Our Core</span>
          <span className="text-yellow-400">Services</span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
  {/* Card 1 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
    <img src="/assets/house-shifting.jpg" alt="House Shifting" className="w-full h-65 object-cover" />
    <div className="p-5 flex-1 flex flex-col justify-between">
      <h3 className="text-blue-700 font-bold text-lg text-center mb-2">HOUSE SHIFTING</h3>
      <p className="text-gray-700 text-sm text-justify">
      We are one of the most trusted packers and movers Across Gujarat. We are happy to answer all of your questions with no obligations. Packshifts Packers & Movers offers highly reliable and swift goods packing services which are carried out by trained professionals. Packshifts offers custom designed packaging material for packing and the safe transportation of goods.
      </p>
      <div className="mt-4 text-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-md transition">
          Get Quote
        </button>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
    <img src="/assets/office-shifting.jpg" alt="Office Shifting" className="w-full h-65 object-cover" />
    <div className="p-5 flex-1 flex flex-col justify-between">
      <h3 className="text-blue-700 font-bold text-lg text-center mb-2">OFFICE SHIFTING</h3>
      <p className="text-gray-700 text-sm text-justify">
      With the best technology available, the rise in number of offices is also noticed. Packshifts Packer and Mover has noticed the demand of office moving . We provide the best office relocation services in Gujarat . You can reach Packshifts Packer and Mover for best office Shifting Experience.
      </p>
      <div className="mt-4 text-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-md transition">
          Get Quote
        </button>
      </div>
    </div>
  </div>
  
   {/* Card 3 */}
   <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
    <img src="/assets/car-shifting.jpg" alt="Office Shifting" className="w-full h-65 object-cover" />
    <div className="p-5 flex-1 flex flex-col justify-between">
      <h3 className="text-blue-700 font-bold text-lg text-center mb-2">Car shifting</h3>
      <p className="text-gray-700 text-sm text-justify">
      Vehicle moving is one of the daunting tasks. You need the best vehicle moving company to relocate your vehicle without a single scratch. We are the most experienced packers and movers for vehicle moving.
      </p>
      <div className="mt-4 text-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-md transition">
          Get Quote
        </button>
      </div>
    </div>
  </div>

   {/* Card 4 */}
   <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
    <img src="/assets/bike-shifting.jpg" alt="Office Shifting" className="w-full h-65 object-cover" />
    <div className="p-5 flex-1 flex flex-col justify-between">
      <h3 className="text-blue-700 font-bold text-lg text-center mb-2">Bike shifting</h3>
      <p className="text-gray-700 text-sm text-justify">
      Now that you are shifting from one city to another, YOUR TWO-WHEELER also needs to be transported to the new city with utmost care. However, you can lighten the load by ensuring that you zero in on a professional Packers & Movers firm that will provide you with high-quality relocation services.
      </p>
      <div className="mt-4 text-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow-md transition">
          Get Quote
        </button>
      </div>
    </div>
  </div>
</div>

      </section>
    </>
  );
};

export default Services;
