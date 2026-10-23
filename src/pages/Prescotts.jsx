import { DocFigure } from '../components/DocFigure.jsx';
import { Callout, P, PageHeader, Section, StatusChip, To } from '../components/ui.jsx';
import { openQuestions } from '../data/research.jsx';

const prescotts = [
  { gen: 'I', name: 'John Prescott', place: 'Lancaster, Massachusetts', text: <>Came from England and founded the town of Lancaster, in New England by 1640. Every Prescott on this page descends from him, and so, through Anne, does a branch of this family's cousins. Father of <b>Jonas Prescott</b>.</> },
  { gen: 'II', name: 'Jonas Prescott', dates: 'b. 1648', place: 'Lancaster, Massachusetts', text: <>Son of John Prescott of Lancaster. Father of <b>Jonas Prescott Jr.</b></> },
  { gen: 'III', name: 'Jonas Prescott Jr.', dates: 'b. 1678', place: 'Westford, Massachusetts', text: <>The generation that carried the family to Westford: Jonas Jr. owned an iron forge on Stony Brook, the stream that runs through the town. Father of <b>Jonas Prescott</b>.</> },
  { gen: 'IV', name: 'Jonas Prescott', dates: 'b. 1703', place: 'Westford, Massachusetts', text: <>Son of Jonas Jr. Father of <b>Timothy Prescott</b>.</> },
  { gen: 'V', name: 'Timothy Prescott', dates: 'b. 1728', place: 'Westford, Massachusetts', text: <>Son of Jonas. Father of <b>Anne Prescott</b>.</> },
  {
    gen: 'VI', name: 'Anne (Annie) Prescott', dates: 'b. May 7, 1761 – d. December 6, 1821', place: 'born at Westford, Massachusetts', status: 'documented', id: 'anne-prescott',
    text: <>Married <P id="elnathan-read">Elnathan Read</P> at Westford in 1781, a marriage Westford's records hold. Elnathan was Joshua and Mary Read's son and Isaiah's older brother, so Anne married into the generation above the Stoddard line: her children by Elnathan are Read cousins of everyone on the Family line page, not ancestors of it. Her dates come from the published Prescott genealogy; the family tree had her only as "Anne Prescott" of Westford, with no parents, which is where this page picks her up.</>,
  },
];

export default function Prescotts() {
  const open = openQuestions.find((q) => q.id === 'elnathan-last-years');
  return (
    <>
      <PageHeader eyebrow="The Prescotts" title="The family Elnathan married into">
        <p>
          The Reeds are not the only old family in this record. <P id="elnathan-read">Elnathan Read</P> (1758–1841),
          Isaiah's older brother, married <strong>Anne Prescott</strong> at Westford in 1781, and her family reaches back
          as far as ours does: six generations from Anne to <strong>John Prescott</strong>, the founder of Lancaster,
          Massachusetts. The line below is the one the published Prescott genealogy gives, checked where it meets the
          records this family holds.
        </p>
      </PageHeader>

      <Section id="prescott-line">
        <ol className="lineage">
          {prescotts.map((p) => (
            <li key={p.gen} id={p.id} className={p.status || 'documented'}>
              <span className="node" aria-hidden="true" />
              <div className="lineage-card">
                <div className="who">
                  <span className="gen">Gen. {p.gen}</span>
                  <span className="name">{p.name}</span>
                  {p.status && <StatusChip status={p.status} />}
                </div>
                <div className="facts">
                  {p.dates && <span>{p.dates}</span>}
                  <span>{p.place}</span>
                </div>
                <p className="kids">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="prescott-notes" title="Notes on the Prescotts">
        <div className="cards">
          <article className="card">
            <h3>The marriage that joins the families</h3>
            <div className="meta"><span>Westford, Massachusetts · 1781</span><StatusChip status="documented" /></div>
            <p>
              Westford's records hold the 1781 marriage of Elnathan Read and Anne Prescott, and that one entry ties two
              of Massachusetts's old families together. Isaiah went on to Stoddard and founded the line this site
              documents. Elnathan's own branch took a different road, west into Vermont, and it is through him, not
              through Isaiah, that the Prescotts connect to this family.
            </p>
          </article>
          <article className="card">
            <h3>Westford to Cavendish, Vermont</h3>
            <div className="meta"><span className="relation">Elnathan and Anne's branch</span></div>
            <p>
              Elnathan served in the Continental Army through the Revolution, and after the war the couple put down roots
              at Cavendish, Vermont, where Elnathan died. The <strong>1840 Census of Pensioners</strong> lists him at
              Cavendish, aged 85. Anne had died on December 6, 1821.
            </p>
          </article>
          <article className="card">
            <h3>Jonas Jr. and the Stony Brook forge</h3>
            <div className="meta"><span>Westford, Massachusetts</span></div>
            <p>
              Anne's great-great-grandfather Jonas Prescott Jr. (b. 1678) owned an iron forge on Stony Brook in Westford.
              It plants the Westford Prescotts in the town's working landscape two generations before Anne: when she
              married Elnathan Read in 1781, she was marrying within a town both families had belonged to for decades.
            </p>
          </article>
          <article className="card">
            <h3>Colonel William Prescott: a cousin, not an ancestor</h3>
            <div className="meta"><span className="relation">Bunker Hill, 1775</span></div>
            <p>
              The famous Prescott of the Revolution, Colonel William Prescott, who commanded the American redoubt at
              Bunker Hill, descends from the same John Prescott of Lancaster. He belongs to a different branch, though:
              a distant cousin of Anne's Westford line, not a direct ancestor of it, and this page keeps him where the
              genealogy puts him.
            </p>
          </article>
        </div>
        <Callout tone="open" title={`Open: ${open.title}`}>
          {open.body.map((b, i) => <p key={i}>{b}</p>)}
        </Callout>
      </Section>

      <Section id="prescott-documents" title="The documents">
        <div className="doc-grid">
          <DocFigure id="prescott-entry-603" />
          <DocFigure id="prescott-children-1077" />
          <DocFigure id="pensioner-1840-elnathan" />
        </div>
        <p className="see-also">All sources are listed on <To page="documents" section="sources">the Documents page</To>.</p>
      </Section>
    </>
  );
}
