import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;