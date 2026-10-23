import { Link, useParams } from 'react-router-dom';
import { DocFigure } from '../components/DocFigure.jsx';
import { Callout, Record, StatusChip } from '../components/ui.jsx';
import { documents } from '../data/documents.jsx';
import { childrenOf, line, people, roman } from '../data/people.jsx';
import { researchFor } from '../data/research.jsx';
import NotFound from './NotFound.jsx';

const WAR = { kpw: "King Philip's War", rev: 'Revolutionary War', other: 'In the records' };

function Kin({ label, ids }) {
  if (!ids.length) return null;
  return (
    <div className="kin-row">
      <span className="kin-label">{label}</span>
      <span>
        {ids.map((id, i) => (
          <span key={id}>
            {i > 0 && ', '}
            <Link to={`/people/${id}`}>{people[id].name}</Link>
          </span>
        ))}
      </span>
    </div>
  );
}

export default function Person() {
  const { id } = useParams();
  const p = people[id];
  if (!p) return <NotFound />;

  const parent = p.parent ? [p.parent] : [];
  const siblings = p.parent ? childrenOf(p.parent).filter((k) => k !== id) : [];
  const kids = childrenOf(id);
  const docs = Object.keys(documents).filter((d) => documents[d].people.includes(id));
  const research = researchFor(id);
  const idx = line.indexOf(id);
  const prev = idx > 0 ? line[idx - 1] : null;
  const next = idx >= 0 && idx < line.length - 1 ? line[idx + 1] : null;

  return (
    <article className="person-page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/people">People</Link> <span aria-hidden="true">/</span> {p.name}
      </nav>

      <header className="person-header">
        <p className="eyebrow">
          {p.gen ? `Generation ${roman(p.gen)}` : 'Beside the line'} · {p.relation}
        </p>
        <h1>{p.title || p.name}</h1>
        <div className="facts">
          {p.dates && <span>{p.dates}</span>}
          {(p.descriptor || p.place) && <span>{p.descriptor || p.place}</span>}
          <StatusChip status={p.status} />
        </div>
      </header>

      <div className="person-layout">
        <div className="person-main prose">
          {p.body.map((para, i) => <p key={i}>{para}</p>)}
          {p.spouseNote && <p className="spouse-note">{p.spouseNote}</p>}

          {p.service && (
            <section className="service">
              <h2>{p.service.war === 'other' ? 'Military records' : `Service · ${WAR[p.service.war]}`}</h2>
              <Record rows={p.service.rows} />
              {p.service.notes?.map((n, i) => <p key={i}>{n}</p>)}
            </section>
          )}

          {[...research.open, ...research.disputed, ...research.confirmed].length > 0 && (
            <section className="person-research">
              <h2>Research notes</h2>
              {research.confirmed.map((q) => (
                <Callout key={q.id} tone="neutral" title={q.title}>{q.body.map((b, i) => <p key={i}>{b}</p>)}</Callout>
              ))}
              {research.open.map((q) => (
                <Callout key={q.id} tone="open" title={`Open: ${q.title}`}>{q.body.map((b, i) => <p key={i}>{b}</p>)}</Callout>
              ))}
              {research.disputed.map((q) => (
                <Callout key={q.id} tone="disp" title={`Disputed: ${q.title}`}>{q.body.map((b, i) => <p key={i}>{b}</p>)}</Callout>
              ))}
            </section>
          )}

          {docs.length > 0 && (
            <section>
              <h2>Documents</h2>
              <div className="doc-grid">
                {docs.map((d) => <DocFigure key={d} id={d} compact />)}
              </div>
            </section>
          )}
        </div>

        <aside className="person-side">
          <div className="side-card">
            <h2>Family</h2>
            <Kin label="Parent" ids={parent} />
            {p.spouse && (
              <div className="kin-row"><span className="kin-label">Spouse</span><span>{p.spouse}</span></div>
            )}
            <Kin label="Siblings" ids={siblings} />
            <Kin label="Children" ids={kids} />
          </div>
          {research.evidence.length > 0 && (
            <div className="side-card">
              <h2>Records to pull</h2>
              <ul className="side-list">
                {research.evidence.map((e) => (
                  <li key={e.title} className={e.state}>
                    <span className="state-dot" aria-hidden="true" />
                    <Link to="/research?s=evidence">{e.title}</Link>
                    <span className="sr-only">{e.state === 'found' ? ' (found)' : ''}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {(prev || next) && (
        <nav className="pager" aria-label="Generations">
          {prev ? (
            <Link to={`/people/${prev}`} className="pager-link">
              <span className="pager-dir">← Generation {roman(people[prev].gen)}</span>
              <span className="pager-name">{people[prev].name}</span>
            </Link>
          ) : <span />}
          {next && (
            <Link to={`/people/${next}`} className="pager-link next">
              <span className="pager-dir">Generation {roman(people[next].gen)} →</span>
              <span className="pager-name">{people[next].name}</span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
