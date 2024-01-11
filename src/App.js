// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  // Change background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`App ${scrolled ? 'scrolled' : ''}`}>
      <header>
        <nav>
          <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
          </ul>
        </nav>
      </header>

      <section id="section1">
        <h2>Section 1 Content</h2>
        {/* Add your content here */}
      </section>

      <section id="section2">
        <h2>Section 2 Content</h2>
        {/* Add your content here */}
      </section>

      <section id="section3">
        <h2>Section 3 Content</h2>
        {/* Add your content here */}
      </section>
    </div>
  );
};

export default App;
