import Navbar from "./components/navbar/Navbar.jsx";
import HeroSection from "./components/Hero/HeroSection.jsx";
import CurrentProject from "./components/currentProject/CurrentProject.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/Services/Services.jsx";
import Projects from "./components/projects/Projects.jsx";
import Process from "./components/process/Process.jsx";
import Experience from "./components/experience/Experience.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Faq from "./components/faq/Faq.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./index.css";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0b0f] text-white">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Home Page Sections Flow */}
      <main>
        {/* 1. Hero Landing Page */}
        <HeroSection />

        {/* 2. Currently Building sprint tracker */}
        <CurrentProject />

        {/* 3. About Biography and metrics */}
        <About />

        {/* 4. Categorized Skills display */}
        <Skills />

        {/* 5. Freelance Services portfolio grid */}
        <Services />

        {/* 6. Featured client projects show case */}
        <Projects />

        {/* 7. Step-by-step collaboration process */}
        <Process />

        {/* 8. Career experience vertical timeline */}
        <Experience />

        {/* 9. Testimonials rating reviews */}
        {/* <Testimonials /> */}

        {/* 10. Frequently Asked Questions accordion */}
        <Faq />

        {/* 11. Lead Generation Contact form */}
        <Contact />
      </main>

      {/* Footer stamps */}
      <Footer />
    </div>
  );
}

export default App;