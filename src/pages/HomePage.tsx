import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Search, TrendingUp, DollarSign, Shield, Truck, Headphones, Globe, Award, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import EquipmentCard from '../components/EquipmentCard';
import CategoryCard from '../components/CategoryCard';
import TestimonialCard from '../components/TestimonialCard';
import { equipment, categories, brands, testimonials } from '../data/equipmentData';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const featuredEquipment = equipment.filter((item) => item.featured).slice(0, 6);
  const equipmentByCategory = categories.map((cat) => ({
    ...cat,
    count: equipment.filter((e) => e.category === cat.id).length,
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-section relative text-white overflow-hidden" 
        style={{ 
          minHeight: '90vh',
          marginTop: '80px',
          backgroundImage: 'url(/images/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'rgba(0, 0, 0, 0.3)' }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between" style={{ minHeight: '90vh' }}>
          <div className="w-full md:w-2/3 lg:w-1/2 text-right animate-fadeIn py-10 md:py-0">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              استيراد <span style={{ color: '#FFC107' }}>الآليات الثقيلة</span> الأوروبية
            </h1>

            <p 
              className="text-2xl md:text-4xl mb-8 md:mb-12 leading-relaxed font-bold" 
              style={{ 
                color: '#FFFFFF', 
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
                animation: 'pulse 2s infinite'
              }}
            >
              استيراد من كافة دول أوروبا إلى كافة أنحاء سوريا والعالم
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-10 md:mb-0 mt-auto">
              <Link
                to="/equipment"
                className="flex items-center space-x-3 space-x-reverse px-8 py-4 rounded-lg hover:shadow-2xl transition-all btn-ripple text-lg font-semibold w-full sm:w-auto justify-center"
                style={{ background: '#FFC107', color: '#000000' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#E6AC00'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#FFC107'}
              >
                <Search className="w-6 h-6 ml-2" />
                <span>تصفح الآليات</span>
              </Link>
              <a
                href="https://wa.me/963968057858"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 space-x-reverse text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold w-full sm:w-auto justify-center"
                style={{ border: '2px solid #FFFFFF', background: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <MessageCircle className="w-6 h-6 ml-2" />
                <span>تواصل معنا</span>
              </a>
            </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              العلامات التجارية العالمية
            </h2>
            <p className="text-xl text-gray-600">نتعامل مع أفضل العلامات التجارية الأوروبية</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center card-hover border border-gray-200"
              >
                <span className="text-xl font-bold text-gray-700">{brand.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              تصفح حسب الفئة
            </h2>
            <p className="text-xl text-gray-600">اختر نوع الآلية التي تبحث عنها</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentByCategory.map((category) => (
              <CategoryCard key={category.id} category={category} count={category.count} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/categories"
              className="inline-flex items-center space-x-2 space-x-reverse font-semibold text-lg transition-colors"
              style={{ color: '#FFC107' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E6AC00'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FFC107'}
            >
              <span>عرض جميع الفئات</span>
              <ArrowLeft className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              الآليات المميزة
            </h2>
            <p className="text-xl text-gray-600">أحدث الآليات الأوروبية المتاحة للبيع</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEquipment.map((item) => (
              <EquipmentCard key={item.id} equipment={item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/equipment"
              className="inline-flex items-center space-x-2 space-x-reverse text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all btn-ripple font-semibold"
              style={{ background: '#FFC107' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#E6AC00'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#FFC107'}
            >
              <span>عرض جميع الآليات</span>
              <ArrowLeft className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار JAMOUS_<span style={{ color: '#FFC107' }}>NL</span>؟
            </h2>
            <p className="text-xl text-gray-600">مميزات تجعلنا الخيار الأفضل لك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'معدات أوروبية عالية الجودة',
                description: 'استيراد مباشر من أوروبا بأعلى معايير الجودة',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'فحص احترافي قبل البيع',
                description: 'فحص شامل لكل آلية من قبل خبراء متخصصين',
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: 'أسعار منافسة',
                description: 'أفضل الأسعار في السوق مع إمكانية التفاوض',
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: 'شحن موثوق',
                description: 'شحن آمن وسريع من أوروبا إلى سوريا',
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: 'دعم احترافي',
                description: 'فريق دعم متاح 24/7 للإجابة على استفساراتك',
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'خبرة في سوق الآليات',
                description: 'سنوات من الخبرة في استيراد المعدات الثقيلة',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'ضمان الجودة',
                description: 'ضمان على جميع الآليات يغطي الأجزاء الرئيسية',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'استيراد مباشر',
                description: 'نتعامل مباشرة مع الموردين الأوروبيين',
              },
            ].map((feature, index) => (
              <div
                key={index}
              className="bg-white rounded-xl p-6 shadow-md card-hover text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4" style={{ background: '#FFC107' }}>
                {feature.icon}
              </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              آراء عملائنا
            </h2>
            <p className="text-xl text-gray-600">ماذا يقول عملاؤنا عن خدماتنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{ background: '#1F1F1F' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            هل تبحث عن آلية معينة؟
          </h2>
          <p className="text-xl mb-8" style={{ color: '#B0B0B0' }}>
            تواصل معنا الآن وسنساعدك في إيجاد الآلية المثالية لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+963968057858"
              className="flex items-center space-x-3 space-x-reverse bg-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all btn-ripple font-semibold text-lg w-full sm:w-auto justify-center"
              style={{ color: '#1F1F1F' }}
            >
              <Phone className="w-6 h-6 ml-2" />
              <span>اتصل الآن</span>
            </a>
            <a
              href="https://wa.me/963968057858"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 space-x-reverse bg-green-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all btn-ripple font-semibold text-lg w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6 ml-2" />
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
