import React from 'react';
import './About.css';

// You can use an icon library like 'react-icons' for a more professional look
// For example: import { FaBullseye, FaChartLine, FaUsers } from 'react-icons/fa';

function About() {
  return (
    // The id="about" is crucial for the smooth scrolling to work
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>Our Mission</h2>
          <p className="subtitle">Empowering citizens to build better, more accountable cities together.</p>
        </div>

        <div className="how-it-works">
          <h3>How It Works</h3>
          <div className="steps-container">
            <div className="step-card">
              {/* <FaBullseye size={50} className="step-icon" /> */}
              <h4>1. Spot & Report</h4>
              <p>See a civic issue like a pothole or a broken streetlight? Snap a photo and submit a report in minutes through our easy-to-use platform.</p>
            </div>
            <div className="step-card">
              {/* <FaChartLine size={50} className="step-icon" /> */}
              <h4>2. Track Progress</h4>
              <p>Your report is publicly visible. You and your community can track its status in real-time as it gets acknowledged and resolved by local authorities.</p>
            </div>
            <div className="step-card">
              {/* <FaUsers size={50} className="step-icon" /> */}
              <h4>3. Drive Change</h4>
              <p>Every report contributes to a powerful dataset, helping city planners identify problem areas and improve our community for everyone.</p>
            </div>
          </div>
        </div>

        <div className="our-vision">
          <h3>Our Vision for a Smarter City</h3>
          <p>
            CivicTrack is more than just a reporting tool; it's a collaborative bridge between citizens and their government. We envision a future where data-driven decisions lead to faster solutions and greater transparency, fostering a culture of accountability and civic pride. This platform is our contribution to that future, built as part of the Smart India Hackathon.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;