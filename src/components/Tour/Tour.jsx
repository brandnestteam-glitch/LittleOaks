import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import './Tour.css';

const tourData = [
  {
    place: 'Water Fun',
    title: 'SPLASH',
    title2: 'POOL',
    description: 'Our luxurious splash pool is a favorite! We host regular pool parties with safe, shallow waters and colorful toys where kids can beat the heat and enjoy water activities under strict expert supervision.',
    image: '/images/Splash.jpeg'
  },
  {
    place: 'Kids Arena',
    title: 'PREMIUM',
    title2: 'PLAY AREA',
    description: 'Bhubaneswar\'s finest indoor and outdoor play arenas! Designed with premium Scandinavian structures, soft padded flooring, and massive ball pits to ensure endless, safe entertainment and physical development.',
    image: '/images/play.jpeg'
  },
  {
    place: 'Infrastructure',
    title: 'FULLY A/C',
    title2: 'CAMPUS',
    description: 'Step into a world-class, fully air-conditioned campus. From bright corridors with wooden flooring to vibrant wall art, every inch of Little Oaks is crafted to provide a highly comfortable and hygienic environment.',
    image: '/images/infra.jpeg'
  },
  {
    place: 'Learning',
    title: 'SMART',
    title2: 'CLASSES',
    description: 'Equipped with interactive whiteboards and modern educational tools, our premium smart classrooms make learning an engaging visual and auditory experience tailored for young, curious minds.',
    image: '/images/smart_class.png'
  },
  {
    place: 'Creativity',
    title: 'ART',
    title2: 'STUDIO',
    description: 'A magical space for our little artists! Our art studio is fully stocked with organic paints, crafts, and materials where toddlers can express their boundless imagination and develop fine motor skills.',
    image: '/images/art.jpeg'
  },
];

