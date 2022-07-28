import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from './pages/Contact';

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
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
