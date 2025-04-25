import CountUp from "react-countup";

export default function AchievementSection() {
  const achievements = [
    { icon: "/assets/experience.png", number: 8, label: "+ Years Of Experience" },
    { icon: "/assets/happy-customer.png", number: 8554, label: "Happy Customers" },
    { icon: "/assets/house-relocation.png", number: 821, label: "Homes Relocated" },
    { icon: "/assets/car-relocation.png", number: 535, label: "Four Wheelers Relocated" },
    { icon: "/assets/two-wheeler-relocation.png", number: 1982, label: "Two Wheelers Relocated" },
    { icon: "/assets/office-relocation.png", number: 199, label: "Offices Relocated" },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-700 py-12 text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 mb-2">
        <span>
            <img
              src="/assets/white-icon.png"
              alt="icon"
            //   className="w-4 h-4 md:w-8 md:h-8"
            />
          </span> OUR ACHIEVEMENT
        </h2>
        <p className="mb-10 text-xs sm:text-sm md:text-base font-medium">
          Our Achievements , Which Makes Us The Most Preferable Moving Brand
        </p>

        {/* Responsive Achievement Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-1 bg-white/10 rounded-lg py-4 px-2 hover:bg-white/20 transition duration-300"
            >
              <img src={item.icon} alt="icon" className="w-8 h-8 mb-1" />
              <h3 className="text-lg sm:text-xl font-bold">
                <CountUp start={0} end={item.number} duration={2.5} separator="," />
              </h3>
              <p className="text-xs sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
