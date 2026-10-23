import { P, To } from '../components/ui.jsx';

// Everyone in the line and the close kin around it, oldest first.
// relation: kinship to the present generation (Paul Reed II).
// status: documented | research | open | disputed  (see STATUS in ui.jsx)
// summary: the one-paragraph register entry shown on the Family line page.
// service: the soldier's record, shown on the Soldiers page and the person's page.

export const people = {
  'thomas-read': {
    name: 'Thomas Read',
    title: 'Thomas Read, the captive',
    gen: 1,
    dates: 'c. 1656 – 1730/36',
    born: 1656,
    place: 'Chelmsford, Massachusetts',
    descriptor: 'a tailor of Chelmsford, Massachusetts',
    relation: '8th great-grandfather',
    status: 'research',
    spouse: 'Hannah Blanchard',
    parent: null,
    summary: (
      <>
        Married <b>Hannah Blanchard</b>. The King Philip's War captive who reached Hatfield on May 15, 1676. His
        parentage is the family's brick wall: no record found so far names his parents.
      </>
    ),
    body: [
      <>
        Thomas was a soldier in King Philip's War and spent part of it as a captive. Mary Rowlandson met him in
        captivity and wrote about it in her narrative, published in 1682, only six years after the events: in the
        chapter called the Thirteenth Remove, she describes Thomas in tears, fearing he would be killed, and records
        that he told her he had recently seen her husband alive. It is rare, firsthand, near-contemporary evidence that
        Thomas was real and was there.
      </>,
      <>
        On May 15, 1676, Thomas escaped and reached Hatfield, Massachusetts, carrying intelligence about the encampments
        near the falls of the Connecticut River. The Reverend John Russell described the escape in a letter dated that
        same day. Four days later, on May 19, Captain William Turner's force attacked the encampment at Peskeompskut,
        remembered as the Battle of Turner's Falls. Whether Thomas personally fought in the attack is a step beyond what
        the escape records alone show, but The Reade Record treats his presence at the Falls Fight as certain, citing
        the June 1736 township grant lists: "Thomas Read, Westford" appears on the approved list, and the claimants
        include "John Reed, Westford, son of Thomas Reed," an entry that is itself a primary father-and-son record.
      </>,
      <>
        Thomas was made a freeman on April 1, 1679, settled at Chelmsford as a tailor, and married Hannah Blanchard
        around 1679. He died sometime between September 1730 and June 1736. One correction the records force: a death
        date of March 1727 appears in some trees, the family's Ancestry tree among them when it was checked in October
        2026, but the deed of September 30, 1730 still styles his son "Thomas Read Junior," a styling that only holds
        while the father lives. Thomas was alive in 1730, so the 1727 date cannot stand.
      </>,
    ],
    service: {
      war: 'kpw',
      lineLabel: 'Generation I · head of the line',
      rows: [
        ['Rank', <>Soldier in <b>Capt. William Turner's</b> company. The Falls Fight roster lists him by name among Turner's men, with no rank above the soldiers around him.</>],
        ['Captivity', 'Taken captive in the spring of 1676 and held in the camps, where Mary Rowlandson met him and wrote about him in her narrative.'],
        ['Escape', <><b>May 15, 1676:</b> escaped and reached Hatfield, carrying word of the encampments near the falls of the Connecticut River.</>],
        ['Battle', <>The Falls Fight at Peskeompskut (Turner's Falls), <b>May 19, 1676</b>, four days after his escape.</>],
      ],
      notes: [
        <>
          His presence at the Falls Fight rests on the roster Bodge printed in <em>Soldiers in King Philip's War</em>:
          the list of Turner's men approved by the Committee of the General Court in June 1736 for the township grants,
          where the right-hand column of page 251 reads "Read, Thomas, Westford." He survived the war.
        </>,
      ],
    },
  },

  'thomas-read-jr': {
    name: 'Thomas Read Jr.',
    gen: 2,
    dates: 'c. 1687–1773',
    born: 1687,
    place: 'Westford, Massachusetts',
    relation: '7th great-grandfather',
    status: 'research',
    spouse: 'Sarah Fletcher',
    parent: 'thomas-read',
    summary: (
      <>
        Married <b>Sarah Fletcher</b> on March 14, 1709/10. Father of <P id="joseph-read">Capt. Joseph Read</P>.
      </>
    ),
    body: [
      <>
        Son of Thomas and Hannah. Thomas Jr. married Sarah Fletcher on March 14, 1709/10 and became part of the
        community of Westford, where he died on December 24, 1773. The Reade Record points to two original records that
        anchor this generation in primary evidence: the Middlesex court proceeding of May 10, 1725 naming Thomas's sons
        as John, Thomas, William, Jonathan and Benjamin, and a deed dated September 30, 1730 that still calls him
        "Thomas Read Junior," showing his father was then living.
      </>,
    ],
  },

  'joseph-read': {
    name: 'Capt. Joseph Read',
    gen: 3,
    dates: 'b. June 4, 1716',
    born: 1716,
    place: 'Westford, Massachusetts',
    relation: '6th great-grandfather',
    status: 'documented',
    spouse: 'Ruth Underwood',
    parent: 'thomas-read-jr',
    summary: (
      <>
        Married <b>Ruth Underwood</b> on May 30, 1737. Westford's vital records name Joseph and Ruth as the parents of{' '}
        <P id="joshua-read">Joshua Read</P>, and the line is confirmed from Joseph down to the present day. The step
        above him, to Thomas Jr., rests on the published genealogies.
      </>
    ),
    body: [
      <>
        Joseph is a documented person in his own right: the record gives his birth on June 4, 1716 and his marriage to
        Ruth Underwood on May 30, 1737, and Westford's vital records name Joseph and Ruth as the parents of Joshua, which
        anchors him in a primary source. The one link that is not yet proven by an original record is his parentage:
        that he was Thomas Jr.'s son comes from the genealogy and Westford Historical Society research, and it is that
        step, not Joseph himself, that stays on the research line.
      </>,
      <>
        Joseph became a central figure in Westford's civic and political life in the Revolutionary period, with activity
        tied to the Massachusetts Provincial Congress. His political role is well regarded locally. One famous claim
        attached to him, that he was at the Boston Tea Party, is not settled, and it is flagged as disputed.
      </>,
    ],
    service: {
      war: 'rev',
      lineLabel: 'Generation III · Westford, Massachusetts',
      rows: [
        ['Rank', <><b>Captain.</b> The title runs through the records, and his is the family's one officer's commission of the era: every other soldier on this page served in the ranks.</>],
        ['Service', 'Revolutionary-era civic and political leadership in Westford, with activity tied to the Massachusetts Provincial Congress. No Continental enlistment or campaign record for him is documented on this site: his war work, as the records present it, was that of a town leader, not a soldier in the field.'],
        ['Flagged', <>The Boston Tea Party, <b>December 16, 1773</b>: the Westford Historical Society counts him a participant; the Tea Party museum's researchers dispute it. See <To page="research" section="tea-party">the research page</To>.</>],
      ],
    },
  },

  'joshua-read': {
    name: 'Joshua Read',
    gen: 4,
    dates: 'b. December 1, 1737',
    born: 1737,
    place: 'Westford, Massachusetts',
    relation: '5th great-grandfather',
    status: 'documented',
    spouse: 'Mary Spaulding',
    parent: 'joseph-read',
    summary: (
      <>
        Westford's vital records name him as the son of <b>Joseph and Ruth</b>. Married <b>Mary Spaulding</b> on May 27,
        1758. Answered the Lexington alarm on April 19, 1775, marching in Capt. Jonathan Minot's company: militia service
        only, three days on the alarm, with no Continental enlistment. Father of <P id="isaiah-read">Isaiah Read</P>.
      </>
    ),
    body: [
      <>
        Son of Joseph and Ruth: Westford's own vital records say so, which gives this link a primary source independent
        of the published genealogies and of the family's research. The same records, and the Westford Historical
        Society, document his marriage to Mary Spaulding on May 27, 1758. When the Lexington alarm came on April 19,
        1775, Joshua marched in Captain Jonathan Minot's militia company, putting him among the Massachusetts men who
        mobilized on the first day of the Revolutionary War.
      </>,
      <>
        His war service was militia only. The Massachusetts Soldiers and Sailors of the Revolutionary War roster lists
        him for three days' service on the April 19, 1775 alarm in Capt. Minot's company, and records no Continental
        enlistment for him.
      </>,
    ],
    service: {
      war: 'rev',
      lineLabel: 'Generation IV · Westford, Massachusetts',
      rows: [
        ['Rank', 'Private, militia.'],
        ['Service', <>The Lexington alarm, <b>April 19, 1775</b>, in <b>Capt. Jonathan Minot's</b> militia company: three days' service on the alarm, on the first day of the Revolutionary War.</>],
        ['Dates', 'April 19, 1775, and the two days following. The Massachusetts roster records no Continental enlistment for him after those three days.'],
      ],
      notes: [
        "His service was militia only, and this page keeps it stated that plainly, so nobody mistakes his three days on the alarm for an army enlistment of the kind his sons later took.",
      ],
    },
  },

  'elnathan-read': {
    name: 'Elnathan Read',
    dates: '1758–1841',
    born: 1758,
    place: 'Westford, Massachusetts',
    descriptor: "Isaiah's older brother",
    relation: '4th great-granduncle',
    status: 'documented',
    spouse: 'Anne Prescott',
    parent: 'joshua-read',
    body: [
      <>
        Son of Joshua Read and Mary Spaulding, and Isaiah's older brother. Gould's <em>History of Stoddard</em> lists an
        Elnathan Reed among the Revolutionary soldiers who lived in Stoddard after the war, and on that listing alone
        this site once filed him with Stoddard's other, unrelated Reeds. Paul's family tree says otherwise: the soldier
        in Stoddard was one of ours, a Westford Read who came north ahead of his younger brother Isaiah.
      </>,
      <>
        He married <To page="prescotts">Anne Prescott</To> at Westford in 1781 and died in 1841 at Cavendish, Vermont.
        Anne's own family, one of the founding families of Lancaster, Massachusetts, is traced on{' '}
        <To page="prescotts">the Prescotts page</To>.
      </>,
      <>
        His Revolutionary War service is set out in the Massachusetts Soldiers and Sailors of the Revolutionary War
        roster. He served in the militia in 1776, then took a full three-year Continental enlistment as a Private in
        Capt. Ballard's company, Col. Alden's Massachusetts regiment (afterwards the 7th Massachusetts), from May 1777 to
        May 1780. The roster places him at Cherry Valley, New York in 1779.
      </>,
    ],
    service: {
      war: 'rev',
      lineLabel: "Westford, Massachusetts · Isaiah's older brother",
      rows: [
        ['Rank', 'Private, Continental Army.'],
        ['Enlisted', <>Militia service in <b>1776</b>, then a full three-year Continental enlistment from <b>May 1777</b>.</>],
        ['Unit', <><b>Capt. Ballard's</b> company, <b>Col. Alden's</b> Massachusetts regiment. After Alden was killed in the Cherry Valley Massacre of November 1778, the regiment continued as the 7th Massachusetts under Lt. Col. Brooks.</>],
        ['Battle', <>Cherry Valley, New York, <b>1779</b>: the roster places Elnathan there with the regiment.</>],
        ['Discharged', <><b>May 1780</b>, at the end of the three-year term.</>],
        ['Pension', 'Drawing a Revolutionary pension at the end of his life: the 1840 Census of Pensioners lists him at Cavendish, Vermont, aged 85.'],
      ],
      notes: [
        'The longest service of any man in this record: militia time in 1776, then three full years in the Continental Army. The Prescott Memorial, Anne\'s family genealogy, sums it up in one line: he served in the Continental Army "throughout the Revolution."',
      ],
    },
  },

  'joshua-read-jr': {
    name: 'Joshua Read Jr.',
    dates: 'b. March 6, 1763',
    born: 1763,
    place: 'Westford, Massachusetts',
    descriptor: "Isaiah's older brother",
    relation: '4th great-granduncle',
    status: 'documented',
    parent: 'joshua-read',
    body: [
      <>
        Son of Joshua and Mary, per Westford's vital records, and the second generation of the family to serve in the
        Revolution. He enlisted at sixteen. The Massachusetts Soldiers and Sailors of the Revolutionary War roster
        records Continental service for him: nine months in 1779–1780 with Col. Jackson's 8th Massachusetts, followed by
        a six-month levy through the end of 1780.
      </>,
      <>
        He matters to the line because an early draft placed him as a possible extra generation between Joshua and
        Isaiah. The Westford records settle it: Isaiah, born in 1778, was Joshua and Mary's son too, fifteen years
        Joshua Jr.'s junior. He is a brother in the line, not a link in it.
      </>,
      <>
        Where he went after the war is now an open question, and a promising one. The Stoddard documents say two of
        Isaiah's older brothers were in Stoddard before him, on lots their grandfather deeded them in 1782, and Gould's{' '}
        <em>History of Stoddard</em> records a Revolutionary soldier named Joshua Reed living there after the war, by the
        pond that still carries his name. Joshua Jr. fits that description. See{' '}
        <To page="research" section="reeds-pond">Joshua Reed of Reed's Pond</To>.
      </>,
    ],
    service: {
      war: 'rev',
      lineLabel: "Westford, Massachusetts · Isaiah's older brother",
      rows: [
        ['Rank', 'Private, Continental Army.'],
        ['Enlisted', <><b>1779</b>, at sixteen years old.</>],
        ['Service', <>Nine months in <b>1779 to 1780</b> with <b>Col. Jackson's 8th Massachusetts</b>, followed by a six-month levy through the end of <b>1780</b>.</>],
        ['Discharged', <>End of <b>1780</b>, at the close of the six-month levy.</>],
      ],
      notes: [
        'Two Continental stints before he turned eighteen: the nine-month enlistment in the 8th Massachusetts, then the six-month levy the towns raised in 1780 to fill the army\'s ranks.',
      ],
    },
  },

  'isaiah-read': {
    name: 'Isaiah Read',
    gen: 5,
    dates: 'b. March 17, 1778 – d. March 13, 1868',
    born: 1778,
    place: 'Westford, then Stoddard, New Hampshire',
    relation: '4th great-grandfather',
    status: 'documented',
    spouse: 'Lydia Procter',
    parent: 'joshua-read',
    summary: (
      <>
        Westford's vital records name him as the son of <b>Joshua and Mary</b> directly, with no generation in between.
        Married <b>Lydia Procter</b> (1781–1857) at Westford on February 12, 1799, then moved to Stoddard, where his
        children were born. Father of <P id="john-reed">John Reed</P>: his will (Cheshire County Probate No. 427, 1868)
        names John among his children. His older brothers included <P id="elnathan-read">Elnathan Read</P> (b. 1758) and{' '}
        <P id="joshua-read-jr">Joshua Read Jr.</P> (b. March 6, 1763).
      </>
    ),
    body: [
      <>
        The bridge generation, and the strongest link in the line. Westford's own vital records give Isaiah's birth on
        March 17, 1778 to Joshua and Mary, and his marriage to Lydia Procter on February 12, 1799, so his place in the
        line rests on a primary source, not on the genealogies. Westford records no births for Isaiah and Lydia's
        children, which fits what happened next: the couple moved to Stoddard, New Hampshire right after the wedding, and
        the children were born there.
      </>,
      <>
        FamilySearch's profile for Isaiah lists the seven children of Isaiah and Lydia: Lydia, Isaiah, Jonas P., Nancy,
        Cyrus, John and Edward. Gould's Stoddard history fills in the town years: Isaiah appears as "Isaiah Reed, Esq.,"
        and in 1848 two dwelling houses, a wood house and a carriage house owned by Isaiah and his son burned. Gould's
        marriage lists catch two of the children, Jonas P. to Ann Waldron on October 20, 1831, and Nancy to Samuel
        Jenkins; the Society's Reed file adds that Nancy married a second time, which resolves records that seemed to
        conflict. Gould also records Isaiah's own second marriage, to Lucinda Dudley on August 12, after Lydia's death
        in 1857.
      </>,
      <>
        Two late pieces of his story come from the Stoddard documents. His will (Cheshire County Probate No. 427, 1868)
        left ten dollars each to Jonas, John, Nancy and his grandson Columbus, and the homestead to Edward: the document
        that ties John to this household in Isaiah's own probate. And late in life Isaiah was excommunicated from
        Stoddard's Congregational church for slipping off to Universalist meetings, while his son Jonas P. sat as a
        deacon of the church that put him out. Isaiah died on March 13, 1868 and is buried in Joslin Cemetery, Stoddard.
      </>,
    ],
  },

  'john-reed': {
    name: 'John Reed',
    gen: 6,
    dates: 'b. February 28, 1817 – d. October 5, 1866',
    born: 1817,
    place: 'Stoddard, New Hampshire',
    relation: '3rd great-grandfather',
    status: 'documented',
    spouse: 'Harriet Wright',
    parent: 'isaiah-read',
    summary: (
      <>
        Married <b>Harriet Wright</b> (1826–1907). Father of five sons: <b>James Edwin</b>, <b>Henry</b>,{' '}
        <b>Albert B.</b>, <b>Frank J.</b> and <b>Fred W. Reed</b>. Son of Isaiah Reed of Westford and Stoddard: the
        Stoddard documents say so outright, Isaiah's will names him, and a handwritten vital-records extract gives his
        parents as "Isaiah and Lydia Reed."
      </>
    ),
    body: [
      <>
        The earliest Reed the family can stand behind without qualification. John farmed on Jackson Hill in Stoddard,
        New Hampshire: on March 8, 1842 he paid Peter Wright $2,000 for the homestead parcel, some 175 acres in lots 26,
        27 and 28 of range 13, and the farm stayed in Reed hands for 58 years. He died of typhoid on October 5, 1866,
        aged 49 years, 7 months and 5 days, leaving no will. His estate inventory (Cheshire County Probate No. 414)
        values his livestock at $306.34: 13 oxen, one cow and 10 sheep, plus provisions, farming tools, furniture, and
        85 sap buckets that suggest he made maple sugar to sell as well as to eat.
      </>,
      <>
        His parentage is no longer a lead. Arlene Rasmussen's deed-by-deed history of his homestead states it outright,
        twice: "John Reed's father, Isaiah Reed." Isaiah's will (Cheshire County Probate No. 427, 1868) left ten dollars
        each to Jonas, John, Nancy and his grandson Columbus, with the homestead going to son Edward, and the same history
        calls Jonas P. Reed "brother of John Reed," which fits, since Jonas is confirmed as Isaiah's son. Strongest of
        all, a handwritten vital-records extract in the Society's Reed file reads: "John Reed died 5 Oct 1866 from
        typhoid age 49 yrs. 7 mos 5 days. parents Isaiah and Lydia Reed." The file also lists John, born February 28,
        1817, among Isaiah and Lydia's children in three separate notes.
      </>,
      <>
        John had five sons himself: James Edwin (b. 1846), Henry (b. July 20, 1850), Frank J. (b. August 8, 1853),
        Albert B. and Fred W. Frank and Henry kept stores in Stoddard Center, and Albert bought the old homestead farm
        from his mother in 1890.
      </>,
    ],
    spouseNote: (
      <>
        Wife: <b>Harriet Wright</b> (1826–1907), daughter of Peter Wright (1791–1870) and Diadamia Waldron (1802–1850).
        One open question hangs over her name: a Stoddard town record calls her Hannah (see{' '}
        <To page="research" section="hannah-or-harriet">Hannah or Harriet?</To>). Her father deeded her the homestead
        land in 1852 "in consideration of the love and affection I bear to my daughter Harriet Reed, wife of John Reed."
        Widowed in 1866, she bought the farm back in 1869 and held it for two more decades, then remarried: James
        Simonds, in 1871.
      </>
    ),
  },

  'james-edwin-reed': {
    name: 'James Edwin Reed',
    gen: 7,
    dates: '1846–1895',
    born: 1846,
    place: 'born in Stoddard, New Hampshire',
    relation: '2nd great-grandfather',
    status: 'documented',
    spouse: 'Abby E. Wells',
    parent: 'john-reed',
    summary: (
      <>
        Married first <b>Harriett Ruffle</b>, and second <b>Abby E. Wells</b> (b. 1854). Father of{' '}
        <P id="william-reed">William E. Reed</P>.
      </>
    ),
    body: [
      <>
        Born in Stoddard, New Hampshire in 1846, son of John and Harriet, and a farmer in Stoddard like his father. His
        profile in the family tree carries images of the records from his life, including a register page naming James
        E. Reed and Abby Wells of Stoddard, and census-style documents.
      </>,
      <>
        The Society file's hand-drawn descendant chart gives James and Abby a big family: Alice (b. 1873), Rosabel
        (b. 1875), Lucy (b. 1878), Clara (b. 1880), Silvia (b. 1883), Walter (b. 1885), Grace (b. 1887), Arthur (b. 1889)
        and William (b. 1892), who was registered as their ninth child.
      </>,
    ],
    spouseNote: (
      <>
        Wives: James married first <b>Harriett Ruffle</b>. His second wife was <b>Abby E. Wells</b> (b. 1854), daughter
        of George Wells, and William's mother. After James's death in 1895 she remarried, to Charles Hastings.
      </>
    ),
  },

  'william-reed': {
    name: 'William Erving Reed',
    gen: 8,
    dates: 'b. October 27, 1892 – 1957',
    born: 1892,
    place: 'Stoddard, then Quincy, Massachusetts',
    relation: 'great-grandfather',
    status: 'documented',
    spouse: 'Charlotte Evelyn Jellow',
    parent: 'james-edwin-reed',
    summary: (
      <>
        Married <b>Charlotte Evelyn Jellow</b> (1889–1974) in 1914 at Braintree, Massachusetts. Father of{' '}
        <P id="arthur-reed">Arthur Reed</P>.
      </>
    ),
    body: [
      <>
        Son of James Edwin and Abby, registered at birth as "Willie Reed." Stoddard's own vital statistics for 1892
        record him plainly: born October 27 at Stoddard, the ninth child of James E. Reed, farmer, aged 47, and Abby E.
        Wells, aged 38, of Deering. A copy of that register page sits in the Society file.
      </>,
      <>
        William carries the line out of the Stoddard generation and into the twentieth century. His 1942 draft
        registration card, filed as William Erving Reed, places him at 54 Station Street, Quincy, Massachusetts, born at
        Stoddard, with Charlotte named as the person who would always know his address. He is the father of Arthur Reed.
      </>,
    ],
    spouseNote: (
      <>
        Wife: <b>Charlotte Evelyn Jellow</b> (1889–1974), married in 1914 at Braintree, Massachusetts. The tree preserves
        an actual photograph of Charlotte, one of the only real faces among the early generations.
      </>
    ),
    service: {
      war: 'other',
      lineLabel: 'Generation VIII · great-grandfather',
      rows: [
        ['Record', <>Draft registration, <b>1942</b>, filed as William Erving Reed at 54 Station Street, Quincy, Massachusetts, with Charlotte named as the person who would always know his address.</>],
      ],
      notes: [
        'A registration is not service, and it is set down here as a registration only: this site holds no record that William served, and no service entry is claimed for him.',
      ],
    },
  },

  'arthur-reed': {
    name: 'Arthur Reed',
    gen: 9,
    place: 'the grandfather',
    relation: 'grandfather',
    status: 'documented',
    spouse: 'Ethel Lois Gould',
    parent: 'william-reed',
    summary: (
      <>
        Father of three sons: <P id="paul-reed">Paul Reed</P>, <P id="arthur-reed-uncle">Arthur Reed</P> and{' '}
        <P id="mark-reed">Mark Reed</P>.
      </>
    ),
    body: [
      'Son of William E. Reed. Arthur is the grandfather of the present generation and the father of three sons, Paul, Arthur and Mark, through whom the modern branches of the family run.',
    ],
    spouseNote: (
      <>
        Wife: <b>Ethel Lois Gould</b>, the family's grandmother on this side, who married into the Reeds. Whether her
        Goulds connect to the Stoddard Goulds is <To page="research" section="evidence">an open thread</To>.
      </>
    ),
  },

  'paul-reed': {
    name: 'Paul Reed',
    gen: 10,
    place: 'son of Arthur',
    relation: 'father',
    status: 'documented',
    parent: 'arthur-reed',
    summary: (
      <>
        Father of <P id="paul-reed-ii">Paul Reed II</P>. His brother <P id="mark-reed">Mark Reed</P> is the father of{' '}
        <P id="dan-reed">Dan Reed</P> and <P id="steven-reed">Steven Reed</P>.
      </>
    ),
    body: ['Son of Arthur Reed, brother of Arthur and Mark. Father of Paul Reed II.'],
  },

  'paul-reed-ii': {
    name: 'Paul Reed II',
    gen: 11,
    place: 'the present generation',
    relation: 'the present day',
    status: 'documented',
    parent: 'paul-reed',
    summary: 'Son of Paul Reed.',
    body: ['Son of Paul Reed.'],
  },

  'arthur-reed-uncle': {
    name: 'Arthur Reed',
    place: 'son of Arthur',
    relation: 'uncle',
    status: 'documented',
    parent: 'arthur-reed',
    body: ['Son of Arthur Reed, named for his father. Brother of Paul and Mark.'],
  },

  'mark-reed': {
    name: 'Mark Reed',
    place: 'son of Arthur',
    relation: 'uncle',
    status: 'documented',
    parent: 'arthur-reed',
    body: ['Son of Arthur Reed, brother of Paul and Arthur. Father of Dan and Steven.'],
  },

  'dan-reed': {
    name: 'Dan Reed',
    place: 'son of Mark',
    relation: 'cousin',
    status: 'documented',
    parent: 'mark-reed',
    body: ['Son of Mark Reed, brother of Steven.'],
  },

  'steven-reed': {
    name: 'Steven Reed',
    place: 'son of Mark',
    relation: 'cousin',
    status: 'documented',
    parent: 'mark-reed',
    body: ['Son of Mark Reed, brother of Dan.'],
  },
};

/** The direct line, Gen. I to Gen. XI. */
export const line = [
  'thomas-read',
  'thomas-read-jr',
  'joseph-read',
  'joshua-read',
  'isaiah-read',
  'john-reed',
  'james-edwin-reed',
  'william-reed',
  'arthur-reed',
  'paul-reed',
  'paul-reed-ii',
];

export const groups = [
  { title: 'The direct line', intro: 'Eleven generations, Thomas Read to the present day.', ids: line },
  { title: "Isaiah's brothers", intro: 'Sons of Joshua and Mary who stand beside the line, not in it.', ids: ['elnathan-read', 'joshua-read-jr'] },
  { title: 'The modern branches', intro: "Arthur Reed's other sons, and Mark's sons.", ids: ['arthur-reed-uncle', 'mark-reed', 'dan-reed', 'steven-reed'] },
];

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
export const roman = (n) => ROMAN[n] || '';

export const childrenOf = (id) => Object.keys(people).filter((k) => people[k].parent === id);
