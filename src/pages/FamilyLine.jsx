import { Link } from 'react-router-dom';
import { PageHeader, Section, StatusChip } from '../components/ui.jsx';
import { line, people, roman } from '../data/people.jsx';

function TreeNode({ id, sub, now }) {
  return (
    <Link to={`/people/${id}`} className={`tnode${now ? ' now' : ''}`}>
      <span className="tname">{people[id].name}</span>
      <span className="tsub">{sub}</span>
    </Link>
  );
}

export default function FamilyLine() {
  return (
    <>
      <PageHeader eyebrow="The family line" title="One line, eleven generations">
        <p>
          One register for the whole line, generation by generation, from <strong>Thomas Read</strong> of Chelmsford to
          the present day. The top two generations rest on the published genealogies and are marked as the research
          line; from <strong>Capt. Joseph Read</strong> down, the line is confirmed: Westford's vital records carry
          Joseph to Joshua to Isaiah, and the Stoddard documents name John as Isaiah's son. Dates for the Stoddard
          generations come from the family's working tree and its attached records. Later generations are living family,
          listed by name and relationship.
        </p>
      </PageHeader>

      <Section id="documented">
        <ol className="lineage">
          {line.map((id, i) => {
            const p = people[id];
            const next = line[i + 1] && people[line[i + 1]];
            const brokenBelow = next && (p.status !== 'documented' || next.status !== 'documented');
            return (
              <li key={id} className={`${p.status}${brokenBelow ? ' research-below' : ''}`}>
                <span className="node" aria-hidden="true" />
                <div className="lineage-card">
                  <div className="who">
                    <span className="gen">Gen. {roman(p.gen)}</span>
                    <Link className="name" to={`/people/${id}`}>{p.name}</Link>
                    <StatusChip status={p.status} />
                  </div>
                  <div className="facts">
                    {p.dates && <span>{p.dates}</span>}
                    {p.place && <span>{p.place}</span>}
                  </div>
                  <p className="kids">{p.summary}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section
        id="branches"
        title="The modern branches"
        intro={
          <p>
            From Arthur Reed down, the line forks, and a straight descent list stops telling the story. His three sons
            head three branches, set out side by side, with the present generation given equal weight on each side.
            Select any name to open that person's page.
          </p>
        }
      >
        <div className="ftree" role="group" aria-label="Descendant chart: Arthur Reed, father of Paul, Arthur and Mark. Paul is the father of Paul Reed II. Mark is the father of Dan Reed and Steven Reed.">
          <ul>
            <li>
              <TreeNode id="arthur-reed" sub="Generation IX · the grandfather" />
              <ul>
                <li>
                  <TreeNode id="paul-reed" sub="son of Arthur · Generation X" />
                  <ul>
                    <li><TreeNode id="paul-reed-ii" sub="Generation XI · son of Paul" now /></li>
                  </ul>
                </li>
                <li><TreeNode id="arthur-reed-uncle" sub="son of Arthur · Generation X" /></li>
                <li>
                  <TreeNode id="mark-reed" sub="son of Arthur · Generation X" />
                  <ul>
                    <li><TreeNode id="dan-reed" sub="Generation XI · son of Mark" now /></li>
                    <li><TreeNode id="steven-reed" sub="Generation XI · son of Mark" now /></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
