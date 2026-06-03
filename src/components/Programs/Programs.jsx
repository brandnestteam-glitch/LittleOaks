import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      id: 1,
      name: "Play School",
      age: "Age 2–3",
      emoji: "🐣",
      gradient: "linear-gradient(135deg, #FFD43B, #FF8C00)",
      features: ["Sensory play", "Socialization", "First words", "Numbers introduction"]
    },
    {
      id: 2,
      name: "Nursery",
      age: "Age 3–4",
      emoji: "🌸",
      gradient: "linear-gradient(135deg, #6EE7B7, #0D9488)",
      features: ["Language skills", "Motor skills", "Creative arts", "Rhymes & stories"]
    },
    {
      id: 3,
      name: "LKG",
      age: "Age 4–5",
      emoji: "🌟",
      gradient: "linear-gradient(135deg, #7DD3FC, #4338CA)",
      features: ["Phonics reading", "Early maths", "School readiness", "Group activities"]
    },
    {
      id: 4,
      name: "UKG",
      age: "Age 5–6",
      emoji: "🎯",
      gradient: "linear-gradient(135deg, #F9A8D4, #9333EA)",
      features: ["Reading fluently", "Writing skills", "CBSE prep", "Confidence building"]
    },
    {
      id: 5,
      name: "Std 1–2",
      age: "Age 6–8",
      emoji: "🎓",
      gradient: "linear-gradient(135deg, #4ADE80, #059669)",
      features: ["Full academics", "Extracurriculars", "Competitive edge", "Foundational concepts"]
    }
  ];

  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <motion.div 
          className="programs-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-heading" style={{fontSize: '40px', marginBottom: '16px'}}>Programs Designed for Every Stage of Childhood</h2>
          <p style={{color: 'var(--color-gray)', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>
            From their first day to building strong academic foundations.
          </p>
        </motion.div>
      </div>

      <div className="programs-scroll-container">
        <div className="programs-track">
          {programs.map((prog, index) => (
            <motion.div 
              key={prog.id}
              className="program-card"
              style={{ background: prog.gradient }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="program-emoji">{prog.emoji}</div>
              <h3 className="program-name">{prog.name}</h3>
              <div className="program-age">{prog.age}</div>
              
              <ul className="program-features">
                {prog.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              
              <a href="#admissions" className="program-link">
                Learn More <ArrowRight weight="bold" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
