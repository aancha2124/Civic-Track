import './About.css';

function About() {
  const keyFeatures = [
    { title: 'Civic Issue Reporting', description: 'Citizens can report issues with photos, descriptions, and real-time location using a simple form.' },
    { title: 'Admin Dashboard', description: 'Authorities can view, manage, and assign reported issues to different departments.' },
    { title: 'Issue Tracking', description: 'Users can track the status of their reported issues from "Submitted" to "Resolved."' },
    { title: 'Community Feed', description: 'A platform for community members to share updates and discuss local topics.' },
    { title: 'Map-Based View', description: 'Administrators can see a map-based overview of all reported problems to identify issue clusters.' },
  ];

  return (
    <div className="page-container">
      <h2>About CivicTrack</h2>
      <div className="about-content">
        <p>
          CivicTrack is a crowdsourced civic issue reporting and resolution system, developed as a project for the Smart India Hackathon 2025. Our mission is to empower citizens to be active participants in the cleanliness and maintenance of their communities.
        </p>
        <p>
          The platform was created to address Problem Statement SIH-25031 from the Government of Jharkhand, which called for a web-based system where citizens can easily report issues such as garbage, potholes, and broken streetlights.
        </p>
      </div>

      <div className="features-section">
        <h3>Key Features</h3>
        <div className="features-grid">
          {keyFeatures.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;