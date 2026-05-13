# UI Games League 🎮⚡

Website kompetisi esports untuk pelajar dan mahasiswa Indonesia.

## Struktur Proyek

```
ui-games-league/
├── index.html                  # Entry HTML
├── vite.config.js              # Konfigurasi Vite
├── package.json
└── src/
    ├── main.jsx                # ReactDOM entry point
    ├── App.jsx                 # Root component + routing
    ├── components/
    │   ├── Background.jsx      # Stars, orbs, cursor, scanline
    │   ├── Navbar.jsx          # Navigation bar + dropdown
    │   ├── Footer.jsx          # Footer dengan links
    │   └── CountdownBox.jsx    # Kotak hitung mundur
    ├── pages/
    │   ├── HomePage.jsx        # Halaman utama
    │   ├── CompPage.jsx        # Halaman detail kompetisi (ML/Val/PUBG)
    │   └── RegisterPage.jsx    # Formulir pendaftaran
    ├── hooks/
    │   └── useCountdown.js     # Custom hook countdown timer
    ├── data/
    │   └── constants.js        # Data game, timeline, FAQ, dll
    └── styles/
        ├── global.css          # CSS variables, reset, background effects
        └── components.css      # Styles per komponen
```

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## Tech Stack

- **React 18** – UI library
- **Vite** – Build tool & dev server
- **CSS Custom Properties** – Theming & design tokens
- **Google Fonts** – Orbitron, Rajdhani, Exo 2

## Fitur

- ⚡ Custom neon cursor dengan particle burst saat klik
- 🌟 Animated star background
- 🎮 3 halaman kompetisi (Mobile Legends, Valorant, PUBG Mobile)
- ⏱️ Live countdown timer menuju deadline pendaftaran
- 📋 Tab system: Overview, Matches, Bracket, Players
- ❓ Accordion FAQ
- 📝 Form pendaftaran dengan success state
- 📱 Responsive design
# uigamesleague
