import './App.css';
import React from 'react';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Programs from './Pages/Programs';

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/programs' element={<Programs />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
