import React from 'react';
import './Home.css';

// --- Updated Mock Data ---
// The list now contains six items.
const issues = [
  {
    id: 1,
    title: 'Large Pothole on Main Street',
    location: 'Sector 15, Noida',
    status: 'Open',
    imageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c4f5b2f766?q=80&w=870&auto.format&fit=crop',
    date: 'Sep 14, 2025'
  },
  {
    id: 2,
    title: 'Broken Streetlight at Park Entrance',
    location: 'Sector 18, Noida',
    status: 'In Progress',
    imageUrl: 'https://images.unsplash.com/photo-1620528222434-386d5b128b5c?q=80&w=774&auto.format&fit=crop',
    date: 'Sep 12, 2025'
  },
  {
    id: 3,
    title: 'Overflowing Garbage Bin',
    location: 'Sector 62, Noida',
    status: 'Resolved',
    imageUrl: 'https://images.unsplash.com/photo-1603426180321-973a3d055411?q=80&w=870&auto.format&fit=crop',
    date: 'Sep 10, 2025'
  },
  {
    id: 4,
    title: 'Leaking Water Pipe near Metro Station',
    location: 'Sector 52, Noida',
    status: 'Open',
    imageUrl: 'https://images.unsplash.com/photo-1559238914-8846b412b5df?q=80&w=774&auto.format&fit=crop',
    date: 'Sep 15, 2025'
  },
  // --- NEW ITEM 1 ---
  {
    id: 5,
    title: 'Damaged Bench at Central Park',
    location: 'Sector 10, Noida',
    status: 'Submitted',
    imageUrl: 'https://images.unsplash.com/photo-1628558814885-1b5a5b28a2a7?q=80&w=870&auto.format&fit=crop',
    date: 'Sep 15, 2025'
  },
  // --- NEW ITEM 2 ---
  {
    id: 6,
    title: 'Faded Zebra Crossing Lines',
    location: 'Near City Market, Sector 18',
    status: 'In Progress',
    imageUrl: 'https://images.unsplash.com/photo-1599493356222-3532f1430054?q=80&w=774&auto.format&fit=crop',
    date: 'Sep 13, 2025'
  }
];

function Home() {
  return (
    <section id="home" className="home-container">
      <div className="home-header">
        <h1>Track Issues in Your Community</h1>
        <p>Browse and track the status of recently reported issues from your community.</p>
      </div>

      <div className="issues-grid">
        {issues.map(issue => (
          <div key={issue.id} className="issue-card">
            <img src={issue.imageUrl} alt={issue.title} />
            <div className="issue-card-content">
              <div className="issue-header">
                <h3 className="issue-title">{issue.title}</h3>
                <span className={`issue-status status-${issue.status.toLowerCase().replace(' ', '-')}`}>
                  {issue.status}
                </span>
              </div>
              <p className="issue-location">{issue.location}</p>
              <p className="issue-date">Reported: {issue.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;