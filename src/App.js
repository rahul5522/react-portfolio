import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.js"
import Main_Content from './Components/Main_Content';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
       <Navbar /> 
       <Main_Content/>
       <AboutMe/>
       <Skills/>
       <Projects/>
       <Footer/>
    </div>
  );
}

export default App;
