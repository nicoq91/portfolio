import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} /> 
          <Route path="/contacto" element={<Contact />} />
          <Route path="/acerca-de-mi" element={<About />} /> 
          {/* Puedes agregar más rutas si es necesario */ }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
