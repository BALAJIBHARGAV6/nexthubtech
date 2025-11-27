import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import LanguageTraining from './pages/LanguageTraining/LanguageTraining';
import Trainings from './pages/Trainings/Trainings';
import Internships from './pages/Internships/Internships';
import Projects from './pages/Projects/Projects';
import Workshops from './pages/Workshops/Workshops';
import Bootcamps from './pages/Bootcamps/Bootcamps';
import Hackathons from './pages/Hackathons/Hackathons';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/language-training" element={<LanguageTraining />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/bootcamps" element={<Bootcamps />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

