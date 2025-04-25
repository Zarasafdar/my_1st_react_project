import React from "react";

const TruckFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-transparent z-50">
      <div className="relative h-14 overflow-hidden">
        {/* Moving Truck Container */}
        <div className="absolute animate-truck" style={{ width: "120px", height: "100%" }}>
          {/* Truck Body */}
          <img
            src="/assets/truck-1.png"
            alt="Truck Body"
            className="w-full h-auto relative z-10"
          />

          {/* Wheels - Slightly tucked under the truck */}
          <img
            src="/assets/wheel-2.png"
            alt="Wheel Front"
            className="w-4 h-4 absolute animate-spin-wheel mt-[-50]"
            style={{ bottom: "-2px", left: "15px", zIndex: 0 }}
          />
          <img
            src="/assets/wheel-2.png"
            alt="Wheel Back"
            className="w-4 h-4 absolute animate-spin-wheel"
            style={{ bottom: "-2px", right: "15px", zIndex: 0 }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes moveTruck {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        .animate-truck {
          animation: moveTruck 6s linear infinite;
        }

        @keyframes spinWheel {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-spin-wheel {
          animation: spinWheel 0.5s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default TruckFooter;
