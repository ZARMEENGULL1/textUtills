import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#515355';
      document.title = "TextUtills - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtills - LightMode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="ZarmeenGull" mode={mode} toggleMode={toggleMode} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/TextForm" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
