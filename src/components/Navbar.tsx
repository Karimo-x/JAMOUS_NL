import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/equipment', label: 'الآليات' },
    { path: '/categories', label: 'الفئات' },
    { path: '/about', label: 'من نحن' },
    { path: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : ''
      }`}
      style={{ 
        background: '#1F1F1F', 
        borderBottom: '2px solid #FFC107',
        height: '80px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{ height: '80px' }}>
          {/* Logo - Right Side */}
          <Link to="/" className="flex items-center space-x-reverse" style={{ gap: '15px' }}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg" style={{ background: '#FFC107' }}>
              <span className="font-bold text-xl" style={{ color: '#000000' }}>JS</span>
            </div>
            <div>
              <div className="text-xl font-bold text-white">JAMOUS_<span style={{ color: '#FFC107' }}>NL</span></div>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center" style={{ gap: '48px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-base font-medium transition-all duration-300"
                style={location.pathname === link.path ? { color: '#FFC107' } : { color: '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'}
                onMouseLeave={(e) => location.pathname !== link.path && (e.currentTarget.style.color = '#FFFFFF')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions - Left Side */}
          <div className="hidden md:flex items-center" style={{ gap: '16px' }}>
            <button
              className="px-5 py-2.5 text-white font-medium transition-all duration-300 rounded-lg"
              style={{ border: '1px solid #FFC107' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFC107';
                e.currentTarget.style.color = '#1F1F1F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              تسجيل دخول
            </button>
            <button
              className="px-5 py-2.5 text-white font-medium transition-all duration-300 rounded-lg"
              style={{ background: '#FFC107' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#E6AC00'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#FFC107'}
            >
              إنشاء حساب
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#FFFFFF' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden shadow-lg" style={{ background: '#2B2B2B', borderTop: '1px solid #FFC107' }}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                style={location.pathname === link.path ? { background: '#FFC107', color: '#1F1F1F' } : { color: '#FFFFFF' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <button
                className="px-4 py-3 text-white font-medium transition-all rounded-lg"
                style={{ border: '1px solid #FFC107' }}
              >
                تسجيل دخول
              </button>
              <button
                className="px-4 py-3 text-white font-medium transition-all rounded-lg"
                style={{ background: '#FFC107' }}
              >
                إنشاء حساب
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
