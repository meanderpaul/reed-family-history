import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import { LightboxProvider } from './components/Lightbox.jsx';
import Home from './pages/Home.jsx';
import FamilyLine from './pages/FamilyLine.jsx';
import People from './pages/People.jsx';
import Person from './pages/Person.jsx';
import Soldiers from './pages/Soldiers.jsx';
import Prescotts from './pages/Prescotts.jsx';
import Documents from './pages/Documents.jsx';
import Research from './pages/Research.jsx';
import NotFound from './pages/NotFound.jsx';

/** Scroll to ?s=<section id> after navigation, otherwise to the top. */
function ScrollManager() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    const section = new URLSearchParams(search).get('s');
    const frame = requestAnimationFrame(() => {
      const el = section && document.getElementById(section);
      if (el) el.scrollIntoView({ block: 'start' });
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, search]);
  return null;
}

export default function App() {
  return (
    <LightboxProvider>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="family" element={<FamilyLine />} />
          <Route path="people" element={<People />} />
          <Route path="people/:id" element={<Person />} />
          <Route path="soldiers" element={<Soldiers />} />
          <Route path="prescotts" element={<Prescotts />} />
          <Route path="documents" element={<Documents />} />
          <Route path="research" element={<Research />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LightboxProvider>
  );
}
