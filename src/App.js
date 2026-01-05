import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/About/about"
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
