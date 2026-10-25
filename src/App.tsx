import { useEffect } from 'react';
import Home from './pages/Home';
import Answers from './pages/Answers';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Nav from './components/Nav';
import Footer from './components/Footer';

function currentPath() {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path || '/';
}

function NotFound() {
  return (
    <div>
      <Nav />
      <main id="main" className="grid min-h-[70vh] place-items-center px-5 pt-24">
        <div className="text-center">
          <p className="num text-[11px] font-medium tracking-[0.2em] text-teal/70">404</p>
          <h1 className="h2 mt-3 text-ink">Diese Seite gibt es nicht.</h1>
          <p className="mt-3 text-[13px] text-ink/45">
            Vielleicht findest du auf der Startseite, was du gesucht hast.
          </p>
          <a href="/" className="btn btn-primary mt-6">
            Zur Startseite
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const path = currentPath();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const timer = window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ block: 'start' });
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [path]);

  if (path === '/') return <Home />;
  if (path === '/antworten') return <Answers />;
  if (path === '/impressum') return <Impressum />;
  if (path === '/datenschutz') return <Datenschutz />;
  return <NotFound />;
}
