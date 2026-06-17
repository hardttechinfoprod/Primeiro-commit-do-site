import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { SiteHeader, SiteFooter } from '../components/Layout';

const IMAGES = {
  heroBg: '/images/client/7.jpeg',
  news1: '/images/client/11.jpeg',
  news2: '/images/client/14.jpeg',
  news3: '/images/client/15.jpeg',
  news4: '/images/client/9.jpeg',
  news5: '/images/client/13.jpeg',
};

const articlesData = {
  1: {
    id: 1,
    title: 'Nova Lei de Proteção de Dados entra em vigor com novas exigências',
    date: '3 de Junho, 2026',
    author: 'Dra. Ana Costa',
    category: 'Direito Digital',
    img: IMAGES.news1,
    excerpt: 'As empresas brasileiras precisam se adequar às novas exigências da legislação de proteção de dados que entra em vigor neste mês.',
    content: `
      <p>As empresas brasileiras enfrentam um novo desafio regulatório com a entrada em vigor de novas exigências da Lei Geral de Proteção de Dados (LGPD). Esta legislação, que já estava em vigor, agora recebe atualizações significativas que impactam diretamente a forma como as organizações gerenciam dados pessoais.</p>
      
      <h3>Principais Mudanças</h3>
      <p>As novas exigências incluem:</p>
      <ul>
        <li>Implementação de sistemas mais robustos de segurança de dados</li>
        <li>Maior transparência no tratamento de dados pessoais</li>
        <li>Conformidade com padrões internacionais de proteção</li>
        <li>Designação obrigatória de Encarregado de Proteção de Dados (DPO)</li>
      </ul>
      
      <h3>Impacto nas Empresas</h3>
      <p>As empresas que não se adequarem às novas exigências podem enfrentar multas significativas, que podem chegar a 2% do faturamento anual, limitado a R$ 50 milhões por infração. Além disso, a reputação da empresa pode ser prejudicada caso haja vazamentos de dados.</p>
      
      <h3>Recomendações</h3>
      <p>Recomendamos que todas as empresas realizem uma auditoria completa de seus processos de tratamento de dados e implementem as mudanças necessárias para estar em conformidade com a legislação. A Adães Advogados está disponível para orientar sua empresa neste processo.</p>
    `,
    relatedArticles: [2, 3],
  },
  2: {
    id: 2,
    title: 'Gestão de riscos tributários em tempos desafiadores',
    date: '1 de Junho, 2026',
    author: 'Dr. Carlos Silva',
    category: 'Direito Tributário',
    img: IMAGES.news2,
    excerpt: 'Em um cenário econômico complexo, a gestão adequada de riscos tributários se torna essencial para a saúde financeira das empresas.',
    content: `
      <p>Em um cenário econômico complexo e volátil, a gestão adequada de riscos tributários se torna essencial para a saúde financeira das empresas. As mudanças constantes na legislação tributária exigem uma abordagem proativa e estratégica.</p>
      
      <h3>Desafios Atuais</h3>
      <p>As empresas enfrentam diversos desafios tributários:</p>
      <ul>
        <li>Interpretação de normas tributárias complexas</li>
        <li>Adequação a novas regulamentações</li>
        <li>Planejamento tributário eficiente</li>
        <li>Gestão de riscos fiscais</li>
      </ul>
      
      <h3>Estratégias de Mitigação</h3>
      <p>Uma gestão eficaz de riscos tributários inclui:</p>
      <ul>
        <li>Manutenção de documentação completa e organizada</li>
        <li>Acompanhamento constante das mudanças legislativas</li>
        <li>Planejamento tributário estruturado</li>
        <li>Assessoria especializada de profissionais qualificados</li>
      </ul>
      
      <h3>Conclusão</h3>
      <p>A gestão proativa de riscos tributários pode resultar em economia significativa e evitar problemas futuros com a administração tributária. Conte com a Adães Advogados para orientar sua empresa.</p>
    `,
    relatedArticles: [1, 4],
  },
  3: {
    id: 3,
    title: 'Principais questões de direito do consumidor em 2026',
    date: '28 de Maio, 2026',
    author: 'Dra. Juliana Santos',
    category: 'Direito do Consumidor',
    img: IMAGES.news3,
    excerpt: 'O direito do consumidor continua evoluindo com novas regulamentações e jurisprudências que impactam empresas de todos os setores.',
    content: `
      <p>O direito do consumidor continua evoluindo com novas regulamentações e jurisprudências que impactam empresas de todos os setores. As mudanças refletem a crescente preocupação com a proteção dos direitos dos consumidores.</p>
      
      <h3>Temas em Destaque</h3>
      <p>Os principais temas de direito do consumidor em 2026 incluem:</p>
      <ul>
        <li>Proteção de dados pessoais de consumidores</li>
        <li>Transparência em transações eletrônicas</li>
        <li>Direito de arrependimento em compras online</li>
        <li>Responsabilidade por produtos defeituosos</li>
      </ul>
      
      <h3>Impacto para as Empresas</h3>
      <p>As empresas precisam estar atentas às novas exigências para evitar processos judiciais e danos à reputação. A conformidade com a legislação de proteção do consumidor é fundamental.</p>
      
      <h3>Como se Preparar</h3>
      <p>Recomendamos que as empresas revisem seus processos de atendimento ao consumidor e se adequem às novas exigências legais. A Adães Advogados oferece consultoria especializada nesta área.</p>
    `,
    relatedArticles: [1, 5],
  },
  4: {
    id: 4,
    title: 'Arbitragem Internacional como forma de resolução de disputas',
    date: '25 de Maio, 2026',
    author: 'Dr. Fernando Oliveira',
    category: 'Arbitragem',
    img: IMAGES.news4,
    excerpt: 'A arbitragem internacional se consolida como o método preferido para resolução de disputas comerciais transfronteiriças.',
    content: `
      <p>A arbitragem internacional se consolida como o método preferido para resolução de disputas comerciais transfronteiriças. Este mecanismo oferece vantagens significativas em relação aos litígios tradicionais.</p>
      
      <h3>Vantagens da Arbitragem Internacional</h3>
      <ul>
        <li>Sigilo e confidencialidade</li>
        <li>Flexibilidade processual</li>
        <li>Especialização dos árbitros</li>
        <li>Reconhecimento internacional das decisões</li>
        <li>Celeridade na resolução de conflitos</li>
      </ul>
      
      <h3>Tendências em 2026</h3>
      <p>A arbitragem internacional continua crescendo, especialmente em disputas comerciais internacionais. As instituições arbitrais estão modernizando seus procedimentos para incluir audiências virtuais e decisões mais rápidas.</p>
      
      <h3>Quando Usar Arbitragem</h3>
      <p>A arbitragem é particularmente útil em:</p>
      <ul>
        <li>Contratos internacionais</li>
        <li>Disputas comerciais complexas</li>
        <li>Situações que requerem confidencialidade</li>
        <li>Casos que envolvem múltiplas jurisdições</li>
      </ul>
      
      <h3>Conclusão</h3>
      <p>A arbitragem internacional oferece uma alternativa eficaz e eficiente para resolução de disputas. A Adães Advogados possui experiência comprovada em arbitragem internacional.</p>
    `,
    relatedArticles: [2, 3],
  },
  5: {
    id: 5,
    title: 'Compliance corporativo: tendências e desafios para 2026',
    date: '22 de Maio, 2026',
    author: 'Dra. Ana Costa',
    category: 'Compliance',
    img: IMAGES.news5,
    excerpt: 'As empresas enfrentam novos desafios em compliance, com regulamentações mais rigorosas e fiscalização intensificada.',
    content: `
      <p>As empresas enfrentam novos desafios em compliance, com regulamentações mais rigorosas e fiscalização intensificada. O compliance corporativo se tornou uma prioridade estratégica para as organizações.</p>
      
      <h3>Tendências em Compliance para 2026</h3>
      <ul>
        <li>Implementação de programas de compliance mais robustos</li>
        <li>Maior foco em compliance ambiental</li>
        <li>Conformidade com regulamentações de proteção de dados</li>
        <li>Compliance em operações digitais</li>
        <li>Responsabilidade social corporativa</li>
      </ul>
      
      <h3>Desafios Principais</h3>
      <p>Os principais desafios incluem:</p>
      <ul>
        <li>Complexidade crescente de regulamentações</li>
        <li>Necessidade de investimento em tecnologia</li>
        <li>Treinamento contínuo de colaboradores</li>
        <li>Monitoramento constante de conformidade</li>
      </ul>
      
      <h3>Melhores Práticas</h3>
      <p>Para implementar um programa de compliance eficaz, recomendamos:</p>
      <ul>
        <li>Estabelecer uma política de compliance clara</li>
        <li>Designar um responsável por compliance</li>
        <li>Realizar auditorias regulares</li>
        <li>Manter documentação completa</li>
        <li>Treinar todos os colaboradores</li>
      </ul>
      
      <h3>Conclusão</h3>
      <p>O compliance corporativo é essencial para o sucesso e a sustentabilidade das empresas. A Adães Advogados oferece consultoria especializada em compliance corporativo.</p>
    `,
    relatedArticles: [1, 2],
  },
};

