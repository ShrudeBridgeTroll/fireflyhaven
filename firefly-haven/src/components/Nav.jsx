export default function Nav({ theme }) {
  return (
    <nav className={`site-nav nav-${theme}`} aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#about">Our world</a>
      <a href="#discover">Discover</a>
    </nav>
  );
}
