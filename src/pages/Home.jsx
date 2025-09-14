import './Home.css';

function Home({ setCurrentPage }) { // Accept the prop here
  return (
    <div className="page-container">
      <h2>Welcome to CivicTrack</h2>
      <p>Report civic issues, track progress, and be part of a cleaner, smarter city.</p>
      <button onClick={() => setCurrentPage('report')}>Report Now</button>
    </div>
  );
}

export default Home;