import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, ChevronRight, Search, ArrowLeft, Briefcase, Award, BookOpen } from 'lucide-react';

const IMAGES = {
  logo: '/images/logo.svg',
  logoFooter: '/images/logo-footer.svg',
  att1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80',
  att2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80',
  att3: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=500&q=80',
  att4: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=500&q=80',
};

const attorneyData = {
  1: {
    id: 1,
    name: 'Dr. Carlos Silva',
    role: 'Sócio Fundador',
    location: 'São Paulo',
    email: 'carlos.silva@adaes.com.br',
    phone: '(11) 3000-0001',
    img: IMAGES.att1,
    bio: 'Com mais de 25 anos de experiência em direito empresarial e fusões & aquisições, Dr. Carlos Silva é especialista em estruturação de operações complexas e governança corporativa. Formado pela Universidade de São Paulo (USP) e pós-graduado em Direito Empresarial pela FAAP.',
    specialties: ['Direito Empresarial', 'Fusões e Aquisições', 'Governança Corporativa', 'Direito Societário'],
    experience: [
      { year: '2015-Presente', title: 'Sócio Fundador', company: 'Adaes Advogados' },
      { year: '2010-2015', title: 'Sócio', company: 'Silva & Associados Advogados' },
      { year: '2005-2010', title: 'Advogado Senior', company: 'Grandes Escritórios Nacionais' },
    ],
    education: [
      { year: '2000', title: 'Bacharelado em Direito', institution: 'Universidade de São Paulo (USP)' },
      { year: '2002', title: 'Pós-Graduação em Direito Empresarial', institution: 'FAAP' },
    ],
    languages: ['Português', 'Inglês', 'Espanhol'],
  },
  2: {
    id: 2,
    name: 'Dra. Ana Costa',
    role: 'Sócia',
    location: 'São Paulo',
    email: 'ana.costa@adaes.com.br',
    phone: '(11) 3000-0002',
    img: IMAGES.att2,
    bio: 'Especialista em direito tributário e compliance, Dra. Ana Costa possui vasta experiência em planejamento tributário e adequação de empresas às normas regulatórias. Formada pela PUC-SP e com especialização em Direito Tributário pela FGV.',
    specialties: ['Direito Tributário', 'Compliance', 'LGPD', 'Planejamento Tributário'],
    experience: [
      { year: '2018-Presente', title: 'Sócia', company: 'Adaes Advogados' },
      { year: '2012-2018', title: 'Advogada Senior', company: 'Grandes Escritórios Nacionais' },
      { year: '2008-2012', title: 'Advogada Plena', company: 'Consultoria Tributária' },
    ],
    education: [
      { year: '2003', title: 'Bacharelado em Direito', institution: 'PUC-SP' },
      { year: '2005', title: 'Especialização em Direito Tributário', institution: 'FGV' },
    ],
    languages: ['Português', 'Inglês', 'Francês'],
  },
  3: {
    id: 3,
    name: 'Dr. Fernando Oliveira',
    role: 'Advogado Senior',
    location: 'São Paulo',
    email: 'fernando.oliveira@adaes.com.br',
    phone: '(11) 3000-0003',
    img: IMAGES.att3,
    bio: 'Especialista em contencioso civil e arbitragem, Dr. Fernando Oliveira possui experiência em litigios complexos e resolução de disputas comerciais. Formado pela Universidade Federal do Rio de Janeiro (UFRJ) e com pós-graduação em Arbitragem Internacional.',
    specialties: ['Contencioso Civil', 'Arbitragem', 'Litigios Comerciais', 'Resolução de Disputas'],
    experience: [
      { year: '2016-Presente', title: 'Advogado Senior', company: 'Adaes Advogados' },
      { year: '2010-2016', title: 'Advogado Pleno', company: 'Escritório de Contencioso' },
      { year: '2006-2010', title: 'Advogado Júnior', company: 'Tribunal de Justiça' },
    ],
    education: [
      { year: '2001', title: 'Bacharelado em Direito', institution: 'UFRJ' },
      { year: '2004', title: 'Pós-Graduação em Arbitragem Internacional', institution: 'UERJ' },
    ],
    languages: ['Português', 'Inglês'],
  },
  4: {
    id: 4,
    name: 'Dra. Juliana Santos',
    role: 'Advogada Senior',
    location: 'São Paulo',
    email: 'juliana.santos@adaes.com.br',
    phone: '(11) 3000-0004',
    img: IMAGES.att4,
    bio: 'Especialista em direito trabalhista e compliance, Dra. Juliana Santos possui experiência em negociações coletivas e reestruturações empresariais. Formada pela Universidade Mackenzie e com especialização em Direito do Trabalho pela UNISANTA.',
    specialties: ['Direito Trabalhista', 'Compliance Trabalhista', 'Negociações Coletivas', 'Reestruturação'],
    experience: [
      { year: '2017-Presente', title: 'Advogada Senior', company: 'Adaes Advogados' },
      { year: '2011-2017', title: 'Advogada Plena', company: 'Departamento Trabalhista' },
      { year: '2007-2011', title: 'Advogada Júnior', company: 'Sindicatos e Confederações' },
    ],
    education: [
      { year: '2002', title: 'Bacharelado em Direito', institution: 'Universidade Mackenzie' },
      { year: '2005', title: 'Especialização em Direito do Trabalho', institution: 'UNISANTA' },
    ],
    languages: ['Português', 'Inglês'],
  },
};

