import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, ArrowRight, X, Menu } from 'lucide-react';

/* ===================================================================
   ADÃES ADVOGADOS — Awwwards Level Redesign
   Conceito: "ESTRUTURA" — Arquitetura jurídica de alto impacto
   Paleta: Teal #0F3B3F + Gold #C79C74 + Stone #FAEDCD + Ink #0A0A0A
   Tipografia: Playfair Display (light 300) + Lato
   Motion: IntersectionObserver + Parallax + Clip-path Reveals
=================================================================== */

const IMAGES = {
  logo: '/images/Adão_Logo Principal_02.png',          // Dark Teal
  logoFooter: '/images/Adão_Logo Principal_01.png',    // Gold
  // Fotos do cliente — mapeadas editorialmente
  hero: '/images/client/5.jpeg',          // Arquitetura noturna — escala + luz dourada
  heroAlt: '/images/client/7.jpeg',       // Corredor — perspectiva profundidade
  manifesto: '/images/client/2.jpeg',     // Painel bronze — solidez + permanência
  aboutBg: '/images/client/10.jpeg',      // Escada teal — progressão
  stat: '/images/client/4.jpeg',          // Forma geométrica dourada — abstrato
  area1: '/images/client/8.jpeg',         // Estrutura teal+bronze — corporativo
  area2: '/images/client/3.jpeg',         // Mesa pedra+bronze — imobiliário
  area3: '/images/client/9.jpeg',         // Rede geométrica — conexões
  area4: '/images/client/12.jpeg',        // Estradas aéreas — nacional/agro
  area5: '/images/client/13.jpeg',        // Arco arquitetônico — solução
  area6: '/images/client/6.jpeg',         // Esfera+pedra — equilíbrio
  news1: '/images/client/11.jpeg',
  news2: '/images/client/14.jpeg',
  news3: '/images/client/16.jpeg',
  ctaBg: '/images/client/1.jpeg',         // Parede tátil — textura
};

// ===== HOOKS =====

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useRevealGroup() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-image, .reveal-line').forEach((child) => {
            child.classList.add('visible');
          });
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

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return { ref, count };
}

