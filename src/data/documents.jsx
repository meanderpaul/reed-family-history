// Every document image on the site, defined once. Pages refer to them by id.
// kind: 'scan' (photograph of the original page) or 'transcription' (the
// source's verified wording set out as text, not a photograph).

export const documents = {
  'homestead-diagram': {
    file: 'homestead-diagram.jpg',
    width: 993,
    height: 1400,
    kind: 'scan',
    collection: 'stoddard',
    title: 'The John Reed homestead, Jackson Hill',
    citation: 'Arlene Rasmussen, "The John Reed Homestead," 1976 survey drawing',
    alt: 'Hand-drawn 1976 diagram of the John Reed homestead site on Jackson Hill, Stoddard, showing the old cellar hole with its dimensions, the chimney bricks, the front door location, the old dirt road, a possible well and outhouse, the barn foundation and apple trees',
    caption:
      "Rasmussen's hand-drawn survey of the Jackson Hill site as she found it in 1976: the L-shaped cellar hole, the chimney bricks, the barn foundation across the old dirt road, and the apple trees the family planted. One of the family's own Stoddard documents, reproduced as found.",
    people: ['john-reed'],
  },
  'william-birth-register': {
    file: 'william-birth-register.jpg',
    width: 1480,
    height: 840,
    kind: 'scan',
    collection: 'stoddard',
    title: 'Births registered in Stoddard, 1892',
    citation: "Stoddard vital statistics, year ending Dec. 31, 1892 · Society's Reed file",
    alt: "Page from Stoddard's vital statistics for 1892, headed 'Births registered in the town of Stoddard, N.H.', with the row for Oct 27: Willie Reed, ninth child of James E Reed and Abby E Wells",
    caption:
      'The third row reads "Oct 27, Stoddard, Willie Reed," ninth child of James E. Reed, farmer, aged 47, and Abby E. Wells, aged 38.',
    people: ['william-reed', 'james-edwin-reed'],
  },
  'prescott-entry-603': {
    file: 'prescott-entry-603.jpg',
    width: 731,
    height: 1292,
    kind: 'scan',
    collection: 'prescott',
    title: 'Prescott Memorial, entry 603',
    citation: 'The Prescott Memorial · Sixth Generation, Section III',
    alt: "Page from the Prescott Memorial genealogy, headed 'Sixth Generation, Section III', with entry 603 at the foot: Annie Prescott, born May 7, 1761, married Elnathan Reed of Westford, Massachusetts",
    caption:
      'Under the issue of Timothy Prescott and Lydia Fletcher: "Annie, b. May 7, 1761; m. Elnathan Reed of Westford, Mass., settled in Stoddard, N. H., b. Oct. 12, 1758. He served in the \'Continental Army\' (as the patriotic army was then called) throughout the Revolution. He d. July 25, 1845, a. 82 yrs. 8 mos. and 13 days. She d. Dec. 6, 1821, a. 60 yrs. 7 mos."',
    people: ['elnathan-read'],
  },
  'prescott-children-1077': {
    file: 'prescott-children-1077.jpg',
    width: 731,
    height: 1292,
    kind: 'scan',
    collection: 'prescott',
    title: 'Prescott Memorial, entries 1077 to 1082',
    citation: 'The Prescott Memorial · Seventh Generation, Section III',
    alt: "Page from the Prescott Memorial genealogy, headed 'Seventh Generation, Section III', listing the issue of Annie Prescott and Elnathan Reed of Stoddard, New Hampshire as entries 1077 to 1082",
    caption:
      'The issue of Annie Prescott and Elnathan Reed of Stoddard, New Hampshire. Six children: Annie (b. June 16, 1783), Lydia (b. 1784), Mary (b. 1786), Ruth (b. Oct. 1788), Sarah P. (b. June 3, 1790) and Phebe (b. April 23, 1792). This is the list that disagrees with the family tree\'s two children, flagged as open.',
    people: ['elnathan-read'],
  },
  'rowlandson-thirteenth-remove': {
    file: 'rowlandson-thirteenth-remove.png',
    width: 1700,
    height: 2200,
    kind: 'transcription',
    collection: 'colonial',
    title: 'Rowlandson, the Thirteenth Remove',
    citation: 'Mary Rowlandson, A Narrative of the Captivity and Restoration (1682)',
    alt: "The Thirteenth Remove from Mary Rowlandson's Narrative of the Captivity and Restoration, 1682, with the passage naming Thomas Read as a captive brought from Hadley",
    caption:
      '"About this time they came yelping from Hadley, where they had killed three Englishmen, and brought one captive with them, viz. Thomas Read." The only mention of Thomas in the narrative, and firsthand evidence of his captivity in the spring of 1676, before his escape of May 15. The wording is the verified text of the 1682 narrative, set out as text, not a photograph of an original page.',
    people: ['thomas-read'],
  },
  'bodge-falls-fight-p250': {
    file: 'bodge-falls-fight-p250.jpg',
    width: 1930,
    height: 3283,
    kind: 'scan',
    collection: 'colonial',
    title: 'Falls Fight roster, p. 250',
    citation: 'George Madison Bodge, Soldiers in King Philip\'s War (Boston, 1906)',
    alt: 'Page 250 of Bodge\'s Soldiers in King Philip\'s War, opening the list of the soldiers in the Fall Fight under Captain William Turner, approved by the Committee of the General Court in June 1736',
    caption:
      'The opening of "A List of ye Soldiers yt were in ye Fall Fight under Capt. Wm Turner, approved off by ye Committee of ye Gen. Court. (Dated June, 1736.)": the township-grant roster behind The Reade Record\'s Falls Fight claim.',
    people: ['thomas-read'],
  },
  'bodge-falls-fight-p251': {
    file: 'bodge-falls-fight-p251.jpg',
    width: 1930,
    height: 3283,
    kind: 'scan',
    collection: 'colonial',
    title: 'Falls Fight roster, p. 251',
    citation: 'George Madison Bodge, Soldiers in King Philip\'s War (Boston, 1906)',
    alt: "Page 251 of Bodge's Soldiers in King Philip's War, headed List of Turner's Men, with the entry 'Read, Thomas, Westford' in the right-hand column",
    caption:
      'The list continues, and in the right-hand column stands "Read, Thomas, Westford," followed by the committee\'s endorsement. The published roster that places Thomas Read among Captain Turner\'s men at the Falls Fight, May 19, 1676.',
    people: ['thomas-read'],
  },
  'pensioner-1840-elnathan': {
    file: 'pensioner-1840-elnathan.png',
    width: 1700,
    height: 1400,
    kind: 'transcription',
    collection: 'colonial',
    title: '1840 Census of Pensioners, Cavendish',
    citation: 'Census of Pensioners for Revolutionary or Military Services, 1840 · Windsor County, Vermont',
    alt: 'Extract from the 1840 Census of Pensioners for Windsor County, Vermont, town of Cavendish, with the row for Elnathan Reed, age 85, highlighted',
    caption:
      '"Elnathan Reed, 85," listed as head of his own family. A federal record from Elnathan\'s own lifetime, placing Isaiah\'s older brother at Cavendish drawing a Revolutionary pension in 1840, whichever of the two death years, 1841 or 1845, is right. The entry\'s verified text is set out as a table, not a photograph of the original census page.',
    people: ['elnathan-read'],
  },
};

export const collections = [
  {
    id: 'stoddard',
    title: 'The Stoddard papers',
    intro:
      'From the family\'s two sets of Stoddard documents: Arlene Rasmussen\'s deed-by-deed history of the Jackson Hill farm, and the Historical Society of Cheshire County\'s Reed file.',
  },
  {
    id: 'prescott',
    title: 'The Prescott Memorial',
    intro: 'Two pages from the published Prescott genealogy, carrying Anne Prescott\'s marriage to Elnathan Read and their children.',
  },
  {
    id: 'colonial',
    title: 'Colonial and military records',
    intro:
      'The Rowlandson passage that names Thomas Read in captivity, Bodge\'s Falls Fight roster, and the 1840 pensioner census entry for Elnathan.',
  },
];
