"use client";
import React, { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import StatsBar from '../components/StatsBar/StatsBar';
import About from '../components/About/About';
import Programs from '../components/Programs/Programs';
import Facilities from '../components/Facilities/Facilities';
import Gallery from '../components/Gallery/Gallery';
import Comparison from '../components/Comparison/Comparison';
import Testimonials from '../components/Testimonials/Testimonials';
import AdmissionCTA from '../components/AdmissionCTA/AdmissionCTA';
import ContactFooter from '../components/ContactFooter/ContactFooter';

import Tour from '../components/Tour/Tour';

export default function App() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Hero onStartTour={() => setIsTourOpen(true)} />
      <StatsBar />
      <About />

      <Programs />
      <Facilities />
      <Gallery />
      <Comparison />
      <Testimonials />
      <AdmissionCTA />
      <ContactFooter />
      <Tour isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
    </div>
  );
}
