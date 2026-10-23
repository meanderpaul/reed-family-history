import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

export const NAV = [
  { to: '/', label: 'The story', end: true },
  { to: '/family', label: 'Family line' },
  { to: '/people', label: 'People' },
  { to: '/soldiers', label: 'Soldiers' },
  { to: '/prescotts', label: 'Prescotts' },
  { to: '/documents', label: 'Documents' },
  { to: '/research', label: 'Research' },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>
        Skip to content
      </a>
      <header className={`site-header${menuOpen ? ' menu-open' : ''}`}>
        <div className="wrap header-inner">
          <Link to="/" className="wordmark" aria-label="Reed Family History, home">
            <span className="wordmark-badge" aria-hidden="true">R</span>
            <span className="wordmark-text">
              <span className="wordmark-name">The Reed Family</span>
              <span className="wordmark-sub">1656 to the present</span>
            </span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="bars" aria-hidden="true"><span /><span /><span /></span>
            Menu
          </button>
          <nav id="site-nav" className="site-nav" aria-label="Pages of this site">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end}>{n.label}</NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="wrap">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div>
            <p className="footer-title">A note on the name</p>
            <p>
              The colonial generations spelled it Read: Thomas Read, Joseph Read, Joshua Read. The Stoddard line and the
              modern family spell it Reed. Both spellings appear in the records for the same people, and this site keeps
              each generation's own spelling where the sources give one.
            </p>
          </div>
          <div>
            <p className="footer-title">How to read this site</p>
            <p>
              Entries marked documented are the family's settled line. Everything else is labeled as what it is: a lead,
              an open link, or a claim in dispute, until the records say otherwise.
            </p>
          </div>
          <div>
            <p className="footer-title">Research credits</p>
            <p>Paul Reed · Paul Reed Sr · Dan Reed</p>
          </div>
        </div>
      </footer>
    </>
  );
}
