import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
