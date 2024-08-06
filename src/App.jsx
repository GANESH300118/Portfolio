import { useEffect } from 'react';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";

const App = () => {
  useEffect(() => {
    // Scroll to the top of the page on every reload
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    
    // Set scroll restoration to manual to force scroll to top
    window.history.scrollRestoration = 'manual';
    
    // Add event listener to handle page reload
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="relative overflow-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-cyan-900">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="absolute top-0 left-0 -z-20 h-full w-full bg-neutral-950"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Experience/>
        <Education/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
