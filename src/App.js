import "./App.css";
import NavBar from "./Components/UI/NavBar";
import Hero from "./Components/UI/Hero";
import About from "./Components/UI/About";
import Skills from "./Components/UI/Skills";
import Projects from "./Components/UI/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
