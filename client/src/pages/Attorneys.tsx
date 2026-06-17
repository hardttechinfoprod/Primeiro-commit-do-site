import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiteHeader, SiteFooter, PageHero, CtaSection } from '../components/Layout';

const IMAGES = {
  heroBg: '/images/client/11.jpeg',
  att1: '/images/client/4.jpeg',
  att2: '/images/client/6.jpeg',
  att3: '/images/client/8.jpeg',
  att4: '/images/client/3.jpeg',
};

const attorneys = [
  {
    img: IMAGES.att1,
    name: 'Dr. Carlos Adães',
    role: 'Sócio Fundador',
    areas: 'Direito Empresarial · M&A',
    location: 'Brasília, DF',
    id: 1,
  },
  {
    img: IMAGES.att2,
    name: 'Dra. Ana Figueiredo',
    role: 'Sócia',
    areas: 'Direito Tributário · Compliance',
    location: 'Brasília, DF',
    id: 2,
  },
  {
    img: IMAGES.att3,
    name: 'Dr. Fernando Melo',
    role: 'Advogado Sênior',
    areas: 'Contencioso Civil · Arbitragem',
    location: 'Brasília, DF',
    id: 3,
  },
  {
    img: IMAGES.att4,
    name: 'Dra. Juliana Carvalho',
    role: 'Advogada Sênior',
    areas: 'Direito Imobiliário · Agronegócio',
    location: 'Brasília, DF',
    id: 4,
  },
];

function useRevealGroup() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-image').forEach((c) => c.classList.add('visible'));
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Attorneys = () => {
  const gridGroup = useRevealGroup();

  return (
    <>
      <div id="adaes-cursor" className="adaes-cursor" aria-hidden="true" />
      <SiteHeader activePage="/advogados" />

      <PageHero
        eyebrow="A Equipe"
        title={<>Nossos<br /><em style={{ color: '#C79C74', fontStyle: 'italic' }}>Advogados</em></>}
        subtitle="Profissionais de excelência com visão estratégica"
        bgImage={IMAGES.heroBg}
      />

      {/* Grid de Advogados */}
      <section
        style={{ padding: '120px 0', background: '#FAEDCD' }}
        ref={gridGroup as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div style={{ marginBottom: 72 }} className="reveal stagger-1">
            <span className="eyebrow eyebrow-dark">Equipe</span>
            <div className="gold-line" />
            <h2 className="headline-lg" style={{ color: '#0F3B3F' }}>
              Profissionais em<br />
              <em style={{ color: '#C79C74', fontStyle: 'italic' }}>Destaque</em>
            </h2>
          </div>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 2 }}
          >
            {attorneys.map((person, i) => (
              <Link
                key={person.id}
                href={`/advogado/${person.id}`}
                className={`reveal stagger-${Math.min(i + 2, 6)}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="img-hover-wrap"
                  style={{ position: 'relative', height: 380, overflow: 'hidden', marginBottom: 0 }}
                >
                  <img
                    src={person.img}
                    alt={person.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)', transition: 'transform 700ms cubic-bezier(0.4,0,0.2,1)' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.05)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-0 left-0 right-0" style={{ padding: '28px 28px' }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 400, color: '#FAEDCD', marginBottom: 4 }}>
                      {person.name}
                    </h3>
                    <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#C79C74', marginBottom: 4 }}>
                      {person.role}
                    </p>
                    <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, color: 'rgba(250, 237, 205,0.5)' }}>
                      {person.areas}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    padding: '16px 0',
                    borderBottom: '1px solid #D5D1C8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, color: '#6b6b6b', letterSpacing: '1px' }}>
                    {person.location}
                  </span>
                  <span className="cta-link" style={{ fontSize: 11 }}>
                    Ver perfil <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <SiteFooter />
    </>
  );
};

export default Attorneys;
