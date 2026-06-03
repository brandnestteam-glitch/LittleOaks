import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InstagramLogo } from '@phosphor-icons/react';
import Image from 'next/image';
import './Gallery.css';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  // Generate array for the 26 images (skipping the first 2 which are logo and brochure)
  const allImages = Array.from({ length: 26 }, (_, i) => ({
    id: i + 3,
    title: `Campus Snap ${i + 1}`,
    height: i % 3 === 0 ? "400px" : i % 2 === 0 ? "350px" : "250px",
    src: `/gallery/gallery_img_${i + 3}.jpeg`
  }));

  const displayImages = showAll ? allImages : allImages.slice(0, 9);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-heading" style={{fontStyle: 'italic', fontSize: '48px', marginBottom: '40px', textAlign: 'center'}}>
            A Peek Into Their World
          </h2>
        </motion.div>

        <div className="masonry-grid">
          {displayImages.map((img, index) => (
            <motion.div 
              key={img.id}
              className="masonry-item"
              style={{ height: img.height, position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <Image 
                src={img.src} 
                alt={img.title} 
                fill 
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="masonry-overlay">
                <span className="masonry-title" style={{transform: 'none', opacity: 1}}>{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          {!showAll && (
            <button 
              className="btn btn-primary" 
              onClick={() => setShowAll(true)}
              style={{ padding: '12px 30px', fontSize: '16px' }}
            >
              View Full Gallery
            </button>
          )}
        </div>

        <motion.div 
          className="instagram-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="#instagram" className="insta-link">
            <InstagramLogo weight="fill" size={24} />
            Follow us @littleoakspatrapada
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
