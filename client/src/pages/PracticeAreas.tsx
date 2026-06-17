import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiteHeader, SiteFooter, PageHero, CtaSection } from '../components/Layout';

const IMAGES = {
  heroBg: '/images/client/4.jpeg',
  area1: '/images/client/8.jpeg',
  area2: '/images/client/3.jpeg',
  area3: '/images/client/9.jpeg',
  area4: '/images/client/12.jpeg',
  area5: '/images/client/13.jpeg',
  area6: '/images/client/6.jpeg',
  area7: '/images/client/15.jpeg',
  area8: '/images/client/16.jpeg',
  area9: '/images/client/14.jpeg',
};

const practices = [
  {
    num: '01',
    title: 'Direito Empresarial',
    desc: 'Constituição de empresas, fusões, aquisições, governança corporativa, contratos comerciais e consultoria societária para empresas de todos os portes.',
    img: IMAGES.area1,
  },
  {
    num: '02',
    title: 'Direito Tributário',
    desc: 'Planejamento tributário, compliance fiscal, litígios tributários, recuperação de créditos e defesa em processos administrativos e judiciais.',
    img: IMAGES.area2,
  },
  {
    num: '03',
    title: 'Contencioso Civil',
    desc: 'Representação em litígios cíveis, comerciais e administrativos, arbitragem, mediação e resolução alternativa de conflitos.',
    img: IMAGES.area3,
  },
  {
    num: '04',
    title: 'Agronegócio',
    desc: 'Estruturação de holdings rurais, regularização fundiária, contratos agrários e litígios em matéria agrária.',
    img: IMAGES.area4,
  },
  {
    num: '05',
    title: 'Direito Imobiliário',
    desc: 'Transações imobiliárias, incorporação, regularização de imóveis, due diligence imobiliária e contratos de locação.',
    img: IMAGES.area5,
  },
  {
    num: '06',
    title: 'Direito Ambiental',
    desc: 'Licenciamento ambiental, compliance, litígios ambientais, auditorias e assessoria em projetos de sustentabilidade corporativa.',
    img: IMAGES.area6,
  },
  {
    num: '07',
    title: 'Direito Trabalhista',
    desc: 'Consultoria trabalhista, negociações coletivas, demandas judiciais, compliance trabalhista e reestruturações empresariais.',
    img: IMAGES.area7,
  },
  {
    num: '08',
    title: 'Planejamento Sucessório',
    desc: 'Estruturação de holdings familiares, planejamento patrimonial, inventários e proteção de ativos para famílias empresárias.',
    img: IMAGES.area8,
  },
  {
    num: '09',
    title: 'Direito Digital & LGPD',
    desc: 'LGPD, proteção de dados, contratos de tecnologia, propriedade intelectual digital e adequação regulatória.',
    img: IMAGES.area9,
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
          el.querySelectorAll('.reveal, .reveal-image').forEach(c => c.classList.add('visible'));
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const PracticeAreas = () => {
  const gridRef = useRevealGroup();

  return (
    <>
      <div id="adaes-cursor" className="adaes-cursor" aria-hidden="true" />
      <SiteHeader activePage="/areas" />

      <PageHero
        eyebrow="Expertise"
        title={<>Áreas de<br /><em style={{ color: '#C9A876', fontStyle: 'italic' }}>Prática</em></>}
        subtitle="Soluções jurídicas integradas para negócios complexos"
        bgImage={IMAGES.heroBg}
      />

      {/* Grid de áreas */}
      <section
        style={{ padding: '120px 0', background: '#F5F3EE' }}
        ref={gridRef as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div style={{ marginBottom: 72 }} className="reveal stagger-1">
            <span className="eyebrow eyebrow-dark">Especialidades</span>
            <div className="gold-line" />
            <h2 className="headline-lg" style={{ color: '#0F3B3F' }}>
              Áreas de<br />
              <em style={{ color: '#C9A876', fontStyle: 'italic' }}>Atuação</em>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 2,
            }}
          >
            {practices.map((p, i) => (
              <a
                key={p.num}
                href="#"
                className={`reveal stagger-${Math.min((i % 3) + 2, 6)}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: 300,
                    cursor: 'none',
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.45)',
                      transition: 'transform 700ms cubic-bezier(0.4,0,0.2,1)',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.05)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)' }}
                  />
                  <div className="absolute inset-0" style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <span
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: 52,
                        fontWeight: 300,
                        color: 'rgba(201,168,118,0.18)',
                        lineHeight: 1,
                        marginBottom: 8,
                      }}
                    >
                      {p.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: 22,
                        fontWeight: 400,
                        color: '#F5F3EE',
                        marginBottom: 10,
                        lineHeight: 1.2,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Lato, sans-serif',
                        fontSize: 13,
                        color: 'rgba(245,243,238,0.55)',
                        lineHeight: 1.65,
                        maxWidth: '38ch',
                        marginBottom: 16,
                      }}
                    >
                      {p.desc}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 20, height: 1, background: '#C9A876' }} />
                      <span style={{ fontFamily: 'Lato, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A876' }}>
                        Saiba mais
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <SiteFooter />
    </>
  );
};

export default PracticeAreas;
