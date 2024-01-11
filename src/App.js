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
            <li><a href="#section1">Home</a></li>
            <li><a href="#section2">Setting</a></li>
            <li><a href="#section3">Messages</a></li>
            <li><a href="#section3">Profile</a></li>
          </ul>
        </nav>
      </header>
<div className='wrapper'>
      <section className='sidebar' id="sidebar">
        <h2>Section 1 Content</h2>
        {/* Add your content here */}
      </section>
<div className='content'>
<h1>Content</h1>
</div>
    <div className='footer'>
      <h1>
        footer
      </h1>
      </div>  
    </div>
    </div>
  );
};

export default App;
