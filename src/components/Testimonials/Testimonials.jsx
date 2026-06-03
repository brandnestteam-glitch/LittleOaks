import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Mishra",
      role: "Parent of Nursery student",
      text: "My daughter loves waking up for school now. The teachers are like family.",
      color: "linear-gradient(135deg, #FF9A9E, #FECFEF)"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Parent of LKG student",
      text: "The CCTV access and constant updates give us complete peace of mind.",
      color: "linear-gradient(135deg, #84FAB0, #8FD3F4)"
    },
    {
      id: 3,
      name: "Sunita Panda",
      role: "Parent of UKG student",
      text: "Art and music have made my shy son so confident. Unbelievable transformation.",
      color: "linear-gradient(135deg, #FCCB90, #D57EEB)"
    },
    {
      id: 4,
      name: "Deepa Nayak",
      role: "Parent of Play School student",
      text: "Best investment we made for our child's future. Zero regrets.",
      color: "linear-gradient(135deg, #E0C3FC, #8EC5FC)"
    },
    {
      id: 5,
      name: "Ankit Sahu",
      role: "Parent of Std 1 student",
      text: "The transport is punctual, campus is safe, staff is excellent. 10/10.",
      color: "linear-gradient(135deg, #A1C4FD, #C2E9FB)"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-heading" style={{color: 'var(--color-white)'}}>What Parents Are Saying</h2>
        </motion.div>

        <motion.div 
          className="testimonials-carousel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="testimonial-swiper"
          >
            {testimonials.map((test) => (
              <SwiperSlide key={test.id} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p className="testimonial-text">"{test.text}"</p>
                  
                  <div className="testimonial-author">
                    <div className="author-photo" style={{ background: test.color }}></div>
                    <div className="author-info">
                      <h4 className="author-name">{test.name}</h4>
                      <p className="author-role">{test.role}</p>
                    </div>
                  </div>

                  {/* Watermark Logo Placeholder */}
                  <div className="watermark">🌿</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
