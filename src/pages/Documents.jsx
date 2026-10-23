import { DocFigure } from '../components/DocFigure.jsx';
import { PageHeader, Section, To } from '../components/ui.jsx';
import { collections, documents } from '../data/documents.jsx';
import { sourceKinds, sources } from '../data/sources.jsx';

const extracts = [
  {
    title: '"John Reed\'s father, Isaiah Reed"',
    from: '"The John Reed Homestead," Arlene Rasmussen',
    body: [
      'Rasmussen\'s history of the Jackson Hill property traces the farm deed by deed from John\'s 1842 purchase, and names his father outright, twice: "John Reed\'s father, Isaiah Reed." The same history calls Jonas P. Reed "brother of John Reed," which lines up with the records, because Jonas is confirmed as Isaiah\'s son.',
    ],
  },
  {
    title: "Isaiah's will, 1868",
    from: 'Cheshire County Probate No. 427',
    quote: 'Ten dollars each to "Jonas, John, Nancy and his grandson Columbus," with the homestead going to son Edward.',
    body: ['John is named in his father\'s will alongside his brother, his sister and his nephew. Wills name children; this one names John.'],
  },
  {
    title: 'The vital-records extract',
    from: "Handwritten extract, Society Reed file",
    quote: '"John Reed died 5 Oct 1866 from typhoid age 49 yrs. 7 mos 5 days. parents Isaiah and Lydia Reed."',
    body: ['The strongest single piece of paper in the packet, independent of the Homestead history. The age works back to a birth on February 28, 1817, which corrects the February 22 date the family tree used to carry.'],
  },
  {
    title: 'Color from the packet',
    from: 'Society Reed file, 134 pages',
    body: [
      'The packet filled in lives as well as links. Isaiah, late in life, was excommunicated from Stoddard\'s Congregational church for slipping away to Universalist meetings, while his son Jonas P. sat as a deacon of that same church. John\'s sister Nancy married twice, which resolves a standing conflict between records that seemed to give her two different husbands. And John\'s widow Harriet remarried in 1871, to James Simonds.',
    ],
  },
];

export default function Documents() {
  return (
    <>
      <PageHeader eyebrow="Documents" title="The paper behind the record">
        <p>
          Everything this site claims rests on paper, and this page gathers it in one place: the documents the family
          holds, the key extracts quoted from them, and every source used or cited anywhere on the site. Each image is
          labeled as what it is: a <strong>scan of the original</strong>, or a <strong>transcription</strong>, where the
          source's verified wording is set out as text rather than photographed.
        </p>
      </PageHeader>

      <Section
        id="stoddard-documents"
        title="The Stoddard documents"
        intro={
          <p>
            The family's papers hold two sets of Stoddard documents. The first is Arlene Rasmussen's deed-by-deed history,{' '}
            <strong>"The John Reed Homestead,"</strong> which traces the Jackson Hill farm from John's 1842 purchase
            forward and names his father outright. The second is the Historical Society of Cheshire County's{' '}
            <strong>Reed file</strong>, a 134-page research packet the Society compiled in 2015: register pages,
            handwritten vital-records extracts, a descendant chart, and notes from the town's own records. Read together,
            they confirm the link the line stands on: John Reed was Isaiah Reed's son.
          </p>
        }
      >
        <div className="cards">
          {extracts.map((e) => (
            <article className="card" key={e.title}>
              <h3>{e.title}</h3>
              <div className="meta"><span className="relation">{e.from}</span></div>
              {e.quote && <blockquote className="doc-quote">{e.quote}</blockquote>}
              {e.body.map((b, i) => <p key={i}>{b}</p>)}
            </article>
          ))}
        </div>
        <p className="see-also">
          One question the packet raised and could not answer, Hannah or Harriet, is on{' '}
          <To page="research" section="hannah-or-harriet">the Research page</To>.
        </p>
      </Section>

      {collections.map((c) => (
        <Section key={c.id} id={`collection-${c.id}`} title={c.title} intro={<p>{c.intro}</p>}>
          <div className="doc-grid">
            {Object.keys(documents)
              .filter((d) => documents[d].collection === c.id)
              .map((d) => <DocFigure key={d} id={d} />)}
          </div>
        </Section>
      ))}

      <Section id="sources" title="Sources and resources" intro={<p>Every publication and record collection used or cited on this site, with links where the family has them.</p>}>
        {sourceKinds.map((k) => (
          <div key={k.id} className="source-group">
            <h3>{k.title}</h3>
            <ul className="sources">
              {sources.filter((s) => s.kind === k.id).map((s) => (
                <li key={s.title}>
                  <span className="src-title">
                    {s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title} ↗</a> : s.title}
                  </span>
                  <span className="src-meta">{s.meta}</span>
                  <p>{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
    </>
  );
}
