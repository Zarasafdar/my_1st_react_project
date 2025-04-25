import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Services from "./Components/Services.jsx";
import Cards from "./Components/Cards.jsx";
import Achievement from "./Components/Achievement.jsx";
import Clients from "./Components/Clients.jsx";
import QuoteSection from "./Components/QuoteSection.jsx";
import Address from "./Components/Address.jsx";
import TruckFooter from "./Components/TruckFooter.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { createBrowserRouter } from "react-router-dom";


function App() {
  

  return (
    <> 
    <Header/>
    <TruckFooter/>
    <QuoteSection/>
    <Hero/>
    <Services/>
    <Cards/>
    <Achievement/>
    <Clients/>
    <Address/>
    </>
  );
}

export default App;
