import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Fireflies from './components/Fireflies.jsx';
import './App.css';

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('firefly-haven-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // Storage may be unavailable in a private browsing session.
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  // LIFTED STATE: App is the common ancestor of all themed components.
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem('firefly-haven-theme', theme);
    } catch {
      // The toggle still works if storage is blocked.
    }
  }, [theme]);

  return (
    <div className={`app theme-${theme}`}>
      <div className="sky" aria-hidden="true">
        <div className="sun" />
        <div className="moon" />
        <div className="stars" />
        <div className="hill hill-back" />
        <div className="hill hill-front" />
        <div className="tree tree-left" />
        <div className="tree tree-right" />
      </div>

      <Fireflies theme={theme} />
      <div className="app-content">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <Nav theme={theme} />
        <main id="main-content">
          <section id="home" className="hero" aria-labelledby="hero-heading">
            <p className="eyebrow">AN INTERACTIVE LITTLE FOREST</p>
            <h1 id="hero-heading">A little light<br /><span>changes everything.</span></h1>
            <p className="hero-copy">
              Every forest has two stories. One unfolds in sunshine; the other
              begins when the fireflies wake. Tap our glowing friend to switch worlds.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#about">Explore the forest <span aria-hidden="true">↗</span></a>
              <span className="theme-hint">{isDark ? '✦ The fireflies are awake' : '☀ The forest is waking up'}</span>
            </div>
            <div className="scroll-cue" aria-hidden="true">↓ &nbsp; WANDER BELOW</div>
          </section>

          <section id="about" className="info-section" aria-labelledby="about-heading">
            <div className="section-heading">
              <p className="eyebrow">WELCOME TO FIREFLY HAVEN</p>
              <h2 id="about-heading">Two moods. One magical place.</h2>
              <p>Switch between the warmth of the day and the wonder of the night. The whole page changes with you.</p>
            </div>
            <div className="feature-grid">
              <article className="feature-card"><span className="feature-icon" aria-hidden="true">☀</span><h3>Sunlit days</h3><p>Warm colors, gentle skies, and a forest full of life.</p></article>
              <article className="feature-card"><span className="feature-icon" aria-hidden="true">✦</span><h3>Glowing nights</h3><p>Twelve tiny fireflies take flight as the stars come out.</p></article>
              <article className="feature-card"><span className="feature-icon" aria-hidden="true">♡</span><h3>Made to explore</h3><p>Keyboard-friendly controls and a responsive layout for every visitor.</p></article>
            </div>
          </section>

          <section id="discover" className="discovery-panel" aria-labelledby="discover-heading">
            <div><p className="eyebrow">THE MAGIC IS IN THE DETAILS</p><h2 id="discover-heading">Can you spot all 12?</h2><p>When the moon rises, twelve golden lights drift through the meadow. Watch them dance in their own little patterns.</p></div>
            <div className="count-orb" aria-label="12 animated fireflies"><strong>12</strong><span>tiny lights</span></div>
          </section>
        </main>
        <Footer theme={theme} />
      </div>
    </div>
  );
}
