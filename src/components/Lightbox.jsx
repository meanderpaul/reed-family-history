import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { documents } from '../data/documents.jsx';
import { asset } from './ui.jsx';

const LightboxContext = createContext(() => {});
export const useLightbox = () => useContext(LightboxContext);

export function LightboxProvider({ children }) {
  const [docId, setDocId] = useState(null);
  const closeRef = useRef(null);
  const returnFocus = useRef(null);
  const doc = docId ? documents[docId] : null;

  const open = useCallback((id) => {
    returnFocus.current = document.activeElement;
    setDocId(id);
  }, []);
  const close = useCallback(() => {
    setDocId(null);
    returnFocus.current?.focus?.();
  }, []);

  useEffect(() => {
    if (!doc) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [doc, close]);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {doc && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={doc.title} onClick={close}>
          <button ref={closeRef} className="lightbox-close" onClick={close} aria-label="Close enlarged image">×</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={asset(doc.file)} alt={doc.alt} />
            <figcaption>
              <strong>{doc.title}</strong> · {doc.citation}
            </figcaption>
          </figure>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
