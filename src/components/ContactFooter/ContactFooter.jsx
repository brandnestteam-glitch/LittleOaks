import React from 'react';
import {
  MapPin, Phone, Clock, EnvelopeSimple,
  FacebookLogo, InstagramLogo,
  FilePdf, WhatsappLogo, Leaf
} from '@phosphor-icons/react';
import './ContactFooter.css';

const ContactFooter = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* Col 1: Contact Details */}
            <div className="contact-col">
              <h3 className="contact-heading">Get In Touch</h3>
              <ul className="contact-list">
                <li>
                  <div className="contact-icon"><MapPin weight="fill" /></div>
                  <div>
                    <strong>Campus Address</strong>
                    <p>Patrapada, Bhubaneswar,<br />Odisha - 751019</p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon"><Phone weight="fill" /></div>
                  <div>
                    <strong>Phone Number</strong>
                    <p>
                      <a href="tel:+918093052861">+91 8093052861</a> / <a href="tel:+918093052862">+91 8093052862</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon"><Clock weight="fill" /></div>
                  <div>
                    <strong>Visiting Hours</strong>
                    <p>Mon–Sat: 8:00 AM – 2:00 PM</p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon"><EnvelopeSimple weight="fill" /></div>
                  <div>
                    <strong>Email Address</strong>
                    <p><a href="mailto:info@littleoaks.edu.in">info@littleoaks.edu.in</a></p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Col 2: Map */}
            <div className="contact-col map-col">
              <iframe
                src="https://maps.google.com/maps?q=20.248469,85.769132&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Little Oaks Map"
              ></iframe>
            </div>

            {/* Col 3: Links */}
            <div className="contact-col links-col">
              <h3 className="contact-heading">Connect</h3>

              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=61589345591871" target="_blank" rel="noopener noreferrer" className="social-btn"><FacebookLogo weight="fill" /></a>
                <a href="https://www.instagram.com/little_oaks_bhubaneswar/" target="_blank" rel="noopener noreferrer" className="social-btn"><InstagramLogo weight="fill" /></a>
              </div>

              <div className="quick-actions">
                <a href="/Brochure.pdf" download="LittleOaks_Brochure.pdf" className="btn btn-primary btn-full" style={{marginBottom: '16px'}}>
                  <FilePdf size={20} /> Download Brochure
                </a>
                <a href="https://wa.me/918093052861" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-full">
                  <WhatsappLogo size={20} weight="fill" /> WhatsApp Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo-section" style={{ marginBottom: '16px' }}>
                <div className="logo-text">
                  <span className="logo-title">
                    <span style={{ color: 'var(--color-yellow)' }}>L</span>
                    <span style={{ color: 'var(--color-coral)' }}>I</span>
                    <span style={{ color: 'var(--color-primary)' }}>T</span>
                    <span style={{ color: 'var(--color-blue)' }}>T</span>
                    <span style={{ color: 'var(--color-yellow)' }}>L</span>
                    <span style={{ color: 'var(--color-coral)' }}>E</span>
                    &nbsp;
                    <span style={{ color: 'var(--color-primary)' }}>O</span>
                    <span style={{ color: 'var(--color-coral)' }}>A</span>
                    <span style={{ color: 'var(--color-yellow)' }}>K</span>
                    <span style={{ color: 'var(--color-blue)' }}>S</span>
                  </span>
                  <span className="logo-tag">★ PRE SCHOOL ★</span>
                </div>
              </div>
              <p className="footer-desc">Where Little Minds Bloom Into Greatness.</p>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-heading">Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#facilities">Facilities</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#admissions">Admissions</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-heading">Programs</h4>
              <ul>
                <li><a href="#programs">Play School</a></li>
                <li><a href="#programs">Nursery</a></li>
                <li><a href="#programs">LKG & UKG</a></li>
                <li><a href="#programs">Std 1 & 2</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © 2024 Little Oaks Pre School · Jupiter Group of Institutions
            </div>
            <div className="footer-made-with">
              Developed by <a href="https://brandnestagency.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 'bold' }}>Brandnest</a> - India's First AI Powered Web & Digital Marketing Agency
            </div>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span className="dot">•</span>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
