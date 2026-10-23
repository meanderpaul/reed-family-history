import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui.jsx';

export default function NotFound() {
  return (
    <PageHeader eyebrow="Not found" title="No record of that page">
      <p>
        Like a few of the family's ancestors, this page has no paper trail. <Link to="/">Return to the story</Link>.
      </p>
    </PageHeader>
  );
}
