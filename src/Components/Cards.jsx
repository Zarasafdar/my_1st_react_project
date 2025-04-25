import React from "react";

const Cards = () => {
  return (
    <>
      <section className="py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <span>
            <img
              src="/assets/blue-icon.png"
              alt="icon"
              //   className="w-4 h-4 md:w-8 md:h-8"
            />
          </span>
          <span className="text-blue-600">WHY</span>
          <span className="text-yellow-400">Packshifts</span>
        </h2>
        <p className="text-xl item-center justify-center text-center ">
          {" "}
          why Choose Packshifts Packers & Movers{" "}
        </p>

        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {/* Card 1 */}
            <div className="bg-[#F4F4F4] rounded-xl shadow-md p-6 text-center">
              <img
                src="/assets/experienced-staff.png"
                alt="icon"
                className="w-35 h-35 mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm">
              Experienced Staff
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F4F4F4] rounded-xl shadow-md p-6 text-center">
              <img
                src="/assets/cost-efficient.png"
                alt="icon"
                className="w-35 h-35 mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm">
              Cost-Efficient
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F4F4F4] rounded-xl shadow-md p-6 text-center">
              <img
                src="/assets/hidden-charges.png"
                alt="icon"
                className="w-35 h-35 mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm">
              No Hidden Charges
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F4F4F4] rounded-xl shadow-md p-6 text-center">
              <img
                src="/assets/safe-service.png"
                alt="icon"
                className="w-35 h-35 mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm">
              Safe and Time-Saving Service
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#F4F4F4] rounded-xl shadow-md p-6 text-center">
              <img
                src="/assets/free-quote.png"
                alt="icon"
                className="w-35 h-35 mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm">
              Free Quotation
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#F4F4F4] rounded-xl shadow-md p-6 text-center">
              <img
                src="/assets/support.png"
                alt="icon"
                className="w-35 h-35 mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm">
              24×7 Support Service
              </p>
            </div>

             {/* Card 7 */}
             <div className="bg-[#F4F4F4] rounded-xl shadow-md p-6 text-center">
              <img
                src="/assets/customer-satisfaction.png"
                alt="icon"
                className="w-35 h-35 mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm">
              100% Customer Satisfaction
              </p>
            </div>

             {/* Card 7 */}
             <div className="bg-[#F4F4F4] rounded-xl shadow-md p-6 text-center">
              <img
                src="/assets/quality.png"
                alt="icon"
                className="w-35 h-35 mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm">
              Quality Packing Material
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
