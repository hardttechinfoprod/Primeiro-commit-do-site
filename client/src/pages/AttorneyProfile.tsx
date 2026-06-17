import { useState } from 'react';
import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, ArrowLeft, Briefcase, Award, BookOpen, X } from 'lucide-react';
import { SiteHeader, SiteFooter } from '../components/Layout';

const IMAGES = {
  att1: '/images/client/4.jpeg',
  att2: '/images/client/6.jpeg',
  att3: '/images/client/8.jpeg',
  att4: '/images/client/3.jpeg',
};

const attorneyData = {
  1: {
    id: 1,
    name: 'Dr. Carlos Adães',
    role: 'Sócio Fundador',
    location: 'Brasília, DF',
    email: 'carlos.adaes@adaes.adv.br',
    phone: '(61) 3000-0001',
    img: IMAGES.att1,
    bio: 'Com mais de 25 anos de atuação estratégica em Brasília, Dr. Carlos Adães assessora grandes grupos corporativos, holdings e investidores de alto patrimônio. Especialista em estruturação societária complexa e governança patrimonial. Graduado pela Universidade de Brasília (UnB).',
    specialties: ['Direito Empresarial', 'Fusões e Aquisições', 'Governança Corporativa', 'Planejamento Sucessório'],
    experience: [
      { year: '2001-Presente', title: 'Sócio Fundador', company: 'Adães Advogados' },
      { year: '1996-2001', title: 'Sócio Consultor', company: 'Advocacia Empresarial' },
    ],
    education: [
      { year: '1995', title: 'Bacharelado em Direito', institution: 'Universidade de Brasília (UnB)' },
      { year: '1998', title: 'Mestrado em Direito Societário', institution: 'UnB / IDP' },
    ],
    languages: ['Português', 'Inglês', 'Espanhol'],
  },
  2: {
    id: 2,
    name: 'Dra. Ana Figueiredo',
    role: 'Sócia',
    location: 'Brasília, DF',
    email: 'ana.figueiredo@adaes.adv.br',
    phone: '(61) 3000-0002',
    img: IMAGES.att2,
    bio: 'Especialista em direito tributário e compliance regulatório, Dra. Ana Figueiredo possui ampla atuação na mitigação de riscos fiscais e contencioso administrativo de alta complexidade. Graduada em Direito e com especialização em Direito Tributário pela Fundação Getulio Vargas (FGV).',
    specialties: ['Direito Tributário', 'Compliance Fiscal', 'LGPD', 'Reestruturação Societária'],
    experience: [
      { year: '2010-Presente', title: 'Sócia', company: 'Adães Advogados' },
      { year: '2005-2010', title: 'Advogada Associada', company: 'Banca Tributária Nacional' },
    ],
    education: [
      { year: '2004', title: 'Bacharelado em Direito', institution: 'Universidade de Brasília (UnB)' },
      { year: '2007', title: 'Especialização em Direito Tributário', institution: 'FGV' },
    ],
    languages: ['Português', 'Inglês', 'Francês'],
  },
  3: {
    id: 3,
    name: 'Dr. Fernando Melo',
    role: 'Advogado Sênior',
    location: 'Brasília, DF',
    email: 'fernando.melo@adaes.adv.br',
    phone: '(61) 3000-0003',
    img: IMAGES.att3,
    bio: 'Focado em contencioso cível estratégico e arbitragem comercial, Dr. Fernando Melo tem larga experiência na condução de litígios complexos nos tribunais superiores e câmaras arbitrais. Graduado em Direito e especialista em Resolução de Conflitos.',
    specialties: ['Contencioso Civil', 'Arbitragem', 'Litígios Comerciais', 'Resolução de Disputas'],
    experience: [
      { year: '2015-Presente', title: 'Advogado Sênior', company: 'Adães Advogados' },
      { year: '2010-2015', title: 'Advogado Associado', company: 'Banca de Contencioso Superior' },
    ],
    education: [
      { year: '2009', title: 'Bacharelado em Direito', institution: 'UFRJ' },
      { year: '2012', title: 'Pós-Graduação em Arbitragem', institution: 'IDP' },
    ],
    languages: ['Português', 'Inglês'],
  },
  4: {
    id: 4,
    name: 'Dra. Juliana Carvalho',
    role: 'Advogada Sênior',
    location: 'Brasília, DF',
    email: 'juliana.carvalho@adaes.adv.br',
    phone: '(61) 3000-0004',
    img: IMAGES.att4,
    bio: 'Especialista em direito imobiliário, regularização fundiária e agronegócio, Dra. Juliana Carvalho assessora grandes incorporadoras e holdings rurais na estruturação e proteção de ativos. Formada em Direito com especialização em Direito de Propriedade.',
    specialties: ['Direito Imobiliário', 'Agronegócio', 'Holdings Rurais', 'Regularização Fundiária'],
    experience: [
      { year: '2017-Presente', title: 'Advogada Sênior', company: 'Adães Advogados' },
      { year: '2012-2017', title: 'Assessora Jurídica', company: 'Holding de Infraestrutura e Agro' },
    ],
    education: [
      { year: '2011', title: 'Bacharelado em Direito', institution: 'Universidade Mackenzie' },
      { year: '2014', title: 'Especialização em Direito Agrário e Imobiliário', institution: 'IDP' },
    ],
    languages: ['Português', 'Inglês'],
  },
};

