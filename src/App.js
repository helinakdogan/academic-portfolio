import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import AboutMe from "./component/AboutMe";
import Header from "./component/Header";
import Contact from "./component/Contact";
import { capitalizeFirstLetter } from "./utils/helpers";
import Education from "./component/Education";
import Publication from "./component/Publication";
import Lecture from "./component/Lecture";

function App() {
  const [currentSelect, setCurrentSelect] = useState("Hakkında");

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentSelect);
  }, [currentSelect]);

  return (
    <div className="App flex flex-col min-h-screen justify-between">
      <Navbar
        currentSelect={currentSelect}
        setCurrentSelect={setCurrentSelect}
      />
      <Header currentSelect={currentSelect} />
      {currentSelect === "Hakkında" && <AboutMe />}
      {currentSelect === "Eğitim" && <Education />}
      {currentSelect === "Yayınlar" && <Publication />}
      {currentSelect === "Projeler" && <Project />}
      {currentSelect === "Verdiği Dersler" && <Lecture />}
      {currentSelect === "İletişim" && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
