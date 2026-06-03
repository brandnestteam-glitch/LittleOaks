import React from 'react';
import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        
        {/* Left Side: Image Mosaic */}
        <div className="about-visual">
          <motion.div 
            className="mosaic-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
          >
            <motion.div 
              className="mosaic-item mosaic-main"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              <div className="placeholder-img" style={{overflow: 'hidden'}}>
                <img src="/gallery/gallery_img_10.jpeg" alt="Kids playing outdoors" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
            </motion.div>
            
            <div className="mosaic-column">
              <motion.div 
                className="mosaic-item mosaic-small"
                variants={{
                  hidden: { opacity: 0, y: -30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                <div className="placeholder-img" style={{overflow: 'hidden'}}>
                  <img src="/gallery/gallery_img_11.jpeg" alt="Child painting" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </motion.div>
              
              <motion.div 
                className="mosaic-item mosaic-small"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                <div className="placeholder-img" style={{overflow: 'hidden'}}>
                  <img src="/gallery/gallery_img_3.jpeg" alt="Teacher reading" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              </motion.div>
            </div>

            {/* Badge */}
            <motion.div 
              className="est-badge"
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: -45 },
                visible: { opacity: 1, scale: 1, rotate: -15, transition: { duration: 0.6, delay: 0.6, type: "spring" } }
              }}
            >
              Est. 2026
            </motion.div>

            {/* Accent Line */}
            <svg className="accent-line" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 110C10 110 40 10 110 10" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8"/>
            </svg>
          </motion.div>
        </div>

        {/* Right Side: Text Content */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label accent-text">About Us</span>
          <h2 className="section-heading display-heading">Not Just a School.<br/>A Second Home.</h2>
          
          <p className="about-text">
            Under the esteemed Jupiter Group of Institutions, Little Oaks Pre School was founded with a singular vision: to create an environment where children fall in love with learning.
          </p>
          <p className="about-text">
            We believe the early years are crucial for character building. Our campus is designed to be a safe, joyful, and stimulating space that encourages curiosity and creativity over rote memorization.
          </p>

          <ul className="feature-list">
            <li>
              <div className="check-circle"><Check weight="bold" /></div>
              Holistic child development
            </li>
            <li>
              <div className="check-circle"><Check weight="bold" /></div>
              Activity-based curriculum
            </li>
            <li>
              <div className="check-circle"><Check weight="bold" /></div>
              Zero punishment philosophy
            </li>
            <li>
              <div className="check-circle"><Check weight="bold" /></div>
              Parent-teacher transparency
            </li>
          </ul>

          <a href="#team" className="btn btn-ghost mt-4">Meet Our Team →</a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
