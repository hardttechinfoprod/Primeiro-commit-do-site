import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

const IMAGES = {
  logo: '/images/logo.svg',
  logoFooter: '/images/logo-footer.svg',
  hero: '/images/client/5.jpeg',
  about: '/images/client/10.jpeg',
  
  // Areas Hover Images
  area1: '/images/client/8.jpeg',
  area2: '/images/client/3.jpeg',
  area3: '/images/client/12.jpeg',
  area4: '/images/client/13.jpeg',
  area5: '/images/client/7.jpeg',
  area6: '/images/client/16.jpeg',
  
  // Team
  team1: '/images/client/1.jpeg',
  team2: '/images/client/6.jpeg',
  team3: '/images/client/4.jpeg',
  
  // Insights
  news1: '/images/client/11.jpeg',
  news2: '/images/client/14.jpeg',
  news3: '/images/client/15.jpeg',
  news4: '/images/client/9.jpeg',
  
  // Textures
  textureDark: '/images/textures/texture-dark.png',
  textureLight: '/images/textures/texture-light.png',
};

// --- Custom Hooks ---
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.2, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isIntersecting] as const;
}

// Custom cursor removido para preservar UX nativa e focar no conteúdo institucional

function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin && !url.hash && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
          e.preventDefault();
          setIsTransitioning(true);
          setTimeout(() => {
            window.location.href = link.href;
          }, 280);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return { isTransitioning, mounted };
}

const StaticStat = ({ value, suffix }: { value: string | number, suffix?: string }) => {
  return (
    <div className="flex items-baseline" style={{ whiteSpace: 'nowrap' }}>
      <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 400, color: '#010326', lineHeight: 1, letterSpacing: '-0.02em' }}>
        {value}
      </span>
      {suffix && (
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(18px, 2vw, 24px)', color: '#010326', marginLeft: '4px', opacity: 0.5, fontWeight: 400 }}>
          {suffix}
        </span>
      )}
    </div>
  );
};

