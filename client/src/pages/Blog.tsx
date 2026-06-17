import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiteHeader, SiteFooter, PageHero } from '../components/Layout';

const IMAGES = {
  hero: '/images/client/5.jpeg',
  news1: '/images/client/11.jpeg',
  news2: '/images/client/14.jpeg',
  news3: '/images/client/15.jpeg',
  news4: '/images/client/9.jpeg',
  news5: '/images/client/13.jpeg',
};

const articles = [
  { id: 1, img: IMAGES.news1, date: '3 de Junho, 2026', author: 'Dra. Ana Costa', category: 'Direito Digital', title: 'Nova Lei de Proteção de Dados entra em vigor com novas exigências', excerpt: 'As empresas brasileiras precisam se adequar às novas exigências da legislação de proteção de dados que entra em vigor neste mês.' },
  { id: 2, img: IMAGES.news2, date: '1 de Junho, 2026', author: 'Dr. Carlos Silva', category: 'Direito Tributário', title: 'Gestão de riscos tributários em tempos desafiadores', excerpt: 'Em um cenário econômico complexo, a gestão adequada de riscos tributários se torna essencial para a saúde financeira das empresas.' },
  { id: 3, img: IMAGES.news3, date: '28 de Maio, 2026', author: 'Dra. Juliana Santos', category: 'Direito do Consumidor', title: 'Principais questões de direito do consumidor em 2026', excerpt: 'O direito do consumidor continua evoluindo com novas regulamentações e jurisprudências que impactam empresas de todos os setores.' },
  { id: 4, img: IMAGES.news4, date: '25 de Maio, 2026', author: 'Dr. Fernando Oliveira', category: 'Arbitragem', title: 'Arbitragem Internacional como forma de resolução de disputas', excerpt: 'A arbitragem internacional se consolida como o método preferido para resolução de disputas comerciais transfronteiriças.' },
  { id: 5, img: IMAGES.news5, date: '22 de Maio, 2026', author: 'Dra. Ana Costa', category: 'Compliance', title: 'Compliance corporativo: tendências e desafios para 2026', excerpt: 'As empresas enfrentam novos desafios em compliance, com regulamentações mais rigorosas e fiscalização intensificada.' },
];

const categories = [
  { name: 'Direito Empresarial', count: 12 },
  { name: 'Direito Tributário', count: 8 },
  { name: 'Compliance', count: 6 },
  { name: 'Direito Digital', count: 5 },
  { name: 'Direito do Consumidor', count: 4 },
];

