import { Link } from 'react-router-dom';
import { DocFigure } from '../components/DocFigure.jsx';
import { Legend, P, Section, To } from '../components/ui.jsx';
import { line, people, roman } from '../data/people.jsx';
import { disputed, openQuestions } from '../data/research.jsx';

const chapters = [
  {
    year: '1676',
    title: "A captive in King Philip's War",
    body: (
      <>
        The family's story opens in 1676 with <P id="thomas-read">Thomas Read</P>, a tailor of Chelmsford,
        Massachusetts, serving as a soldier in King Philip's War. Taken captive, he met Mary Rowlandson in the camps, and
        she wrote him into her famous narrative, in tears and fearing he would be killed. On May 15, 1676, Thomas escaped
        and reached Hatfield, carrying word of the encampments near the falls of the Connecticut River. Four days later,
        Captain William Turner's force attacked the encampment at Peskeompskut, remembered as the Battle of Turner's
        Falls. Thomas lived on as a Chelmsford freeman and tailor, and died sometime between 1730 and 1736. Who his
        parents were, no record found so far says. He is the top of the line, and the brick wall.
      </>
    ),
  },
  {
    year: '1709–1775',
    title: 'A century in Westford',
    body: (
      <>
        Thomas's descendants stayed in Massachusetts. His son Thomas Jr. married into Westford and died there in 1773.
        His grandson, <P id="joseph-read">Capt. Joseph Read</P>, became a central figure in Westford's civic and
        political life in the Revolutionary period: the town's historical society counts him a Boston Tea Party
        participant, a claim the Tea Party museum's researchers dispute, so it stays flagged on this site. Joseph's son{' '}
        <P id="joshua-read">Joshua</P> answered the Lexington alarm on April 19, 1775, marching in Capt. Jonathan
        Minot's company on the first day of the Revolutionary War.
      </>
    ),
  },
  {
    year: '1799',
    title: 'North to Stoddard',
    body: (
      <>
        Joshua's son <P id="isaiah-read">Isaiah</P>, born in Westford on March 17, 1778, married Lydia Procter there on
        February 12, 1799, and moved north to Stoddard, a hill town in Cheshire County, New Hampshire, where their seven
        children were born. The town history knows him as "Isaiah Reed, Esq." His later years had an edge to them: in
        1848 fire took two dwelling houses owned by Isaiah and a son, Lydia died in 1857 and he remarried, and late in
        life Stoddard's Congregational church excommunicated him for slipping away to Universalist meetings, while his
        son Jonas P. sat as a deacon of that same church. Isaiah died on March 13, 1868, and his will, proved that year,
        names his children. Among them is John.
      </>
    ),
  },
  {
    year: '1842',
    title: 'The Jackson Hill farm',
    body: (
      <>
        <P id="john-reed">John Reed</P> bought his homestead on top of Jackson Hill in 1842: some 175 acres for $2,000,
        at 2,060 feet above sea level. He farmed it with his wife Harriet, and the inventory taken after his death lists
        13 oxen, a cow, 10 sheep and 85 sap buckets, a working hill farm that made maple sugar to sell as well as to eat.
        John died of typhoid on October 5, 1866, aged 49. Harriet bought the farm back in 1869 and held it for two more
        decades, and the place stayed in Reed hands for 58 years in all.
      </>
    ),
  },
  {
    year: '1892',
    title: 'Out of the hills',
    body: (
      <>
        John's son <P id="james-edwin-reed">James Edwin</P> farmed in Stoddard like his father, and raised nine children
        there with Abby Wells. Their son <P id="william-reed">William</P>, born in Stoddard in 1892 and registered at
        birth as "Willie," carried the line into the twentieth century: his 1942 draft registration places him in
        Quincy, Massachusetts. William's son <P id="arthur-reed">Arthur</P> fathered three sons, Paul, Arthur and Mark,
        and through them the modern branches of the family run down to the present generation.
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">A working record, kept by the family</p>
          <h1>Reed Family History</h1>
          <p className="lede">
            Eleven generations, from a King Philip's War captive in Chelmsford to the present day. The line is{' '}
            <strong>confirmed</strong> from Capt. Joseph Read of Westford, Massachusetts, down through John Reed of
            Stoddard, New Hampshire: Westford's vital records carry the generations from Joseph to Isaiah, and the
            family's Stoddard documents name John as Isaiah's son. Above Joseph the line rests on the published
            genealogies.
          </p>
          <p className="lede-small">
            This site keeps what is proven apart from what is still a lead, so nobody mistakes one for the other.
          </p>
          <Legend />
          <div className="hero-actions">
            <Link className="button primary" to="/family">Walk the family line</Link>
            <Link className="button" to="/research">Where the research stands</Link>
          </div>
        </div>
        <DocFigure id="homestead-diagram" compact eager note="John Reed's homestead on Jackson Hill, Stoddard, drawn by hand in 1976." />
      </section>

      <nav className="gen-strip" aria-label="The eleven generations">
        {line.map((id) => {
          const p = people[id];
          return (
            <Link key={id} to={`/people/${id}`} className={`gen-dot ${p.status}`}>
              <span className="gen-num">{roman(p.gen)}</span>
              <span className="gen-name">{p.name.replace('Capt. ', '')}</span>
              <span className="gen-year">{p.born || ''}</span>
            </Link>
          );
        })}
      </nav>

      <div className="stats">
        <div><b>11</b><span>generations</span></div>
        <div><b>{new Date().getFullYear() - 1656}</b><span>years on record</span></div>
        <div><b>{openQuestions.length}</b><span>open questions</span></div>
        <div><b>{disputed.length}</b><span>disputed claims</span></div>
      </div>

      <Section id="story" title="The story, in brief">
        <ol className="chapters">
          {chapters.map((c) => (
            <li key={c.year}>
              <span className="chapter-year">{c.year}</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="stoddard" title="Stoddard and Reed Hill">
        <div className="prose two-col">
          <p>
            The documented line is rooted in <strong>Stoddard, New Hampshire</strong>, a hill town in Cheshire County.
            John Reed's family lived there, James Edwin was born there in 1846, and William was registered there in
            1892. The landscape still carries the name: <strong>Reed Hill</strong> is a real named summit in Stoddard,
            about a mile from the town center. Whether the hill took its name from this family is{' '}
            <To page="research" section="reed-hill">still an open question</To>.
          </p>
          <p>
            John's own place is pinned down by the Stoddard documents. His homestead stood on top of{' '}
            <strong>Jackson Hill</strong>, 2,060 feet above sea level, about a quarter mile south of the
            Stoddard–Washington line and a mile and a half east of the Marlow line. When Arlene Rasmussen walked the site
            in 1976 the house was long gone, but the L-shaped cellar hole was still there, 26 feet along its longest
            side, with the brick of the chimney piled inside it, a filled-in well across the road, the stone walls of the
            barn behind it, and old apple trees at the fork of the dirt road.
          </p>
          <p>
            Stoddard is also where the trail north begins. The Society file and Rasmussen's history agree that Isaiah
            came up from Westford, appearing on Stoddard's tax list in 1800, and that two of his older brothers were in
            Stoddard before him, on lots their grandfather deeded them in 1782. One was{' '}
            <P id="elnathan-read">Elnathan</P>; the other may well have been{' '}
            <P id="joshua-read-jr">Joshua Jr.</P>, the{' '}
            <To page="research" section="reeds-pond">Joshua Reed of Reed's Pond</To>. The Stoddard Reeds were a New
            Hampshire branch of a much older Massachusetts line.
          </p>
        </div>
      </Section>
    </>
  );
}
