import { Link } from 'react-router-dom';
import { PageHeader, Section, StatusChip } from '../components/ui.jsx';
import { groups, people, roman } from '../data/people.jsx';

export function PersonTile({ id }) {
  const p = people[id];
  return (
    <Link to={`/people/${id}`} className="person-tile">
      <span className="person-tile-top">
        {p.gen ? <span className="gen">Gen. {roman(p.gen)}</span> : <span className="gen muted">Kin</span>}
        <StatusChip status={p.status} />
      </span>
      <span className="person-tile-name">{p.name}</span>
      {p.dates && <span className="person-tile-dates">{p.dates}</span>}
      <span className="person-tile-rel">{p.relation}{p.descriptor ? ` · ${p.descriptor}` : ''}</span>
    </Link>
  );
}

export default function People() {
  return (
    <>
      <PageHeader eyebrow="People" title="Everyone in the record">
        <p>
          A page for each person in the line, oldest first, with the brothers and cousins who stand beside it. Kinship is
          given relative to the present generation, Paul Reed II.
        </p>
      </PageHeader>
      {groups.map((g) => (
        <Section key={g.title} title={g.title} intro={<p>{g.intro}</p>}>
          <div className="tile-grid">
            {g.ids.map((id) => <PersonTile key={id} id={id} />)}
          </div>
        </Section>
      ))}
    </>
  );
}
