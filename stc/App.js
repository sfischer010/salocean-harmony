import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Layout from './Layout';
import Home from './Home.js';
import Map from './Map.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout heading="SalOcean Harmony">
              <Home />
            </Layout>
          } />
          <Route path="/map" element={
            <Layout heading="Map" active="false">
              <Map />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout heading="About" active="false">
              <About />
            </Layout>
          } />
          <Route path="/research" element={
            <Layout heading="Reseach" active="false">
              <About />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout heading="Contact Us" active="false">
              <Contact />
            </Layout>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
