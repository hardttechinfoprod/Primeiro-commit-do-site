import { useState } from 'react';
import { Phone, Mail, MapPin, Send, X } from 'lucide-react';
import { toast } from 'sonner';
import { SiteHeader, SiteFooter, PageHero } from '../components/Layout';

const IMAGES = {
  hero: '/images/client/14.jpeg',
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [mapOpen, setMapOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }
    toast.success('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <div id="adaes-cursor" className="adaes-cursor" aria-hidden="true" />
      
      <SiteHeader activePage="/contato" />

      <PageHero
        eyebrow="Contato"
        title={<>Canais de<br /><em style={{ color: '#C79C74', fontStyle: 'italic' }}>Contato</em></>}
        subtitle="Converse diretamente com nossos conselheiros estratégicos."
        bgImage={IMAGES.hero}
      />

      {/* CONTACT INFO + FORM */}
      <section style={{ padding: '100px 0 120px', background: '#FAEDCD' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start contact-layout-grid">
            
            {/* Info Column (5 Columns) */}
            <div className="lg:col-span-5">
              {/* Header */}
              <div style={{ marginBottom: 48 }}>
                <span className="eyebrow eyebrow-dark">Informações</span>
                <div className="gold-line" />
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, color: '#010326', lineHeight: 1.15, marginBottom: 20 }}>
                  Canais de<br />
                  <em style={{ color: '#C79C74', fontStyle: 'italic', fontWeight: 400 }}>Atendimento</em>
                </h2>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(1, 3, 38, 0.65)', maxWidth: '38ch' }}>
                  Entreeeeeeeeeee em contato com nossa banca em Brasília para questões de alta complexidade em âmbito nacional.
                </p>
              </div>



              {/* Contact Details Grid */}
              <div style={{ borderTop: '1px solid rgba(1,3,38,0.1)', paddingTop: 40, display: 'flex', flexDirection: 'column', gap: 32 }}>

                {/* Endereço */}
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, background: 'rgba(199,156,116,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} style={{ color: '#C79C74' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(1,3,38,0.4)', marginBottom: 6 }}>
                      Endereço
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, lineHeight: 1.75, color: 'rgba(1,3,38,0.8)' }}>
                      Setor de Autarquias Norte, Quadra 2, Lote B<br />
                      Edifício Principal, Sala 1501<br />
                      Brasília — DF, 70040-020
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, background: 'rgba(199,156,116,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={18} style={{ color: '#C79C74' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(1,3,38,0.4)', marginBottom: 6 }}>
                      Telefone
                    </p>
                    <a
                      href="tel:+556130000000"
                      style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 500, color: '#010326', textDecoration: 'none', display: 'block', transition: 'color 250ms ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#C79C74')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#010326')}
                    >
                      (61) 3000-0000
                    </a>
                  </div>
                </div>

                {/* E-mail */}
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, background: 'rgba(199,156,116,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} style={{ color: '#C79C74' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(1,3,38,0.4)', marginBottom: 6 }}>
                      E-mail
                    </p>
                    <a
                      href="mailto:contato@adaes.adv.br"
                      style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 500, color: '#010326', textDecoration: 'none', display: 'block', transition: 'color 250ms ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#C79C74')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#010326')}
                    >
                      contato@adaes.adv.br
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', paddingTop: 8, borderTop: '1px solid rgba(1,3,38,0.06)' }}>
                  <div style={{ width: 40, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(1,3,38,0.4)', marginBottom: 8 }}>
                      Horário de Atendimento
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: 'rgba(1,3,38,0.8)', display: 'flex', justifyContent: 'space-between', gap: 24 }}>
                        <span>Segunda a Sexta</span>
                        <span style={{ color: '#C79C74', fontWeight: 500 }}>9h – 18h</span>
                      </p>
                      <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: 'rgba(1,3,38,0.8)', display: 'flex', justifyContent: 'space-between', gap: 24 }}>
                        <span>Sábado</span>
                        <span style={{ color: '#C79C74', fontWeight: 500 }}>9h – 13h*</span>
                      </p>
                      <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: 'rgba(1,3,38,0.38)', marginTop: 6, fontStyle: 'italic' }}>
                        * sob agendamento prévio
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            {/* Form Column (7 Columns) */}
            <div className="lg:col-span-7">
              <div 
                style={{ 
                  backgroundColor: '#FAFAF7', 
                  padding: '48px 40px', 
                  border: '1px solid rgba(1, 3, 38, 0.08)' 
                }}
              >
                <span className="eyebrow eyebrow-dark" style={{ marginBottom: 12 }}>Mensagem</span>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 36 }}>
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(26px, 3vw, 36px)',
                      fontWeight: 300,
                      color: '#010326',
                      lineHeight: 1.2,
                      margin: 0,
                    }}
                  >
                    Envie sua <em style={{ color: '#C79C74', fontStyle: 'italic', fontWeight: 400 }}>demanda</em>
                  </h3>

                  {/* Selo Institucional */}
                  <div
                    style={{
                      width: 110,
                      height: 110,
                      flexShrink: 0,
                      animation: 'sealRotate 28s linear infinite',
                      opacity: 0.85,
                    }}
                  >
                    <img
                      src="/images/Adão_Selo_01.png"
                      alt="Adães Advogados — Selo Institucional"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(1,3,38,0.6)' }}>Nome Completo *</label>
                      <input 
                        id="name"
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Ex: Carlos Eduardo Silva" 
                        className="contact-input" 
                        required 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(1,3,38,0.6)' }}>E-mail corporativo *</label>
                      <input 
                        id="email"
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        type="email" 
                        placeholder="Ex: carlos@empresa.com" 
                        className="contact-input" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(1,3,38,0.6)' }}>Telefone de contato</label>
                      <input 
                        id="phone"
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        type="tel" 
                        placeholder="(00) 00000-0000" 
                        className="contact-input" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(1,3,38,0.6)' }}>Assunto de interesse</label>
                      <select 
                        id="subject"
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        className="contact-input contact-select"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="consultoria">Consultoria Societária</option>
                        <option value="tributario">Planejamento Tributário</option>
                        <option value="empresarial">Governança Patrimonial</option>
                        <option value="imobiliario">Operações Imobiliárias</option>
                        <option value="outro">Outras demandas complexas</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(1,3,38,0.6)' }}>Mensagem / Resumo do Caso *</label>
                    <textarea 
                      id="message"
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={5} 
                      placeholder="Descreva brevemente a situação ou consulta jurídica necessária..." 
                      className="contact-input resize-none" 
                      required 
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="contact-btn w-full md:w-auto">
                      <Send size={14} /> Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section style={{ padding: '0 0 100px', background: '#FAEDCD' }}>
        <div className="container">

          {/* Eyebrow Label */}
          <div style={{ marginBottom: 40, paddingTop: 0 }}>
            <span className="eyebrow eyebrow-dark">Localização</span>
            <div className="gold-line" />
          </div>

          {/* Card Container */}
          <div
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(1,3,38,0.14), 0 4px 16px rgba(1,3,38,0.08)',
              display: 'flex',
              minHeight: 420,
              border: '1px solid rgba(1,3,38,0.08)',
            }}
          >
            {/* Left Info Panel */}
            <div
              style={{
                background: '#010326',
                width: 320,
                flexShrink: 0,
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              className="map-info-panel"
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    color: '#C79C74',
                    marginBottom: 20,
                  }}
                >
                  Sede Principal
                </span>
                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 28,
                    fontWeight: 300,
                    color: '#FAEDCD',
                    lineHeight: 1.2,
                    marginBottom: 32,
                  }}
                >
                  Brasília,<br />
                  <em style={{ fontStyle: 'italic', color: '#C79C74', fontWeight: 400 }}>DF</em>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div>
                    <p
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                        color: 'rgba(250,237,205,0.4)',
                        marginBottom: 6,
                      }}
                    >
                      Endereço
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, lineHeight: 1.7, color: 'rgba(250,237,205,0.8)' }}>
                      Setor de Autarquias Norte<br />
                      Quadra 2, Lote B, Sala 1501<br />
                      Brasília, DF — 70040-020
                    </p>
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                        color: 'rgba(250,237,205,0.4)',
                        marginBottom: 6,
                      }}
                    >
                      Atendimento
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, lineHeight: 1.7, color: 'rgba(250,237,205,0.8)' }}>
                      Seg – Sex: 9h – 18h<br />
                      Sáb: 9h – 13h (agendamento)
                    </p>
                  </div>
                </div>
              </div>

              {/* Bronze divider line at bottom */}
              <div style={{ width: 40, height: 2, background: '#C79C74', marginTop: 40 }} />
            </div>

            {/* Right Map Panel */}
            <div style={{ flex: 1, position: 'relative', minHeight: 420 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.837!2d-47.9292!3d-15.7920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a7c2b5b7b1%3A0x!2sBras%C3%ADlia%2C+DF!5e0!3m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  display: 'block',
                  filter: 'grayscale(15%) contrast(1.1) brightness(0.95)',
                  minHeight: 420,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Adães Advogados"
              />
            </div>
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

      {/* ===== LOCAL CSS STYLES ===== */}
      <style>{`
        .contact-input {
          width: 100%;
          padding: 14px 18px;
          background-color: rgba(6, 57, 67, 0.04);
          border: 1px solid rgba(6, 57, 67, 0.12);
          border-radius: 0px !important;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          color: #010326;
          outline: none;
          transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .contact-input::placeholder {
          color: rgba(1, 3, 38, 0.35);
        }
        .contact-input:focus {
          border-color: #C79C74;
          background-color: #FAFAF7;
          box-shadow: 0 0 0 1px #C79C74;
        }
        
        .contact-select {
          appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23C79C74' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 16px;
          padding-right: 40px;
        }
        
        .contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #FAEDCD;
          background-color: #010326;
          border: 1px solid #010326;
          padding: 16px 32px;
          cursor: none;
          transition: all 300ms ease;
        }
        .contact-btn:hover {
          background-color: #C79C74;
          border-color: #C79C74;
          color: #010326;
        }

        @media (max-width: 1024px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
        }

        @media (max-width: 768px) {
          .map-info-panel {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;