const AttorneyProfile = () => {
  const [match, params] = useRoute('/advogado/:id');
  const attorneyId = parseInt(params?.id || '1');
  const attorney = attorneyData[attorneyId as keyof typeof attorneyData];

  if (!attorney) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-[#0F3B3F]">Advogado não encontrado</h1>
        <Link href="/advogados" className="mt-4 text-[#C9A876] hover:underline">Voltar para Advogados</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* TOP BAR */}
      <div className="bg-[#0F3B3F] text-white text-xs py-2">
        <div className="container flex justify-between items-center">
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#C9A876]">Facebook</a>
            <a href="#" className="hover:text-[#C9A876]">Instagram</a>
            <a href="#" className="hover:text-[#C9A876]">LinkedIn</a>
          </div>
          <div className="hidden md:flex items-center gap-2"><Phone size={12} /><span>Consulta Gratuita: (11) 3000-0000</span></div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/"><img src={IMAGES.logo} alt="Adaes" className="h-10 md:h-12" /></Link>
          <nav className="hidden lg:flex items-center gap-0">
            <Link href="/" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Inicio</Link>
            <Link href="/sobre" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Sobre</Link>
            <Link href="/advogados" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#C9A876] border-b-2 border-[#C9A876]">Advogados</Link>
            <Link href="/blog" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Noticias</Link>
            <Link href="/areas" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Areas de Pratica</Link>
            <Link href="/contato" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Contato</Link>
            <button className="ml-4 p-2 text-gray-600 hover:text-[#C9A876]"><Search size={18} /></button>
          </nav>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-4 flex items-center gap-2 text-sm">
          <Link href="/advogados" className="text-[#C9A876] hover:underline flex items-center gap-1">
            <ArrowLeft size={14} /> Voltar para Advogados
          </Link>
        </div>
      </div>

      {/* PROFILE HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Image */}
            <div className="md:col-span-1">
              <img src={attorney.img} alt={attorney.name} className="w-full h-96 object-cover shadow-lg mb-6" />
              <div className="bg-white p-6 border border-gray-200 shadow-sm">
                <h3 className="text-sm font-bold text-[#0F3B3F] uppercase tracking-wide mb-4">Informacoes de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-[#C9A876] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                      <a href={`mailto:${attorney.email}`} className="text-[#0F3B3F] font-semibold hover:text-[#C9A876]">{attorney.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-[#C9A876] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Telefone</p>
                      <a href={`tel:${attorney.phone}`} className="text-[#0F3B3F] font-semibold hover:text-[#C9A876]">{attorney.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#C9A876] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Localizacao</p>
                      <p className="text-[#0F3B3F] font-semibold">{attorney.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <p className="text-[#C9A876] text-sm font-semibold uppercase tracking-widest mb-2">Perfil do Advogado</p>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0F3B3F] mb-2">{attorney.name}</h1>
                <p className="text-xl text-[#C9A876] font-semibold mb-4">{attorney.role}</p>
                <p className="text-gray-600 leading-relaxed text-lg">{attorney.bio}</p>
              </div>

              {/* Specialties */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#0F3B3F] uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="text-[#C9A876]" />
                  Especialidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {attorney.specialties.map((specialty, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-100 text-[#0F3B3F] text-sm font-semibold rounded border border-gray-200">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-lg font-bold text-[#0F3B3F] uppercase tracking-wide mb-4">Idiomas</h3>
                <div className="flex flex-wrap gap-2">
                  {attorney.languages.map((lang, i) => (
                    <span key={i} className="px-3 py-1 bg-[#C9A876]/10 text-[#0F3B3F] text-sm font-semibold rounded">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#0F3B3F] uppercase tracking-wide mb-8 flex items-center gap-2">
            <Award size={24} className="text-[#C9A876]" />
            Experiencia Profissional
          </h2>
          <div className="space-y-6">
            {attorney.experience.map((exp, i) => (
              <div key={i} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#C9A876] rounded-full flex items-center justify-center text-white font-bold">
                    {exp.year.split('-')[0].slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#C9A876] font-semibold uppercase tracking-wide">{exp.year}</p>
                  <h4 className="text-lg font-bold text-[#0F3B3F]">{exp.title}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#0F3B3F] uppercase tracking-wide mb-8 flex items-center gap-2">
            <BookOpen size={24} className="text-[#C9A876]" />
            Formacao Academica
          </h2>
          <div className="space-y-6">
            {attorney.education.map((edu, i) => (
              <div key={i} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0F3B3F] rounded-full flex items-center justify-center text-white font-bold">
                    {edu.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#C9A876] font-semibold uppercase tracking-wide">{edu.year}</p>
                  <h4 className="text-lg font-bold text-[#0F3B3F]">{edu.title}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-[#C9A876]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-white italic">Deseja agendar uma consulta com {attorney.name}?</h3>
          <Link href="/contato" className="px-8 py-3 bg-white text-[#0F3B3F] font-semibold uppercase text-sm hover:bg-gray-100 transition-colors">
            Agendar Consulta
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] text-gray-300 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Contatos</h4>
              <div className="space-y-3 text-sm">
                <p>Av. Paulista, 1000, 15o andar<br />Sao Paulo, SP</p>
                <p className="flex items-center gap-2"><Phone size={14} /> (11) 3000-0000</p>
                <p className="flex items-center gap-2"><Mail size={14} /> contato@adaes.com.br</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/advogados" className="hover:text-[#C9A876]">Advogados</Link></li>
                <li><Link href="/sobre" className="hover:text-[#C9A876]">Sobre Nos</Link></li>
                <li><Link href="/blog" className="hover:text-[#C9A876]">Noticias</Link></li>
                <li><Link href="/contato" className="hover:text-[#C9A876]">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Areas de Pratica</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#C9A876]">Direito Empresarial</a></li>
                <li><a href="#" className="hover:text-[#C9A876]">Direito Tributario</a></li>
                <li><a href="#" className="hover:text-[#C9A876]">Contencioso Civil</a></li>
                <li><a href="#" className="hover:text-[#C9A876]">Direito Imobiliario</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Receba nossas noticias</p>
              <div className="flex">
                <input type="email" placeholder="Seu e-mail" className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C9A876]" />
                <button className="px-4 py-2 bg-[#C9A876] text-white hover:bg-[#b8976a]"><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={IMAGES.logoFooter} alt="Adaes" className="h-8" />
            <p className="text-xs text-gray-500">Copyright &copy; 2026. Adaes Advogados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AttorneyProfile;
