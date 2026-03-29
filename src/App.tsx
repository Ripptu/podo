import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  Star, 
  ShieldCheck, 
  Stethoscope, 
  Microscope, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Globe,
  Plus,
  Minus
} from 'lucide-react';

// --- Translations ---
const translations: Record<string, any> = {
  'Deutsch': {
    nav: {
      leistungen: 'Leistungen',
      standorte: 'Standorte',
      preise: 'Preise',
      karriere: 'Karriere',
      whatsapp: 'WhatsApp Nachricht',
    },
    hero: {
      title1: 'Ihre professionelle Podologie-Praxis für',
      title2: 'gesunde Füße',
      subtitle: 'Besuchen Sie uns in einer unserer drei modernen Praxen in Wesel, Oberhausen & Dortmund. Fachkompetenz trifft auf modernste Technik.',
      call: 'Anrufen',
      whatsapp: 'WhatsApp anfragen',
    },
    trusted: {
      title: 'Vertraut von Patienten in ganz NRW',
      review1: '"Endlich schmerzfrei laufen. Das Team in Dortmund ist unglaublich kompetent und freundlich."',
      patient1: '— Sarah M., Patientin',
      review2: '"Modernste Praxis, die ich je gesehen habe. Die Behandlung war erstklassig."',
      patient2: '— Thomas K., Patient',
    },
    services: {
      title: 'Spezialisierte Fachkompetenz für Ihre Füße',
      s1_title: 'Podologische Komplexbehandlung',
      s1_desc: 'Umfassende Nagel- & Hornhautbearbeitung für rundum gesunde und gepflegte Füße.',
      s2_title: 'Nagelspangenbehandlung',
      s2_desc: 'Sanfte und effektive Orthonyxie zur Korrektur eingewachsener oder eingerollter Nägel.',
      s3_title: 'Hühneraugenentfernung',
      s3_desc: 'Professionelle Entfernung und individuelle Druckentlastung für sofortige Schmerzfreiheit.',
      s4_title: 'Spezialisierte Behandlungen',
      s4_desc: 'Gezielte Therapien bei Nagelpilz, Warzen und anderen spezifischen Fußerkrankungen.',
    },
    locations: {
      title: 'Ihre Praxen vor Ort in NRW',
      route: 'Route planen',
      new: 'Neu & Modern',
      whatsapp: 'WhatsApp Termin',
    },
    about: {
      title: 'Fachärztliche Präzision trifft moderne Technik',
      p1: 'Kompromisslose Hygiene',
      p2: 'State-of-the-Art Geräte',
      p3: 'Spezialisiertes Fachwissen',
    },
    testimonials: {
      stat: 'Glückliche Patienten jährlich',
      stat_sub: 'Vertrauen auf unsere Expertise in NRW.',
      title: 'Was unsere Patienten über uns sagen',
      quote: '"Sehr kompetente und freundliche Praxis. Ich fühle mich hier mit meinen Fußproblemen bestens aufgehoben und wurde hervorragend behandelt."',
      author: 'Michael R.',
      author_sub: 'Patient in Dortmund',
    },
    career: {
      tag: 'Wir stellen ein',
      title: 'Werden Sie Teil unseres Experten-Teams in Wesel, Oberhausen & Dortmund',
      desc: 'Wir suchen motivierte Podologen (m/w/d) und Praxismanager (m/w/d), die unsere Leidenschaft für gesunde Füße teilen. Modernste Ausstattung und ein tolles Team warten auf Sie.',
      b1: 'Überdurchschnittliche Bezahlung',
      b2: 'Flexible Arbeitszeiten',
      b3: 'Modernste Praxisausstattung',
      btn: 'Per WhatsApp bewerben',
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      q1: 'Brauche ich ein Rezept für die Behandlung?',
      a1: 'Nein, Sie können auch als Selbstzahler zu uns kommen. Für bestimmte medizinische Indikationen kann ein Arzt jedoch ein Rezept ausstellen.',
      q2: 'Wie lange dauert eine Erstbehandlung?',
      a2: 'Eine podologische Komplexbehandlung dauert in der Regel zwischen 45 und 60 Minuten, inklusive ausführlicher Anamnese.',
      q3: 'Rechnen Sie mit allen Krankenkassen ab?',
      a3: 'Ja, wir besitzen die Kassenzulassung für alle gesetzlichen und privaten Krankenkassen.',
      q4: 'Wie schnell bekomme ich einen Termin?',
      a4: 'Wir bemühen uns stets um zeitnahe Termine. Am schnellsten geht es über eine kurze WhatsApp-Nachricht.',
      more_title: 'Noch Fragen?',
      more_desc: 'Schreiben Sie uns einfach, wir antworten so schnell wie möglich!',
    },
    prices: {
      title: 'Unsere Preisliste',
      q1: 'Podologische Komplexbehandlung',
      a1: 'Umfassende Behandlung inkl. Fußbad, Nagelschnitt, Hornhautabtragung und Pflege. Preis: 45,00 €',
      q2: 'Teilbehandlung (z.B. nur Nägel)',
      a2: 'Fokussierte Behandlung spezifischer Problemzonen. Preis: ab 28,00 €',
      q3: 'Nagelspangenbehandlung (Erstsetzen)',
      a3: 'Individuelle Anpassung und Setzen der Spange inkl. Material. Preis: 120,00 €',
      q4: 'Hühneraugenentfernung',
      a4: 'Fachgerechte und schmerzarme Entfernung. Preis: ab 15,00 € (zzgl. Grundbehandlung)',
    },
    footer: {
      desc: 'Ihre Experten für professionelle Podologie und medizinische Fußpflege in NRW. Gesund gehen, besser leben.',
      links: 'Quick Links',
      support: 'Support',
      legal: 'Rechtliches',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'AGB',
      rights: 'Alle Rechte vorbehalten.',
    }
  },
  'English': {
    nav: {
      leistungen: 'Services',
      standorte: 'Locations',
      preise: 'Prices',
      karriere: 'Career',
      whatsapp: 'WhatsApp Message',
    },
    hero: {
      title1: 'Your professional podiatry practice for',
      title2: 'healthy feet',
      subtitle: 'Visit us in one of our three modern practices in Wesel, Oberhausen & Dortmund. Expertise meets state-of-the-art technology.',
      call: 'Call Now',
      whatsapp: 'WhatsApp Inquiry',
    },
    trusted: {
      title: 'Trusted by patients across NRW',
      review1: '"Finally walking without pain. The team in Dortmund is incredibly competent and friendly."',
      patient1: '— Sarah M., Patient',
      review2: '"Most modern practice I have ever seen. The treatment was first class."',
      patient2: '— Thomas K., Patient',
    },
    services: {
      title: 'Specialized expertise for your feet',
      s1_title: 'Complex Podiatric Treatment',
      s1_desc: 'Comprehensive nail & callus treatment for completely healthy and well-groomed feet.',
      s2_title: 'Nail Brace Treatment',
      s2_desc: 'Gentle and effective orthonyxia for the correction of ingrown or curled nails.',
      s3_title: 'Corn Removal',
      s3_desc: 'Professional removal and individual pressure relief for immediate pain relief.',
      s4_title: 'Specialized Treatments',
      s4_desc: 'Targeted therapies for nail fungus, warts and other specific foot conditions.',
    },
    locations: {
      title: 'Your local practices in NRW',
      route: 'Plan Route',
      new: 'New & Modern',
      whatsapp: 'WhatsApp Appointment',
    },
    about: {
      title: 'Medical precision meets modern technology',
      p1: 'Uncompromising Hygiene',
      p2: 'State-of-the-Art Equipment',
      p3: 'Specialized Expertise',
    },
    testimonials: {
      stat: 'Happy patients annually',
      stat_sub: 'Trust in our expertise in NRW.',
      title: 'What our patients say about us',
      quote: '"Very competent and friendly practice. I feel I am in the best hands here with my foot problems and received excellent treatment."',
      author: 'Michael R.',
      author_sub: 'Patient in Dortmund',
    },
    career: {
      tag: 'We are hiring',
      title: 'Become part of our expert team in Wesel, Oberhausen & Dortmund',
      desc: 'We are looking for motivated podiatrists (m/f/d) and practice managers (m/f/d) who share our passion for healthy feet. State-of-the-art equipment and a great team await you.',
      b1: 'Above-average pay',
      b2: 'Flexible working hours',
      b3: 'State-of-the-art practice equipment',
      btn: 'Apply via WhatsApp',
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'Do I need a prescription for the treatment?',
      a1: 'No, you can also come to us as a self-payer. However, a doctor can issue a prescription for certain medical indications.',
      q2: 'How long does an initial treatment take?',
      a2: 'A complex podiatric treatment usually takes between 45 and 60 minutes, including a detailed medical history.',
      q3: 'Do you bill all health insurance companies?',
      a3: 'Yes, we have the statutory health insurance approval for all statutory and private health insurance companies.',
      q4: 'How quickly can I get an appointment?',
      a4: 'We always strive for prompt appointments. The fastest way is via a short WhatsApp message.',
      more_title: 'Any questions?',
      more_desc: 'Just write to us, we will answer as soon as possible!',
    },
    prices: {
      title: 'Our Price List',
      q1: 'Complex Podiatric Treatment',
      a1: 'Comprehensive treatment incl. foot bath, nail cutting, callus removal and care. Price: € 45.00',
      q2: 'Partial treatment (e.g. nails only)',
      a2: 'Focused treatment of specific problem areas. Price: from € 28.00',
      q3: 'Nail brace treatment (initial placement)',
      a3: 'Individual fitting and placement of the brace incl. material. Price: € 120.00',
      q4: 'Corn removal',
      a4: 'Professional and low-pain removal. Price: from € 15.00 (plus basic treatment)',
    },
    footer: {
      desc: 'Your experts for professional podiatry and medical foot care in NRW. Walk healthy, live better.',
      links: 'Quick Links',
      support: 'Support',
      legal: 'Legal',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
    }
  },
  'Tiếng Việt': {
    nav: {
      leistungen: 'Dịch vụ',
      standorte: 'Địa điểm',
      preise: 'Bảng giá',
      karriere: 'Tuyển dụng',
      whatsapp: 'Nhắn tin WhatsApp',
    },
    hero: {
      title1: 'Phòng khám chuyên khoa chân cho',
      title2: 'đôi chân khỏe mạnh',
      subtitle: 'Hãy đến thăm chúng tôi tại một trong ba phòng khám hiện đại ở Wesel, Oberhausen & Dortmund. Chuyên môn kết hợp với công nghệ tiên tiến.',
      call: 'Gọi ngay',
      whatsapp: 'Liên hệ WhatsApp',
    },
    trusted: {
      title: 'Được tin tưởng bởi bệnh nhân khắp NRW',
      review1: '"Cuối cùng cũng có thể đi lại không đau. Đội ngũ ở Dortmund vô cùng tận tình và thân thiện."',
      patient1: '— Sarah M., Bệnh nhân',
      review2: '"Phòng khám hiện đại nhất mà tôi từng thấy. Quá trình điều trị thật tuyệt vời."',
      patient2: '— Thomas K., Bệnh nhân',
    },
    services: {
      title: 'Chuyên môn đặc biệt cho đôi chân của bạn',
      s1_title: 'Điều trị bệnh lý bàn chân phức hợp',
      s1_desc: 'Chăm sóc móng & vết chai toàn diện cho đôi chân khỏe mạnh và gọn gàng.',
      s2_title: 'Điều trị niềng móng',
      s2_desc: 'Chỉnh hình móng nhẹ nhàng và hiệu quả để điều trị móng mọc ngược hoặc quặp.',
      s3_title: 'Loại bỏ vết chai sừng',
      s3_desc: 'Loại bỏ chuyên nghiệp và giảm áp lực cá nhân để giảm đau ngay lập tức.',
      s4_title: 'Điều trị chuyên sâu',
      s4_desc: 'Các liệu pháp nhắm mục tiêu cho nấm móng, mụn cóc và các tình trạng bàn chân cụ thể khác.',
    },
    locations: {
      title: 'Các phòng khám của bạn tại NRW',
      route: 'Chỉ đường',
      new: 'Mới & Hiện đại',
      whatsapp: 'Đặt lịch WhatsApp',
    },
    about: {
      title: 'Độ chính xác y khoa kết hợp công nghệ hiện đại',
      p1: 'Vệ sinh tuyệt đối',
      p2: 'Thiết bị tối tân',
      p3: 'Kiến thức chuyên môn',
    },
    testimonials: {
      stat: 'Bệnh nhân hài lòng mỗi năm',
      stat_sub: 'Tin tưởng vào chuyên môn của chúng tôi tại NRW.',
      title: 'Bệnh nhân nói gì về chúng tôi',
      quote: '"Phòng khám rất thân thiện và có chuyên môn cao. Tôi cảm thấy đôi chân của mình được chăm sóc tốt nhất tại đây và đã nhận được sự điều trị tuyệt vời."',
      author: 'Michael R.',
      author_sub: 'Bệnh nhân ở Dortmund',
    },
    career: {
      tag: 'Chúng tôi đang tuyển dụng',
      title: 'Trở thành một phần của đội ngũ chuyên gia tại Wesel, Oberhausen & Dortmund',
      desc: 'Chúng tôi đang tìm kiếm các bác sĩ chuyên khoa chân (nam/nữ/khác) và quản lý phòng khám (nam/nữ/khác) có cùng niềm đam mê với đôi chân khỏe mạnh. Thiết bị hiện đại và một đội ngũ tuyệt vời đang chờ đón bạn.',
      b1: 'Mức lương trên mức trung bình',
      b2: 'Giờ làm việc linh hoạt',
      b3: 'Thiết bị phòng khám hiện đại nhất',
      btn: 'Ứng tuyển qua WhatsApp',
    },
    faq: {
      title: 'Câu hỏi thường gặp',
      q1: 'Tôi có cần đơn thuốc để điều trị không?',
      a1: 'Không, bạn cũng có thể đến với chúng tôi với tư cách là người tự trả tiền. Tuy nhiên, bác sĩ có thể kê đơn thuốc cho một số chỉ định y tế nhất định.',
      q2: 'Lần điều trị đầu tiên mất bao lâu?',
      a2: 'Một đợt điều trị bệnh lý bàn chân phức hợp thường mất từ 45 đến 60 phút, bao gồm cả tiền sử bệnh chi tiết.',
      q3: 'Bạn có thanh toán với tất cả các công ty bảo hiểm y tế không?',
      a3: 'Có, chúng tôi có giấy phép bảo hiểm y tế theo luật định cho tất cả các công ty bảo hiểm y tế theo luật định và tư nhân.',
      q4: 'Tôi có thể lấy lịch hẹn nhanh như thế nào?',
      a4: 'Chúng tôi luôn cố gắng sắp xếp lịch hẹn nhanh chóng. Cách nhanh nhất là qua một tin nhắn WhatsApp ngắn.',
      more_title: 'Bạn có câu hỏi nào không?',
      more_desc: 'Chỉ cần viết cho chúng tôi, chúng tôi sẽ trả lời sớm nhất có thể!',
    },
    prices: {
      title: 'Bảng giá của chúng tôi',
      q1: 'Điều trị bệnh lý bàn chân phức hợp',
      a1: 'Điều trị toàn diện bao gồm ngâm chân, cắt móng, loại bỏ vết chai và chăm sóc. Giá: 45,00 €',
      q2: 'Điều trị một phần (ví dụ: chỉ móng)',
      a2: 'Điều trị tập trung vào các khu vực có vấn đề cụ thể. Giá: từ 28,00 €',
      q3: 'Điều trị niềng móng (lần đặt đầu tiên)',
      a3: 'Lắp ráp và đặt niềng móng cá nhân bao gồm vật liệu. Giá: 120,00 €',
      q4: 'Loại bỏ vết chai sừng',
      a4: 'Loại bỏ chuyên nghiệp và ít đau. Giá: từ 15,00 € (cộng thêm điều trị cơ bản)',
    },
    footer: {
      desc: 'Chuyên gia của bạn về điều trị bệnh lý bàn chân chuyên nghiệp và chăm sóc chân y tế tại NRW. Đi lại khỏe mạnh, sống tốt hơn.',
      links: 'Liên kết nhanh',
      support: 'Hỗ trợ',
      legal: 'Pháp lý',
      imprint: 'Dấu ấn',
      privacy: 'Chính sách bảo mật',
      terms: 'Điều khoản dịch vụ',
      rights: 'Đã đăng ký Bản quyền.',
    }
  }
};

