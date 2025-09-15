import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ReportIssue from './pages/ReportIssue';
import TrackIssues from './pages/TrackIssues';
import Community from './pages/Community';
import LoginSignup from './pages/LoginSignup'; // 1. Import the new page

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'report':
        return <ReportIssue />;
      case 'track':
        return <TrackIssues />;
      case 'community':
        return <Community />;
      case 'login': // 2. Add the new 'case' for the login/signup page
        return <LoginSignup />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;