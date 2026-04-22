import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import Container from 'react-bootstrap/esm/Container.js';
import Banner from './components/Banner.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;