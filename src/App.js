import "./App.css";
import NavBar from "./Components/UI/NavBar";
import Hero from "./Components/UI/Hero";
import About from "./Components/UI/About";
import Skills from "./Components/UI/Skills";
import Projects from "./Components/UI/Projects";
import Timeline from "./Components/UI/Timeline";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Timeline /> */}
    </div>
  );
}

export default App;
