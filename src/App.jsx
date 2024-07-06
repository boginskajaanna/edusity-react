import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Programs />
      <About setPlayState={setPlayState} />
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
