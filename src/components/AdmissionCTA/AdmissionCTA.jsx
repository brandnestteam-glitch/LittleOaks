import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from '@phosphor-icons/react';
import './AdmissionCTA.css';

const AdmissionCTA = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    childName: '',
    phone: '',
    childAge: '',
    programInterest: ''
  });
  const [status, setStatus] = useState(''); // 'idle', 'loading', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');
      
      setStatus('success');
      setFormData({
        parentName: '',
        parentEmail: '',
        childName: '',
        phone: '',
        childAge: '',
        programInterest: ''
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };
  return (
    <section id="admissions" className="admission-section">
      <div className="container admission-container">
        
        {/* Left Side */}
        <motion.div 
          className="admission-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="display-heading admission-heading">
            Give Your Child The Best Start.
          </h2>
          <p className="admission-subtext">
            Seats filling fast for 2025–26. Book your free campus visit today.
          </p>
          
          <div className="admission-buttons">
            <button className="btn btn-white-solid">Book Visit Now</button>
            <a href="tel:+918093052861" className="btn btn-white-outline">
              <PhoneCall size={20} /> Call: +91 8093052861
            </a>
          </div>

          <p className="admission-disclaimer">
            * No fees for visit. No commitment required.
          </p>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          className="admission-form-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="admission-form-card">
            <h3 className="form-title">Quick Inquiry</h3>
            <form className="inquiry-form" onSubmit={handleSubmit}>
              
              <div className="form-group">
                <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Parent's Name" required />
              </div>
              
              <div className="form-group">
                <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} placeholder="Email Address" required />
              </div>
              
              <div className="form-group">
                <input type="text" name="childName" value={formData.childName} onChange={handleChange} placeholder="Child's Name" required />
              </div>
              
              <div className="form-group">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <select name="childAge" value={formData.childAge} onChange={handleChange} required>
                    <option value="" disabled>Child's Age</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                    <option value="6">6 Years</option>
                    <option value="7-8">7-8 Years</option>
                  </select>
                </div>
                
                <div className="form-group half">
                  <select name="programInterest" value={formData.programInterest} onChange={handleChange} required>
                    <option value="" disabled>Program Interest</option>
                    <option value="play-school">Play School</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="std-1">Std 1</option>
                    <option value="std-2">Std 2</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary form-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
              </button>

              {status === 'success' && <p style={{ color: '#2ecc71', marginTop: '10px', textAlign: 'center' }}>Inquiry sent successfully!</p>}
              {status === 'error' && <p style={{ color: '#e74c3c', marginTop: '10px', textAlign: 'center' }}>Something went wrong. Please try again.</p>}

              <p className="form-privacy">
                🔒 We never share your information.
              </p>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AdmissionCTA;
