import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import './StatsBar.css';

const Counter = ({ from, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          setCount(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const StatsBar = () => {
  const stats = [
    { num: 10, suffix: "", label: "World-Class Facilities" },
    { num: 10, suffix: "+", label: "Trained Educators" },
    { num: 5, suffix: "★", label: "Parent Rating" },
  ];

  return (
    <section className="stats-section">
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="stat-item">
              <h3 className="stat-number display-heading">
                <Counter from={0} to={stat.num} suffix={stat.suffix} />
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
            {index < stats.length - 1 && <div className="stat-divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
