import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import { Portfolio } from "./components/Portfolio/Portfolio";
import Contac from "./components/Contac/Contac";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills /> 
        <WorkExperience/>
        <Portfolio/>
        <Contac/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
