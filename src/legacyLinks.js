// The site used to be a single page with #anchor links. Map those old links
// onto the new routes so bookmarks and shared links keep working.
import { people } from './data/people.jsx';

const LEGACY = {
  story: '/',
  stoddard: '/',
  credits: '/',
  family: '/family',
  documented: '/family',
  branches: '/family',
  people: '/people',
  colonial: '/family',
  'colonial-records': '/research',
  evidence: '/research?s=evidence',
  soldiers: '/soldiers',
  'soldier-documents': '/soldiers',
  prescott: '/prescotts',
  prescotts: '/prescotts',
  'anne-prescott': '/prescotts',
  documents: '/documents',
  sources: '/documents?s=sources',
  other: '/research?s=other-reeds',
  norelation: '/research?s=other-reeds',
};

export function redirectLegacyHash() {
  const hash = window.location.hash.slice(1);
  if (!hash || hash.startsWith('/')) return;
  const target = LEGACY[hash] || (people[hash] ? `/people/${hash}` : '/');
  window.history.replaceState(null, '', `#${target}`);
}
