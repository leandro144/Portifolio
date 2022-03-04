import Home from './portifolio/src/Home';
import About from './portifolio/src/About';
import './App.css';
import Service from './portifolio/src/Service';
import Project from './portifolio/src/Project';
import Blog from './portifolio/src/Blog';
import Contact from './portifolio/src/Contact';
import Footer from './portifolio/src/Footer';

function App() {
  return (
    <div className="App">
        <Home />
        <About />
        <Service />
        <Project />
        <Blog />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
