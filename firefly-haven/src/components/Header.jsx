import ThemeToggle from './ThemeToggle.jsx';

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Firefly Haven home">
        <span className="brand-mark" aria-hidden="true">✦</span>
        <span>firefly<span className="brand-accent">haven.</span></span>
      </a>
      <div className="header-right">
        <span className="header-caption">CLICK THE FIREFLY TO CHANGE THE SKY</span>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
