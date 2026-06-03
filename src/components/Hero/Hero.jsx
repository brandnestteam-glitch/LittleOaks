import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ onStartTour }) => {
  const headingWords = ["Where", "Little", "Minds", "Bloom", "Into", "Greatness."];

  const floatingCards = [
    { id: 1, title: "🎨 Art & Craft", rotate: -6, top: "10%", left: "-15%", delay: 0.3 },
    { id: 2, title: "🎵 Music Classes", rotate: 4, top: "5%", right: "-10%", delay: 0.6 },
    { id: 3, title: "🚌 Transport Available", rotate: 3, bottom: "10%", left: "-10%", delay: 0.9 },
    { id: 4, title: "⭐ Low Teacher Ratio", rotate: -4, bottom: "5%", right: "-15%", delay: 1.2 },
  ];

  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-blob blob-green"></div>
      <div className="hero-blob blob-yellow"></div>
      <div className="hero-pattern-overlay"></div>

      <div className="container hero-container">
        {/* Left Side Content */}
        <div className="hero-content">
          <motion.div 
            className="hero-badge accent-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ✦ Admissions Open 2026–27
          </motion.div>

          <h1 className="hero-heading display-heading">
            {headingWords.map((word, index) => {
              if (word === "Bloom") {
                return (
                  <motion.span 
                    key={index} 
                    className="heading-word bloom-word"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.8, ease: "easeOut" }}
                  >
                    {word}
                    <svg className="squiggle" width="160" height="20" viewBox="0 0 160 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        d="M2 18C28.5 2 55.5 18 82 18C108.5 18 135.5 2 158 18" 
                        stroke="var(--color-primary)" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                      />
                    </svg>
                  </motion.span>
                );
              }
              return (
                <motion.span 
                  key={index} 
                  className="heading-word"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.8, ease: "easeOut" }}
                >
                  {word}&nbsp;
                </motion.span>
              );
            })}
          </h1>

          <motion.p 
            className="hero-subheading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <strong>Nurturing Young Minds, Building Bright Futures.</strong><br/>
            A premium early learning experience for children aged 2–8.<br/>
            Play School · Nursery · LKG · UKG · Std 1 & 2
          </motion.p>

          <motion.div 
            className="trust-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="trust-badge">🏆 10+ Facilities</span>
            <span className="trust-badge">🔒 24/7 CCTV</span>
            <span className="trust-badge">❤️ Punishment-Free Zone</span>
          </motion.div>

          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="#admissions" className="btn btn-primary">Book Free Visit →</a>
            <button onClick={onStartTour} className="btn btn-ghost">Start Virtual Tour ▶</button>
          </motion.div>

          <motion.div 
            className="hero-reviews"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <span>Loved by 200+ families in Patrapada</span>
          </motion.div>
        </div>

        {/* Right Side Visual */}
        <div className="hero-visual">
          <motion.div 
            className="main-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="main-card-inner">
              <img 
                src="/images/hero_painted_hands_1779454048024.png" 
                alt="Happy Children with Painted Hands" 
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            
            {/* Floating Mini Cards */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.id}
                className="floating-card"
                style={{
                  top: card.top,
                  bottom: card.bottom,
                  left: card.left,
                  right: card.right,
                  rotate: card.rotate
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: card.delay, duration: 0.6, type: "spring", stiffness: 100 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: card.delay }}
                >
                  {card.title}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
