import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  { name: "Mahindra", logo: "/assets/mahindra.jpg" },
  { name: "L&T", logo: "/assets/lnt.jpg" },
  { name: "Sun Pharma", logo: "/assets/sunpharma.jpg" },
  { name: "Mahindra", logo: "/assets/mahindra.jpg" },
  { name: "L&T", logo: "/assets/lnt.jpg" },
  { name: "Sun Pharma", logo: "/assets/sunpharma.jpg" },
];

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <span>
            <img
              src="/assets/blue-icon.png"
              alt="icon"
            //   className="w-4 h-4 md:w-8 md:h-8"
            />
          </span>
          <span className="text-blue-600">Our</span>
          <span className="text-yellow-400">Clients</span>
        </h2>

        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-lg shadow-md flex items-center justify-center w-38 h-20">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
