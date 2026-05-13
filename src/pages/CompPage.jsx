import { useState } from 'react';
import Footer from '../components/Footer';
import CountdownBox from '../components/CountdownBox';
import { useCountdown } from '../hooks/useCountdown';
import { TEAMS, PLAYERS, TIMELINE, COUNTDOWN_TARGET } from '../data/constants';

export default function CompPage({ game, setPage }) {
  const [tab, setTab] = useState('overview');
  const time = useCountdown(COUNTDOWN_TARGET);

  return (
    <div className="page page-anim">
      {/* Hero */}
<div
  className="comp-hero"
  style={{ minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
>
  <div
    className="comp-hero-bg"
    style={{
      background: `linear-gradient(135deg, ${game.color2}88 0%, rgba(4,6,26,0) 70%), linear-gradient(180deg, rgba(4,6,26,0) 0%, var(--navy) 100%)`,
    }}
  />
  <span className="comp-icon">{game.icon}</span>

  {/* Tambah wrapper flex row di sini */}
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
    
    {/* Kolom kiri - konten existing */}
    <div style={{ flex: 1 }}>
      <div
        className="comp-badge"
        style={{ border: `1px solid ${game.accent}44`, color: game.accent }}
      >
        ● LIVE REGISTRATION
      </div>
      <h1
        className="comp-title"
        style={{ color: game.accent, textShadow: `0 0 30px ${game.accent}88` }}
      >
        {game.name}
      </h1>
      <p className="comp-desc">{game.desc}</p>
      <div className="comp-btns">
        <button
          className="btn-primary"
          onClick={() => setPage('register')}
          style={{ background: `linear-gradient(135deg, ${game.color2}, ${game.accent})` }}
        >
          Guidebook
        </button>
        <button
          className="btn-outline"
          onClick={() => setPage('register')}
          style={{ borderColor: game.accent }}
        >
          Register
        </button>
      </div>
    </div>

    {/* Kolom kanan - logo game */}
  

    {/* Letakkan ini di luar kondisi individual, sebagai satu wrapper */}
<div style={{ 
  position: 'absolute', 
  right: '80px',        // geser dari kanan
  top: '50%', 
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center'
}}>
  {game.id === 'ml' && (
    <img
      src="src/assets/image2.png"
      alt="Mobile Legends"
      style={{
        width: '250px',
        maxWidth: '90%',
        mixBlendMode: 'screen',
        filter: `drop-shadow(0 0 40px ${game.accent}cc)`,
      }}
    />
  )}
  {game.id === 'val' && (
    <img
      src="src/assets/image 3.png"
      alt="Valorant"
      style={{
        width: '300px',
        maxWidth: '90%',
        mixBlendMode: 'screen',
        filter: `drop-shadow(0 0 40px ${game.accent}cc)`,
      }}
    />
  )}
  {game.id === 'pubg' && (
    <img
      src="src/assets/image 4.png"
      alt="PUBG"
      style={{
        width: '300px',
        maxWidth: '90%',
        mixBlendMode: 'screen',
        filter: `drop-shadow(0 0 40px ${game.accent}cc)`,
      }}
    />
  )}
  {game.id === 'pes' && (
    <img
      src="src/assets/image 5.png"
      alt="PES"
      style={{
        width: '300px',
        maxWidth: '90%',
        mixBlendMode: 'screen',
        filter: `drop-shadow(0 0 40px ${game.accent}cc)`,
      }}
    />
  )}
</div>

  </div>
</div>

      {/* Countdown */}
      <div style={{ padding: '0 48px 0' }}>
        <div className="countdown-section">
          <div className="section-label">DAFTAR SEBELUM</div>
          <h2 className="section-title" style={{ marginTop: '8px' }}>
            REGISTER <span className="accent">BEFORE</span>
          </h2>
          <div className="countdown-grid">
            <CountdownBox num={time.d} label="Days" />
            <CountdownBox num={time.h} label="Hour" />
            <CountdownBox num={time.m} label="Minute" />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="section">
        <div className="section-header">
          <div className="section-label">OVERVIEW</div>
          <h2 className="section-title">
            COMP <span className="accent">SUMMARY</span>
          </h2>
        </div>

        <div className="summary-grid">
          <div className="summary-card">
            <div className="summary-icon">🏆</div>
            <div className="summary-val">120.000.000</div>
            <div className="summary-desc">Total Hadiah</div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">👥</div>
            <div className="summary-val">128 Tim</div>
            <div className="summary-desc">Kuota Peserta</div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">📅</div>
            <div className="summary-val">1 Jul</div>
            <div className="summary-desc">Mulai Pertandingan</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {['overview', 'matches', 'bracket', 'players'].map((t) => (
            <button
              key={t}
              className={`tab${tab === t ? ' active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tab === 'overview' && (
          <div>
            <h3
              style={{
                fontFamily: "'Orbitron',monospace",
                fontSize: '1rem',
                marginBottom: '16px',
                color: 'var(--violet)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Tim Contribution
            </h3>
            <div className="contrib-list">
              {TEAMS.slice(0, 5).map((team, i) => (
                <div key={i} className="contrib-item">
                  <div className="contrib-rank">#{i + 1}</div>
                  <div className="contrib-team">
                    <div className="contrib-name">{team}</div>
                    <div className="contrib-school">
                      Universitas Indonesia • {game.short}
                    </div>
                  </div>
                  <div className="contrib-score">{1000 - i * 80} pts</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'bracket' && (
          <div>
            <h3
              style={{
                fontFamily: "'Orbitron',monospace",
                fontSize: '1rem',
                marginBottom: '20px',
                background: `linear-gradient(90deg, ${game.accent}, var(--violet))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              BRACKET
            </h3>
            <div className="bracket-wrap">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '32px',
                  minWidth: '600px',
                }}
              >
                {/* Quarterfinal */}
                <div>
                  <div className="bracket-col-title">Quarterfinal</div>
                  {[[0, 1], [2, 3], [4, 5], [6, 7]].map(([a, b], i) => (
                    <div key={i} style={{ marginBottom: '16px' }}>
                      <div className="bracket-team winner">
                        {TEAMS[a]} <span style={{ color: 'var(--yellow)' }}>W</span>
                      </div>
                      <div className="bracket-team">{TEAMS[b]}</div>
                    </div>
                  ))}
                </div>
                {/* Semifinal */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                  <div className="bracket-col-title">Semifinal</div>
                  {[[0, 2], [4, 6]].map(([a, b], i) => (
                    <div key={i} style={{ marginBottom: '24px' }}>
                      <div className="bracket-team winner">
                        {TEAMS[a]} <span style={{ color: 'var(--yellow)' }}>W</span>
                      </div>
                      <div className="bracket-team">{TEAMS[b]}</div>
                    </div>
                  ))}
                </div>
                {/* Grand Final */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="bracket-col-title">Grand Final</div>
                  <div
                    className="bracket-team winner"
                    style={{
                      borderColor: 'var(--yellow)',
                      boxShadow: '0 0 20px rgba(251,191,36,0.3)',
                    }}
                  >
                    🏆 {TEAMS[0]}
                  </div>
                  <div className="bracket-team" style={{ marginTop: '4px' }}>{TEAMS[2]}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'matches' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[[0, 1], [2, 3], [4, 5], [6, 7]].map(([a, b], i) => (
              <div
                key={i}
                className="card"
                style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div
                  style={{
                    fontFamily: "'Orbitron',monospace",
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                    minWidth: '80px',
                  }}
                >
                  Match {i + 1}
                </div>
                <div
                  style={{
                    flex: 1,
                    textAlign: 'right',
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {TEAMS[a]}
                </div>
                <div
                  style={{
                    background: 'rgba(91,33,245,0.2)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontFamily: "'Orbitron',monospace",
                    fontSize: '0.85rem',
                    fontWeight: 800,
                  }}
                >
                  3 — 1
                </div>
                <div
                  style={{
                    flex: 1,
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {TEAMS[b]}
                </div>
                <div
                  style={{
                    background: 'rgba(16,185,129,0.2)',
                    border: '1px solid rgba(16,185,129,0.4)',
                    borderRadius: '100px',
                    padding: '4px 12px',
                    fontSize: '0.75rem',
                    color: 'var(--green)',
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 700,
                  }}
                >
                  SELESAI
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'players' && (
          <div className="players-grid">
            {PLAYERS.map((p, i) => (
              <div key={i} className="player-card">
                <div
                  className="player-avatar"
                  style={{
                    background: `linear-gradient(135deg, ${game.color2}, rgba(91,33,245,0.3))`,
                  }}
                >
                  {p.emo}
                </div>
                <div className="player-info">
                  <div className="player-name">{p.name}</div>
                  <div className="player-role" style={{ color: game.accent }}>
                    {p.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Timeline */}
      <div className="section">
        <div className="section-header">
          <div className="section-label">JADWAL</div>
          <h2 className="section-title">
            TIME<span className="accent">LINE</span>
          </h2>
        </div>
        <div style={{ position: 'relative', padding: '80px 0' }}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '2px',
              background: `linear-gradient(90deg,transparent,${game.accent},var(--violet),transparent)`,
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {TIMELINE.map((t, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                {t.pos === 'top' && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 'calc(50% + 20px)',
                      textAlign: 'center',
                      width: '120px',
                      transform: 'translateX(-50%)',
                      left: '50%',
                    }}
                  >
                    <strong
                      style={{
                        display: 'block',
                        fontFamily: "'Orbitron',monospace",
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        color: 'var(--white)',
                        letterSpacing: '0.05em',
                        marginBottom: '4px',
                      }}
                    >
                      {t.label}
                    </strong>
                    <span style={{ fontSize: '0.7rem', color: game.accent }}>{t.date}</span>
                  </div>
                )}
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: game.accent,
                    border: '3px solid var(--navy)',
                    boxShadow: `0 0 15px ${game.accent}88`,
                    zIndex: 2,
                    position: 'relative',
                  }}
                />
                {t.pos === 'bottom' && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(50% + 20px)',
                      textAlign: 'center',
                      width: '120px',
                      transform: 'translateX(-50%)',
                      left: '50%',
                    }}
                  >
                    <strong
                      style={{
                        display: 'block',
                        fontFamily: "'Orbitron',monospace",
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        color: 'var(--white)',
                        letterSpacing: '0.05em',
                        marginBottom: '4px',
                      }}
                    >
                      {t.label}
                    </strong>
                    <span style={{ fontSize: '0.7rem', color: game.accent }}>{t.date}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
