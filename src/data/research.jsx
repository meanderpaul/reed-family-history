import { P, To } from '../components/ui.jsx';

// The state of the research: what is settled, what is open, what is disputed,
// and the records still to pull. Each item lists the people it touches so the
// person pages can surface it.

export const confirmed = [
  {
    id: 'isaiah-to-john',
    title: 'Isaiah to John: confirmed in the records',
    people: ['isaiah-read', 'john-reed'],
    body: [
      <>
        This link rests on primary sources, not on the trees. Arlene Rasmussen's history of John's homestead states
        "John Reed's father, Isaiah Reed," and calls Jonas P. Reed John's brother. Isaiah's will (Cheshire County Probate
        No. 427, 1868) names John among the children it leaves money to. And a handwritten vital-records extract in the
        Society's Reed file gives John's death and his parents in a single line: "parents Isaiah and Lydia Reed." Any
        one of these would be strong; together they settle it.
      </>,
      <>
        FamilySearch's public profile for Isaiah (person L4J2-PF1), checked in October 2026, lists the same seven
        children with John, born 1817, among them, and carries records attached, including Edward's 1819 New Hampshire
        birth record naming Isaiah as father. The trees agree with the documents; they no longer have to carry the claim
        alone. The full extracts are on <To page="documents">the Documents page</To>.
      </>,
    ],
  },
];

export const openQuestions = [
  {
    id: 'reeds-pond',
    title: "Joshua Reed of Reed's Pond: Isaiah's brother?",
    people: ['joshua-read-jr'],
    isNew: true,
    body: [
      <>
        This site used to file Joshua Reed of Reed's Pond with Stoddard's unrelated Reeds. The site's own documents
        argue against that. Gould's <em>History of Stoddard</em> names him among the Revolutionary soldiers who lived in
        Stoddard after the war, and "Reed's pond, located near where Joshua Reed once resided, and still bears his
        name." The oldest gravestone Gould found in the town burying ground, dated January 1, 1792, marks a child of his.
      </>,
      <>
        Meanwhile the Society file and Rasmussen's history agree that <b>two of Isaiah's older brothers</b> were in
        Stoddard before him, on lots their grandfather deeded them in 1782. Only one of the two has been named so far:{' '}
        <P id="elnathan-read">Elnathan</P>, the other Revolutionary soldier Gould lists, whom this site once filed as
        unrelated on the same grounds and later moved into the family. Isaiah's other known older brother is{' '}
        <P id="joshua-read-jr">Joshua Read Jr.</P> (b. 1763), a Continental soldier in 1779–1780. He would have been 19
        at the 1782 deed and 28 when that child was buried in 1792.
      </>,
      <>
        That is a strong fit, not a proof. What would settle it: the 1782 deeds from Capt. Joseph Read to his grandsons
        (Cheshire County land records), which should name both brothers; and Joshua Jr.'s own trail after 1780 in the
        Westford and Stoddard records. Until one of them names him, he stays an <b>open lead</b>: not merged into the
        family, but no longer ruled out of it.
      </>,
    ],
  },
  {
    id: 'hannah-or-harriet',
    title: 'Was her name Hannah or Harriet?',
    people: ['john-reed'],
    body: [
      <>
        The Society's Reed file raised one question it could not answer. A Stoddard town record says John Reed married
        "Hannah, daughter of Peter H. and Diadama Wright." Every Reed family record, including the 1852 deed from Peter
        Wright himself, calls John's wife Harriet. Peter and Diadamia Wright's listed children include neither a Hannah
        nor a Harriet. So the first name of the family's 3rd great-grandmother is not certain: she is Harriet in the
        family records and Hannah in the town's, and the Wright children's list backs neither. It stays open until a
        record that names her plainly turns up.
      </>,
    ],
  },
  {
    id: 'elnathan-last-years',
    title: "Elnathan's last years, and his children",
    people: ['elnathan-read'],
    body: [
      <>
        Two points on this branch do not yet line up, and both are flagged rather than smoothed over. The family tree
        gives Elnathan's death as 1841; the published Prescott genealogy gives 1845, but its own age figures do not
        support that year, and the 1840 pensioner census has him alive at Cavendish either way. The children disagree
        too: the genealogy lists six children of Elnathan and Anne, born between 1783 and 1792, while the family tree
        lists two, born in 1798 and 1800. Neither set has been checked yet against Cavendish town records or Elnathan's
        pension file, which is the pull that would settle both questions.
      </>,
    ],
  },
  {
    id: 'brick-wall',
    title: "Thomas Read's parents: the brick wall",
    people: ['thomas-read'],
    body: [
      <>
        No record found so far names Thomas Read's parents. Two pairings circulate in trees, Obadiah Read and Anna Swift,
        and George Reade and Margaret Bird, and neither is supported by a record (see the disputed claims below). The
        colonial end of the line, Thomas to Thomas Jr. to Capt. Joseph, still rests on the published genealogies; the
        evidence hunt below lists the records that would move it into documented fact.
      </>,
    ],
  },
  {
    id: 'reed-hill',
    title: 'Was Reed Hill named for this family?',
    people: ['isaiah-read', 'john-reed'],
    body: [
      <>
        Reed Hill is a real named summit in Stoddard, about a mile from the town center. Whether it took its name from
        this family is exactly the kind of question the deed and probate records may answer.
      </>,
    ],
  },
];

