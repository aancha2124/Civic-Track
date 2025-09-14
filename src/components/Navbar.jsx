import './Navbar.css';

function Navbar({ setCurrentPage }) {
  return (
    <nav>
      <h1>CivicTrack</h1>
      <div className="nav-right">
        <ul>
          <li><a href="#" onClick={() => setCurrentPage('home')}>Home</a></li>
          <li><a href="#" onClick={() => setCurrentPage('report')}>Report Issue</a></li>
          <li><a href="#" onClick={() => setCurrentPage('track')}>Track Issues</a></li>
          <li><a href="#" onClick={() => setCurrentPage('community')}>Community</a></li>
          <li><a href="#" onClick={() => setCurrentPage('about')}>About</a></li>
        </ul>
        <button onClick={() => setCurrentPage('login')}>Login / Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;