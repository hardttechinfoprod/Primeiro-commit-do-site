import { useState } from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, ChevronRight, Search, Send } from 'lucide-react';
import { toast } from 'sonner';

const IMAGES = {
  logo: '/images/logo.svg',
  logoFooter: '/images/logo-footer.svg',
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Preencha todos os campos obrigatorios');
      return;
    }
    toast.success('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

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
            <Link href="/blog" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Noticias</Link>
            <Link href="/areas" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-[#C9A876] transition-colors">Areas de Pratica</Link>
            <Link href="/contato" className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#C9A876] border-b-2 border-[#C9A876]">Contato</Link>
            <button className="ml-4 p-2 text-gray-600 hover:text-[#C9A876]"><Search size={18} /></button>
          </nav>
        </div>
      </header>

      {/* PAGE HEADER */}
      <section className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero})` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contato</h1>
            <p className="text-gray-200 mt-2">Entre em contato conosco</p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info */}
            <div>
              <h3 className="text-2xl font-bold text-[#0F3B3F] mb-6">Informacoes de Contato</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-[#C9A876] flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-[#0F3B3F]">Endereco</h4>
                    <p className="text-gray-500 text-sm">Av. Paulista, 1000, 15o andar<br />Sao Paulo, SP, 01310-100</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-[#C9A876] flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-[#0F3B3F]">Telefone</h4>
                    <p className="text-gray-500 text-sm">(11) 3000-0000</p>
                    <p className="text-gray-400 text-xs">Seg-Sex: 9h-18h</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-[#C9A876] flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-[#0F3B3F]">Email</h4>
                    <p className="text-gray-500 text-sm">contato@adaes.com.br</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-[#0F3B3F] mb-3">Horario de Atendimento</h4>
                <p className="text-gray-500 text-sm">Segunda a Sexta: 9h - 18h</p>
                <p className="text-gray-500 text-sm">Sabado: 9h - 13h (com agendamento)</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-[#0F3B3F] mb-6">Envie sua Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Nome Completo *" className="px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-[#C9A876]" required />
                  <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email *" className="px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-[#C9A876]" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Telefone" className="px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-[#C9A876]" />
                  <select name="subject" value={formData.subject} onChange={handleChange} className="px-4 py-3 border border-gray-300 text-sm text-gray-500 focus:outline-none focus:border-[#C9A876]">
                    <option value="">Selecione um assunto</option>
                    <option value="consultoria">Consultoria Juridica</option>
                    <option value="tributario">Direito Tributario</option>
                    <option value="empresarial">Direito Empresarial</option>
                    <option value="imobiliario">Direito Imobiliario</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="Sua mensagem *" className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-[#C9A876] resize-none" required />
                <button type="submit" className="px-8 py-3 bg-[#C9A876] text-white font-semibold uppercase text-sm hover:bg-[#b8976a] transition-colors flex items-center gap-2">
                  <Send size={16} /> Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="h-64 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Mapa Interativo - Sao Paulo, SP</p>
      </section>

      {/* CTA */}
      <section className="py-10 bg-[#C9A876]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-white italic">Agende sua consulta inicial gratuita</h3>
          <a href="tel:+551130000000" className="px-8 py-3 bg-white text-[#0F3B3F] font-semibold uppercase text-sm hover:bg-gray-100 transition-colors">
            Ligar Agora
          </a>
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

export default Contact;
