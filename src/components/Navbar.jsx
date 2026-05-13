import { useState, useRef } from 'react';
import { GAMES } from '../data/constants';

export default function Navbar({ page, setPage }) {
  const [ddOpen, setDdOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDdOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDdOpen(false), 350);
  };

  return (
    <nav className="navbar">
      <a className="nav-logo" onClick={() => setPage('home')}>
        <div className="nav-logo-icon"></div>
        UI GAMES LEAGUE
      </a>

      <ul className="nav-links nav-links-desktop">
        <li>
          <a
            className={page === 'home' ? 'active' : ''}
            onClick={() => setPage('home')}
            style={{ cursor: 'pointer' }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setPage('home');
              setTimeout(
                () => document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' }),
                100
              );
            }}
            style={{ cursor: 'pointer' }}
          >
            Timeline
          </a>
        </li>
        <li
          className="nav-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            style={{ color: ['ml', 'val', 'pubg'].includes(page) ? 'var(--white)' : 'var(--muted)' }}
          >
            Our Competitions ▾
          </button>
          {ddOpen && (
            <div
              className="nav-dropdown-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {GAMES.map((g) => (
                <div
                  key={g.id}
                  className="dropdown-item"
                  onClick={() => {
                    setPage(g.id);
                    setDdOpen(false);
                  }}
                >
                  <span>{g.icon}</span> {g.name}
                </div>
              ))}
            </div>
          )}
        </li>
        <li>
          <button className="btn-register" onClick={() => setPage('register')}>
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
}
