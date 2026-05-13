import { useState, useEffect } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompPage from './pages/CompPage';
import RegisterPage from './pages/RegisterPage';
import { GAMES } from './data/constants';

export default function App() {
  const [page, setPage] = useState('home');

  // Sync ke browser history
  const navigate = (newPage) => {
    window.history.pushState({ page: newPage }, '', `#${newPage}`);
    setPage(newPage);
  };

  // Handle tombol back/forward Safari
  useEffect(() => {
    const handlePop = (e) => {
      const p = e.state?.page || 'home';
      setPage(p);
    };
    window.addEventListener('popstate', handlePop);

    // Set initial state
    window.history.replaceState({ page: 'home' }, '', '#home');

    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const gameData = GAMES.find((g) => g.id === page);

  return (
    <>
      <Background />
      <div id="root-content" style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <Navbar page={page} setPage={navigate} />
        {page === 'home' && <HomePage setPage={navigate} />}
        {gameData && <CompPage game={gameData} setPage={navigate} />}
        {page === 'register' && <RegisterPage setPage={navigate} />}
      </div>
    </>
  );
}
