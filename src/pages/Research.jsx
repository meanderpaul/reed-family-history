import { Link } from 'react-router-dom';
import { Callout, PageHeader, Section, StatusChip, To } from '../components/ui.jsx';
import { people } from '../data/people.jsx';
import { confirmed, disputed, evidence, openQuestions, otherReeds } from '../data/research.jsx';

function Item({ q, tone, prefix }) {
  return (
    <Callout id={q.id} tone={tone} title={<>{prefix}{q.title}{q.isNew && <span className="new-badge">Updated</span>}</>}>
      {q.body.map((b, i) => <p key={i}>{b}</p>)}
      {q.people.length > 0 && (
        <p className="touches">
          Concerns:{' '}
          {q.people.map((id, i) => (
            <span key={id}>{i > 0 && ', '}<Link to={`/people/${id}`}>{people[id].name}</Link></span>
          ))}
        </p>
      )}
    </Callout>
  );
}

const STATE = { todo: 'To pull', found: 'Found', superseded: 'No longer the key' };

export default function Research() {
  const pulled = evidence.filter((e) => e.state !== 'todo').length;
  return (
    <>
      <PageHeader eyebrow="Research" title="Where the research stands">
        <p>
          The working side of the record, in one place: the questions still open, the claims in dispute, the links now
          settled, the records that would move the research line into documented fact, and the Stoddard Reeds who are
          not ours.
        </p>
        <nav className="jump" aria-label="On this page">
          <To page="research" section="open">{openQuestions.length} open questions</To>
          <To page="research" section="disputed">{disputed.length} disputed claims</To>
          <To page="research" section="evidence">Evidence hunt · {pulled} of {evidence.length} resolved</To>
          <To page="research" section="other-reeds">The other Reeds</To>
        </nav>
      </PageHeader>

      <Section id="open" title="Open questions">
        {openQuestions.map((q) => <Item key={q.id} q={q} tone="open" prefix="Open: " />)}
      </Section>

      <Section id="disputed" title="Disputed claims">
        {disputed.map((q) => <Item key={q.id} q={q} tone="disp" prefix="Disputed: " />)}
      </Section>

      <Section id="confirmed" title="Settled">
        {confirmed.map((q) => <Item key={q.id} q={q} tone="neutral" />)}
      </Section>

      <Section
        id="evidence"
        title="The evidence hunt"
        intro={<p>The records that would turn the research line into documented fact, in rough order of value. Two pulls have already landed, Isaiah's probate and John's death record, both among the family's Stoddard documents.</p>}
      >
        <ol className="evidence">
          {evidence.map((e, i) => (
            <li key={e.title} className={e.state}>
              <span className="num">{i + 1}</span>
              <div>
                <span className={`state ${e.state}`}>{STATE[e.state]}</span>
                {e.isNew && <span className="new-badge">New</span>}
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="other-reeds"
        title="The other Reeds of Stoddard"
        intro={
          <>
            <p>
              Stoddard had Reeds before Isaiah arrived in 1799, and Reeds alongside him after. Same small town, same
              surname, even the same first names, and a tree built on name matches alone will merge them without
              blinking. Two of the earlier Revolutionary soldiers Gould lists have turned out to be, or may be, family:{' '}
              <Link to="/people/elnathan-read">Elnathan</Link>, now confirmed as Isaiah's brother, and Joshua of Reed's
              Pond, now <To page="research" section="reeds-pond">an open lead</To>. The rest are below: Reeds no record ties to
              Isaiah's household. That is an absence of any link, not a proof that none could exist; if a document ever
              connects them, this page gets corrected.
            </p>
          </>
        }
      >
        <div className="cards">
          {otherReeds.map((r) => (
            <article className="card" key={r.name}>
              <h3>{r.name}</h3>
              <div className="meta"><span className="relation">{r.where}</span><StatusChip status="unrelated" /></div>
              <p>{r.body}</p>
            </article>
          ))}
        </div>
        <Callout title="How to tell the Stoddard Reed families apart">
          <p>
            Our line's Stoddard paper trail runs through Isaiah: the Westford marriage in 1799, the children born in
            Stoddard after the move, the houses he and a son lost to fire in 1848, his second marriage to Lucinda Dudley
            after Lydia's death in 1857, and his burial in Joslin Cemetery in 1868. Before him come his older brothers,
            on the lots their grandfather deeded them in 1782. If a Stoddard Reed cannot be placed in Isaiah's household
            or among those brothers, the working assumption is that they belong to another line, not ours, until a
            record says otherwise.
          </p>
        </Callout>
      </Section>
    </>
  );
}
