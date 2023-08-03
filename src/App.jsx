//rafce short key for earro
import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/Cards";
import Discount from "./Components/Discount/Discount";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Review from "./Components/Review/Review";
import Tours from "./Components/Tours/Tours";
import Staff from "./Components/Staff/Staff";

const App = () => {
  return (
    <div>
      
       <Navbar />
       <Home />
       <Cards /> 
       <Tours />
       <Discount />  
       <Review />
       <Staff />
       <Footer />
      
    </div>
  );
};

export default App;
