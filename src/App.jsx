import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Education from "./sections/Education.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Splash from "./components/Splash.jsx";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="min-h-screen">
      {!introDone && <Splash onDone={() => setIntroDone(true)} />}

      <Navbar />
      <main
        className={`${
          introDone ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
