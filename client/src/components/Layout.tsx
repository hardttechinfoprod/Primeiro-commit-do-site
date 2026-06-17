import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';

/* ===================================================================
   ADÃES — Shared Layout Component (Header + Footer)
   Usado em todas as páginas internas
=================================================================== */

const LOGO = '/images/logo.svg';
const LOGO_FOOTER = '/images/logo-footer.svg';

function useHeaderScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return scrolled;
}

export function SiteHeader({
  transparent = false,
  activePage = '/',
}: {
  transparent?: boolean;
  activePage?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useHeaderScroll();
  const isTransparent = transparent && !scrolled;

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/advogados', label: 'Advogados' },
    { href: '/areas', label: 'Áreas de Prática' },
    { href: '/blog', label: 'Notícias' },
  ];

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.querySelectorAll('.mobile-menu-link').forEach((link, i) => {
          setTimeout(() => link.classList.add('visible'), i * 60);
        });
      }, 50);
    } else {
      document.body.style.overflow = '';
      document.querySelectorAll('.mobile-menu-link').forEach(link => link.classList.remove('visible'));
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`} data-cursor-dark>
        <div className="flex justify-between items-center mb-16">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <img src={LOGO} alt="Adães" className="h-9" style={{ filter: 'brightness(0) invert(1)' }} />
          </Link>
          <button onClick={() => setMobileOpen(false)} className="text-white p-2" aria-label="Fechar menu">
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col flex-1">
          {[...navItems, { href: '/contato', label: 'Contato' }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-menu-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-8" style={{ borderTop: '1px solid rgba(245,243,238,0.1)' }}>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(245,243,238,0.35)' }}>
            BRASÍLIA, DF · BRASIL
          </p>
        </div>
      </div>

      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: isTransparent
            ? 'transparent'
            : scrolled
              ? 'rgba(245, 243, 238, 0.96)'
              : 'rgba(245, 243, 238, 0.98)',
          backdropFilter: isTransparent ? 'none' : 'blur(20px)',
          borderBottom: isTransparent ? 'none' : '1px solid rgba(213, 209, 200, 0.5)',
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between py-5">
            <Link href="/">
              <img
                src={LOGO}
                alt="Adães Advogados"
                className="h-9 transition-all duration-300"
                style={{ filter: isTransparent ? 'brightness(0) invert(1)' : 'none' }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isTransparent ? 'nav-link-white' : ''} ${activePage === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contato"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  padding: '10px 24px',
                  border: `1px solid ${isTransparent ? 'rgba(245,243,238,0.5)' : '#0F3B3F'}`,
                  color: isTransparent ? '#F5F3EE' : '#0F3B3F',
                  textDecoration: 'none',
                  transition: 'all 300ms ease',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#C9A876';
                  (e.currentTarget as HTMLElement).style.borderColor = '#C9A876';
                  (e.currentTarget as HTMLElement).style.color = '#F5F3EE';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.borderColor = isTransparent ? 'rgba(245,243,238,0.5)' : '#0F3B3F';
                  (e.currentTarget as HTMLElement).style.color = isTransparent ? '#F5F3EE' : '#0F3B3F';
                }}
              >
                Contato
              </Link>
            </nav>

            <button
              className="lg:hidden p-2"
              style={{ color: isTransparent ? '#F5F3EE' : '#0A0A0A', background: 'none', border: 'none' }}
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter({ onMapOpen }: { onMapOpen?: () => void }) {
  return (
    <footer style={{ background: '#0A0A0A', padding: '80px 0 40px' }} data-cursor-dark>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px 32px',
            marginBottom: 64,
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <img
              src={LOGO_FOOTER}
              alt="Adães Advogados"
              className="h-10 mb-6"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 14, lineHeight: 1.8, color: 'rgba(245,243,238,0.35)', maxWidth: '40ch', marginBottom: 24 }}>
              Conselheiros estratégicos ao lado de empresários, investidores e executivos de alto patrimônio.
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              {['LinkedIn', 'Instagram', 'Facebook'].map(s => (
                <a key={s} href="#" className="footer-link" style={{ fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase' }}>{s}</a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontFamily: 'Lato, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A876', marginBottom: 24 }}>
              Escritório
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[{ href: '/sobre', l: 'Sobre' }, { href: '/advogados', l: 'Advogados' }, { href: '/areas', l: 'Áreas' }, { href: '/blog', l: 'Notícias' }, { href: '/contato', l: 'Contato' }].map(i => (
                <li key={i.href}><Link href={i.href} className="footer-link">{i.l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 style={{ fontFamily: 'Lato, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A876', marginBottom: 24 }}>
              Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {onMapOpen && (
                <button
                  onClick={onMapOpen}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: 'Lato, sans-serif', fontSize: 13, color: 'rgba(245,243,238,0.35)', background: 'none', border: 'none', textAlign: 'left', lineHeight: 1.6, cursor: 'none', transition: 'color 300ms ease' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#C9A876')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(245,243,238,0.35)')}
                >
                  <MapPin size={13} style={{ flexShrink: 0, marginTop: 3, color: '#C9A876' }} />
                  Setor de Autarquias Norte<br />Brasília, DF
                </button>
              )}
              <a href="tel:+556130000000" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={13} style={{ color: '#C9A876', flexShrink: 0 }} />
                (61) 3000-0000
              </a>
              <a href="mailto:contato@adaes.adv.br" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Mail size={13} style={{ color: '#C9A876', flexShrink: 0 }} />
                contato@adaes.adv.br
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(245,243,238,0.07)', paddingTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, color: 'rgba(245,243,238,0.18)', letterSpacing: '1px' }}>
            © 2026 Adães Advogados. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, color: 'rgba(245,243,238,0.12)', letterSpacing: '1px' }}>
            OAB/DF · Brasília, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ===== Page Hero Banner (páginas internas) ===== */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  bgImage: string;
}) {
  return (
    <section
      style={{
        position: 'relative',
        height: 420,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: 64,
        paddingTop: 100,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.3) 100%)' }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <span className="eyebrow">{eyebrow}</span>
        <div style={{ width: 32, height: 1, background: '#C9A876', margin: '12px 0 20px' }} />
        <h1
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 300,
            color: '#F5F3EE',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 15, color: 'rgba(245,243,238,0.55)', marginTop: 12 }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/* ===== CTA Section (reusável) ===== */
export function CtaSection() {
  return (
    <section
      style={{
        background: '#0F3B3F',
        padding: '80px 0',
      }}
      data-cursor-dark
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }}>
          <div>
            <span className="eyebrow">Próximo passo</span>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 300,
                color: '#F5F3EE',
                lineHeight: 1.2,
                maxWidth: '20ch',
                marginTop: 20,
              }}
            >
              Sua empresa merece{' '}
              <em style={{ color: '#C9A876', fontStyle: 'italic' }}>
                conselheiros estratégicos.
              </em>
            </h2>
          </div>
          <Link
            href="/contato"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              fontFamily: 'Lato, sans-serif',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              textDecoration: 'none',
              background: '#C9A876',
              padding: '18px 36px',
              flexShrink: 0,
              transition: 'background 300ms ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#DFC29A')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#C9A876')}
          >
            Solicitar Consulta
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SiteHeader;
