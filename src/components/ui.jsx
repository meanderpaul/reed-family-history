import { Link } from 'react-router-dom';

export const STATUS = {
  documented: { label: 'Documented', tone: 'doc' },
  research: { label: 'Research line', tone: 'open' },
  open: { label: 'Open lead', tone: 'open' },
  disputed: { label: 'Disputed', tone: 'disp' },
  unrelated: { label: 'No relation', tone: 'none' },
};

export function StatusChip({ status, label }) {
  const s = STATUS[status];
  if (!s) return null;
  return <span className={`chip ${s.tone}`}>{label || s.label}</span>;
}

export function Legend() {
  return (
    <div className="legend" aria-label="How entries are marked">
      <span><span className="dot doc" /> Documented</span>
      <span><span className="dot open" /> Open link, still being proven</span>
      <span><span className="dot disp" /> Disputed claim</span>
    </div>
  );
}

/** Link to a person's page. Children default to nothing, so always pass a name. */
export function P({ id, children }) {
  return <Link to={`/people/${id}`}>{children}</Link>;
}

/** Link to a page, optionally to a section on it (scrolled to by ScrollManager). */
export function To({ page, section, children }) {
  const to = section ? `/${page}?s=${section}` : `/${page}`;
  return <Link to={to}>{children}</Link>;
}

export function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {children && <div className="page-intro">{children}</div>}
    </header>
  );
}

export function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section">
      {title && <h2>{title}</h2>}
      {intro && <div className="section-intro">{intro}</div>}
      {children}
    </section>
  );
}

export function Callout({ tone = 'neutral', title, children, id }) {
  return (
    <div className={`callout ${tone}`} id={id}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

/** Label/value rows, used for service records. */
export function Record({ rows }) {
  return (
    <dl className="record">
      {rows.map(([dt, dd]) => (
        <div key={dt}>
          <dt>{dt}</dt>
          <dd>{dd}</dd>
        </div>
      ))}
    </dl>
  );
}

export const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`;