function useParallax() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      if (scrolled > 0 && rect.top < window.innerHeight) {
        const rate = scrolled * 0.12;
        el.style.transform = `translateY(${rate}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return ref;
}

function useHeaderScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return scrolled;
}

function useCursor() {
  useEffect(() => {
    // Custom cursor removido para performance e estética editorial (less is more).
  }, []);
}

function useAreaReveal(itemCount: number) {
  const [visibleRows, setVisibleRows] = useState<boolean[]>(new Array(itemCount).fill(false));
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleRows(new Array(itemCount).fill(true));
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [itemCount]);
  return { ref, visibleRows };
}

function useStatsReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
}

// ===== COMPONENTS =====

const SectionEyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <span className={`eyebrow${light ? '' : ' eyebrow-dark'}`}>{children}</span>
);

const GoldLine = () => <div className="gold-line" />;

function AnimatedNumber({ target, suffix = '', start = false }: { target: number, suffix?: string, start?: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target]);
  return (
    <span>
      {count}<span style={{ fontSize: '0.6em', color: '#063943', verticalAlign: 'super' }}>{suffix}</span>
    </span>
  );
}

// ===== MAIN HOME COMPONENT =====

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const scrolled = useHeaderScroll();
  useCursor();

  const heroParallax = useParallax();
  const manifestoGroup = useRevealGroup();
  const { ref: statsSectionRef, isVisible: statsVisible } = useStatsReveal();
  const practiceGroup = useRevealGroup();
  const newsGroup = useRevealGroup();
  const ctaGroup = useRevealGroup();

  const practiceAreas = [
    { num: '01', title: 'Direito Empresarial', desc: 'Constituição de empresas, fusões, aquisições e governança corporativa.', img: IMAGES.area1 },
    { num: '02', title: 'Direito Tributário', desc: 'Planejamento tributário, compliance fiscal e litígios tributários.', img: IMAGES.area2 },
    { num: '03', title: 'Direito Imobiliário', desc: 'Transações imobiliárias, incorporação e regularização de imóveis.', img: IMAGES.area3 },
    { num: '04', title: 'Agronegócio', desc: 'Estruturação de holdings rurais, regularização fundiária e litígios agrários.', img: IMAGES.area4 },
    { num: '05', title: 'Contencioso Civil', desc: 'Representação em litígios cíveis, comerciais e administrativos.', img: IMAGES.area5 },
    { num: '06', title: 'Direito Ambiental', desc: 'Licenciamento ambiental, compliance e litígios ambientais.', img: IMAGES.area6 },
  ];

  const { ref: areasListRef, visibleRows: areaVisibleRows } = useAreaReveal(practiceAreas.length);

  // Hero entrance animation
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Stagger reveal for mobile menu links
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const links = document.querySelectorAll('.mobile-menu-link');
      links.forEach((link, i) => {
        setTimeout(() => link.classList.add('visible'), 80 + i * 60);
      });
    } else {
      document.body.style.overflow = '';
      document.querySelectorAll('.mobile-menu-link').forEach(link => link.classList.remove('visible'));
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);



  const news = [
    { date: '03 Jun 2026', title: 'Nova Lei de Proteção de Dados entra em vigor', img: IMAGES.news1 },
    { date: '01 Jun 2026', title: 'Gestão de riscos tributários em tempos desafiadores', img: IMAGES.news2 },
    { date: '28 Mai 2026', title: 'Principais questões de direito do consumidor em 2026', img: IMAGES.news3 },
  ];

  const publications = [
    { date: '03 Jun 2026', title: 'Conselho Europeu adota Diretiva de Distribuição de Seguros' },
    { date: '01 Jun 2026', title: 'Arbitragem Internacional confirmada como forma dominante de resolução de disputas' },
    { date: '28 Mai 2026', title: 'Revisão da Lei de Privacidade e Proteção de Dados' },
    { date: '25 Mai 2026', title: 'Indústria de Petróleo favorece Arbitragem Internacional' },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col" style={{ background: '#FAEDCD' }}>

        {/* ===== MOBILE MENU OVERLAY ===== */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} style={{ background: '#010326' }}>
          <div className="flex justify-between items-center mb-16">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center" style={{ textDecoration: 'none' }}>
              <img src="/images/Adão_Logo Principal_03.png" alt="Adães Advogados" className="h-8" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FAEDCD] p-2"
              aria-label="Fechar menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col flex-1 mt-8 gap-6">
            {[
              { href: '/', label: 'Início' },
              { href: '/sobre', label: 'Sobre' },
              { href: '/advogados', label: 'Advogados' },
              { href: '/areas', label: 'Áreas de Prática' },
              { href: '/blog', label: 'Notícias' },
              { href: '/contato', label: 'Contato' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-menu-link"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 8vw, 56px)', color: '#FAEDCD', textDecoration: 'none', borderBottom: '0.5px solid rgba(199,156,116,0.2)', paddingBottom: '16px' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8 border-t border-[#C79C74]/20">
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, letterSpacing: 2, color: 'rgba(250,237,205,0.4)', textTransform: 'uppercase' }}>
              BRASÍLIA, DF — BRASIL
            </p>
            <a href="tel:+5561000000000" style={{ display: 'block', marginTop: '16px', fontFamily: 'Outfit, sans-serif', fontSize: 13, letterSpacing: 2, color: '#C79C74', textDecoration: 'none' }}>
              (61) 3000-0000
            </a>
          </div>
        </div>

        {/* ===== HEADER ===== */}
        <header
          className="fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            paddingTop: scrolled ? '20px' : '32px',
            paddingBottom: scrolled ? '20px' : '32px',
            background: scrolled ? 'rgba(250, 237, 205, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            borderBottom: '1px solid rgba(1, 3, 38, 0.06)',
          }}
        >
          <div className="container">
            <div className="flex items-center justify-between">
              <Link href="/" className="relative z-10 flex items-center justify-center cursor-pointer">
                <img
                  src={IMAGES.logo}
                  alt="Adães Advogados"
                  className="h-8 transition-all duration-300"
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-12">
                {[
                  { href: '/', label: 'Início', active: true },
                  { href: '/sobre', label: 'Sobre', active: false },
                  { href: '/advogados', label: 'Advogados', active: false },
                  { href: '/areas', label: 'Áreas', active: false },
                  { href: '/blog', label: 'Notícias', active: false },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative group"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: item.active ? '#C79C74' : '#010326',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: 0,
                        height: '1px',
                        background: '#C79C74',
                        width: item.active ? '100%' : '0',
                        transition: 'width 400ms cubic-bezier(0.4,0,0.2,1)',
                      }}
                      className={item.active ? '' : 'group-hover:!w-full'}
                    />
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:block relative z-10">
                <Link
                  href="/contato"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    padding: '10px 24px',
                    border: `1px solid ${scrolled ? '#0F3B3F' : 'rgba(1,3,38,0.5)'}`,
                    color: scrolled ? '#0F3B3F' : '#010326',
                    textDecoration: 'none',
                    transition: 'all 300ms ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#C79C74';
                    (e.currentTarget as HTMLElement).style.borderColor = '#C79C74';
                    (e.currentTarget as HTMLElement).style.color = '#FAEDCD';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.borderColor = scrolled ? '#0F3B3F' : 'rgba(1,3,38,0.5)';
                    (e.currentTarget as HTMLElement).style.color = scrolled ? '#0F3B3F' : '#010326';
                  }}
                >
                  Contato
                </Link>
              </div>


              {/* Mobile Menu Btn */}
              <button
                className="lg:hidden p-2 transition-colors relative z-10"
                style={{ color: '#010326', background: 'transparent', border: 'none' }}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </header>

        {/* ===== HERO — EDITORIAL SPLIT ===== */}
        <section
          className="relative w-full"
          style={{ 
            background: '#FAEDCD', 
            paddingTop: 'clamp(110px, 15vw, 180px)', 
            paddingBottom: 'clamp(60px, 8vw, 80px)', 
            minHeight: 'auto',
            borderBottom: '1px solid rgba(1, 3, 38, 0.08)' 
          }}
        >
          <div className="container relative h-full">
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
              
              {/* Left Content */}
              <div className="col-span-12 lg:col-span-6 flex flex-col relative z-10 lg:pr-8">
                <div
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: '#010326',
                    marginBottom: 32,
                    opacity: heroLoaded ? 0.6 : 0,
                    transform: heroLoaded ? 'translateY(0)' : 'translateY(15px)',
                    transition: 'opacity 800ms ease 100ms, transform 800ms ease 100ms',
                  }}
                >
                  Brasília, DF · Brasil
                </div>

                <h1 
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: 'clamp(48px, 6.5vw, 124px)', 
                    fontWeight: 300, 
                    lineHeight: 0.92, 
                    letterSpacing: '-0.02em', 
                    color: '#010326', 
                    marginBottom: 40,
                    opacity: heroLoaded ? 1 : 0,
                    transform: heroLoaded ? 'translateY(0)' : 'translateY(15px)',
                    transition: 'opacity 800ms ease 300ms, transform 800ms ease 300ms',
                  }}
                >
                  Estrutura<br />
                  <em style={{ color: '#063943', fontStyle: 'italic', fontWeight: 400 }}>jurídica</em><br />
                  de alto impacto.
                </h1>

                <p 
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 'clamp(14px, 1.1vw, 16px)',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: '#010326',
                    maxWidth: '44ch',
                    marginBottom: 56,
                    opacity: heroLoaded ? 0.8 : 0,
                    transform: heroLoaded ? 'translateY(0)' : 'translateY(15px)',
                    transition: 'opacity 800ms ease 500ms, transform 800ms ease 500ms',
                  }}
                >
                  Proteção de legados e governança corporativa de excelência para investidores e empresários no Brasil.
                </p>

                <div
                  style={{
                    opacity: heroLoaded ? 1 : 0,
                    transform: heroLoaded ? 'translateY(0)' : 'translateY(15px)',
                    transition: 'opacity 800ms ease 700ms, transform 800ms ease 700ms',
                  }}
                >
                  <Link 
                    href="/contato" 
                    className="group inline-flex items-center gap-4 relative pb-2"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: '#010326',
                      textDecoration: 'none',
                    }}
                  >
                    Converse com um sócio
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontStyle: 'italic', fontWeight: 300, transform: 'translateY(-1px)' }}>→</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[rgba(1,3,38,0.15)] origin-left transition-transform duration-500 group-hover:scale-x-0"></span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#010326] origin-right scale-x-0 transition-transform duration-500 delay-100 group-hover:scale-x-100"></span>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div 
                className="col-span-12 lg:col-span-6 relative h-[50vh] lg:h-[68vh] w-full mt-12 lg:mt-0"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 1200ms ease 400ms, transform 1200ms ease 400ms',
                }}
              >
                <div 
                  className="w-full h-full relative overflow-hidden"
                  style={{ border: '1px solid rgba(1,3,38,0.08)' }}
                >
                  <div className="absolute top-6 left-6 z-10 mix-blend-difference">
                    <div className="flex flex-col gap-2">
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9, fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#FAEDCD', opacity: 0.7 }}>Ref. 01</span>
                      <div style={{ width: '16px', height: '1px', backgroundColor: 'rgba(250,237,205,0.4)' }} />
                    </div>
                  </div>
                  <img
                    ref={heroParallax as React.RefObject<HTMLImageElement>}
                    src={IMAGES.hero}
                    alt="Arquitetura de Brasília"
                    className="w-full object-cover"
                    style={{
                      height: '110%',
                      top: '-5%',
                      position: 'absolute',
                      filter: 'grayscale(20%) contrast(1.1) brightness(0.9)',
                    }}
                    onLoad={() => setHeroLoaded(true)}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== NOVA FAIXA DE DESTAQUES (Atalhos Estratégicos) ===== */}
        <section
          style={{ background: '#010326', borderBottom: '1px solid rgba(250,237,205,0.05)' }}
          data-cursor-dark
        >
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(250,237,205,0.05)]">
              
              {[
                { label: 'Governança Patrimonial', desc: 'Preservação estrutural de ativos e heranças.' },
                { label: 'Estruturas Societárias', desc: 'Engenharia corporativa e reorganização de holdings.' },
                { label: 'Atuação Nacional', desc: 'Cobertura estratégica nos tribunais superiores.' },
                { label: 'Conselho Estratégico', desc: 'Aconselhamento direto para diretoria executiva.' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="py-16 px-6 lg:py-24 lg:px-10 flex flex-col justify-between group cursor-pointer" 
                  style={{ transition: 'background-color 300ms ease' }} 
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(250,237,205,0.02)'} 
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}
                >
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase', color: '#C79C74', marginBottom: 32 }}>
                    {String(i + 1).padStart(2, '0')}.
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 300, color: '#FAEDCD', marginBottom: 12, letterSpacing: '0.02em', lineHeight: 1.3 }}>
                      {item.label}
                    </h4>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: 'rgba(250,237,205,0.6)', fontWeight: 300, lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ===== MANIFESTO SECTION (Sobre o Escritório) ===== */}
        <section
          className="relative overflow-hidden"
          style={{ background: '#010326', paddingTop: 'clamp(80px, 12vw, 120px)', paddingBottom: 'clamp(80px, 12vw, 120px)' }}
          data-cursor-dark
          ref={manifestoGroup as React.RefObject<HTMLElement>}
        >
          <div className="container relative z-10">
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Image Column - Controlled Size */}
              <div className="col-span-12 lg:col-span-5 reveal stagger-1 mb-12 lg:mb-0">
                <div className="w-full relative overflow-hidden" style={{ paddingBottom: '120%', border: '1px solid rgba(250,237,205,0.1)' }}>
                  <img
                    src={IMAGES.manifesto}
                    alt="Estrutura"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'grayscale(15%) contrast(1.1) brightness(0.85)' }}
                  />
                </div>
              </div>

              {/* Text Column - Aligned and Readable */}
              <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-6 mb-10 reveal stagger-2">
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: '#FAEDCD', opacity: 0.5 }}>Nota Institucional</span>
                  <div className="w-12 h-[1px] bg-[#FAEDCD] opacity-[0.2]" />
                </div>
                
                <h2 
                  className="reveal stagger-3" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: 'clamp(36px, 4vw, 56px)', 
                    fontWeight: 300, 
                    lineHeight: 1.15, 
                    color: '#FAEDCD',
                    letterSpacing: '-0.02em',
                    marginBottom: 40 
                  }}
                >
                  Projetamos estruturas jurídicas para a <em style={{ color: '#C79C74', fontStyle: 'italic', fontWeight: 400 }}>preservação de legados</em>.
                </h2>

                <p
                  className="reveal stagger-4"
                  style={{ 
                    fontFamily: 'Outfit, sans-serif', 
                    fontSize: 'clamp(14px, 1.1vw, 16px)', 
                    fontWeight: 300, 
                    lineHeight: 1.8, 
                    color: 'rgba(250, 237, 205, 0.7)', 
                    maxWidth: '54ch', 
                  }}
                >
                  Há mais de 25 anos, atuamos não como operadores mecânicos do direito, mas como conselheiros de trincheira. Protegemos holdings, estruturamos fusões e garantimos a blindagem de legados em todo o território nacional.
                </p>

                <div className="mt-12 reveal stagger-5">
                  <Link 
                    href="/sobre" 
                    className="group inline-flex items-center gap-4 relative pb-2"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: '#FAEDCD',
                      textDecoration: 'none',
                    }}
                  >
                    Ler dossiê completo
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontStyle: 'italic', fontWeight: 300 }}>→</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 origin-left transition-transform duration-500 group-hover:scale-x-0"></span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FAEDCD] origin-right scale-x-0 transition-transform duration-500 delay-100 group-hover:scale-x-100"></span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== STATS SECTION (Relatório Técnico Seguro) ===== */}
        <section
          style={{ background: '#FAEDCD', borderBottom: '1px solid rgba(1,3,38,0.05)', padding: '80px 0' }}
          ref={statsSectionRef as React.RefObject<HTMLElement>}
        >
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8" style={{ borderTop: '1px solid rgba(1,3,38,0.05)', paddingTop: '60px' }}>
              
              {/* Stat 1 */}
              <div 
                className="relative flex flex-col items-center text-center lg:px-6" 
                style={{ 
                  opacity: statsVisible ? 1 : 0, 
                  transform: statsVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 600ms ease-out 0ms, transform 600ms ease-out 0ms'
                }}
              >
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#010326', opacity: 0.5, marginBottom: 24 }}>Atuação</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(44px, 4vw, 64px)', fontWeight: 300, lineHeight: 1, color: '#010326', letterSpacing: '-0.02em' }}>
                  <AnimatedNumber target={25} suffix="+" start={statsVisible} />
                </div>
                <div style={{ marginTop: 12, fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 400, color: '#010326', opacity: 0.8 }}>Anos de experiência</div>
              </div>

              {/* Stat 2 */}
              <div 
                className="relative flex flex-col items-center text-center lg:border-l lg:border-[rgba(1,3,38,0.08)] lg:px-6" 
                style={{ 
                  opacity: statsVisible ? 1 : 0, 
                  transform: statsVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 600ms ease-out 120ms, transform 600ms ease-out 120ms'
                }}
              >
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#010326', opacity: 0.5, marginBottom: 24 }}>Escala</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(44px, 4vw, 64px)', fontWeight: 300, lineHeight: 1, color: '#010326', letterSpacing: '-0.02em' }}>
                  <AnimatedNumber target={500} suffix="+" start={statsVisible} />
                </div>
                <div style={{ marginTop: 12, fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 400, color: '#010326', opacity: 0.8 }}>Casos corporativos</div>
              </div>

              {/* Stat 3 */}
              <div 
                className="relative flex flex-col items-center text-center lg:border-l lg:border-[rgba(1,3,38,0.08)] lg:px-6" 
                style={{ 
                  opacity: statsVisible ? 1 : 0, 
                  transform: statsVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 600ms ease-out 240ms, transform 600ms ease-out 240ms'
                }}
              >
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#010326', opacity: 0.5, marginBottom: 24 }}>Performance</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(44px, 4vw, 64px)', fontWeight: 300, lineHeight: 1, color: '#010326', letterSpacing: '-0.02em' }}>
                  <AnimatedNumber target={98} suffix="%" start={statsVisible} />
                </div>
                <div style={{ marginTop: 12, fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 400, color: '#010326', opacity: 0.8 }}>Índice de retenção</div>
              </div>

              {/* Quote Block - Safe and Proportional */}
              <div 
                className="relative flex flex-col items-center text-center lg:border-l lg:border-[rgba(1,3,38,0.08)] lg:px-6" 
                style={{ 
                  opacity: statsVisible ? 1 : 0, 
                  transform: statsVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 600ms ease-out 360ms, transform 600ms ease-out 360ms'
                }}
              >
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#063943', opacity: 0.6, marginBottom: 24 }}>Princípio Ativo</div>
                <blockquote
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(18px, 1.5vw, 22px)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    lineHeight: 1.4,
                    color: '#010326',
                    textAlign: 'center',
                  }}
                >
                  "A governança corporativa exige precisão absoluta."
                </blockquote>
              </div>

            </div>
          </div>
        </section>

        {/* ===== ÁREAS DE PRÁTICA (Índice Editorial Seguro) ===== */}
        <section
          style={{ background: '#FAEDCD', paddingBottom: '120px' }}
          data-cursor-dark
          ref={practiceGroup as React.RefObject<HTMLElement>}
        >
          <div className="container">
            {/* Section Header */}
            <div className="pt-24 pb-16">
              <div className="flex justify-between items-end flex-wrap gap-8 reveal stagger-1">
                <div>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: '#010326', opacity: 0.5, display: 'block', marginBottom: 20 }}>Índice Estratégico</span>
                  <h2
                    style={{ 
                      fontFamily: 'Playfair Display, serif', 
                      fontSize: 'clamp(40px, 4vw, 64px)', 
                      fontWeight: 300, 
                      lineHeight: 1.1, 
                      color: '#010326',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Áreas de <em style={{ fontStyle: 'italic', color: '#063943' }}>Atuação</em>
                  </h2>
                </div>
                <div className="pb-2">
                  <Link 
                    href="/areas" 
                    className="group inline-flex items-center gap-4 relative pb-2"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: '#010326',
                      textDecoration: 'none',
                    }}
                  >
                    Ver dossiê completo
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontStyle: 'italic', fontWeight: 300 }}>→</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10 origin-left transition-transform duration-500 group-hover:scale-x-0"></span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#010326] origin-right scale-x-0 transition-transform duration-500 delay-100 group-hover:scale-x-100"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Interactive Editorial Index */}
            <div ref={areasListRef as React.RefObject<HTMLDivElement>} style={{ borderTop: '1px solid rgba(1,3,38,0.1)' }}>
              {practiceAreas.map((area, i) => (
                <Link
                  key={area.num}
                  href="/areas"
                  className="group block relative cursor-pointer"
                  style={{ 
                    textDecoration: 'none', 
                    borderBottom: '1px solid rgba(1,3,38,0.1)',
                    padding: '32px 16px',
                    backgroundColor: '#FAEDCD',
                    opacity: areaVisibleRows[i] ? 1 : 0,
                    transform: areaVisibleRows[i] ? 'translateY(0)' : 'translateY(18px)',
                    transition: `background-color 150ms ease, opacity 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 80}ms, transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 80}ms`,
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(6, 57, 67, 0.05)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#FAEDCD'}
                >
                  <div className="grid grid-cols-12 gap-6 items-center relative z-10">
                    
                    {/* Number */}
                    <div className="col-span-2 lg:col-span-1">
                      <span 
                        className="transition-all duration-150 ease-out group-hover:text-[#C79C74] group-hover:opacity-100"
                        style={{ 
                          fontFamily: 'Outfit, sans-serif', 
                          fontSize: 12, 
                          fontWeight: 500, 
                          color: '#010326', 
                          opacity: 0.4,
                          letterSpacing: '2px',
                        }}
                      >
                        {area.num}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="col-span-10 lg:col-span-4">
                      <h3
                        style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: 'clamp(22px, 2vw, 32px)',
                          fontWeight: 400,
                          color: '#010326',
                          lineHeight: 1.2,
                          letterSpacing: '-0.01em',
                          transition: 'transform 150ms ease, color 150ms ease, letter-spacing 150ms ease',
                        }}
                        className="group-hover:translate-x-2 group-hover:text-[#063943] group-hover:tracking-[0.01em]"
                      >
                        {area.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="hidden lg:block col-span-5 lg:col-start-6">
                      <p
                        style={{
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: 14,
                          fontWeight: 300,
                          color: '#010326',
                          opacity: 0.7,
                          lineHeight: 1.6,
                        }}
                      >
                        {area.desc}
                      </p>
                    </div>

                    {/* Reveal Arrow */}
                    <div className="hidden lg:flex col-span-2 justify-end items-center">
                      <span 
                        style={{ 
                          fontFamily: 'Playfair Display, serif', 
                          fontSize: 22, 
                          color: '#C79C74',
                          fontWeight: 300,
                          transform: 'translateX(8px)',
                          opacity: 0,
                          transition: 'all 150ms ease',
                        }}
                        className="group-hover:opacity-100 group-hover:translate-x-0"
                      >
                        →
                      </span>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== NOVA SEÇÃO PESSOAS / CONSELHO ESTRATÉGICO ===== */}
        <section
          style={{ background: '#FAEDCD', paddingTop: 'clamp(80px, 10vw, 120px)', paddingBottom: 'clamp(80px, 10vw, 120px)', borderTop: '1px solid rgba(1, 3, 38, 0.08)' }}
        >
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: '#010326', opacity: 0.5, display: 'block', marginBottom: 20 }}>Conselho Estratégico</span>
                <h2
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: 'clamp(36px, 4vw, 56px)', 
                    fontWeight: 300, 
                    lineHeight: 1.1, 
                    color: '#010326',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Pessoas à frente da <em style={{ fontStyle: 'italic', color: '#063943' }}>estratégia.</em>
                </h2>
              </div>
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: '#010326',
                  opacity: 0.7,
                  maxWidth: '400px',
                  fontWeight: 300
                }}
              >
                A atuação do escritório é conduzida por profissionais dedicados à estruturação jurídica, governança e proteção patrimonial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { role: 'Sócio Responsável', area: 'Direito Societário' },
                { role: 'Sócio Responsável', area: 'Direito Tributário' },
                { role: 'Sócio Responsável', area: 'Contencioso Estratégico' }
              ].map((person, i) => (
                <div key={i} className="group cursor-pointer">
                  {/* Placeholder Editorial em vez de foto fake */}
                  <div 
                    className="w-full relative overflow-hidden mb-6" 
                    style={{ 
                      aspectRatio: '3/4', 
                      background: '#010326',
                    }}
                  >
                    <div 
                      className="absolute inset-0 opacity-30 mix-blend-overlay transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${IMAGES.hero})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(100%) contrast(1.2)'
                      }}
                    />
                    <div className="absolute inset-0 border border-[rgba(250,237,205,0.15)] m-4 transition-all duration-300 group-hover:m-3" />
                    <div className="absolute bottom-6 left-6">
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, letterSpacing: '2px', color: '#FAEDCD', opacity: 0.6, textTransform: 'uppercase' }}>
                        Perfil em atualização
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 400, color: '#010326', marginBottom: 8 }}>
                    {person.role}
                  </h3>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: '#063943', opacity: 0.8, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {person.area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INTELIGÊNCIA JURÍDICA (Notícias + Publicações) ===== */}
        <section
          style={{ paddingTop: 'clamp(80px, 12vw, 120px)', paddingBottom: 'clamp(80px, 12vw, 120px)', background: '#FAEDCD', borderTop: '1px solid rgba(1, 3, 38, 0.08)' }}
          ref={newsGroup as React.RefObject<HTMLElement>}
        >
          <div className="container">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
              <div className="reveal stagger-1 max-w-3xl">
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: '#010326', opacity: 0.5, display: 'block', marginBottom: 20 }}>Inteligência Estratégica</span>
                <h2
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: 'clamp(32px, 4vw, 54px)', 
                    fontWeight: 300, 
                    lineHeight: 1.1, 
                    color: '#010326',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Inteligência jurídica para<br />
                  decisões de <em style={{ color: '#063943', fontStyle: 'italic', fontWeight: 400 }}>alto impacto</em>
                </h2>
              </div>
              <div className="reveal stagger-2 pb-2">
                <Link 
                  href="/inteligencia" 
                  className="group inline-flex items-center gap-4 relative pb-2"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: '#010326',
                    textDecoration: 'none',
                  }}
                >
                  Acessar Acervo
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontStyle: 'italic', fontWeight: 300, transform: 'translateY(-1px)' }}>→</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[rgba(1,3,38,0.15)] origin-left transition-transform duration-500 group-hover:scale-x-0"></span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#010326] origin-right scale-x-0 transition-transform duration-500 delay-100 group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>

            {/* Editorial Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              {/* Manchete Principal (Left - 5 cols) */}
              <div className="lg:col-span-5 reveal stagger-3">
                <Link href="/inteligencia/1" className="group block relative" style={{ textDecoration: 'none' }}>
                  <div className="w-full relative overflow-hidden mb-6" style={{ paddingBottom: '80%', border: '1px solid rgba(1,3,38,0.08)' }}>
                    <div className="absolute top-6 left-6 z-10 mix-blend-difference">
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#FAEDCD', opacity: 0.8, borderBottom: '1px solid rgba(250,237,205,0.3)', paddingBottom: 4 }}>Dossiê de Capa</span>
                    </div>
                    <img
                      src={news[0]?.img || IMAGES.manifesto}
                      alt="Manchete Principal"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
                      style={{ filter: 'grayscale(20%) contrast(1.15) brightness(0.85)' }}
                    />
                  </div>
                  <div className="flex gap-4 items-center mb-4">
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#010326', opacity: 0.5 }}>{news[0]?.date || 'Atualizado Recente'}</span>
                    <div className="h-[1px] w-8 bg-[#010326] opacity-[0.2]" />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(26px, 2.8vw, 36px)',
                      fontWeight: 300,
                      color: '#010326',
                      lineHeight: 1.15,
                      letterSpacing: '-0.01em',
                      transition: 'color 400ms ease',
                    }}
                    className="group-hover:text-[#063943]"
                  >
                    O impacto das novas regulações na proteção de legados corporativos nacionais.
                  </h3>
                </Link>
              </div>

              {/* Lista de Publicações (Right - 7 cols) */}
              <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-0">
                <div style={{ borderTop: '1px solid rgba(1,3,38,0.08)' }}>
                  {publications.slice(0, 4).map((item, i) => (
                    <Link
                      key={i}
                      href="/inteligencia/post"
                      className={`group block relative reveal stagger-${i + 4}`}
                      style={{ 
                        textDecoration: 'none', 
                        borderBottom: '1px solid rgba(1,3,38,0.08)',
                        padding: '28px 0',
                        transition: 'padding-left 400ms ease, background-color 400ms ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.paddingLeft = '24px';
                        (e.currentTarget as HTMLElement).style.paddingRight = '24px';
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(6, 57, 67, 0.02)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.paddingLeft = '0px';
                        (e.currentTarget as HTMLElement).style.paddingRight = '0px';
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                      }}
                    >
                      {/* Left indicator line on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C79C74] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out" />

                      <div className="grid grid-cols-12 gap-6 items-start">
                        {/* Meta Data */}
                        <div className="col-span-12 md:col-span-3">
                          <span 
                            style={{ 
                              fontFamily: 'Outfit, sans-serif', 
                              fontSize: 10, 
                              fontWeight: 600, 
                              color: '#010326', 
                              opacity: 0.4,
                              letterSpacing: '2px',
                              textTransform: 'uppercase',
                              display: 'block',
                            }}
                          >
                            {item.date}
                          </span>
                          <span 
                            style={{ 
                              fontFamily: 'Outfit, sans-serif', 
                              fontSize: 10, 
                              fontWeight: 500, 
                              color: '#C79C74', 
                              marginTop: 8,
                              display: 'block',
                            }}
                          >
                            Nota Técnica
                          </span>
                        </div>

                        {/* Title */}
                        <div className="col-span-10 md:col-span-8">
                          <h4
                            style={{
                              fontFamily: 'Playfair Display, serif',
                              fontSize: 'clamp(20px, 1.8vw, 24px)',
                              fontWeight: 400,
                              color: '#010326',
                              lineHeight: 1.3,
                              letterSpacing: '-0.01em',
                              transition: 'color 400ms ease',
                            }}
                            className="group-hover:text-[#063943]"
                          >
                            {item.title}
                          </h4>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex col-span-1 justify-end">
                          <span 
                            style={{ 
                              fontFamily: 'Playfair Display, serif', 
                              fontSize: 20, 
                              color: '#C79C74',
                              fontWeight: 300,
                              opacity: 0,
                              transform: 'translateX(-10px)',
                              transition: 'all 400ms ease',
                            }}
                            className="group-hover:opacity-100 group-hover:translate-x-0"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== CTA SECTION (full-bleed image) ===== */}
        <section
          className="parallax-section"
          style={{ position: 'relative', height: 480, overflow: 'hidden' }}
          data-cursor-dark
          ref={ctaGroup as React.RefObject<HTMLElement>}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${IMAGES.ctaBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.35)',
              transform: 'scale(1.05)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(15,59,63,0.9) 0%, rgba(10,10,10,0.7) 100%)',
            }}
          />
          <div
            className="absolute inset-0 flex items-center"
            style={{ zIndex: 10 }}
          >
            <div className="container">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 48,
                  flexWrap: 'wrap',
                }}
              >
                <div className="reveal stagger-1">
                  <span className="eyebrow">Próximo passo</span>
                  <h2
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(28px, 4vw, 52px)',
                      fontWeight: 300,
                      color: '#FAEDCD',
                      lineHeight: 1.15,
                      maxWidth: '18ch',
                    }}
                  >
                    Sua estrutura de negócios exige{' '}
                    <em style={{ color: '#C79C74', fontStyle: 'italic' }}>
                      conselheiros estratégicos.
                    </em>
                  </h2>
                </div>
                <div className="reveal stagger-2">
                    <Link
                    href="/contato"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 16,
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '4px',
                      textTransform: 'uppercase',
                      color: '#010326',
                      textDecoration: 'none',
                      background: '#C79C74',
                      padding: '20px 40px',
                      transition: 'background 300ms ease, transform 300ms ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(199,156,116,0.85)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = '#C79C74';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}
                  >
                    Iniciar conversa estratégica
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer style={{ background: '#010326', padding: '80px 0 40px' }} data-cursor-dark>
          <div className="container">
            {/* Statement Tipográfico */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(250,237,205,0.2)', marginBottom: 48 }} />

            <div style={{ marginBottom: 64 }}>
              <h2
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(48px, 5vw, 60px)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: '#FAEDCD',
                  letterSpacing: '-0.02em',
                }}
              >
                Estrutura jurídica de alto impacto.
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                gap: '40px 32px',
                marginBottom: 64,
              }}
              className="footer-grid"
            >
              {/* Logo + tagline */}
              <div>
                <img
                  src={IMAGES.logoFooter}
                  alt="Adães Advogados"
                  className="h-9 mb-6"
                  style={{ opacity: 0.9 }}
                />
                <p
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: 'rgba(250, 237, 205,0.4)',
                    maxWidth: '36ch',
                    marginBottom: 24,
                  }}
                >
                  Conselheiros estratégicos ao lado de empresários, investidores e
                  executivos de alto patrimônio.
                </p>
                <div style={{ display: 'flex', gap: 20 }}>
                  {['LinkedIn'].map(social => (
                    <a key={social} href="#" className="footer-link"
                      style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(250,237,205,0.4)', textDecoration: 'none', transition: 'color 300ms ease' }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#C79C74')}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(250,237,205,0.4)')}>
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              {/* Navegação */}
              <div>
                <h4
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: '#C79C74',
                    marginBottom: 24,
                  }}
                >
                  Navegação
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { href: '/sobre', label: 'Sobre' },
                    { href: '/advogados', label: 'Advogados' },
                    { href: '/areas', label: 'Áreas de Prática' },
                    { href: '/blog', label: 'Notícias' },
                    { href: '/contato', label: 'Contato' },
                  ].map(item => (
                    <li key={item.href}>
                      <Link href={item.href} className="footer-link" style={{ color: 'rgba(250,237,205,0.4)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#C79C74')} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(250,237,205,0.4)')}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Áreas */}
              <div>
                <h4
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: '#C79C74',
                    marginBottom: 24,
                  }}
                >
                  Áreas
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['Direito Empresarial', 'Direito Tributário', 'Direito Imobiliário', 'Agronegócio', 'Contencioso Civil', 'Direito Ambiental'].map(area => (
                    <li key={area}>
                      <a href="#" className="footer-link" style={{ color: 'rgba(250,237,205,0.4)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#C79C74')} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(250,237,205,0.4)')}>{area}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contato */}
              <div>
                <h4
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: '#C79C74',
                    marginBottom: 24,
                  }}
                >
                  Contato
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <button
                    onClick={() => setMapOpen(true)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 13,
                      color: 'rgba(250, 237, 205,0.4)',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      lineHeight: 1.6,
                      cursor: 'pointer',
                      transition: 'color 300ms ease',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#C79C74')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(250, 237, 205,0.4)')}
                  >
                    <MapPin size={14} style={{ flexShrink: 0, marginTop: 2, color: '#C79C74' }} />
                    Setor de Autarquias Norte<br />Brasília, DF
                  </button>
                  <a
                    href="tel:+556130000000"
                    className="footer-link"
                    style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(250,237,205,0.4)', textDecoration: 'none', transition: 'color 300ms ease' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#C79C74')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(250,237,205,0.4)')}
                  >
                    <Phone size={13} style={{ color: '#C79C74', flexShrink: 0 }} />
                    (61) 3000-0000
                  </a>
                  <a
                    href="mailto:contato@adaes.adv.br"
                    className="footer-link"
                    style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(250,237,205,0.4)', textDecoration: 'none', transition: 'color 300ms ease' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#C79C74')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(250,237,205,0.4)')}
                  >
                    <Mail size={13} style={{ color: '#C79C74', flexShrink: 0 }} />
                    contato@adaes.adv.br
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div
              style={{
                borderTop: '1px solid rgba(250, 237, 205,0.08)',
                paddingTop: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 16,
              }}
            >
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 12,
                  color: 'rgba(250, 237, 205,0.2)',
                  letterSpacing: '1px',
                }}
              >
                © 2026 Adães Advogados. Todos os direitos reservados.
              </p>
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 12,
                  color: 'rgba(250, 237, 205,0.15)',
                  letterSpacing: '1px',
                }}
              >
                OAB/DF · Brasília, Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* ===== MAP MODAL ===== */}
        {mapOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/70"
              style={{ backdropFilter: 'blur(8px)' }}
              onClick={() => setMapOpen(false)}
            />
            <div
              className="relative bg-white w-[90vw] max-w-3xl shadow-2xl z-10 flex flex-col"
              style={{ height: '70vh', maxHeight: 560 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 28px',
                  borderBottom: '1px solid #D5D1C8',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 20,
                      fontWeight: 400,
                      color: '#0F3B3F',
                    }}
                  >
                    Nossa Localização
                  </h3>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#6b6b6b', marginTop: 4 }}>
                    Setor de Autarquias Norte — Brasília, DF
                  </p>
                </div>
                <button
                  onClick={() => setMapOpen(false)}
                  style={{ color: '#6b6b6b', padding: 8, background: 'none', border: 'none', cursor: 'none' }}
                >
                  <X size={22} />
                </button>
              </div>
              <div style={{ flex: 1 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.837!2d-47.9292!3d-15.7920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a7c2b5b7b1%3A0x!2sBras%C3%ADlia%2C+DF!5e0!3m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Adães Advogados"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ===== RESPONSIVE GRID CSS ===== */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 1024px) {
          .container { max-width: 1180px !important; }
        }
        @media (min-width: 1280px) {
          .container { max-width: 1280px !important; }
        }
        @media (min-width: 1536px) {
          .container { max-width: 1360px !important; }
        }
      `}</style>
    </>
  );
};

export default Home;

