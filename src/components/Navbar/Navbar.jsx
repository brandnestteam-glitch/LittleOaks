import React, { useState, useEffect } from 'react';
import { Leaf, List, X, Phone } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = ['Home', 'About', 'Programs', 'Facilities', 'Gallery', 'Admissions', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left: Jupiter Logo + Little Oaks Logo stacked */}
        <div className="navbar-left">
          <img src="/Jupiter.jpeg" alt="Jupiter Group" className="jupiter-logo" loading="lazy" />
          <a href="#home" className="logo-section" style={{ width: '100%' }}>
            <div className="little-oaks-logo">
              <span style={{color: 'var(--color-yellow)'}}>L</span>
              <span style={{color: 'var(--color-coral)'}}>I</span>
              <span style={{color: 'var(--color-primary)'}}>T</span>
              <span style={{color: 'var(--color-blue)'}}>T</span>
              <span style={{color: 'var(--color-yellow)'}}>L</span>
              <span style={{color: 'var(--color-coral)'}}>E</span>
              <span style={{width: '6px'}}></span>
              <span style={{color: 'var(--color-primary)'}}>O</span>
              <span style={{color: 'var(--color-coral)'}}>A</span>
              <span style={{color: 'var(--color-yellow)'}}>K</span>
              <span style={{color: 'var(--color-blue)'}}>S</span>
            </div>
          </a>
        </div>

        {/* Center: Nav Links */}
        <nav className="navbar-center-nav">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Enroll Now + Mobile Toggle */}
        <div className="navbar-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="desktop-cta">
            <a href="#admissions" className="btn btn-primary btn-sm">
              Enroll Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="mobile-nav-links">
              {links.map((link, i) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mobile-cta-wrapper">
              <a href="tel:+918093052861" className="btn btn-secondary" style={{width: '100%'}}>
                <Phone weight="fill" size={20} />
                Call Us
              </a>
              <a href="#admissions" className="btn btn-primary" style={{width: '100%', marginTop: '12px'}}>
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
