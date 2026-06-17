import { Link } from 'wouter';
import { Phone, Mail, ChevronRight, Search, Shield, Scale, Building, FileText, Users, Briefcase } from 'lucide-react';

const IMAGES = {
  logo: '/images/logo.svg',
  logoFooter: '/images/logo-footer.svg',
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
};

const services = [
  { icon: Building, title: 'Consultoria Empresarial', desc: 'Assessoria juridica completa para empresas, incluindo constituicao societaria, contratos, compliance e governanca corporativa.' },
  { icon: Scale, title: 'Litigios e Arbitragem', desc: 'Representacao em processos judiciais e arbitrais, com estrategias eficientes para resolucao de conflitos.' },
  { icon: FileText, title: 'Contratos e Negociacoes', desc: 'Elaboracao, revisao e negociacao de contratos comerciais, societarios e de prestacao de servicos.' },
  { icon: Shield, title: 'Compliance e LGPD', desc: 'Implementacao de programas de compliance, adequacao a LGPD e gestao de riscos corporativos.' },
  { icon: Users, title: 'Direito Trabalhista', desc: 'Consultoria preventiva, negociacoes coletivas, defesa em reclamacoes trabalhistas e reestruturacoes.' },
  { icon: Briefcase, title: 'Fusoes e Aquisicoes', desc: 'Assessoria completa em operacoes de M&A, due diligence, estruturacao de operacoes e integracao pos-aquisicao.' },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#0F3B3F] text-white text-xs py-2">
        <div className="container flex justify-between items-center">
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#C79C74]">Facebook</a>
            <a href="#" className="hover:text-[#C79C74]">Instagram</a>
            <a href="#" className="hover:text-[#C79C74]">LinkedIn</a>
          </div>
          <div className="hidden md:flex items-center gap-2"><Phone size={12} /><span>Consulta Gratuita: (11) 3000-0000</span></div>
        </div>
      </div>

      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/"><img src={IMAGES.logo} alt="Adaes" className="h-10 md:h-12" /></Link>
          <nav className="hidden lg:flex items-center gap-0">
            <Link href="/" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C79C74] transition-colors">Inicio</Link>
            <Link href="/sobre" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C79C74] transition-colors">Sobre</Link>
            <Link href="/advogados" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C79C74] transition-colors">Advogados</Link>
            <Link href="/blog" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C79C74] transition-colors">Noticias</Link>
            <Link href="/areas" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C79C74] transition-colors">Areas de Pratica</Link>
            <Link href="/contato" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C79C74] transition-colors">Contato</Link>
            <button className="ml-4 p-2 text-gray-600 hover:text-[#C79C74]"><Search size={18} /></button>
          </nav>
        </div>
      </header>

      <section className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero})` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Nossos Servicos</h1>
            <p className="text-gray-200 mt-2">Solucoes juridicas completas para sua empresa</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <div key={i} className="p-8 border border-gray-200 hover:shadow-lg transition-shadow group text-center">
                <item.icon className="mx-auto text-[#C79C74] mb-4" size={40} />
                <h3 className="text-lg font-bold text-[#0F3B3F] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#C79C74]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-white italic">Precisa de nossos servicos?</h3>
          <Link href="/contato" className="px-8 py-3 bg-white text-[#0F3B3F] font-semibold uppercase text-sm hover:bg-gray-100 transition-colors">
            Solicitar Consulta
          </Link>
        </div>
      </section>

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
                <li><Link href="/advogados" className="hover:text-[#C79C74]">Advogados</Link></li>
                <li><Link href="/sobre" className="hover:text-[#C79C74]">Sobre Nos</Link></li>
                <li><Link href="/blog" className="hover:text-[#C79C74]">Noticias</Link></li>
                <li><Link href="/contato" className="hover:text-[#C79C74]">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Areas de Pratica</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#C79C74]">Direito Empresarial</a></li>
                <li><a href="#" className="hover:text-[#C79C74]">Direito Tributario</a></li>
                <li><a href="#" className="hover:text-[#C79C74]">Contencioso Civil</a></li>
                <li><a href="#" className="hover:text-[#C79C74]">Direito Imobiliario</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Receba nossas noticias</p>
              <div className="flex">
                <input type="email" placeholder="Seu e-mail" className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C79C74]" />
                <button className="px-4 py-2 bg-[#C79C74] text-white hover:bg-[#b8976a]"><ChevronRight size={18} /></button>
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

export default Services;
