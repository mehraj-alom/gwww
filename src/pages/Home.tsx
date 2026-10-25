import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Capabilities from '../components/Capabilities';
import AppShowcase from '../components/AppShowcase';
import Day from '../components/Day';
import Privacy from '../components/Privacy';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import EarlyAccess from '../components/EarlyAccess';
import Footer from '../components/Footer';
import { useReveal } from '../lib/hooks';

export default function Home() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Capabilities />
        <AppShowcase />
        <Day />
        <Privacy />
        <Pricing />
        <Faq />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
