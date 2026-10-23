import { documents } from '../data/documents.jsx';
import { asset } from './ui.jsx';
import { useLightbox } from './Lightbox.jsx';

export function DocTag({ kind }) {
  return kind === 'scan'
    ? <span className="doc-tag scan">Scan of the original</span>
    : <span className="doc-tag transcript">Transcription · not a scan</span>;
}

/** A document image with its caption. `note` adds context for the page it sits on. */
export function DocFigure({ id, note, compact = false, eager = false }) {
  const open = useLightbox();
  const doc = documents[id];
  return (
    <figure className={`doc-figure${compact ? ' compact' : ''}`}>
      <button type="button" className="shot-btn" onClick={() => open(id)} aria-haspopup="dialog">
        <img src={asset(doc.file)} alt={doc.alt} width={doc.width} height={doc.height} loading={eager ? 'eager' : 'lazy'} />
        <span className="zoom-hint" aria-hidden="true">⤢ View full size</span>
      </button>
      <figcaption>
        <DocTag kind={doc.kind} />
        <span className="doc-title">{doc.title}</span>
        <span className="doc-citation">{doc.citation}</span>
        {!compact && <span className="doc-caption">{doc.caption}</span>}
        {note && <span className="doc-note">{note}</span>}
      </figcaption>
    </figure>
  );
}