const Blog = () => {
  const featuredArticle = articles[0];
  const listArticles = articles.slice(1);

  return (
    <>
      <SiteHeader activePage="/blog" />

      <PageHero
        eyebrow="Inteligência Jurídica"
        title={<>Dossiês &<br /><em style={{ color: '#C79C74', fontStyle: 'italic', fontWeight: 400 }}>Publicações</em></>}
        subtitle="Análises críticas e posicionamentos institucionais sobre o cenário corporativo."
        bgImage={IMAGES.hero}
      />

      <section style={{ backgroundColor: '#FAEDCD', padding: '100px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* CONTEÚDO PRINCIPAL (8 Colunas no Desktop) */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              
              {/* ARTIGO EM DESTAQUE (Awwwards Editorial Layout) */}
              <article className="group">
                <Link href={`/noticia/${featuredArticle.id}`} className="block cursor-none" style={{ textDecoration: 'none' }}>
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', border: '1px solid rgba(1,3,38,0.1)', marginBottom: 28 }}>
                    <img
                      src={featuredArticle.img}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-103"
                      style={{ filter: 'grayscale(15%) contrast(1.05)' }}
                    />
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider mb-4">
                    <span style={{ color: '#C79C74' }}>{featuredArticle.date}</span>
                    <span style={{ width: 12, height: 1, backgroundColor: 'rgba(1,3,38,0.15)' }} />
                    <span style={{ color: '#010326', opacity: 0.6 }}>Por {featuredArticle.author}</span>
                  </div>

                  <h2 
                    className="transition-colors duration-300 group-hover:text-[#063943]"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(26px, 3.5vw, 38px)',
                      fontWeight: 300,
                      lineHeight: 1.2,
                      color: '#010326',
                      letterSpacing: '-0.02em',
                      marginBottom: 16
                    }}
                  >
                    {featuredArticle.title}
                  </h2>
                  
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(1,3,38,0.7)', maxWidth: '68ch', marginBottom: 24 }}>
                    {featuredArticle.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-3" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#010326' }}>
                    <span className="border-b border-[rgba(1,3,38,0.25)] pb-1 transition-all duration-300 group-hover:border-[#C79C74] group-hover:text-[#C79C74]">Acessar dossiê</span>
                    <ArrowRight size={14} className="transition-transform duration-500 ease-in-out group-hover:translate-x-1.5 group-hover:text-[#C79C74]" />
                  </span>
                </Link>
              </article>

              {/* LISTA DE OUTROS ARTIGOS (Estilo Sumário de Livro de Luxo) */}
              <div style={{ borderTop: '1px solid rgba(1,3,38,0.1)', paddingTop: 40 }} className="flex flex-col">
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: '#010326', opacity: 0.5, marginBottom: 32 }}>
                  Outros Posicionamentos
                </h3>
                
                <div className="flex flex-col">
                  {listArticles.map((article) => (
                    <article 
                      key={article.id} 
                      style={{ 
                        borderBottom: '1px solid rgba(1,3,38,0.08)',
                        padding: '36px 0'
                      }}
                      className="group"
                    >
                      <Link href={`/noticia/${article.id}`} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start cursor-none" style={{ textDecoration: 'none' }}>
                        
                        {/* Imagem Pequena com cantos retos */}
                        <div className="md:col-span-3 h-28 overflow-hidden" style={{ border: '1px solid rgba(1,3,38,0.08)' }}>
                          <img
                            src={article.img}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                            style={{ filter: 'grayscale(20%)' }}
                          />
                        </div>

                        {/* Textos */}
                        <div className="md:col-span-9 flex flex-col justify-center">
                          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wider mb-2">
                            <span style={{ color: '#C79C74' }}>{article.date}</span>
                            <span style={{ color: 'rgba(1,3,38,0.4)' }}>•</span>
                            <span style={{ color: 'rgba(1,3,38,0.5)' }}>{article.category}</span>
                          </div>
                          
                          <h4 
                            className="transition-colors duration-300 group-hover:text-[#C79C74]"
                            style={{
                              fontFamily: 'Playfair Display, serif',
                              fontSize: 22,
                              fontWeight: 400,
                              lineHeight: 1.35,
                              color: '#010326',
                              marginBottom: 12
                            }}
                          >
                            {article.title}
                          </h4>
                          
                          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, lineHeight: 1.7, color: 'rgba(1,3,38,0.6)', marginBottom: 0 }}>
                            {article.excerpt}
                          </p>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

            </div>

            {/* SIDEBAR DE APOIO (4 Colunas no Desktop) */}
            <aside className="lg:col-span-4 flex flex-col gap-12 lg:pl-8">
              
              {/* Box de Inscrição Newsletter */}
              <div style={{ backgroundColor: '#010326', padding: '40px 32px', border: '1px solid rgba(250,237,205,0.08)' }}>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#C79C74', display: 'block', marginBottom: 16 }}>
                  Boletim
                </span>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 300, color: '#FAEDCD', marginBottom: 16, lineHeight: 1.25 }}>
                  Inscreva-se na <br /><em style={{ fontStyle: 'italic', color: '#C79C74', fontWeight: 400 }}>inteligência.</em>
                </h4>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, lineHeight: 1.7, color: 'rgba(250,237,205,0.6)', marginBottom: 28 }}>
                  Receba nossos comunicados formais diretamente em sua caixa de entrada.
                </p>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Seu endereço de e-mail"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: 'rgba(250,237,205,0.03)',
                      border: '1px solid rgba(250,237,205,0.15)',
                      borderRadius: 0,
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 13,
                      color: '#FAEDCD',
                      outline: 'none',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#C79C74'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(250,237,205,0.15)'}
                  />
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '14px 20px',
                      backgroundColor: '#C79C74',
                      border: 'none',
                      borderRadius: 0,
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: '#010326',
                      transition: 'background-color 300ms ease',
                      cursor: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DFC29A'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C79C74'}
                  >
                    Inscrever-se
                  </button>
                </form>
              </div>

              {/* Categorias / Temas */}
              <div style={{ borderTop: '1px solid rgba(1,3,38,0.1)', paddingTop: 32 }}>
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#010326', opacity: 0.5, marginBottom: 24 }}>
                  Temas de Estudo
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="flex flex-col gap-4">
                  {categories.map((cat, idx) => (
                    <li key={idx} style={{ borderBottom: '1px solid rgba(1,3,38,0.05)', paddingBottom: 12 }}>
                      <Link 
                        href="/blog" 
                        className="group flex justify-between items-center cursor-none" 
                        style={{ textDecoration: 'none', fontFamily: 'Outfit, sans-serif', fontSize: 14, color: '#010326' }}
                      >
                        <span className="transition-colors duration-300 group-hover:text-[#C79C74]">{cat.name}</span>
                        <span style={{ fontSize: 11, opacity: 0.4 }} className="transition-opacity duration-300 group-hover:opacity-100">({cat.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contatos / Redes Sociais */}
              <div style={{ borderTop: '1px solid rgba(1,3,38,0.1)', paddingTop: 32 }}>
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#010326', opacity: 0.5, marginBottom: 20 }}>
                  Acompanhe
                </h4>
                <div className="flex gap-4">
                  {['LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="cursor-none"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: 1.5,
                        textTransform: 'uppercase',
                        color: '#010326',
                        opacity: 0.6,
                        textDecoration: 'none',
                        borderBottom: '1px solid transparent',
                        transition: 'all 300ms ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#C79C74';
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.borderBottomColor = '#C79C74';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#010326';
                        e.currentTarget.style.opacity = '0.6';
                        e.currentTarget.style.borderBottomColor = 'transparent';
                      }}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default Blog;
