import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Email from './Components/Fixed/Email';
import Social from './Components/Fixed/Social';
import Header from './Components/Header';
import MainName from './Components/MainName';
import Projects from './Components/Projects';

function App() {
  return (
    <main className="App">
      <Header />

      <div className='content'>
        <MainName />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <Social />
      <Email />
    </main>
  );
}

export default App;
