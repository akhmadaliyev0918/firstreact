import React from "react";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Effect from "./components/useeffects/useeffect";
import Main from "./components/map/main";
import Calc from "./components/calc/calc";

function App() {
  const body = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }
  return (
    <div style={body} className="">
      <Navbar />
      <Calc />
      <Main />
      <Effect />
      <Banner />  
      <Footer />
    </div>
  );
}

export default App;