export const disputed = [
  {
    id: 'obadiah',
    title: "Thomas was not Obadiah's son",
    people: ['thomas-read'],
    body: [
      <>
        Some older genealogies, and many online family trees that copy them, make Thomas Read the son of Obadiah Read and
        Anna Swift. The dates do not allow it. Obadiah and Anna married in 1664, and their son Thomas was born in July
        1665, which would have made him about eleven years old during King Philip's War. The captive Thomas, by contrast,
        was about twenty in 1676, born around 1656, based on historical court depositions.
      </>,
      <>
        The Reade Record challenges the Obadiah connection on exactly these grounds: Thomas's own court depositions put
        him at age 28 in April 1684 and age 40 in December 1696, both landing on a birth around 1656. Stearns, in{' '}
        <em>Early Generations of the Founders of Old Dunstable</em> (1911), is blunt: Thomas Read of Chelmsford was born
        about 1656, "parentage unknown," and was not a son of Obadiah and Anna, "as stated in Read Genealogy, 1861." That
        1861 Jacob Whittemore Reed genealogy is where the error starts, and even the family's 1915 book repeats it for
        Thomas's generation, giving him a July 1665 birth as Obadiah's son. Where the 1915 book and the Reade Record
        conflict on Thomas Sr., the Reade Record wins: its list of his children matches the 1725 court record, and the
        1915 book's does not.
      </>,
      <>
        Any tree that shows Obadiah, or Esdras Read behind him, as this family's ancestor should be treated as unproven,
        and Thomas Sr.'s parentage is honestly recorded as unknown. A second unverified pairing circulates as well: the
        family's Ancestry tree, checked in October 2026, names George Reade and Margaret Bird as Thomas's parents. No
        record supporting that pairing has been found either, so it stands in the same place as the Obadiah claim: a name
        in a tree, not a documented parent.
      </>,
    ],
  },
  {
    id: 'tea-party',
    title: 'Capt. Joseph and the Boston Tea Party',
    people: ['joseph-read'],
    body: [
      <>
        The Westford Historical Society recognizes Capt. Joseph Read as a participant in the Boston Tea Party.
        Researchers at the Boston Tea Party Ships &amp; Museum take a stricter line: the surviving documentary evidence
        does not conclusively establish that Joseph was physically present when the tea was destroyed on December 16,
        1773, and they have questioned how likely his participation was. Joseph's standing in Westford's
        Revolutionary-era civic life is not in doubt. His presence on Griffin's Wharf that night stays marked disputed
        until a primary record settles it.
      </>,
    ],
  },
];