const BlogPost = () => {
  const [match, params] = useRoute('/noticia/:id');
  const postId = parseInt(params?.id || '1');
  const post = articlesData[postId as keyof typeof articlesData];

  if (!post) {
    return (
      <>
        <SiteHeader activePage="/blog" />
        <div style={{ backgroundColor: '#FAEDCD', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, color: '#010326', marginBottom: 20 }}>Dossiê não encontrado</h1>
          <Link href="/blog" className="cursor-none" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#C79C74', textDecoration: 'underline' }}>Voltar para Notícias</Link>
        </div>
        <SiteFooter />
      </>
    );
  }

  const relatedArticles = post.relatedArticles.map(id => articlesData[id as keyof typeof articlesData]);

  return (
    <>
      <SiteHeader activePage="/blog" />

      {/* Hero Simplificado para Leitura (Layout Clássico de Artigos) */}
      <section style={{ backgroundColor: '#010326', paddingTop: '160px', paddingBottom: '80px', borderBottom: '1px solid rgba(250,237,205,0.08)' }} data-cursor-dark>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            
            {/* Voltar */}
            <Link 
              href="/blog" 
              className="group inline-flex items-center gap-3 cursor-none mb-8"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: '#C79C74',
                textDecoration: 'none'
              }}
            >
              <ArrowLeft size={12} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Voltar ao acervo
            </Link>

            {/* Tema */}
            <span style={{ display: 'inline-block', fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(250,237,205,0.5)', marginBottom: 20 }}>
              {post.category}
            </span>

            {/* Título Monumental */}
            <h1 
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 300,
                lineHeight: 1.15,
                color: '#FAEDCD',
                letterSpacing: '-0.02em',
                marginBottom: 32
              }}
            >
              {post.title}
            </h1>

            {/* Metas */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-white/50" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className="flex items-center gap-2">
                <Calendar size={13} style={{ color: '#C79C74' }} /> {post.date}
              </span>
              <span style={{ opacity: 0.3 }}>|</span>
              <span className="flex items-center gap-2">
                <User size={13} style={{ color: '#C79C74' }} /> Por {post.author}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Conteúdo de Leitura */}
      <section style={{ backgroundColor: '#FAEDCD', padding: '80px 0 120px' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* CORPO DO ARTIGO (8 Colunas) */}
            <main className="lg:col-span-8">
              
              {/* Imagem de Abertura (Retangular Seca) */}
              <div style={{ width: '100%', aspectRatio: '21/9', overflow: 'hidden', border: '1px solid rgba(1,3,38,0.1)', marginBottom: 56 }}>
                <img src={post.img} alt={post.title} className="w-full h-full object-cover" style={{ filter: 'grayscale(15%)' }} />
              </div>

              {/* Texto Editorial */}
              <div 
                className="editorial-content"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 16,
                  lineHeight: 1.85,
                  color: 'rgba(1,3,38,0.85)',
                  maxWidth: '70ch'
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Estilos customizados locais para o HTML renderizado */}
              <style>{`
                .editorial-content p {
                  margin-bottom: 24px;
                }
                .editorial-content h3 {
                  font-family: 'Playfair Display', serif;
                  font-size: 26px;
                  font-weight: 400;
                  color: #010326;
                  margin-top: 48px;
                  margin-bottom: 20px;
                  letter-spacing: -0.01em;
                }
                .editorial-content ul {
                  margin-bottom: 28px;
                  padding-left: 20px;
                  list-style-type: square;
                }
                .editorial-content li {
                  margin-bottom: 10px;
                  padding-left: 4px;
                }
                .editorial-content ul li::marker {
                  color: #C79C74;
                }
              `}</style>

              {/* Assinatura / Nota de Rodapé */}
              <div style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid rgba(1,3,38,0.08)' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontStyle: 'italic', color: '#010326', opacity: 0.7 }}>
                  Este dossiê possui caráter puramente informativo e não substitui o aconselhamento jurídico formal prestado por nossa banca sob contrato.
                </p>
              </div>

            </main>

            {/* ARTIGOS RELACIONADOS & SIDEBAR (4 Colunas) */}
            <aside className="lg:col-span-4 flex flex-col gap-12 lg:pl-8">
              
              {/* Artigos Relacionados */}
              <div style={{ borderTop: '1px solid rgba(1,3,38,0.1)', paddingTop: 32 }}>
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#010326', opacity: 0.5, marginBottom: 28 }}>
                  Artigos Relacionados
                </h4>
                
                <div className="flex flex-col gap-8">
                  {relatedArticles.map((article) => (
                    <article key={article.id} className="group">
                      <Link href={`/noticia/${article.id}`} className="block cursor-none" style={{ textDecoration: 'none' }}>
                        <div style={{ aspectRatio: '16/10', overflow: 'hidden', border: '1px solid rgba(1,3,38,0.08)', marginBottom: 16 }}>
                          <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" style={{ filter: 'grayscale(20%)' }} />
                        </div>
                        <span style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: 10, color: '#C79C74', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>
                          {article.date}
                        </span>
                        <h5 
                          className="transition-colors duration-300 group-hover:text-[#C79C74]"
                          style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: 18,
                            fontWeight: 400,
                            lineHeight: 1.35,
                            color: '#010326',
                            margin: 0
                          }}
                        >
                          {article.title}
                        </h5>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              {/* Banner / Newsletter Rápida */}
              <div style={{ backgroundColor: '#010326', padding: '40px 32px', border: '1px solid rgba(250,237,205,0.08)' }} data-cursor-dark>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#C79C74', display: 'block', marginBottom: 16 }}>
                  Boletim
                </span>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 300, color: '#FAEDCD', marginBottom: 16, lineHeight: 1.25 }}>
                  Acompanhe os <br /><em style={{ fontStyle: 'italic', color: '#C79C74', fontWeight: 400 }}>pareceres.</em>
                </h4>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(250,237,205,0.03)',
                      border: '1px solid rgba(250,237,205,0.15)',
                      borderRadius: 0,
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 13,
                      color: '#FAEDCD',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '12px 20px',
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
                    Inscrever
                  </button>
                </form>
              </div>

            </aside>

          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default BlogPost;
