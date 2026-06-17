import { Building, Scale, FileText, Shield, Users, Briefcase } from 'lucide-react';
import { SiteHeader, SiteFooter, PageHero, CtaSection } from '../components/Layout';

const IMAGES = {
  hero: '/images/client/11.jpeg',
};

const services = [
  { icon: Building, title: 'Consultoria Empresarial', desc: 'Assessoria jurídica completa para empresas, incluindo constituição societária, contratos, compliance e governança corporativa.' },
  { icon: Scale, title: 'Litígios e Arbitragem', desc: 'Representação em processos judiciais e arbitrais, com estratégias eficientes para resolução de conflitos.' },
  { icon: FileText, title: 'Contratos e Negociações', desc: 'Elaboração, revisão e negociação de contratos comerciais, societários e de prestação de serviços.' },
  { icon: Shield, title: 'Compliance e LGPD', desc: 'Implementação de programas de compliance, adequação à LGPD e gestão de riscos corporativos.' },
  { icon: Users, title: 'Direito Trabalhista', desc: 'Consultoria preventiva, negociações coletivas, defesa em reclamações trabalhistas e reestruturações.' },
  { icon: Briefcase, title: 'Fusões e Aquisições', desc: 'Assessoria completa em operações de M&A, due diligence, estruturação de operações e integração pós-aquisição.' },
];

const Services = () => {
  return (
    <>
      <div id="adaes-cursor" className="adaes-cursor" aria-hidden="true" />
      
      <SiteHeader activePage="/servicos" />

      <PageHero
        eyebrow="Nossos Serviços"
        title={<>Serviços<br /><em style={{ color: '#C79C74', fontStyle: 'italic' }}>Estratégicos</em></>}
        subtitle="Soluções jurídicas e assessoria de alto padrão para sua corporação"
        bgImage={IMAGES.hero}
      />

      <section style={{ padding: '100px 0 120px', background: '#FAEDCD' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <div 
                key={i} 
                style={{ 
                  backgroundColor: '#FAFAF7', 
                  padding: '40px 32px', 
                  border: '1px solid #D5D1C8',
                  textAlign: 'center'
                }}
              >
                <item.icon className="mx-auto text-[#C79C74] mb-6" size={36} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 400, color: '#010326', marginBottom: '16px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', lineHeight: 1.7, color: 'rgba(1, 3, 38, 0.65)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <SiteFooter />
    </>
  );
};

export default Services;

