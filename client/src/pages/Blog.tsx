import { Link } from 'wouter';
import { Phone, Mail, ChevronRight, Search } from 'lucide-react';

const IMAGES = {
  logo: '/images/logo.svg',
  logoFooter: '/images/logo-footer.svg',
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  news1: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80',
  news2: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80',
  news3: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80',
  news4: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=500&q=80',
  news5: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
};

const articles = [
  { img: IMAGES.news1, date: '3 de Junho, 2026', title: 'Nova Lei de Protecao de Dados entra em vigor com novas exigencias', excerpt: 'As empresas brasileiras precisam se adequar as novas exigencias da legislacao de protecao de dados que entra em vigor neste mes.' },
  { img: IMAGES.news2, date: '1 de Junho, 2026', title: 'Gestao de riscos tributarios em tempos desafiadores', excerpt: 'Em um cenario economico complexo, a gestao adequada de riscos tributarios se torna essencial para a saude financeira das empresas.' },
  { img: IMAGES.news3, date: '28 de Maio, 2026', title: 'Principais questoes de direito do consumidor em 2026', excerpt: 'O direito do consumidor continua evoluindo com novas regulamentacoes e jurisprudencias que impactam empresas de todos os setores.' },
  { img: IMAGES.news4, date: '25 de Maio, 2026', title: 'Arbitragem Internacional como forma de resolucao de disputas', excerpt: 'A arbitragem internacional se consolida como o metodo preferido para resolucao de disputas comerciais transfronteiricas.' },
  { img: IMAGES.news5, date: '22 de Maio, 2026', title: 'Compliance corporativo: tendencias e desafios para 2026', excerpt: 'As empresas enfrentam novos desafios em compliance, com regulamentacoes mais rigorosas e fiscalizacao intensificada.' },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/"><img src={IMAGES.logo} alt="Adaes" className="h-10 md:h-12" /></Link>
          <nav className="hidden lg:flex items-center gap-0">
            <Link href="/" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Inicio</Link>
            <Link href="/sobre" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Sobre</Link>
            <Link href="/advogados" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Advogados</Link>
            <Link href="/blog" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#C9A876] border-b-2 border-[#C9A876]">Noticias</Link>
            <Link href="/areas" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Areas de Pratica</Link>
            <Link href="/contato" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Contato</Link>
            <button className="ml-4 p-2 text-gray-600 hover:text-[#C9A876]"><Search size={18} /></button>
          </nav>
        </div>
      </header>

      <section className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero})` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Noticias e Publicacoes</h1>
            <p className="text-gray-200 mt-2">Artigos e analises juridicas</p>
          </div>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-10">
                {articles.map((article, i) => (
                  <article key={i} className="group">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="overflow-hidden">
                        <img src={article.img} alt={article.title} className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="md:col-span-2">
                        <span className="text-xs text-[#C9A876] font-semibold">{article.date}</span>
                        <h3 className="text-xl font-bold text-[#0F3B3F] mt-2 group-hover:text-[#C9A876] transition-colors">{article.title}</h3>
                        <p className="text-gray-500 text-sm mt-3 leading-relaxed">{article.excerpt}</p>
                        <Link href={`/noticia/${i + 1}`} className="inline-flex items-center gap-1 text-[#C9A876] text-sm font-semibold mt-4 hover:underline">
                          Leia mais <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="mb-8">
                <h4 className="text-lg font-bold text-[#0F3B3F] mb-4 uppercase tracking-wide">Categorias</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-[#C9A876] text-sm flex justify-between"><span>Direito Empresarial</span><span className="text-gray-400">(12)</span></a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#C9A876] text-sm flex justify-between"><span>Direito Tributario</span><span className="text-gray-400">(8)</span></a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#C9A876] text-sm flex justify-between"><span>Compliance</span><span className="text-gray-400">(6)</span></a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#C9A876] text-sm flex justify-between"><span>Direito Digital</span><span className="text-gray-400">(5)</span></a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#C9A876] text-sm flex justify-between"><span>Direito Trabalhista</span><span className="text-gray-400">(4)</span></a></li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-[#0F3B3F] mb-4 uppercase tracking-wide">Newsletter</h4>
                <p className="text-gray-500 text-sm mb-4">Receba nossas atualizacoes juridicas diretamente no seu email.</p>
                <div className="flex flex-col gap-2">
                  <input type="email" placeholder="Seu e-mail" className="px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-[#C9A876]" />
                  <button className="px-6 py-3 bg-[#C9A876] text-white font-semibold uppercase text-sm hover:bg-[#b8976a] transition-colors">
                    Inscrever-se
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#0F3B3F] mb-4 uppercase tracking-wide">Publicacoes Recentes</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-[#C9A876] text-sm">Impactos da reforma tributaria no setor de servicos</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#C9A876] text-sm">Novas regras para contratos digitais</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#C9A876] text-sm">Guia pratico de compliance para PMEs</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#C9A876]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-white italic">Procurando assessoria juridica de primeira classe?</h3>
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

export default Blog;
