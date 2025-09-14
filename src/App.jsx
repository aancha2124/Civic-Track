import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ReportIssue from './pages/ReportIssue';
import TrackIssues from './pages/TrackIssues';
import Community from './pages/Community';
import Dashboard from './pages/Dashboard';

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
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;