import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Facilities.css';

const facilitiesList = [
  {
    title: "Safe Environment",
    desc: "24/7 CCTV surveillance, strict visitor policies, and child-safe infrastructure ensuring your little one's absolute security.",
    icon: "🛡️"
  },
  {
    title: "Experienced Teachers",
    desc: "Our educators are highly trained, passionate, and dedicated to nurturing each child's unique potential with love.",
    icon: "👩‍🏫"
  },
  {
    title: "Holistic Curriculum",
    desc: "A balanced blend of academics, arts, and physical activities designed to foster all-round development.",
    icon: "📚"
  },
  {
    title: "Smart Classrooms",
    desc: "Modern classrooms equipped with interactive learning tools to make education engaging and fun.",
    icon: "🖥️"
  },
  {
    title: "Play-based Learning",
    desc: "We believe children learn best through play. Our curriculum is designed around interactive, joyful learning.",
    icon: "🎨"
  },
  {
    title: "Nutrition & Health",
    desc: "Hygienic meals and regular health checkups to ensure your child grows strong, healthy, and happy.",
    icon: "🍎"
  },
  {
    title: "Parental Involvement",
    desc: "We partner with parents through regular updates, workshops, and events to track and support child progress.",
    icon: "👪"
  },
  {
    title: "Extracurriculars",
    desc: "From music and dance to taekwondo and yoga, we offer diverse activities to discover hidden talents.",
    icon: "🎵"
  },
  {
    title: "Personalized Attention",
    desc: "Low student-to-teacher ratios ensure every child receives the individual care and guidance they deserve.",
    icon: "💖"
  },
  {
    title: "Loving Atmosphere",
    desc: "A warm, inclusive, and joyful environment where every child feels valued, confident, and eager to learn.",
    icon: "🌟"
  }
];

const Facilities = () => {
  return (
    <section className="facilities-section" id="facilities">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title display-heading">World-Class Facilities</h2>
          <p className="section-subtitle">Discover why we are the preferred choice for your child's early education journey.</p>
        </div>
        
        <div className="facilities-grid">
          {facilitiesList.map((facility, index) => (
            <Tilt 
              key={index}
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
            >
              <div className="facility-card inner-element">
                <div className="facility-icon">{facility.icon}</div>
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-desc">{facility.desc}</p>
                <div className="facility-number">{index + 1}</div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
