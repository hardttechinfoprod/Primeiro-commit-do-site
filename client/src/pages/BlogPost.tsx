import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { Phone, Mail, ChevronRight, Search, ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const IMAGES = {
  logo: '/images/logo.svg',
  logoFooter: '/images/logo-footer.svg',
  news1: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80',
  news2: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80',
  news3: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80',
  news4: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=500&q=80',
  news5: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
};

const articlesData = {
  1: {
    id: 1,
    title: 'Nova Lei de Protecao de Dados entra em vigor com novas exigencias',
    date: '3 de Junho, 2026',
    author: 'Dra. Ana Costa',
    category: 'Direito Digital',
    img: IMAGES.news1,
    excerpt: 'As empresas brasileiras precisam se adequar as novas exigencias da legislacao de protecao de dados que entra em vigor neste mes.',
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
      <p>Recomendamos que todas as empresas realizem uma auditoria completa de seus processos de tratamento de dados e implementem as mudanças necessárias para estar em conformidade com a legislação. A Adaes Advogados está disponível para orientar sua empresa neste processo.</p>
    `,
    relatedArticles: [2, 3],
  },
  2: {
    id: 2,
    title: 'Gestao de riscos tributarios em tempos desafiadores',
    date: '1 de Junho, 2026',
    author: 'Dr. Carlos Silva',
    category: 'Direito Tributário',
    img: IMAGES.news2,
    excerpt: 'Em um cenario economico complexo, a gestao adequada de riscos tributarios se torna essencial para a saude financeira das empresas.',
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
      <p>A gestão proativa de riscos tributários pode resultar em economia significativa e evitar problemas futuros com a administração tributária. Conte com a Adaes Advogados para orientar sua empresa.</p>
    `,
    relatedArticles: [1, 4],
  },
  3: {
    id: 3,
    title: 'Principais questoes de direito do consumidor em 2026',
    date: '28 de Maio, 2026',
    author: 'Dra. Juliana Santos',
    category: 'Direito do Consumidor',
    img: IMAGES.news3,
    excerpt: 'O direito do consumidor continua evoluindo com novas regulamentacoes e jurisprudencias que impactam empresas de todos os setores.',
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
      <p>Recomendamos que as empresas revise seus processos de atendimento ao consumidor e se adeque às novas exigências legais. A Adaes Advogados oferece consultoria especializada nesta área.</p>
    `,
    relatedArticles: [1, 5],
  },
  4: {
    id: 4,
    title: 'Arbitragem Internacional como forma de resolucao de disputas',
    date: '25 de Maio, 2026',
    author: 'Dr. Fernando Oliveira',
    category: 'Arbitragem',
    img: IMAGES.news4,
    excerpt: 'A arbitragem internacional se consolida como o metodo preferido para resolucao de disputas comerciais transfronteiricas.',
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
      <p>A arbitragem internacional oferece uma alternativa eficaz e eficiente para resolução de disputas. A Adaes Advogados possui experiência comprovada em arbitragem internacional.</p>
    `,
    relatedArticles: [2, 3],
  },
  5: {
    id: 5,
    title: 'Compliance corporativo: tendencias e desafios para 2026',
    date: '22 de Maio, 2026',
    author: 'Dra. Ana Costa',
    category: 'Compliance',
    img: IMAGES.news5,
    excerpt: 'As empresas enfrentam novos desafios em compliance, com regulamentacoes mais rigorosas e fiscalizacao intensificada.',
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
      <p>O compliance corporativo é essencial para o sucesso e a sustentabilidade das empresas. A Adaes Advogados oferece consultoria especializada em compliance corporativo.</p>
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
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-[#0F3B3F]">Notícia não encontrada</h1>
        <Link href="/blog" className="mt-4 text-[#C9A876] hover:underline">Voltar para Notícias</Link>
      </div>
    );
  }

  const relatedArticles = post.relatedArticles.map(id => articlesData[id as keyof typeof articlesData]);

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
            <Link href="/advogados" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Advogados</Link>
            <Link href="/blog" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#C9A876] border-b-2 border-[#C9A876]">Noticias</Link>
            <Link href="/areas" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Areas de Pratica</Link>
            <Link href="/contato" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Contato</Link>
            <button className="ml-4 p-2 text-gray-600 hover:text-[#C9A876]"><Search size={18} /></button>
          </nav>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-4 flex items-center gap-2 text-sm">
          <Link href="/blog" className="text-[#C9A876] hover:underline flex items-center gap-1">
            <ArrowLeft size={14} /> Voltar para Notícias
          </Link>
        </div>
      </div>

      {/* POST CONTENT */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="mb-8">
                <img src={post.img} alt={post.title} className="w-full h-96 object-cover shadow-lg" />
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#C9A876]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#C9A876]" />
                  <span>Por {post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={16} className="text-[#C9A876]" />
                  <span className="px-3 py-1 bg-gray-100 text-[#0F3B3F] font-semibold rounded text-xs">{post.category}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-[#0F3B3F] mb-6">{post.title}</h1>

              {/* Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-[#0F3B3F] mb-4">Compartilhe este artigo</h3>
                <div className="flex gap-4">
                  <a href="#" className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700">Facebook</a>
                  <a href="#" className="px-4 py-2 bg-blue-400 text-white text-sm font-semibold rounded hover:bg-blue-500">Twitter</a>
                  <a href="#" className="px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded hover:bg-blue-800">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              {/* Related Articles */}
              <div className="bg-gray-50 p-6 rounded mb-8">
                <h3 className="text-lg font-bold text-[#0F3B3F] mb-4 uppercase tracking-wide">Artigos Relacionados</h3>
                <div className="space-y-4">
                  {relatedArticles.map((article) => (
                    <Link key={article.id} href={`/noticia/${article.id}`} className="block group">
                      <div className="overflow-hidden mb-2 rounded">
                        <img src={article.img} alt={article.title} className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#0F3B3F] group-hover:text-[#C9A876] transition-colors line-clamp-2">{article.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[#0F3B3F] text-white p-6 rounded">
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Newsletter</h3>
                <p className="text-sm mb-4">Receba nossas atualizações jurídicas diretamente no seu email.</p>
                <div className="flex flex-col gap-2">
                  <input type="email" placeholder="Seu e-mail" className="px-4 py-3 border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#C9A876]" />
                  <button className="px-6 py-3 bg-[#C9A876] text-white font-semibold uppercase text-sm hover:bg-[#b8976a] transition-colors">
                    Inscrever-se
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-[#C9A876]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-white italic">Precisa de assessoria jurídica especializada?</h3>
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

export default BlogPost;
