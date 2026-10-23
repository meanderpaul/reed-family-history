import { To } from '../components/ui.jsx';

// Every publication and record collection used or cited on the site.
export const sources = [
  {
    title: 'Genealogical Record of the Reads, Reeds, the Bisbees, the Bradfords',
    url: 'https://blog.jrnl.com/wp-content/uploads/2016/10/genealogical-record-reed.pdf',
    meta: 'Axel Hayford Reed · 1915 · Full text PDF',
    kind: 'genealogy',
    body: (
      <>
        The published genealogy that lays out the line: Thomas Read (b. c. 1656) of Chelmsford, to Thomas Jr., to Capt.
        Joseph Read (b. 1716), to Joshua Read (b. 1737), to Joshua Read Jr. (b. 1763) of Westford. Use it with one
        caution: for Thomas Sr.'s own generation the 1915 book repeats the Obadiah error and a children list that
        conflicts with the 1725 court record, so the family trusts The Reade Record there and uses the 1915 book from
        Thomas Jr. downward.
      </>
    ),
  },
  {
    title: 'The Reade Record',
    url: 'https://www.seekingmyroots.com/members/files/G005563.pdf',
    meta: 'Reade Society for Genealogical Research · PDF',
    kind: 'genealogy',
    body: (
      <>
        The society journal that points to the 1725 proceeding naming Thomas's sons and the deed of September 30, 1730
        identifying Thomas Jr. It also challenges the claim that Thomas was Obadiah Read's son, on the strength of the
        dates.
      </>
    ),
  },
  {
    title: 'Early Generations of the Founders of Old Dunstable',
    meta: 'Ezra S. Stearns · 1911',
    kind: 'genealogy',
    body: (
      <>
        Stearns's history of the old Dunstable families warns against identifying Thomas Read of Chelmsford as Obadiah
        Read's son, backing the Reade Record's caution with local scholarship.
      </>
    ),
  },
  {
    title: 'The published Prescott genealogy',
    meta: 'John Prescott of Lancaster and His Descendants (the Prescott Memorial)',
    kind: 'genealogy',
    body: (
      <>
        The source for the Prescott line: John Prescott, founder of Lancaster, through four generations of Westford
        Prescotts to Anne (Annie) Prescott, who married Elnathan Read. It is used the way this site uses the 1915 Reed
        book, as the laid-out line to be checked against records. Where it disagrees with the family tree it is flagged,
        not followed silently: see <To page="research" section="elnathan-last-years">Elnathan's last years</To>.
      </>
    ),
  },
  {
    title: "Mary Rowlandson, Narrative of the Captivity: The Thirteenth Remove",
    url: 'https://en.wikisource.org/wiki/A_Narrative_of_the_Captivity%2C_Sufferings%2C_and_Removes_of_Mrs._Mary_Rowlandson/13_The_thirteenth_Remove',
    meta: 'Published 1682 · Wikisource',
    kind: 'primary',
    body: (
      <>
        A firsthand account written by a fellow captive. Rowlandson names Thomas Read, describes his fear that he would
        be killed, and records his news that he had recently seen her husband alive. Contemporary evidence, published six
        years after the war.
      </>
    ),
  },
  {
    title: "Soldiers in King Philip's War",
    meta: 'George Madison Bodge · Boston, 1906 · 3rd edition',
    kind: 'primary',
    body: (
      <>
        Bodge's compilation prints the Falls Fight roster approved by the Committee of the General Court in June 1736,
        the list drawn up for the township grants to the soldiers and their descendants. On p. 251 the right-hand column
        reads "Read, Thomas, Westford."
      </>
    ),
  },
  {
    title: 'Massachusetts Soldiers and Sailors of the Revolutionary War',
    meta: 'Massachusetts Archives · Official roster',
    kind: 'primary',
    body: (
      <>
        The official roster compiled from the Massachusetts archives, and the source for the Revolutionary service
        details on <To page="soldiers">the Soldiers page</To>: Elnathan's three-year Continental enlistment, Joshua Jr.'s
        two stints at sixteen, and Joshua's three days on the Lexington alarm.
      </>
    ),
  },
  {
    title: 'Census of Pensioners for Revolutionary or Military Services, 1840',
    meta: 'United States Census · Federal record',
    kind: 'primary',
    body: (
      <>
        The federal census of Revolutionary pensioners, taken with the 1840 census, lists Elnathan Read at Cavendish,
        Vermont, aged 85: a primary record from his own lifetime, independent of any family tree.
      </>
    ),
  },
  {
    title: 'History of Stoddard, Cheshire County, N.H.',
    url: 'https://archive.org/stream/historyofstoddar00goul/historyofstoddar00goul_djvu.txt',
    meta: 'Isaiah Gould · 1897 · Full text, Internet Archive',
    kind: 'local',
    body: (
      <>
        The town history. For our line it records the 1848 fire that took two houses owned by Isaiah Reed, Esq. and his
        son, the marriages of Jonas P. Reed and Nancy Reed, and Isaiah's second marriage to Lucinda Dudley. It also names
        the Revolutionary soldiers who settled in Stoddard after the war, Elnathan Reed and Joshua Reed among them, and
        preserves the Stoddard Reeds no record ties to Isaiah: Asaph Reed and the Jesse Reed marriages. The Gould name
        matters to this family beyond the book: see <To page="research" section="evidence">the Gould thread</To>.
      </>
    ),
  },
  {
    title: 'The Stoddard documents: "The John Reed Homestead" and the Society\'s Reed file',
    meta: 'Arlene Rasmussen · Historical Society of Cheshire County · Family papers',
    kind: 'local',
    body: (
      <>
        Rasmussen's deed-by-deed history of John's Jackson Hill homestead, with her hand-drawn 1976 survey of the site,
        and the Society's 134-page Reed file, a research packet the Society compiled in 2015. Between them they name
        John's father outright, cite Isaiah's will (Cheshire County Probate No. 427, 1868), preserve the handwritten
        vital-records extract naming John's parents, and hold the 1892 Stoddard birth register page.
      </>
    ),
  },
  {
    title: 'Westford Historical Society research',
    meta: 'Westford, Massachusetts',
    kind: 'local',
    body: (
      <>
        The society's research identifies Joshua Read as the son of Joseph Read and Ruth Underwood, documents Joshua's
        marriage to Mary Spaulding on May 27, 1758, and places him in Capt. Jonathan Minot's company after the Lexington
        alarm. It also lists Capt. Joseph as a Boston Tea Party participant, the claim the Tea Party museum's researchers
        dispute.
      </>
    ),
  },
  {
    title: 'Westford Town Clerk: Request Vital Records',
    url: 'https://westfordma.gov/422/Request-Vital-Records',
    meta: 'Town of Westford, Massachusetts',
    kind: 'archive',
    body: (
      <>
        Westford's vital records to 1849 supplied the primary confirmations behind the colonial line: Joshua Read's birth
        on December 1, 1737 to Joseph and Ruth, Isaiah Read's birth on March 17, 1778 to Joshua and Mary, Isaiah's
        marriage to Lydia Procter on February 12, 1799, Joshua Read Jr.'s birth on March 6, 1763 to Joshua and Mary, and
        the 1781 marriage of Elnathan Read to Anne Prescott.
      </>
    ),
  },
  {
    title: 'FamilySearch: Isaiah Read ESQ (1778–1868), person L4J2-PF1',
    url: 'https://ancestors.familysearch.org/en/L4J2-PF1/isaiah-read-esq-1778-1868',
    meta: 'FamilySearch · Public profile, no account needed',
    kind: 'archive',
    body: (
      <>
        The public tree profile for Isaiah, checked October 2026. It lists the seven children of Isaiah and Lydia, John
        (b. 1817) among them, with records attached including the 1850 census, Isaiah's New Hampshire death record, and
        Edward Reed's 1819 birth record naming Isaiah as father. A tree profile is a lead, not proof, which is why the
        John to Isaiah link rests on the Stoddard documents and not on this profile.
      </>
    ),
  },
  {
    title: 'FamilySearch: Massachusetts Land Records, 1620–1986',
    meta: 'FamilySearch · Free account required',
    kind: 'archive',
    body: (
      <>
        Digitized images of the original Middlesex County deed books and probate packets. This is where the missing-link
        records live: the 1730 deed, and a probate or administration for Thomas Sr. in the 1730 to 1736 window. The 1725
        record naming his sons is a court proceeding, found in the Middlesex court records.
      </>
    ),
  },
];

export const sourceKinds = [
  { id: 'primary', title: 'Primary and contemporary records' },
  { id: 'local', title: 'Local histories and family papers' },
  { id: 'genealogy', title: 'Published genealogies' },
  { id: 'archive', title: 'Archives and online records' },
];
