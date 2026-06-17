import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiteHeader, SiteFooter, PageHero, CtaSection } from '../components/Layout';

const IMAGES = {
  heroBg: '/images/client/2.jpeg',
  about1: '/images/client/10.jpeg',
  about2: '/images/client/7.jpeg',
};

function useRevealGroup() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-image').forEach((child) => child.classList.add('visible'));
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

const About = () => {
  const introGroup = useRevealGroup();
  const valuesGroup = useRevealGroup();
  const statsGroup = useRevealGroup();

  const values = [
    {
      num: '01',
      title: 'Ética',
      desc: 'Atuamos com integridade e transparência absolutas. Nosso compromisso ético não é negociável — é a fundação sobre a qual construímos cada relação.',
    },
    {
      num: '02',
      title: 'Excelência',
      desc: 'Cada caso recebe o mesmo nível de profundidade técnica de um grande escritório internacional. Não existe problema pequeno quando afeta o patrimônio do cliente.',
    },
    {
      num: '03',
      title: 'Estratégia',
      desc: 'Não operamos o direito. Construímos arquiteturas jurídicas. Cada solução é pensada para gerar proteção de longo prazo, não apenas resolver o imediato.',
    },
  ];

  return (
    <>
      <div id="adaes-cursor" className="adaes-cursor" aria-hidden="true" />
      <SiteHeader activePage="/sobre" />

      <PageHero
        eyebrow="O Escritório"
        title={<>Sobre<br /><em style={{ color: '#C9A876', fontStyle: 'italic' }}>o Adães</em></>}
        subtitle="Conselheiros estratégicos há mais de 25 anos"
        bgImage={IMAGES.heroBg}
      />

      {/* Quem Somos */}
      <section
        style={{ padding: '120px 0', background: '#F5F3EE' }}
        ref={introGroup as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
            className="about-grid">
            <div>
              <span className="eyebrow eyebrow-dark reveal stagger-1">Quem Somos</span>
              <div className="gold-line" />
              <h2 className="headline-md reveal stagger-2" style={{ color: '#0F3B3F', marginBottom: 32 }}>
                Não somos apenas<br />
                <em style={{ color: '#C9A876', fontStyle: 'italic' }}>advogados.</em>
              </h2>
              <p className="body-lg reveal stagger-3" style={{ marginBottom: 20 }}>
                O Adães Advogados nasceu com uma premissa clara: empresários,
                incorporadoras, holdings e investidores de alto patrimônio merecem
                conselheiros estratégicos — não apenas operadores do direito.
              </p>
              <p className="body-lg reveal stagger-4" style={{ marginBottom: 20 }}>
                Com sede em Brasília e atuação nacional, somos o escritório que pensa
                junto ao cliente. Que entende o negócio antes de entender o caso.
                Que constrói proteção patrimonial de longo prazo.
              </p>
              <p className="body-lg reveal stagger-5" style={{ marginBottom: 40 }}>
                Transparência, ética e compromisso com resultados extraordinários.
                Não são valores de parede — são a nossa forma de trabalhar.
              </p>
              <Link href="/advogados" className="cta-link reveal stagger-6">
                Conheça nossa equipe <ArrowRight size={14} />
              </Link>
            </div>
            <div className="reveal-image" style={{ height: 520 }}>
              <img
                src={IMAGES.about1}
                alt="Adães Advogados"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section
        style={{ padding: '120px 0', background: '#0A0A0A' }}
        data-cursor-dark
        ref={valuesGroup as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div style={{ marginBottom: 72 }} className="reveal stagger-1">
            <span className="eyebrow">Fundamentos</span>
            <div className="gold-line" />
            <h2 className="headline-lg" style={{ color: '#F5F3EE', maxWidth: '12ch' }}>
              Nossos<br />
              <em style={{ color: '#C9A876', fontStyle: 'italic' }}>Valores</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
            className="values-grid">
            {values.map((v, i) => (
              <div
                key={v.num}
                className={`reveal stagger-${i + 2}`}
                style={{
                  background: '#111',
                  padding: '48px 40px',
                  borderTop: '2px solid #C9A876',
                }}
              >
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 64,
                  fontWeight: 300,
                  color: 'rgba(201,168,118,0.15)',
                  lineHeight: 1,
                  marginBottom: 24,
                }}>
                  {v.num}
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 28,
                  fontWeight: 400,
                  color: '#F5F3EE',
                  marginBottom: 16,
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: 'rgba(245,243,238,0.45)',
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{ padding: '100px 0', background: '#0F3B3F' }}
        data-cursor-dark
        ref={statsGroup as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'left' }}
            className="stats-grid">
            {[
              { n: '25+', l: 'Anos de experiência' },
              { n: '500+', l: 'Clientes atendidos' },
              { n: '98%', l: 'Taxa de êxito' },
              { n: '15+', l: 'Advogados especializados' },
            ].map((s, i) => (
              <div key={s.l} className={`reveal stagger-${i + 1}`}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(44px, 4vw, 72px)',
                  fontWeight: 300,
                  color: '#C9A876',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}>
                  {s.n}
                </div>
                <div style={{ width: 32, height: 1, background: 'rgba(201,168,118,0.4)', margin: '16px 0' }} />
                <p style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'rgba(245,243,238,0.4)',
                }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <SiteFooter />

      <style>{`
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};

export default About;
