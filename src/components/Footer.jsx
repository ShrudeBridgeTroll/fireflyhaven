export default function Footer({ theme }) {
  return (
    <footer className={`site-footer footer-${theme}`}>
      <a className="footer-brand" href="#home">✦ &nbsp;fireflyhaven.</a>
      <p>Made with React, a little wonder, and a whole lot of light.</p>
      <span>Currently exploring: {theme === 'dark' ? 'Night ✦' : 'Day ☀'}</span>
    </footer>
  );
}
