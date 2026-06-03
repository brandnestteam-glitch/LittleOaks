import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from '@phosphor-icons/react';
import './Comparison.css';

const Comparison = () => {
  const features = [
    { name: "AC Classrooms", other: false, ours: true },
    { name: "Punishment-Free", other: false, ours: true },
    { name: "Music & Art", other: "Sometimes", ours: true },
    { name: "CCTV 24/7", other: false, ours: true },
    { name: "Activity Learning", other: "Rarely", ours: true },
    { name: "Low Teacher Ratio", other: false, ours: true },
  ];

  return (
    <section id="comparison" className="comparison-section">
      <div className="container">
        <motion.div 
          className="comparison-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-heading">See the Difference</h2>
        </motion.div>

        <motion.div 
          className="comparison-table-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="comparison-table">
            {/* Header Row */}
            <div className="table-row table-header">
              <div className="table-col feature-col">Feature</div>
              <div className="table-col other-col">Other Schools</div>
              <div className="table-col ours-col">Little Oaks ✓</div>
            </div>

            {/* Data Rows */}
            {features.map((item, index) => (
              <div className="table-row" key={index}>
                <div className="table-col feature-col">{item.name}</div>
                <div className="table-col other-col">
                  {typeof item.other === 'boolean' ? (
                    item.other ? <Check weight="bold" /> : <X weight="bold" />
                  ) : (
                    item.other
                  )}
                </div>
                <div className="table-col ours-col">
                  {typeof item.ours === 'boolean' ? (
                    item.ours ? <Check weight="bold" /> : <X weight="bold" />
                  ) : (
                    item.ours
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
