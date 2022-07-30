import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from './pages/Contact';
import Hobbies from "./pages/Hobbies";
import Projects from "./pages/Projects";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './css/custom.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="hobbies" element={<Hobbies />} />
      <Route path="projects" element={<Projects/>} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
