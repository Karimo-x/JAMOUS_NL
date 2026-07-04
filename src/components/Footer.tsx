import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ background: '#1F1F1F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4" style={{ gap: '15px' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg" style={{ background: '#FFC107' }}>
                <span className="font-bold text-xl" style={{ color: '#000000' }}>JS</span>
              </div>
              <div>
                <div className="text-xl font-bold">JAMOUS_NL</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              متخصصون في استيراد وتجارة الآليات الثقيلة الأوروبية عالية الجودة. نوفر معدات موثوقة بأسعار منافسة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#FFC107' }}>روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition-colors text-sm" style={{ color: '#B0B0B0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="transition-colors text-sm" style={{ color: '#B0B0B0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>
                  الآليات
                </Link>
              </li>
              <li>
                <Link to="/categories" className="transition-colors text-sm" style={{ color: '#B0B0B0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>
                  الفئات
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors text-sm" style={{ color: '#B0B0B0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors text-sm" style={{ color: '#B0B0B0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#FFC107' }}>معلومات قانونية</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="transition-colors text-sm" style={{ color: '#B0B0B0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors text-sm" style={{ color: '#B0B0B0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#FFC107' }}>معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-start" style={{ gap: '14px' }}>
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#FFC107' }} />
                <span className="text-sm leading-relaxed" style={{ color: '#B0B0B0' }}>
                  سوريا – ريف دمشق – التل<br />
                  المعهد العالي للعلوم السياسية<br />
                  بجانب محطة فادي كار
                </span>
              </li>
              <li className="flex items-center min-h-[24px]" style={{ gap: '14px' }}>
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#FFC107' }} />
                <a href="tel:+963968057858" className="transition-colors text-sm" style={{ color: '#B0B0B0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>
                  +963 968 057 858
                </a>
              </li>
              <li className="flex items-center min-h-[24px]" style={{ gap: '14px' }}>
                <MessageCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#FFC107' }} />
                <a
                  href="https://wa.me/963968057858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-sm"
                  style={{ color: '#B0B0B0' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}
                >
                  +963 968 057 858
                </a>
              </li>
              <li className="flex items-center min-h-[24px]" style={{ gap: '14px' }}>
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#FFC107' }} />
                <a href="mailto:Karemjamous27@gmail.com" className="transition-colors text-sm" style={{ color: '#B0B0B0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>
                  Karemjamous27@gmail.com
                </a>
              </li>
              <li className="flex items-center min-h-[24px]" style={{ gap: '14px' }}>
                <Clock className="w-5 h-5 flex-shrink-0" style={{ color: '#FFC107' }} />
                <span className="text-sm" style={{ color: '#B0B0B0' }}>متوفرون 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8" style={{ borderTop: '1px solid #2B2B2B' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm" style={{ color: '#B0B0B0' }}>
              © {currentYear} JAMOUS_NL. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center" style={{ gap: '18px' }}>
              <a
                href="https://wa.me/963968057858"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all"
                style={{ color: '#B0B0B0' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFC107';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B0B0B0';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="tel:+963968057858"
                className="transition-all"
                style={{ color: '#B0B0B0' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFC107';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B0B0B0';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="mailto:Karemjamous27@gmail.com"
                className="transition-all"
                style={{ color: '#B0B0B0' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFC107';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B0B0B0';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
