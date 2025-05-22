import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100, // offset (in px) from the original trigger point
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      delay: 100,
    });
    AOS.refresh;
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <TopProducts />
      <Banner />
    </div>
  );
};

export default App;