const Tour = ({ isOpen, onClose }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!isOpen) return;
    
    // GSAP Animation Logic translated to React
    const range = (n) => Array(n).fill(0).map((i, j) => i + j);
    const set = gsap.set;

    function getCard(index) { return `.tour-card-${index}`; }
    function getCardContent(index) { return `.tour-card-content-${index}`; }
    function getSliderItem(index) { return `.tour-slide-item-${index}`; }

    function animate(target, duration, properties) {
      return new Promise((resolve) => {
        gsap.to(target, { ...properties, duration: duration, onComplete: resolve });
      });
    }

    let order = [0, 1, 2, 3, 4];
    let detailsEven = true;

    let offsetTop = 200;
    let offsetLeft = 700;
    let cardWidth = 200;
    let cardHeight = 300;
    let gap = 40;
    let numberSize = 50;
    const ease = "sine.inOut";
    
    let isAnimating = true;

    function init() {
      if (!isAnimating) return;
      const [active, ...rest] = order;
      const detailsActive = detailsEven ? ".tour-details-even" : ".tour-details-odd";
      const detailsInactive = detailsEven ? ".tour-details-odd" : ".tour-details-even";
      const { innerHeight: height, innerWidth: width } = window;
      offsetTop = height - 430;
      offsetLeft = width - 830;
      
      // Fallback for smaller screens
      if (width < 1000) {
        offsetLeft = 50;
        offsetTop = height - 350;
        cardWidth = 150;
        cardHeight = 220;
      }

      gsap.set(".tour-pagination", {
        top: offsetTop + 330,
        left: offsetLeft,
        y: 200,
        opacity: 0,
        zIndex: 60,
      });
      gsap.set(".tour-nav", { y: -200, opacity: 0 });

      gsap.set(getCard(active), {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      });
      gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
      gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
      gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
      gsap.set(`${detailsInactive} .tour-text`, { y: 100 });
      gsap.set(`${detailsInactive} .tour-title-1`, { y: 100 });
      gsap.set(`${detailsInactive} .tour-title-2`, { y: 100 });
      gsap.set(`${detailsInactive} .tour-desc`, { y: 50 });
      gsap.set(`${detailsInactive} .tour-cta`, { y: 60 });

      gsap.set(".tour-progress-sub-foreground", {
        width: 500 * (1 / order.length) * (active + 1),
      });

      rest.forEach((i, index) => {
        gsap.set(getCard(i), {
          x: offsetLeft + 400 + index * (cardWidth + gap),
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          zIndex: 30,
          borderRadius: 10,
          opacity: 0,
        });
        gsap.set(getCardContent(i), {
          x: offsetLeft + 400 + index * (cardWidth + gap),
          zIndex: 40,
          y: offsetTop + cardHeight - 100,
          opacity: 0,
        });
        gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
      });

      gsap.set(".tour-indicator", { x: -window.innerWidth });

      const startDelay = 0.6;

      gsap.to(".tour-cover", {
        x: width + 400,
        delay: 0.5,
        ease,
        onComplete: () => {
          setTimeout(() => {
            if (isAnimating) loop();
          }, 500);
        },
      });
      
      rest.forEach((i, index) => {
        gsap.to(getCard(i), {
          x: offsetLeft + index * (cardWidth + gap),
          zIndex: 30,
          opacity: 0,
          ease,
          delay: startDelay,
        });
        gsap.to(getCardContent(i), {
          x: offsetLeft + index * (cardWidth + gap),
          zIndex: 40,
          opacity: 0,
          ease,
          delay: startDelay,
        });
      });
      gsap.to(".tour-pagination", { y: 0, opacity: 1, ease, delay: startDelay });
      gsap.to(".tour-nav", { y: 0, opacity: 1, ease, delay: startDelay });
      gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
    }

    let clicks = 0;

    function step() {
      if (!isAnimating) return Promise.resolve();
      return new Promise((resolve) => {
        order.push(order.shift());
        detailsEven = !detailsEven;

        const detailsActive = detailsEven ? ".tour-details-even" : ".tour-details-odd";
        const detailsInactive = detailsEven ? ".tour-details-odd" : ".tour-details-even";

        document.querySelector(`${detailsActive} .tour-place-box .tour-text`).textContent = tourData[order[0]].place;
        document.querySelector(`${detailsActive} .tour-title-1`).textContent = tourData[order[0]].title;
        document.querySelector(`${detailsActive} .tour-title-2`).textContent = tourData[order[0]].title2;
        document.querySelector(`${detailsActive} .tour-desc`).textContent = tourData[order[0]].description;

        gsap.set(detailsActive, { zIndex: 22 });
        gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
        gsap.to(`${detailsActive} .tour-text`, { y: 0, delay: 0.1, duration: 0.7, ease });
        gsap.to(`${detailsActive} .tour-title-1`, { y: 0, delay: 0.15, duration: 0.7, ease });
        gsap.to(`${detailsActive} .tour-title-2`, { y: 0, delay: 0.15, duration: 0.7, ease });
        gsap.to(`${detailsActive} .tour-desc`, { y: 0, delay: 0.3, duration: 0.4, ease });
        gsap.to(`${detailsActive} .tour-cta`, { y: 0, delay: 0.35, duration: 0.4, onComplete: resolve, ease });
        gsap.set(detailsInactive, { zIndex: 12 });

        const [active, ...rest] = order;
        const prv = rest[rest.length - 1];

        gsap.set(getCard(prv), { zIndex: 10 });
        gsap.set(getCard(active), { zIndex: 20 });
        gsap.to(getCard(prv), { scale: 1.5, ease });

        gsap.to(getCardContent(active), { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease });
        gsap.to(getSliderItem(active), { x: 0, ease });
        gsap.to(getSliderItem(prv), { x: -numberSize, ease });
        gsap.to(".tour-progress-sub-foreground", { width: 500 * (1 / order.length) * (active + 1), ease });

        gsap.to(getCard(active), {
          x: 0,
          y: 0,
          ease,
          opacity: 1,
          width: window.innerWidth,
          height: window.innerHeight,
          borderRadius: 0,
          onComplete: () => {
            const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
            gsap.set(getCard(prv), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10, scale: 1, opacity: 0 });
            gsap.set(getCardContent(prv), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 0, zIndex: 40 });
            gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

            gsap.set(detailsInactive, { opacity: 0 });
            gsap.set(`${detailsInactive} .tour-text`, { y: 100 });
            gsap.set(`${detailsInactive} .tour-title-1`, { y: 100 });
            gsap.set(`${detailsInactive} .tour-title-2`, { y: 100 });
            gsap.set(`${detailsInactive} .tour-desc`, { y: 50 });
            gsap.set(`${detailsInactive} .tour-cta`, { y: 60 });
            
            clicks -= 1;
            if (clicks > 0) step();
          },
        });

        rest.forEach((i, index) => {
          if (i !== prv) {
            const xNew = offsetLeft + index * (cardWidth + gap);
            gsap.set(getCard(i), { zIndex: 30 });
            gsap.to(getCard(i), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, opacity: 0, ease, delay: 0.1 * (index + 1) });
            gsap.to(getCardContent(i), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 0, zIndex: 40, ease, delay: 0.1 * (index + 1) });
            gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
          }
        });
      });
    }

    async function loop() {
      if (!isAnimating) return;
      await animate(".tour-indicator", 2, { x: 0 });
      if (!isAnimating) return;
      await animate(".tour-indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
      if (!isAnimating) return;
      set(".tour-indicator", { x: -window.innerWidth });
      await step();
      if (isAnimating) loop();
    }
    
    // Make sure DOM is ready
    setTimeout(() => {
      init();
    }, 100);

    return () => {
      isAnimating = false;
      gsap.killTweensOf("*"); // Clean up all GSAP animations
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="tour-overlay" ref={containerRef}>
      <div className="tour-indicator"></div>

      <nav className="tour-nav">
        <div>
          <div className="tour-svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <div style={{fontWeight: 'bold', letterSpacing: '2px'}}>LITTLE OAKS VIRTUAL TOUR</div>
        </div>
        <div>
          <button className="tour-close-btn" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Close Tour
          </button>
        </div>
      </nav>

      <div id="tour-demo">
        {tourData.map((item, index) => (
          <div key={index} className={`tour-card tour-card-${index}`} style={{ backgroundImage: `url(${item.image})` }}></div>
        ))}
        {tourData.map((item, index) => (
          <div key={index} className={`tour-card-content tour-card-content-${index}`}>
            <div className="tour-content-start"></div>
            <div className="tour-content-place">{item.place}</div>
            <div className="tour-content-title-1">{item.title}</div>
            <div className="tour-content-title-2">{item.title2}</div>
          </div>
        ))}
      </div>

      <div className="tour-details tour-details-even">
        <div className="tour-place-box">
          <div className="tour-text">{tourData[0].place}</div>
        </div>
        <div className="tour-title-box-1"><div className="tour-title-1">{tourData[0].title}</div></div>
        <div className="tour-title-box-2"><div className="tour-title-2">{tourData[0].title2}</div></div>
        <div className="tour-desc">{tourData[0].description}</div>
      </div>

      <div className="tour-details tour-details-odd">
        <div className="tour-place-box">
          <div className="tour-text">{tourData[0].place}</div>
        </div>
        <div className="tour-title-box-1"><div className="tour-title-1">{tourData[0].title}</div></div>
        <div className="tour-title-box-2"><div className="tour-title-2">{tourData[0].title2}</div></div>
        <div className="tour-desc">{tourData[0].description}</div>
      </div>

      <div className="tour-pagination">
        <div className="tour-progress-sub-container">
          <div className="tour-progress-sub-background">
            <div className="tour-progress-sub-foreground"></div>
          </div>
        </div>
        <div className="tour-slide-numbers">
          {tourData.map((_, index) => (
            <div key={index} className={`tour-item tour-slide-item-${index}`}>{index + 1}</div>
          ))}
        </div>
      </div>

      <div className="tour-cover"></div>
    </div>
  );
};

export default Tour;