// state: 'todo' | 'found' | 'superseded'
export const evidence = [
  {
    title: 'Middlesex court proceeding, May 10, 1725',
    state: 'todo',
    people: ['thomas-read', 'thomas-read-jr'],
    body: (
      <>
        The court record naming Thomas Read's sons: <b>John, Thomas, William, Jonathan and Benjamin</b>, described as
        men of great estate, while Thomas himself appears as "an ancient and infirm man." Cited by The Reade Record.
        Note: this is a court proceeding, not a probate. Thomas was still alive in 1730, so any probate or administration
        for him falls in the <b>1730 to 1736</b> window, in the Middlesex probate docket books.
      </>
    ),
  },
  {
    title: 'Middlesex County deed, September 30, 1730',
    state: 'todo',
    people: ['thomas-read', 'thomas-read-jr'],
    body: (
      <>
        A land deed identifying <b>Thomas Read Jr.</b>, in the digitized Middlesex deed books for 1730 on FamilySearch.
        The "Junior" styling also shows his father was still living in 1730. Together with the 1725 court proceeding, it
        would anchor the Thomas to Thomas Jr. link in original records. A companion pull from Stearns: a <b>1717 deed</b>{' '}
        from Thomas Read to Joseph Blanchard, for land Hannah inherited from her grandfather Joseph Hills and her father
        Deacon John Blanchard.
      </>
    ),
  },
  {
    title: "The 1782 deeds to Isaiah's brothers",
    state: 'todo',
    isNew: true,
    people: ['joseph-read', 'joshua-read-jr', 'elnathan-read'],
    body: (
      <>
        The Stoddard documents say Capt. Joseph Read deeded Stoddard lots to two of his grandsons in 1782. The deeds
        themselves, in the Cheshire County land records, should name both brothers, and would settle whether{' '}
        <To page="research" section="reeds-pond">Joshua Reed of Reed's Pond</To> was Joshua Read Jr. They would also
        put an original record under Capt. Joseph's family ties.
      </>
    ),
  },
  {
    title: "John Reed's birth record, Stoddard, 1817",
    state: 'superseded',
    people: ['john-reed'],
    body: (
      <>
        In <b>New Hampshire Birth Records, Early to 1900</b>. John's brother Edward (b. 1819) has a record in this set
        naming Isaiah as father, and it is attached to Isaiah's FamilySearch profile. John's own record still has not
        surfaced in the public index, and the images need a free FamilySearch sign-in to browse, but the question it was
        meant to answer is settled: the vital-records extract in the Society's Reed file names John's parents directly.
        Pulling the birth record itself is now a completeness item, not a proof item.
      </>
    ),
  },
  {
    title: "Isaiah Read's probate, 1868",
    state: 'found',
    people: ['isaiah-read', 'john-reed'],
    body: (
      <>
        Isaiah's will is Cheshire County Probate No. 427 (1868), cited in Rasmussen's Homestead history: ten dollars each
        to Jonas, John, Nancy and his grandson Columbus, with the homestead to son Edward. It names John as Isaiah's son
        from the New Hampshire side, exactly the corroboration this pull was meant to find. The will itself, in the
        Cheshire County probate books browsable through the FamilySearch catalog, is still worth pulling for the file.
      </>
    ),
  },
  {
    title: "John Reed's death record, 1866",
    state: 'found',
    people: ['john-reed'],
    body: (
      <>
        Death records of the era often name the deceased's parents, and John's does. A handwritten vital-records extract
        in the Society's Reed file reads: "John Reed died 5 Oct 1866 from typhoid age 49 yrs. 7 mos 5 days. parents
        Isaiah and Lydia Reed." It answers the Isaiah question directly, and the age at death fixes John's birth at
        February 28, 1817.
      </>
    ),
  },
  {
    title: "Elnathan's pension file and the Cavendish records",
    state: 'todo',
    people: ['elnathan-read'],
    body: (
      <>
        Elnathan's Revolutionary pension file and the Cavendish, Vermont town records: the pull that would settle his
        death year (1841 or 1845) and which list of his children, the tree's or the Prescott Memorial's, is right.
      </>
    ),
  },
  {
    title: 'Town, church and militia records',
    state: 'todo',
    people: [],
    body: (
      <>
        Chelmsford and Westford vital records, church records, land deeds and militia rolls, generation by generation,
        to firm up every link in the colonial line rather than resting it on the published genealogies alone.
      </>
    ),
  },
  {
    title: 'The Gould thread',
    state: 'todo',
    people: ['arthur-reed'],
    body: (
      <>
        The town history this research leans on was written by a Gould: <b>Isaiah Gould</b>, <em>History of Stoddard</em>,
        1897. Goulds were in Stoddard in Isaiah Reed's day and earlier, and this family has a Gould of its own: Paul's
        grandmother <b>Ethel Lois Gould</b>, wife of Arthur Reed, who married into the family in the twentieth century.
        The family believes the Reeds and the Stoddard Goulds also married back in the 1700s and 1800s. No record of an
        early Reed and Gould marriage has been pulled yet, and whether Ethel's Goulds connect to the Stoddard Goulds is
        unproven. Stoddard's marriage records and the Gould entries in the town history are the place to check.
      </>
    ),
  },
];

// Stoddard Reeds whom no record ties to Isaiah's household.
export const otherReeds = [
  {
    name: 'Asaph Reed',
    where: 'South Stoddard',
    body: (
      <>
        Gould's list of the town's accidental deaths holds one more Reed who is not ours: "Asaph Reed was frozen to death
        going home from the village in South Stoddard, aged 49." No wife, children or origin are given, and no record
        places him in Isaiah's family.
      </>
    ),
  },
  {
    name: 'Jesse Reed, and the Reed marriages',
    where: 'Stoddard, 1820s–1830s',
    body: (
      <>
        The marriage lists Gould prints show a Reed household running parallel to Isaiah's in the same years. Jesse Reed
        married Sally McIntire, and then, on March 15, 1832, Clarissa McIntire. Catharine Reed married Thomas Colburn on
        April 19, 1825, and Sally Reed married Thomas Sanderson on June 2, 1825. Olive Reed married Benjamin Jefts, and
        Sophronia Reed married Jonathan Clark. None of these names appear among Isaiah and Lydia's seven children, and the
        two sets of Reeds should be kept apart in any tree.
      </>
    ),
  },
];

export const researchFor = (id) => ({
  open: openQuestions.filter((q) => q.people.includes(id)),
  disputed: disputed.filter((q) => q.people.includes(id)),
  confirmed: confirmed.filter((q) => q.people.includes(id)),
  evidence: evidence.filter((e) => e.people.includes(id)),
});
