import { useState, useRef } from 'react';
import { GAMES } from '../data/constants';

export default function Navbar({ page, setPage }) {
  const [ddOpen, setDdOpen]       = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDdOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDdOpen(false), 350);
  };

  const navTo = (p) => { setPage(p); setMobileOpen(false); };

  return (
    <nav className="navbar">
      {/* Logo */}
      <a className="nav-logo" onClick={() => navTo('home')}>
        <div className="nav-logo-icon" />
        UI GAMES LEAGUE
      </a>

      {/* Desktop */}
      <ul className="nav-links nav-links-desktop">
        <li>
          <a className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
            About Us
          </a>
        </li>
        <li>
          <a onClick={() => { setPage('home'); setTimeout(() => document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ cursor: 'pointer' }}>
            Timeline
          </a>
        </li>
        <li className="nav-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button style={{ color: ['ml','val','pubg','pes'].includes(page) ? 'var(--white)' : 'var(--muted)' }}>
            Our Competitions ▾
          </button>
          {ddOpen && (
            <div className="nav-dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {GAMES.map((g) => (
                <div key={g.id} className="dropdown-item" onClick={() => { setPage(g.id); setDdOpen(false); }}>
                  <span>{g.icon}</span> {g.name}
                </div>
              ))}
            </div>
          )}
        </li>
        <li>
          <button className="btn-register" onClick={() => setPage('register')}>Register</button>
        </li>
      </ul>

      {/* Hamburger */}
      <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
        <span className={`ham-line ${mobileOpen ? 'open' : ''}`} />
        <span className={`ham-line ${mobileOpen ? 'open' : ''}`} />
        <span className={`ham-line ${mobileOpen ? 'open' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="nav-mobile-menu">
          <a onClick={() => navTo('home')}>About Us</a>
          <a onClick={() => { navTo('home'); setTimeout(() => document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
            Timeline
          </a>
          <div className="mobile-dropdown-label">Our Competitions</div>
          {GAMES.map((g) => (
            <a key={g.id} onClick={() => navTo(g.id)} style={{ paddingLeft: '16px', fontSize: '0.9rem' }}>
              {g.icon} {g.name}
            </a>
          ))}
          <a onClick={() => navTo('register')}>
            <button className="btn-register" style={{ width: '100%', marginTop: '8px' }}>Register</button>
          </a>
        </div>
      )}
    </nav>
  );
}
