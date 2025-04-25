import React from "react";
import ReactPlayer from "react-player";

const videos = [
  { title: "Bike Packing Video", url: "https://youtu.be/pyzJTtcb_UA" },
  { title: "Scooty Packing Video", url: "https://www.youtube.com/watch?v=J4RbIkAQOEo" },
  { title: "Fridge Packing Video", url: "https://www.youtube.com/watch?v=QwEyVG_4i7M" },
  { title: "Washing Machine Packing Video", url: "https://www.youtube.com/watch?v=uwJBLcu70z0" },
  { title: "Sofa Packing Video", url: "https://www.youtube.com/watch?v=vBX4i3pUaCI" },
  { title: "Crockery Packing Video", url: "https://www.youtube.com/watch?v=v_M2ikG408k" },
  { title: "Cloths Packing Video", url: "https://www.youtube.com/watch?v=asE9hoAX9x8" },
  { title: "Showpiece Packing Video", url: "https://www.youtube.com/watch?v=xmo3jBgD_dU" },
  { title: "Matress Packing Video", url: "https://www.youtube.com/watch?v=y-T0Q1sya3o" },
];

const Hero = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        <span className="text-blue-600">PACKING</span>{" "}
        <span className="text-yellow-400">VIDEOS</span>
      </h2>

      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-xl overflow-hidden shadow-lg w-full aspect-video">
              <ReactPlayer
                url={video.url}
                width="100%"
                height="100%"
                controls
                light={true}
              />
            </div>
            <p className="text-blue-700 font-bold text-center mt-3">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
