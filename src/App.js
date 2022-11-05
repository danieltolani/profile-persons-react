import Main from "./components/Main";
import "../src/styles/App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path="contact" element={ < Contact />} />
      </Routes>
      <Footer footerText="HNG Internship 9 Frontend Task" />
    </Router>
  );
}

export default App;