const AttorneyProfile = () => {
  const [match, params] = useRoute('/advogado/:id');
  const attorneyId = parseInt(params?.id || '1');
  const attorney = attorneyData[attorneyId as keyof typeof attorneyData];
  const [mapOpen, setMapOpen] = useState(false);

  if (!attorney) {
    return (
      <>
        <SiteHeader activePage="/advogados" />
        <div style={{ backgroundColor: '#FAEDCD', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="flex flex-col items-center justify-center">
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, color: '#010326', marginBottom: 16 }}>Advogado não encontrado</h1>
          <Link href="/advogados" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#C79C74', textDecoration: 'underline' }}>Voltar para Advogados</Link>
        </div>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <div id="adaes-cursor" className="adaes-cursor" aria-hidden="true" />
      <SiteHeader activePage="/advogados" />

      {/* BREADCRUMB */}
      <div style={{ backgroundColor: '#010326', paddingTop: '120px', paddingBottom: '24px', borderBottom: '1px solid rgba(250,237,205,0.06)' }}>
        <div className="container">
          <Link href="/advogados" className="group inline-flex items-center gap-2 cursor-none text-xs" style={{ textDecoration: 'none', color: '#C79C74', fontFamily: 'Outfit, sans-serif', textTransform: 'uppercase', letterSpacing: 2 }}>
            <ArrowLeft size={12} className="transition-transform duration-300 group-hover:-translate-x-1" /> Voltar aos Advogados
          </Link>
        </div>
      </div>

      {/* PROFILE DETAIL */}
      <section style={{ backgroundColor: '#FAEDCD', padding: '80px 0 120px' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Col - Photo & Quick Contacts (4 Columns) */}
            <div className="lg:col-span-4 space-y-8">
              <div style={{ border: '1px solid rgba(1,3,38,0.08)', overflow: 'hidden' }}>
                <img src={attorney.img} alt={attorney.name} className="w-full object-cover" style={{ height: '480px', filter: 'brightness(0.95)' }} />
              </div>
              
              <div style={{ backgroundColor: '#FAFAF7', padding: '32px 28px', border: '1px solid rgba(1,3,38,0.08)' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 400, color: '#010326', marginBottom: 20 }}>Canais Diretos</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="text-[#C79C74] flex-shrink-0 mt-1" size={16} />
                    <div>
                      <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(1,3,38,0.5)' }}>E-mail</p>
                      <a href={`mailto:${attorney.email}`} className="cursor-none transition-colors duration-300 hover:text-[#C79C74]" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 500, color: '#010326', textDecoration: 'none' }}>
                        {attorney.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="text-[#C79C74] flex-shrink-0 mt-1" size={16} />
                    <div>
                      <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(1,3,38,0.5)' }}>Telefone</p>
                      <a href={`tel:${attorney.phone}`} className="cursor-none transition-colors duration-300 hover:text-[#C79C74]" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 500, color: '#010326', textDecoration: 'none' }}>
                        {attorney.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#C79C74] flex-shrink-0 mt-1" size={16} />
                    <div>
                      <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(1,3,38,0.5)' }}>Banca principal</p>
                      <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 500, color: '#010326' }}>
                        {attorney.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col - Details & Experience (8 Columns) */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="eyebrow eyebrow-dark" style={{ marginBottom: 12 }}>Perfil Profissional</span>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(38px, 4.5vw, 56px)', fontWeight: 300, color: '#010326', lineHeight: 1.1, marginBottom: 8 }}>
                  {attorney.name}
                </h1>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 16, fontWeight: 500, color: '#C79C74', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 28 }}>
                  {attorney.role}
                </p>
                <div style={{ width: 48, height: 1, backgroundColor: '#C79C74', marginBottom: 28 }} />
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 16, lineHeight: 1.85, color: 'rgba(1,3,38,0.8)', fontWeight: 300 }}>
                  {attorney.bio}
                </p>
              </div>

              {/* Specialties */}
              <div style={{ borderTop: '1px solid rgba(1,3,38,0.1)', paddingTop: 40 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#010326', fontWeight: 400, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Briefcase size={18} className="text-[#C79C74]" /> Especialidades
                </h3>
                <div className="flex flex-wrap gap-3">
                  {attorney.specialties.map((specialty, i) => (
                    <span key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#010326', backgroundColor: '#FAFAF7', border: '1px solid rgba(1,3,38,0.08)', padding: '8px 16px', borderRadius: 0 }}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div style={{ borderTop: '1px solid rgba(1,3,38,0.1)', paddingTop: 40 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#010326', fontWeight: 400, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Award size={18} className="text-[#C79C74]" /> Experiência Profissional
                </h3>
                <div className="space-y-8">
                  {attorney.experience.map((exp, i) => (
                    <div key={i} className="flex gap-6 pb-6 border-b border-rgba(1,3,38,0.06) last:border-0 last:pb-0" style={{ borderBottom: '1px solid rgba(1,3,38,0.06)' }}>
                      <div className="flex-shrink-0" style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: '#C79C74', fontWeight: 300, minWidth: '100px' }}>
                        {exp.year}
                      </div>
                      <div>
                        <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: '#010326', fontWeight: 400, marginBottom: 4 }}>{exp.title}</h4>
                        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: 'rgba(1,3,38,0.6)' }}>{exp.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div style={{ borderTop: '1px solid rgba(1,3,38,0.1)', paddingTop: 40 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#010326', fontWeight: 400, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <BookOpen size={18} className="text-[#C79C74]" /> Formação Acadêmica
                </h3>
                <div className="space-y-8">
                  {attorney.education.map((edu, i) => (
                    <div key={i} className="flex gap-6 pb-6 border-b border-rgba(1,3,38,0.06) last:border-0 last:pb-0" style={{ borderBottom: '1px solid rgba(1,3,38,0.06)' }}>
                      <div className="flex-shrink-0" style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: '#C79C74', fontWeight: 300, minWidth: '100px' }}>
                        {edu.year}
                      </div>
                      <div>
                        <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: '#010326', fontWeight: 400, marginBottom: 4 }}>{edu.title}</h4>
                        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: 'rgba(1,3,38,0.6)' }}>{edu.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div style={{ borderTop: '1px solid rgba(1,3,38,0.1)', paddingTop: 40 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#010326', fontWeight: 400, marginBottom: 20 }}>Idiomas</h3>
                <div className="flex flex-wrap gap-3">
                  {attorney.languages.map((lang, i) => (
                    <span key={i} style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#010326', backgroundColor: 'rgba(199, 156, 116, 0.15)', padding: '6px 14px' }}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ background: '#0F3B3F', padding: '80px 0' }} data-cursor-dark>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }}>
            <div>
              <span className="eyebrow">Próximo passo</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 300, color: '#FAEDCD', lineHeight: 1.2, maxWidth: '22ch', marginTop: 20 }}>
                Deseja agendar uma consulta estratégica com <em style={{ color: '#C79C74', fontStyle: 'italic' }}>{attorney.name}</em>?
              </h2>
            </div>
            <Link href="/contato" className="cursor-none" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#0A0A0A', textDecoration: 'none', background: '#C79C74', padding: '18px 36px', transition: 'background 300ms ease' }} onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#DFC29A')} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#C79C74')}>
              Solicitar Agendamento
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter onMapOpen={() => setMapOpen(true)} />

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
    </>
  );
};

export default AttorneyProfile;

