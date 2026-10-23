import { Link } from 'react-router-dom';
import { DocFigure } from '../components/DocFigure.jsx';
import { Callout, PageHeader, Record, Section, StatusChip, To } from '../components/ui.jsx';
import { people } from '../data/people.jsx';

function SoldierCard({ id }) {
  const p = people[id];
  const s = p.service;
  return (
    <article className="card">
      <h3><Link to={`/people/${id}`}>{p.name}</Link></h3>
      <div className="meta">
        {p.dates && <span>{p.dates}</span>}
        <span className="relation">{s.lineLabel}</span>
        {s.war !== 'other' && <StatusChip status={p.status} />}
      </div>
      <Record rows={[['Relation', `${p.relation[0].toUpperCase()}${p.relation.slice(1)} of Paul Reed II.`], ...s.rows]} />
      {s.notes?.map((n, i) => <p key={i}>{n}</p>)}
    </article>
  );
}

export default function Soldiers() {
  return (
    <>
      <PageHeader eyebrow="The soldiers" title="The men who carried arms">
        <p>
          Set out war by war: what each man did, the rank he held, the dates he served, and how he stands to the family.
          Thomas Read fought in <strong>King Philip's War</strong> in 1676. A century later the{' '}
          <strong>Revolutionary War</strong> took four men of one Westford household: Capt. Joseph Read; his son Joshua,
          who answered the Lexington alarm on the war's first day; and Joshua's sons Elnathan and Joshua Jr., both
          Continental soldiers. The Revolutionary details come from the official{' '}
          <strong>Massachusetts Soldiers and Sailors of the Revolutionary War</strong> roster.
        </p>
      </PageHeader>

      <Section id="kpw" title="King Philip's War, 1675 to 1678">
        <div className="cards"><SoldierCard id="thomas-read" /></div>
      </Section>

      <Section id="revolution" title="The Revolutionary War, 1775 to 1783">
        <div className="cards">
          <SoldierCard id="joseph-read" />
          <SoldierCard id="joshua-read" />
          <SoldierCard id="elnathan-read" />
          <SoldierCard id="joshua-read-jr" />
        </div>
        <Callout title="No riflemen, no dragoons">
          <p>
            The Massachusetts roster was checked for the war's specialist arms as well as the line regiments. Reeds do
            turn up in them, a Robert Reed among the riflemen, a James Reed in Sheldon's Light Dragoons, a Benjamin Reed
            in Morgan's Riflemen, but they come from other towns, and no record ties any of them to the Westford line. No
            man on this page served as a rifleman or a dragoon: this family's Revolutionary service was militia duty and
            line infantry.
          </p>
        </Callout>
      </Section>

      <Section id="also" title="Also in the records">
        <div className="cards">
          <SoldierCard id="william-reed" />
          <article className="card">
            <h3>Joshua Reed, of Reed's Pond</h3>
            <div className="meta">
              <span className="relation">Revolutionary soldier, settled in Stoddard</span>
              <StatusChip status="open" />
            </div>
            <Record
              rows={[
                ['Record', <>Gould's <em>History of Stoddard</em> names him among the Revolutionary soldiers who afterwards lived in Stoddard. Reed's Pond, near where he once resided, still bears his name.</>],
                ['Lead', <>Possibly <Link to="/people/joshua-read-jr">Joshua Read Jr.</Link>, Isaiah's older brother. He is not Joshua Read (Gen. IV), Isaiah's father.</>],
              ]}
            />
            <p>
              This page once filed him as no relation. The Stoddard documents put two of Isaiah's older brothers in
              Stoddard on lots deeded to them in 1782, and Joshua Jr. fits. The case is set out on{' '}
              <To page="research" section="reeds-pond">the Research page</To>.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="soldier-documents"
        title="The documents behind the service records"
        intro={<p>Tap any image to read it full size. The Rowlandson passage and the pensioner census are transcriptions; the Bodge roster pages and the Prescott Memorial page are scans.</p>}
      >
        <div className="doc-grid">
          <DocFigure id="rowlandson-thirteenth-remove" />
          <DocFigure id="bodge-falls-fight-p250" />
          <DocFigure id="bodge-falls-fight-p251" />
          <DocFigure id="pensioner-1840-elnathan" />
          <DocFigure id="prescott-entry-603" note="The genealogy's service note for Elnathan, matching the Massachusetts roster's record of his 1777 to 1780 enlistment." />
        </div>
      </Section>
    </>
  );
}
