import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Store } from './pages/Store';
import { Services } from './pages/Services';
import { Vouches } from './pages/Vouches';
import { Courses } from './pages/Course';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/store" element={<Store />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vouches" element={<Vouches />} />
          <Route path="/course" element={<Courses />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;