// --- Components ---

const SectionHeading = ({ title, centered = false }: { title: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
    <h2 className="text-3xl md:text-4xl font-serif italic font-normal leading-tight text-text-main">
      {title}
    </h2>
  </div>
);

const WhatsAppButton = ({ text, primary = true, className = "" }: { text: string, primary?: boolean, className?: string }) => (
  <a 
    href="https://wa.me/4915568839795" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={text}
    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium transition-all duration-300 ${
      primary 
        ? 'bg-whatsapp text-white hover:bg-whatsapp-hover hover:shadow-lg hover:-translate-y-0.5' 
        : 'bg-white text-whatsapp border-2 border-whatsapp hover:bg-whatsapp/5'
    } ${className}`}
  >
    <MessageCircle className="w-5 h-5" />
    {text}
  </a>
);

const BentoCard = ({ title, desc, className }: { title: string, desc: string, className?: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div 
      className={`relative overflow-hidden p-8 rounded-3xl bg-surface-alt border border-gray-100 transition-all duration-300 group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,196,204,0.15), transparent 40%)`,
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10 h-full flex flex-col justify-end">
        <h3 className="text-xl md:text-2xl font-serif italic mb-4 text-text-main">{title}</h3>
        <p className="text-text-muted leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activePrice, setActivePrice] = useState<number | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('Deutsch');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = ['Deutsch', 'English', 'Tiếng Việt'];
  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-surface font-sans text-text-main overflow-x-hidden">
      <main>
      {/* --- Header --- */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img 
                src="https://s1.directupload.eu/images/260329/372mrr6f.gif" 
                alt="Podo Aktiv Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span className="text-2xl font-bold tracking-tight text-primary">Podo Aktiv</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#leistungen" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">{t.nav.leistungen}</a>
              <a href="#standorte" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">{t.nav.standorte}</a>
              <a href="#preise" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">{t.nav.preise}</a>
              <a href="#karriere" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">{t.nav.karriere}</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  aria-label="Sprache wechseln / Change language"
                  aria-expanded={langDropdownOpen}
                  className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-primary transition-colors py-2"
                >
                  <Globe className="w-4 h-4" />
                  {currentLang}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-1 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => { setCurrentLang(lang); setLangDropdownOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/5 transition-colors ${currentLang === lang ? 'text-primary font-medium bg-primary/5' : 'text-text-muted'}`}
                        >
                          {lang}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <WhatsAppButton text={t.nav.whatsapp} />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-text-muted hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col">
                <a href="#leistungen" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-text-main">{t.nav.leistungen}</a>
                <a href="#standorte" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-text-main">{t.nav.standorte}</a>
                <a href="#preise" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-text-main">{t.nav.preise}</a>
                <a href="#karriere" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-text-main">{t.nav.karriere}</a>
                <div className="pt-4 border-t border-gray-100">
                  <WhatsAppButton text={t.nav.whatsapp} className="w-full" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://eu-central.storage.cloudconvert.com/tasks/a703f6ab-4949-482c-9509-d6da9f4f2b1a/hf_20260329_065424_4132dde9-834c-4eb7-92a2-71b43a390dca.webm?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20260329%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20260329T070447Z&X-Amz-Expires=86400&X-Amz-Signature=0d95e9a9d58034b665183f43211ae2d631f0eff54d4602627d47224d3677239a&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22hf_20260329_065424_4132dde9-834c-4eb7-92a2-71b43a390dca.webm%22&response-content-type=video%2Fwebm&x-id=GetObject" type="video/webm" />
          </video>
        </div>
        {/* White Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-b from-white/20 via-white/50 to-surface"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-text-main">
              {t.hero.title1} <span className="text-primary font-serif italic font-normal relative inline-block">
                {t.hero.title2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+4915568839795" 
                aria-label={t.hero.call}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium transition-all duration-300 bg-primary text-white hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {t.hero.call}
              </a>
              <WhatsAppButton text={t.hero.whatsapp} primary={false} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Trusted By Section --- */}
      <section className="py-12 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-text-muted uppercase mb-8">{t.trusted.title}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simulating logos with text/stars for this specific request */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex text-yellow-400"><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/></div>
              <span className="font-bold text-lg text-text-main">Google Reviews</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="max-w-xs text-left">
              <p className="text-sm italic text-text-muted">{t.trusted.review1}</p>
              <p className="text-xs font-bold mt-2 text-text-main">{t.trusted.patient1}</p>
            </div>
            <div className="hidden lg:block w-px h-12 bg-gray-200"></div>
            <div className="max-w-xs text-left hidden lg:block">
              <p className="text-sm italic text-text-muted">{t.trusted.review2}</p>
              <p className="text-xs font-bold mt-2 text-text-main">{t.trusted.patient2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Leistungen (Services) --- */}
      <section id="leistungen" className="py-20 md:py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title={t.services.title}
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 auto-rows-[220px]">
            <BentoCard 
              title={t.services.s1_title}
              desc={t.services.s1_desc}
              className="md:col-span-2 md:row-span-2"
            />
            <BentoCard 
              title={t.services.s2_title}
              desc={t.services.s2_desc}
              className="md:col-span-1 md:row-span-1"
            />
            <BentoCard 
              title={t.services.s3_title}
              desc={t.services.s3_desc}
              className="md:col-span-1 md:row-span-1"
            />
            <BentoCard 
              title={t.services.s4_title}
              desc={t.services.s4_desc}
              className="md:col-span-3 md:row-span-1"
            />
          </div>
        </div>
      </section>

      {/* --- Standorte (Locations) --- */}
      <section id="standorte" className="py-20 md:py-32 bg-surface-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title={t.locations.title}
            centered={true}
          />

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Wesel */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-serif italic mb-8 text-text-main">Wesel</h3>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 text-text-muted">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p>Musterstraße 123<br/>46483 Wesel</p>
                </div>
                <div className="flex items-center gap-4 text-text-muted">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <p>0281 1234567</p>
                </div>
                <div className="flex items-center gap-4 text-text-muted">
                  <MessageCircle className="w-6 h-6 text-whatsapp shrink-0" />
                  <p>015568 839795</p>
                </div>
              </div>
              <div className="pt-8 border-t border-gray-100 space-y-4">
                <WhatsAppButton text={t.nav.whatsapp} primary={false} className="w-full" />
                <a href="https://www.google.com/maps/dir/?api=1&destination=Musterstraße+123,+46483+Wesel" target="_blank" rel="noopener noreferrer" className="w-full py-4 text-sm font-medium text-primary hover:underline flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" /> {t.locations.route}
                </a>
              </div>
            </motion.div>

            {/* Dortmund (Highlighted) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-3xl p-8 shadow-2xl relative transform lg:-translate-y-6 text-white"
            >
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-whatsapp text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                {t.locations.new}
              </div>
              <h3 className="text-2xl font-serif italic mb-8">Dortmund</h3>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 text-white/90">
                  <MapPin className="w-6 h-6 text-white shrink-0 mt-0.5" />
                  <p>Kampstr. 45<br/>44137 Dortmund</p>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <Phone className="w-6 h-6 text-white shrink-0" />
                  <p>015568 839795</p>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <MessageCircle className="w-6 h-6 text-whatsapp shrink-0" />
                  <p>015568 839795</p>
                </div>
              </div>
              <div className="pt-8 border-t border-white/20 space-y-4">
                <WhatsAppButton text={t.locations.whatsapp} className="w-full shadow-lg" />
                <a href="https://www.google.com/maps/dir/?api=1&destination=Kampstr.+45,+44137+Dortmund" target="_blank" rel="noopener noreferrer" className="w-full py-4 text-sm font-medium text-white hover:underline flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" /> {t.locations.route}
                </a>
              </div>
            </motion.div>

            {/* Oberhausen */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-serif italic mb-8 text-text-main">Oberhausen</h3>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 text-text-muted">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p>Beispielweg 45<br/>46045 Oberhausen</p>
                </div>
                <div className="flex items-center gap-4 text-text-muted">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <p>0208 9876543</p>
                </div>
                <div className="flex items-center gap-4 text-text-muted">
                  <MessageCircle className="w-6 h-6 text-whatsapp shrink-0" />
                  <p>015568 839795</p>
                </div>
              </div>
              <div className="pt-8 border-t border-gray-100 space-y-4">
                <WhatsAppButton text={t.nav.whatsapp} primary={false} className="w-full" />
                <a href="https://www.google.com/maps/dir/?api=1&destination=Beispielweg+45,+46045+Oberhausen" target="_blank" rel="noopener noreferrer" className="w-full py-4 text-sm font-medium text-primary hover:underline flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" /> {t.locations.route}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Security & Innovation --- */}
      <section className="py-20 md:py-32 bg-surface overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            title={t.about.title}
            centered={true}
          />

          <div className="grid md:grid-cols-3 gap-16 max-w-4xl mx-auto">
            {[
              { title: t.about.p1, icon: <ShieldCheck /> },
              { title: t.about.p2, icon: <Activity /> },
              { title: t.about.p3, icon: <Microscope /> }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-6">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h4 className="text-xl font-medium text-text-main">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Doctor" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl shadow-xl max-w-xs"
              >
                <div className="text-3xl font-bold text-primary mb-3">5.000+</div>
                <p className="text-base font-medium text-text-main mb-1">{t.testimonials.stat}</p>
                <p className="text-sm text-text-muted">{t.testimonials.stat_sub}</p>
              </motion.div>
            </div>

            <div>
              <SectionHeading 
                title={t.testimonials.title}
              />
              <div className="relative">
                <svg className="absolute -top-8 -left-10 w-20 h-20 text-primary/10" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl md:text-2xl font-medium text-text-main leading-relaxed relative z-10 mb-10">
                  {t.testimonials.quote}
                </p>
                <div className="flex items-center gap-5">
                  <div>
                    <p className="font-bold text-lg text-text-main">{t.testimonials.author}</p>
                    <p className="text-base text-text-muted">{t.testimonials.author_sub}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Job / Karriere --- */}
      <section id="karriere" className="py-20 md:py-32 bg-primary text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-8">
                <Star className="w-4 h-4 fill-white" />
                <span>{t.career.tag}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                {t.career.title}
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg">
                {t.career.desc}
              </p>
              <ul className="space-y-5 mb-10">
                {[t.career.b1, t.career.b2, t.career.b3].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton text={t.career.btn} className="bg-gray-100 text-black hover:bg-white border-none" />
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="https://s1.directupload.eu/images/260329/ik4dynqw.webp" 
                  alt="Praxis Team" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ & Preise --- */}
      <section id="preise" className="py-20 md:py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            
            {/* FAQ */}
            <div>
              <SectionHeading 
                title={t.faq.title}
              />
              <div className="space-y-4">
                {[
                  { q: t.faq.q1, a: t.faq.a1 },
                  { q: t.faq.q2, a: t.faq.a2 },
                  { q: t.faq.q3, a: t.faq.a3 },
                  { q: t.faq.q4, a: t.faq.a4 }
                ].map((faq, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-surface-alt">
                    <button 
                      className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-text-main hover:text-primary transition-colors text-lg"
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    >
                      {faq.q}
                      {activeFaq === idx ? <Minus className="w-6 h-6 text-primary shrink-0" /> : <Plus className="w-6 h-6 text-primary shrink-0" />}
                    </button>
                    <AnimatePresence>
                      {activeFaq === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-text-muted leading-relaxed text-lg">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-8 bg-primary-light rounded-2xl border border-primary/20">
                <h4 className="font-bold text-xl text-text-main mb-3">{t.faq.more_title}</h4>
                <p className="text-base text-text-muted mb-6">{t.faq.more_desc}</p>
                <WhatsAppButton text={t.nav.whatsapp} className="w-full sm:w-auto text-base py-3" />
              </div>
            </div>

            {/* Preise */}
            <div>
              <SectionHeading 
                title={t.prices.title}
              />
              <div className="space-y-4">
                {[
                  { q: t.prices.q1, a: t.prices.a1 },
                  { q: t.prices.q2, a: t.prices.a2 },
                  { q: t.prices.q3, a: t.prices.a3 },
                  { q: t.prices.q4, a: t.prices.a4 }
                ].map((price, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
                    <button 
                      className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-text-main hover:text-primary transition-colors text-lg"
                      onClick={() => setActivePrice(activePrice === idx ? null : idx)}
                    >
                      {price.q}
                      {activePrice === idx ? <Minus className="w-6 h-6 text-primary shrink-0" /> : <Plus className="w-6 h-6 text-primary shrink-0" />}
                    </button>
                    <AnimatePresence>
                      {activePrice === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-text-muted leading-relaxed font-medium text-lg">
                            {price.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-footer pt-20 md:pt-32 pb-12 text-footer-text">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-20">
            
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <img 
                  src="https://s1.directupload.eu/images/260329/372mrr6f.gif" 
                  alt="Podo Aktiv Logo" 
                  className="w-12 h-12 object-contain" 
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-2xl font-bold tracking-tight text-white">Podo Aktiv</span>
              </div>
              <p className="text-base leading-relaxed mb-10 max-w-sm">
                {t.footer.desc}
              </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Website" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Globe className="w-6 h-6" />
                </a>
                <a href="#" aria-label="WhatsApp Support" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-semibold mb-8 text-lg">{t.footer.links}</h4>
              <ul className="space-y-5 text-base">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#leistungen" className="hover:text-primary transition-colors">{t.nav.leistungen}</a></li>
                <li><a href="#standorte" className="hover:text-primary transition-colors">{t.nav.standorte}</a></li>
                <li><a href="#preise" className="hover:text-primary transition-colors">{t.nav.preise}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-8 text-lg">{t.footer.support}</h4>
              <ul className="space-y-5 text-base">
                <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
                <li><a href="#karriere" className="hover:text-primary transition-colors">{t.nav.karriere}</a></li>
                <li><a href="https://wa.me/4915568839795" className="hover:text-primary transition-colors flex items-center gap-2"><MessageCircle className="w-5 h-5"/> WhatsApp Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-8 text-lg">{t.footer.legal}</h4>
              <ul className="space-y-5 text-base">
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.imprint}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p>© 2026 Podo Aktiv. {t.footer.rights}</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