const HomeV2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredArea, setHoveredArea] = useState<number | null>(null);
  
  const [aboutRef, aboutVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [metricsRef, metricsVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [areasRef, areasVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [teamRef, teamVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [newsRef, newsVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [ctaRef, ctaVisible] = useIntersectionObserver({ threshold: 0.3 });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const { isTransitioning, mounted } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#FAEDCD', color: '#010326', minHeight: '100vh', fontFamily: 'Outfit, sans-serif' }}>
      <style>{`
        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp forwards ease-out;
        }
        .hero-fade {
          opacity: 0;
          animation: heroFade forwards ease-out;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .ease-editorial {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up, .hero-fade {
            opacity: 1;
            animation: none;
            transform: none;
          }
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
      
      {/* 1. NAVBAR MINIMALISTA */}
      <nav 
        style={{ 
          height: '72px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? 'rgba(1, 3, 38, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '0.5px solid rgba(250,237,205,0.12)' : '0.5px solid transparent',
          transition: 'all 400ms ease'
        }}
      >
        <div className="container h-full flex justify-between items-center lg:grid lg:grid-cols-3">
          
          {/* LOGO */}
          <div className="flex justify-start">
            <Link href="/" className="flex flex-col items-start justify-center cursor-pointer group">
              <span style={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: 400, 
                letterSpacing: '0.2em', 
                fontSize: '20px',
                lineHeight: 1,
                color: '#FAEDCD',
                transition: 'opacity 300ms ease'
              }}>
                ADÃES
              </span>
              <span style={{ 
                fontSize: '9px', 
                letterSpacing: '0.5em', 
                opacity: 0.7,
                lineHeight: 1,
                marginTop: '6px',
                color: '#FAEDCD',
                textTransform: 'uppercase',
                transition: 'opacity 300ms ease'
              }}>
                ADVOGADOS
              </span>
            </Link>
          </div>

          {/* LINKS DE NAVEGAÇÃO */}
          <div className="hidden lg:flex justify-center gap-12 items-center">
            {[
              { label: 'Início', path: '/' },
              { label: 'Sobre', path: '/sobre' },
              { label: 'Advogados', path: '/advogados' },
              { label: 'Áreas', path: '/areas' },
              { label: 'Notícias', path: '/blog' }
            ].map((item, i) => (
              <Link 
                key={i}
                href={item.path} 
                className="relative group cursor-pointer"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '13px', 
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  color: '#FAEDCD',
                  opacity: 1,
                  transition: 'opacity 400ms ease'
                }}
              >
                {item.label}
                {/* Linha de Hover do Awwwards */}
                <span 
                  className={`absolute -bottom-1 left-0 w-full h-[1px] origin-left transition-transform duration-[400ms] ease-editorial ${item.label === 'Início' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  style={{ backgroundColor: '#C79C74' }}
                />
              </Link>
            ))}
          </div>

          {/* BOTÃO CONSULTA (CTA) */}
          <div className="hidden lg:flex justify-end">
            <Link 
              href="/contato" 
              className="group relative cursor-pointer flex items-center gap-3 overflow-hidden"
              style={{ 
                fontSize: '10px', 
                letterSpacing: '0.2em', 
                textTransform: 'uppercase', 
                fontWeight: 500,
                color: '#FAEDCD',
                transition: 'opacity 400ms ease'
              }}
            >
              <span>Consultoria Estratégica</span>
              <div className="relative w-8 h-[0.5px] bg-[rgba(250,237,205,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-[#FAEDCD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-editorial" />
              </div>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden flex justify-end relative z-[60]" onClick={() => setMenuOpen(!menuOpen)} style={{ color: '#FAEDCD', transition: 'opacity 400ms ease' }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* MOBILE MENU OVERLAY */}
        <div 
          className={`lg:hidden fixed inset-0 bg-[#010326] z-[55] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          style={{ height: '100vh', top: 0, paddingTop: '72px' }}
        >
          <div className="flex flex-col items-center gap-8">
            {[
              { label: 'Início', path: '/' },
              { label: 'Sobre', path: '/sobre' },
              { label: 'Advogados', path: '/advogados' },
              { label: 'Áreas', path: '/areas' },
              { label: 'Notícias', path: '/blog' }
            ].map((item, i) => (
              <Link 
                key={i}
                href={item.path} 
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#FAEDCD', opacity: 0.9 }}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contato" 
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C79C74', marginTop: '24px', borderBottom: '1px solid #C79C74', paddingBottom: '4px' }}
            >
              Consultoria Estratégica
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO */}
      <section style={{ height: '100vh', minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', scrollMarginTop: '72px' }}>
        {/* Background Image & Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={IMAGES.hero} alt="Arquitetura Adães" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(1,3,38,0.55), rgba(1,3,38,0.75))' }} />
        </div>

        {/* Floating Element */}
        <div className="hidden md:block" style={{ position: 'absolute', top: '15vh', right: '5vw', writingMode: 'vertical-rl', transform: 'rotate(180deg)', zIndex: 10 }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(250,237,205,0.4)', textTransform: 'uppercase' }}>
            REF. 01
          </span>
        </div>

        {/* Main Content */}
        <div className="container relative z-10 w-full" style={{ paddingLeft: 'clamp(5%, 12vw, 15vw)', paddingTop: '8vh' }}>
          {/* Eyebrow */}
          <div 
            className="hero-fade-up"
            style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(250,237,205,0.7)', marginBottom: '32px', animationDuration: '600ms', animationDelay: '200ms' }}
          >
            BRASÍLIA · DF
          </div>
          
          {/* Heading */}
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 10vw, 80px)', fontWeight: 400, color: '#FAEDCD', lineHeight: 1.1, margin: 0 }}>
            <div className="hero-fade-up" style={{ animationDuration: '700ms', animationDelay: '350ms' }}>Estruturas jurídicas</div>
            <div className="hero-fade-up" style={{ animationDuration: '700ms', animationDelay: '500ms' }}>para proteger <em style={{ fontStyle: 'italic', color: '#C79C74' }}>legados.</em></div>
          </h1>

          {/* Paragraph */}
          <p 
            className="hero-fade"
            style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(250,237,205,0.85)', maxWidth: '420px', marginTop: '36px', animationDuration: '600ms', animationDelay: '650ms' }}
          >
            Assessoria estratégica premium para decisões de alto impacto no cenário corporativo e familiar.
          </p>

          {/* CTA Link */}
          <div className="hero-fade" style={{ animationDuration: '500ms', animationDelay: '800ms' }}>
            <Link 
              href="/sobre" 
              className="group inline-flex items-center gap-4 transition-colors duration-400 ease-editorial hover:text-[#FAEDCD]"
              style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C79C74', marginTop: '56px', fontWeight: 600 }}
            >
              <span className="border-b border-transparent group-hover:border-[rgba(250,237,205,0.3)] pb-1 transition-colors duration-400 ease-editorial">CONHEÇA A FIRMA</span> <ArrowRight size={16} className="transition-transform duration-500 ease-editorial group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '4vh', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', zIndex: 10 }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(250,237,205,0.3)', textTransform: 'uppercase' }}>SCROLL</span>
          <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(250,237,205,0.25)', animation: 'scrollPulse 2s infinite ease-in-out' }} />
        </div>
      </section>

      {/* 3. FAIXA DE DESTAQUES */}
      <section style={{ backgroundColor: '#010326', borderTop: '1px solid rgba(250,237,205,0.06)', borderBottom: '1px solid rgba(250,237,205,0.06)', scrollMarginTop: '72px' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:divide-x divide-[rgba(250,237,205,0.08)] gap-y-4 md:gap-y-0 py-10 md:py-0">
            {[
              { title: 'Governança Patrimonial', desc: 'Preservação estrutural de ativos e heranças.' },
              { title: 'Estruturas Societárias', desc: 'Engenharia corporativa e reorganização de holdings.' },
              { title: 'Atuação Nacional', desc: 'Cobertura estratégica nos tribunais superiores.' },
              { title: 'Conselho Estratégico', desc: 'Aconselhamento direto para diretoria executiva.' }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer flex flex-col justify-between transition-colors duration-500 hover:bg-[rgba(250,237,205,0.02)]" style={{ padding: isMobile ? '24px 16px' : '96px 40px' }}>
                <span 
                  className="transition-colors duration-500 group-hover:text-[#FAEDCD]"
                  style={{ fontSize: '10px', letterSpacing: '0.4em', color: '#C79C74', fontWeight: 500, display: 'block', marginBottom: isMobile ? '24px' : '48px', opacity: 0.8 }}
                >
                  0{i+1}.
                </span>
                <div>
                  <h3 
                    className="transition-all duration-700 ease-editorial group-hover:-translate-y-[2px] group-hover:text-[#C79C74]"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 400, color: '#FAEDCD', letterSpacing: '-0.01em', marginBottom: '16px', lineHeight: 1.25 }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="transition-all duration-700 ease-editorial group-hover:opacity-100"
                    style={{ fontSize: '14px', color: 'rgba(250,237,205,0.7)', letterSpacing: '0.02em', lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOBRE O ESCRITÓRIO */}
      <section style={{ backgroundColor: '#FAEDCD', padding: isMobile ? '72px 0' : '120px 0', overflow: 'hidden', scrollMarginTop: '72px' }}>
        <div className="container">
          <div 
            ref={aboutRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 lg:grid-cols-12 items-start"
          >
            {/* LADO ESQUERDO (Imagem) */}
            <div className="lg:col-span-5 w-full">
              <div 
                className={`transition-all duration-[700ms] ease-out ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                style={{ aspectRatio: '4/5', overflow: 'hidden' }}
              >
                <img src={IMAGES.about} alt="Sede da Firma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div 
                className={`transition-all duration-[600ms] ease-out ${aboutVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '200ms' }}
              >
                <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(1,3,38,0.08)', marginTop: '20px' }} />
                <div style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#010326', opacity: 0.6, marginTop: '16px', fontWeight: 500 }}>
                  Brasília, DF — Sede da Firma
                </div>
              </div>
            </div>

            {/* LADO DIREITO (Texto) */}
            <div className="lg:col-span-6 lg:col-start-7 mt-16 lg:mt-0">
              <span 
                className={`transition-all duration-[600ms] ease-out ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} block`}
                style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C79C74', marginBottom: '24px', transitionDelay: '300ms' }}
              >
                A Firma
              </span>
              <h2 
                className={`transition-all duration-[600ms] ease-out ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, lineHeight: 1.15, color: '#010326', transitionDelay: '400ms' }}
              >
                Arquitetura <em style={{ fontStyle: 'italic', color: '#010326' }}>legal</em> para a perenidade dos negócios.
              </h2>
              <p 
                className={`transition-all duration-[600ms] ease-out ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(1,3,38,0.65)', marginTop: '28px', maxWidth: '460px', transitionDelay: '500ms' }}
              >
                Há mais de 25 anos, atuamos não como operadores mecânicos do direito, mas como conselheiros de trincheira. Protegemos holdings, estruturamos fusões e garantimos a blindagem de legados em todo o território nacional.
              </p>
              <div 
                className={`transition-all duration-[600ms] ease-out ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '600ms' }}
              >
                <Link 
                  href="/sobre" 
                  className="inline-block transition-colors duration-200 ease-in-out hover:text-[#C79C74] hover:border-[#C79C74]"
                  style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#010326', borderBottom: '0.5px solid currentColor', paddingBottom: '2px', marginTop: '36px' }}
                >
                  <span className="flex items-center gap-3">
                    LER MANIFESTO INSTITUCIONAL <ArrowRight size={14} className="transition-transform duration-500 ease-editorial group-hover:translate-x-2" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MÉTRICAS */}
      <section 
        ref={metricsRef as React.RefObject<HTMLDivElement>}
        style={{ backgroundColor: '#FAEDCD', paddingTop: isMobile ? '80px' : '120px', scrollMarginTop: '72px' }}
      >
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-0 border-t border-[rgba(1,3,38,0.04)] md:divide-x divide-[rgba(1,3,38,0.04)] py-12 lg:py-0">
            {[
              { num: '25', suffix: '+', label: 'Anos de experiência' },
              { num: '500', suffix: '+', label: 'Casos corporativos' },
              { num: '98', suffix: '%', label: 'Índice de retenção' },
              { num: '27', suffix: '', label: 'UFs de atuação' }
            ].map((stat, i) => (
              <div 
                key={i} 
                className={`flex flex-col items-start px-6 md:px-12 lg:py-20 transition-all duration-[800ms] ease-out ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <StaticStat value={stat.num} suffix={stat.suffix} />
                <div style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(1,3,38,0.6)', marginTop: '16px', display: 'block', lineHeight: 1.5 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ÁREAS DE ATUAÇÃO */}
      <section 
        ref={areasRef as React.RefObject<HTMLDivElement>}
        style={{ backgroundColor: '#FAEDCD', padding: isMobile ? '72px 0' : '100px 0', position: 'relative', scrollMarginTop: '72px' }}
      >
        {/* Subtle Background Texture */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" 
          style={{ 
            backgroundImage: `url(${IMAGES.textureLight})`, 
            backgroundSize: '240px', 
            backgroundRepeat: 'repeat' 
          }} 
        />
        
        <div className="container relative z-10">
          <div 
            className={`flex flex-col md:flex-row justify-between items-start md:items-end transition-all duration-[600ms] ease-out ${areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ marginBottom: '48px' }}
          >
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(40px, 8vw, 56px)', fontWeight: 400, color: '#010326', lineHeight: 1.1 }}>
              Áreas de<br />
              <em style={{ fontStyle: 'italic', color: '#063943' }}>Atuação.</em>
            </h2>
            <Link 
              href="/areas" 
              className="group inline-flex items-center gap-3 transition-colors duration-400 ease-editorial hover:text-[#010326] mt-8 md:mt-0"
              style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(1,3,38,0.45)', marginBottom: '8px' }}
            >
              <span>EXPLORAR ÍNDICE COMPLETO</span>
              <ArrowRight size={14} className="transition-transform duration-500 ease-editorial group-hover:translate-x-2" />
            </Link>
          </div>
          
          <div className="flex flex-col lg:w-3/5">
            {[
              { name: 'Direito Empresarial', img: IMAGES.area1 },
              { name: 'Direito Tributário', img: IMAGES.area2 },
              { name: 'Direito Imobiliário', img: IMAGES.area3 },
              { name: 'Agronegócio', img: IMAGES.area4 },
              { name: 'Contencioso Civil', img: IMAGES.area5 },
              { name: 'Direito Ambiental', img: IMAGES.area6 }
            ].map((area, i) => (
              <div
                key={i}
                className={`transition-all duration-[500ms] ease-out ${areasVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
                onMouseEnter={() => setHoveredArea(i)}
                onMouseLeave={() => setHoveredArea(null)}
              >
                <Link 
                  href="/areas" 
                  className="group flex items-center w-full transition-colors duration-400 ease-in-out border-t border-[rgba(1,3,38,0.04)] hover:border-[rgba(1,3,38,0.12)]"
                  style={{ 
                    padding: isMobile ? '24px 0' : '36px 0', 
                    borderBottom: i === 5 ? '1px solid rgba(1,3,38,0.04)' : 'none',
                  }}
                >
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '12px', color: 'rgba(1,3,38,0.5)', width: isMobile ? '32px' : '48px', flexShrink: 0 }}>
                    0{i+1}.
                  </span>
                  <h3 
                    className="flex-1 transition-all duration-500 ease-editorial group-hover:text-[#063943] group-hover:opacity-90 group-hover:translate-x-1"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 400, color: '#010326', letterSpacing: '-0.01em' }}
                  >
                    {area.name}
                  </h3>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(1,3,38,0.1)] transition-all duration-500 ease-editorial group-hover:border-[rgba(1,3,38,0.3)] group-hover:bg-[rgba(1,3,38,0.02)]">
                    <ArrowUpRight size={14} className="text-[#010326] opacity-60 transition-transform duration-500 ease-editorial group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" style={{ color: 'rgba(1,3,38,0.4)', strokeWidth: 1.5 }} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem Flutuante Direita (Awwwards Style) */}
        {!isMobile && (
          <div 
            className="absolute right-0 top-0 bottom-0 w-[35%] pointer-events-none overflow-hidden hidden lg:block"
          >
            {[IMAGES.area1, IMAGES.area2, IMAGES.area3, IMAGES.area4, IMAGES.area5, IMAGES.area6].map((img, idx) => (
              <div 
                key={idx}
                className="absolute inset-0 transition-all duration-700 ease-editorial"
                style={{
                  opacity: hoveredArea === idx ? 1 : 0,
                  transform: hoveredArea === idx ? 'scale(1)' : 'scale(1.05)',
                  clipPath: hoveredArea === idx ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                }}
              >
                <img 
                  src={img} 
                  alt="" 
                  className="w-full h-full object-cover" 
                  style={{ filter: 'grayscale(15%) contrast(1.1) brightness(0.9)', objectPosition: 'center' }} 
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 7. EQUIPE EDITORIAL */}
      <section 
        ref={teamRef as React.RefObject<HTMLDivElement>}
        style={{ backgroundColor: '#010326', padding: isMobile ? '80px 0' : '140px 0', scrollMarginTop: '72px' }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Bloco Institucional Lateral */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <div className={`transition-all duration-[600ms] ease-out ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C79C74', display: 'block', marginBottom: '32px' }}>
                  Equipe
                </span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 8vw, 48px)', fontWeight: 400, color: '#FAEDCD', lineHeight: 1.1, marginBottom: '20px' }}>
                  Pessoas à frente da estratégia.
                </h2>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(250,237,205,0.4)', letterSpacing: '0.2em', marginBottom: '24px' }}>
                  Atuação conduzida por sócios e especialistas em operações sensíveis.
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(250,237,205,0.5)', lineHeight: 1.7, maxWidth: '380px' }}>
                  Nossa arquitetura de atuação não depende de volume, mas da precisão técnica de profissionais com profundo trânsito nos tribunais superiores e em conselhos corporativos.
                </p>
              </div>
            </div>

            {/* Fichas Profissionais */}
            <div className="lg:col-span-7 flex flex-col">
              {[
                { role: 'Direção Estratégica', scope: 'Governança Patrimonial e Reorganização de Holdings.', desc: 'Coordenação direta das operações de M&A e proteção de legados em âmbito nacional.', img: IMAGES.team1 },
                { role: 'Coordenação Tributária', scope: 'Contencioso Administrativo e Planejamento Fiscal.', desc: 'Engenharia tributária avançada para grupos econômicos e consórcios empresariais.', img: IMAGES.team2 },
                { role: 'Contencioso Especial', scope: 'Tribunais Superiores e Litígios Complexos.', desc: 'Patrocínio de causas sensíveis e advocacia perante o STJ e STF.', img: IMAGES.team3 }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`group relative flex flex-col md:flex-row items-start md:items-center transition-all duration-[600ms] ease-out hover:bg-[rgba(250,237,205,0.02)] ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ 
                    padding: isMobile ? '24px 0' : '56px 0',
                    borderTop: '1px solid rgba(250,237,205,0.06)', 
                    borderBottom: i === 2 ? '1px solid rgba(250,237,205,0.06)' : 'none',
                    transitionDelay: `${i * 150}ms`
                  }}
                >
                  {/* Número */}
                  <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#C79C74', width: '64px', flexShrink: 0, marginBottom: '24px' }} className="md:mb-0">
                    0{i+1}.
                  </span>
                  


                  {/* Conteúdo */}
                  <div className="flex-1 pr-8 max-w-[560px]">
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3vw, 28px)', fontWeight: 400, color: '#FAEDCD', letterSpacing: '-0.01em', marginBottom: '8px' }}>
                      {item.role}
                    </h3>
                    <h4 style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(250,237,205,0.85)', letterSpacing: '0.15em', marginBottom: '16px' }}>
                      {item.scope}
                    </h4>
                    <p style={{ fontSize: '14px', color: 'rgba(250,237,205,0.7)', lineHeight: 1.8, maxWidth: '440px' }}>
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Link Direcional */}
                  <div className="mt-8 md:mt-0 opacity-60 transition-all duration-[600ms] ease-editorial group-hover:opacity-100">
                    <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(250,237,205,0.9)', borderBottom: '1px solid rgba(250,237,205,0.3)', paddingBottom: '4px', display: 'flex', alignItems: 'center', gap: '12px' }} className="group-hover:border-[#C79C74] group-hover:text-[#C79C74] transition-colors duration-500 ease-editorial">
                      Ver Dossiê do Comitê <ArrowRight size={14} className="transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 8. INTELIGÊNCIA JURÍDICA */}
      <section 
        ref={newsRef as React.RefObject<HTMLDivElement>}
        style={{ backgroundColor: '#FAEDCD', padding: isMobile ? '80px 0' : '140px 0', scrollMarginTop: '72px' }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Bloco Destaque Principal */}
            <div className="lg:col-span-6 flex flex-col">
              <h2 
                className={`transition-all duration-[600ms] ease-out ${newsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(40px, 8vw, 56px)', fontWeight: 400, color: '#010326', marginBottom: isMobile ? '32px' : '56px', lineHeight: 1.1 }}
              >
                Inteligência Jurídica.
              </h2>
              
              <Link 
                href="/insights/1" 
                className={`group flex flex-col transition-all duration-[600ms] ease-out ${newsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '100ms' }}
              >
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', marginBottom: '40px', border: '1px solid rgba(1,3,38,0.12)' }}>
                  <img src={IMAGES.news1} alt="Capa Dossiê" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" style={{ filter: 'grayscale(15%)' }} />
                </div>
                <div style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '24px' }}>
                  <span style={{ color: 'rgba(1,3,38,0.5)' }}>12 JUN 2026 • </span>
                  <span style={{ color: '#C79C74', fontWeight: 600 }}>Governança Corporativa</span>
                </div>
                <h3 
                  className="transition-colors duration-300 group-hover:text-[#063943]"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 400, color: '#010326', lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.02em' }}
                >
                  O impacto das novas diretrizes de governança na reestruturação de holdings familiares.
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(1,3,38,0.7)', lineHeight: 1.8, maxWidth: '90%', marginBottom: '40px' }}>
                  Uma análise profunda sobre a mitigação de riscos tributários e os mecanismos de blindagem patrimonial exigidos no novo cenário de fusões e aquisições.
                </p>
                <span className="inline-flex items-center gap-4" style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#010326', fontWeight: 600 }}>
                  <span className="border-b border-[rgba(1,3,38,0.3)] pb-2 transition-all duration-300 group-hover:border-[#C79C74] group-hover:text-[#C79C74]">Ler dossiê principal</span>
                  <ArrowRight size={14} className="transition-transform duration-500 ease-editorial group-hover:translate-x-2 group-hover:text-[#C79C74]" />
                </span>
              </Link>
            </div>

            {/* Lista Secundária */}
            <div className="lg:col-span-6 flex flex-col justify-end pt-12 lg:pt-0">
              {[
                {
                  date: '05 JUN 2026',
                  category: 'DIREITO SOCIETÁRIO',
                  title: 'Reorganização societária pré-M&A: Mitigação de passivos em due diligence.',
                  delay: '200ms',
                  img: IMAGES.news2
                },
                {
                  date: '28 MAI 2026',
                  category: 'PLANEJAMENTO SUCESSÓRIO',
                  title: 'A transição de comando e os desafios do protocolo familiar.',
                  delay: '300ms',
                  img: IMAGES.news3
                },
                {
                  date: '15 MAI 2026',
                  category: 'CONTENCIOSO ESTRATÉGICO',
                  title: 'Precedentes recentes no STJ sobre dissolução parcial de sociedade.',
                  delay: '400ms',
                  img: IMAGES.news4
                }
              ].map((news, i) => (
                <Link 
                  key={i} 
                  href="/insights" 
                  className={`group flex items-center justify-between transition-all duration-[600ms] ease-out hover:bg-[rgba(1,3,38,0.02)] ${newsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ 
                    padding: isMobile ? '32px 0' : '40px 0 40px 32px',
                    borderTop: '1px solid rgba(1,3,38,0.06)',
                    transitionDelay: news.delay
                  }}
                >
                  <div className="flex-1 pr-6">
                    <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      <span style={{ color: 'rgba(1,3,38,0.4)' }}>{news.date} • </span>
                      <span style={{ color: '#C79C74', fontWeight: 600 }}>{news.category}</span>
                    </div>
                    <h3 
                      className="transition-colors duration-500 ease-editorial group-hover:text-[#C79C74]"
                      style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 400, color: '#010326', lineHeight: 1.35, maxWidth: '95%' }}
                    >
                      {news.title}
                    </h3>
                  </div>
                  
                  <div className="hidden md:block overflow-hidden transition-all duration-500 ease-editorial opacity-80 group-hover:opacity-100" style={{ width: '120px', aspectRatio: '4/3', border: '1px solid rgba(1,3,38,0.06)', flexShrink: 0 }}>
                     <img src={news.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} className="transition-transform duration-[1200ms] group-hover:scale-105" />
                  </div>
                </Link>
              ))}

              <div 
                className={`transition-all duration-[600ms] ease-out ${newsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '500ms', marginTop: isMobile ? '24px' : '40px', paddingLeft: isMobile ? '0' : '32px' }}
              >
                <Link 
                  href="/insights" 
                  className="group inline-flex items-center gap-4 transition-colors duration-200 ease-in-out hover:text-[#010326]"
                  style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(1,3,38,0.6)', fontWeight: 600 }}
                >
                  ACESSAR ACERVO COMPLETO <ArrowRight size={14} className="transition-transform duration-500 ease-editorial group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section 
        ref={ctaRef as React.RefObject<HTMLDivElement>}
        className="relative overflow-hidden"
        style={{ backgroundColor: '#010326', padding: isMobile ? '80px 0 64px' : '200px 0 100px', borderTop: '1px solid rgba(250,237,205,0.06)', scrollMarginTop: '72px' }}
      >
        {/* Background Image with Cinematic Fade */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={IMAGES.area1} alt="" className="w-full h-full object-cover" style={{ objectPosition: 'right center' }} />
          {/* Gradiente dramático da esquerda para a direita fundindo a imagem com o azul da marca */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#010326] via-[#010326]/80 to-transparent md:w-[75%]" />
          {/* Leve escurecimento global para garantir o contraste */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-end">
            
            {/* Título Colossal à esquerda */}
            <div className="lg:col-span-7">
              <span 
                className={`transition-all duration-[700ms] ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C79C74', display: 'block', marginBottom: isMobile ? '24px' : '32px' }}
              >
                Próximos Passos
              </span>
              <h2 
                className={`transition-all duration-[700ms] ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 400, color: '#FAEDCD', letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                A estratégia<br />
                jurídica começa<br />
                <em style={{ fontStyle: 'italic', color: '#C79C74' }}>antes da decisão.</em>
              </h2>
            </div>
            
            {/* Contexto e Link Editorial à direita */}
            <div 
              className={`lg:col-span-4 lg:col-start-9 flex flex-col justify-end transition-all duration-[700ms] ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '200ms', paddingBottom: '12px' }}
            >
              <p style={{ fontSize: '14px', color: 'rgba(250,237,205,0.6)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '320px' }}>
                Atendimento consultivo exclusivo para empresários, holdings e famílias empresárias em operações de alto impacto e estruturação de governança.
              </p>
              
              <Link 
                href="/contato" 
                className="group inline-flex items-center gap-5 transition-colors duration-400 ease-editorial hover:text-[#C79C74] py-4"
                style={{ 
                  fontSize: '10px', 
                  letterSpacing: '0.3em', 
                  textTransform: 'uppercase', 
                  fontWeight: 600, 
                  color: '#FAEDCD',
                }}
              >
                <span>Solicitar avaliação de cenário</span>
                <span className="w-16 h-[1px] bg-current transform origin-left transition-transform duration-500 ease-editorial group-hover:scale-x-[1.5]" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* 10. FOOTER INSTITUCIONAL (Fundido ao CTA) */}
      <footer style={{ backgroundColor: '#010326', padding: '0 0 40px' }}>
        <div className="container">
          {/* LINHA SEPARADORA SUTIL */}
          <div style={{ borderTop: '0.5px solid rgba(250,237,205,0.08)', margin: isMobile ? '32px 0 48px' : '40px 0 64px' }} />

          {/* GRID DE INFORMAÇÕES TÉCNICAS */}
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-[40px] md:gap-[48px] mb-[64px] md:mb-[80px]`}>
            {/* COLUNA 1 - LOGO */}
            <div>
              <div className="flex flex-col items-start justify-center" style={{ marginBottom: '24px' }}>
                <span style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 400, 
                  letterSpacing: '0.2em', 
                  fontSize: '20px',
                  lineHeight: 1,
                  color: '#FAEDCD'
                }}>
                  ADÃES
                </span>
                <span style={{ 
                  fontSize: '8px', 
                  letterSpacing: '0.4em', 
                  opacity: 0.65,
                  lineHeight: 1,
                  marginTop: '6px',
                  color: '#FAEDCD',
                  textTransform: 'uppercase'
                }}>
                  ADVOGADOS
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'rgba(250,237,205,0.8)', lineHeight: 1.8, maxWidth: '240px' }}>
                Assessoria jurídica de alto padrão para líderes, conselhos e consórcios empresariais no Brasil.
              </p>
            </div>

            {/* COLUNA 2 - ÍNDICE */}
            <div>
              <h4 style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(250,237,205,0.6)', marginBottom: '24px' }}>
                Navegação
              </h4>
              <nav className="flex flex-col gap-3">
                <Link href="/sobre" className="transition-colors duration-400 ease-editorial hover:text-[#C79C74]" style={{ fontSize: '12px', color: 'rgba(250,237,205,0.85)' }}>Sobre</Link>
                <Link href="/areas" className="transition-colors duration-400 ease-editorial hover:text-[#C79C74]" style={{ fontSize: '12px', color: 'rgba(250,237,205,0.85)' }}>Áreas de Atuação</Link>
                <Link href="/equipe" className="transition-colors duration-400 ease-editorial hover:text-[#C79C74]" style={{ fontSize: '12px', color: 'rgba(250,237,205,0.85)' }}>Equipe</Link>
                <Link href="/insights" className="transition-colors duration-400 ease-editorial hover:text-[#C79C74]" style={{ fontSize: '12px', color: 'rgba(250,237,205,0.85)' }}>Inteligência Jurídica</Link>
              </nav>
            </div>

            {/* COLUNA 3 - ACESSO DIRETO */}
            <div>
              <h4 style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(250,237,205,0.6)', marginBottom: '24px' }}>
                Contato
              </h4>
              <div className="flex flex-col gap-3">
                <span style={{ fontSize: '12px', color: 'rgba(250,237,205,0.85)' }}>+55 (61) 3333-0000</span>
                <span style={{ fontSize: '12px', color: 'rgba(250,237,205,0.85)' }}>contato@adaes.com.br</span>
                <a href="#" className="transition-colors duration-400 ease-editorial hover:text-[#C79C74]" style={{ fontSize: '12px', color: 'rgba(250,237,205,0.85)' }}>LinkedIn Institucional</a>
              </div>
            </div>

            {/* COLUNA 4 - SEDE */}
            <div>
              <h4 style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(250,237,205,0.6)', marginBottom: '24px' }}>
                Sede
              </h4>
              <address style={{ fontStyle: 'normal', fontSize: '12px', color: 'rgba(250,237,205,0.85)', lineHeight: 1.8 }}>
                Setor de Autarquias Sul, Quadra 4<br />
                Edifício Victoria Office Tower<br />
                Brasília, DF, Brasil
              </address>
            </div>
          </div>

          {/* BASE DO FOOTER */}
          <div style={{ borderTop: '0.5px solid rgba(250,237,205,0.08)', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(250,237,205,0.5)', textTransform: 'uppercase' }}>
              © 2026 Adães Advogados.
            </span>
            <Link 
              href="/privacidade" 
              className="transition-colors duration-400 ease-editorial hover:text-[#C79C74]"
              style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(250,237,205,0.5)', textTransform: 'uppercase' }}
            >
              POLÍTICA DE PRIVACIDADE
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomeV2;
