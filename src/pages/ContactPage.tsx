import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import Accordion from '../components/Accordion';
import { faqs } from '../data/equipmentData';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={[{ label: 'تواصل معنا' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا عبر أي من الطرق التالية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">إرسال رسالة</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  placeholder="+963 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  الموضوع
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
                  <option>استفسار عام</option>
                  <option>استفسار عن آلية محددة</option>
                  <option>طلب عرض سعر</option>
                  <option>خدمة ما بعد البيع</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  الرسالة
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 space-x-reverse text-white px-6 py-4 rounded-lg hover:shadow-xl transition-all btn-ripple font-semibold text-lg"
                style={{ background: '#FFC107' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#E6AC00'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#FFC107'}
              >
                <Send className="w-5 h-5 ml-2" />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">العنوان</div>
                    <div className="text-gray-600">
                      سوريا – ريف دمشق – التل<br />
                      المعهد العالي للعلوم السياسية<br />
                      بجانب محطة فادي كار
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">الهاتف</div>
                    <a
                      href="tel:+963968057858"
                      className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                      +963 968 057 858
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">واتساب</div>
                    <a
                      href="https://wa.me/963968057858"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      +963 968 057 858
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">البريد الإلكتروني</div>
                    <a
                      href="mailto:Karemjamous27@gmail.com"
                      className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                      Karemjamous27@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">ساعات العمل</div>
                    <div className="text-gray-600">متوفرون 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+963968057858"
                className="flex items-center justify-center space-x-2 space-x-reverse text-white px-6 py-4 rounded-xl hover:shadow-xl transition-all btn-ripple font-semibold"
                style={{ background: '#FFC107' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#E6AC00'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#FFC107'}
              >
                <Phone className="w-5 h-5 ml-2" />
                <span>اتصل الآن</span>
              </a>
              <a
                href="https://wa.me/963968057858"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 space-x-reverse bg-green-500 text-white px-6 py-4 rounded-xl hover:shadow-xl transition-all btn-ripple font-semibold"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">موقعنا</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3319.8823442956!2d36.3304309!3d33.6014649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM2JzA1LjMiTiAzNsKwMTknNDkuNiJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع JAMOUS_NL - التل، ريف دمشق"
            ></iframe>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            الأسئلة الشائعة
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
