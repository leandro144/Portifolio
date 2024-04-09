import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Service from './pages/Service';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

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
