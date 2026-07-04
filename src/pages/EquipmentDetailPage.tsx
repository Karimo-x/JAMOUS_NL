import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, Calendar, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import EquipmentCard from '../components/EquipmentCard';
import Modal from '../components/Modal';
import { equipment } from '../data/equipmentData';

export default function EquipmentDetailPage() {
  const { id } = useParams();
  const item = equipment.find((e) => e.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">الآلية غير موجودة</h2>
          <Link
            to="/equipment"
            className="inline-flex items-center space-x-2 space-x-reverse font-semibold transition-colors"
            style={{ color: '#FFC107' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#E6AC00'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#FFC107'}
          >
            <span>العودة إلى الآليات</span>
            <ArrowLeft className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    );
  }

  const similarEquipment = equipment
    .filter((e) => e.category === item.category && e.id !== item.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: 'الآليات', path: '/equipment' },
              { label: item.nameAr },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Images */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
              <div className="image-zoom-container h-96 bg-gray-200">
                <img
                  src={item.images[selectedImage]}
                  alt={item.nameAr}
                  className="w-full h-full object-cover image-zoom"
                />
              </div>
            </div>
            {item.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {item.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className="rounded-lg overflow-hidden border-2 transition-all"
                    style={{ borderColor: selectedImage === index ? '#FFC107' : 'transparent' }}
                  >
                    <img src={img} alt={`${item.nameAr} ${index + 1}`} className="w-full h-24 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full mb-3" style={{ background: '#FFF9E6', color: '#FFC107' }}>
                  {item.brand}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{item.nameAr}</h1>
                <p className="text-gray-600">{item.name}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="text-3xl font-bold mb-1" style={{ color: '#FFC107' }}>
                  ${item.price.toLocaleString('en-US')}
                </div>
                <div className="text-sm text-gray-600">السعر قابل للتفاوض</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 space-x-reverse text-gray-700">
                  <Calendar className="w-5 h-5 ml-2" style={{ color: '#FFC107' }} />
                  <div>
                    <div className="text-sm text-gray-600">سنة الصنع</div>
                    <div className="font-semibold">{item.year}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse text-gray-700">
                  <Clock className="w-5 h-5 ml-2" style={{ color: '#FFC107' }} />
                  <div>
                    <div className="text-sm text-gray-600">ساعات العمل</div>
                    <div className="font-semibold">{item.hours.toLocaleString('ar-EG')} ساعة</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse text-gray-700">
                  <MapPin className="w-5 h-5 ml-2" style={{ color: '#FFC107' }} />
                  <div>
                    <div className="text-sm text-gray-600">الموقع الحالي</div>
                    <div className="font-semibold">{item.location}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-sm text-gray-600">الحالة</div>
                    <div className="font-semibold text-green-700">{item.condition}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/963968057858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 space-x-reverse bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all btn-ripple w-full font-semibold"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  <span>واتساب</span>
                </a>
                <a
                  href="tel:+963968057858"
                  className="flex items-center justify-center space-x-2 space-x-reverse text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all btn-ripple w-full font-semibold"
                  style={{ background: '#FFC107' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#E6AC00'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#FFC107'}
                >
                  <Phone className="w-5 h-5 ml-2" />
                  <span>اتصل الآن</span>
                </a>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="flex items-center justify-center space-x-2 space-x-reverse border-2 px-6 py-3 rounded-lg transition-all w-full font-semibold"
                  style={{ borderColor: '#FFC107', color: '#FFC107' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#FFF9E6'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <Mail className="w-5 h-5 ml-2" />
                  <span>إرسال استفسار</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">التفاصيل والمواصفات</h2>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">الوصف</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">المواصفات الفنية</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(item.specs).map(([key, value]) => (
                    <div key={key} className="flex items-start space-x-3 space-x-reverse bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#FFC107' }} />
                      <div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                        <div className="font-semibold text-gray-900">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-xl shadow-md p-8 text-white" style={{ background: '#1F1F1F' }}>
              <h3 className="text-2xl font-bold mb-6">ضمان الجودة</h3>
              <ul className="space-y-4">
                {[
                  'فحص شامل قبل البيع',
                  'مستوردة من أوروبا',
                  'وثائق كاملة',
                  'ضمان على الأجزاء الرئيسية',
                  'دعم فني متواصل',
                  'خيارات دفع مرنة',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Equipment */}
        {similarEquipment.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">آليات مشابهة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarEquipment.map((item) => (
                <EquipmentCard key={item.id} equipment={item} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      <Modal isOpen={showContactModal} onClose={() => setShowContactModal(false)} title="إرسال استفسار">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">الاسم</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="أدخل اسمك"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">رقم الهاتف</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="+963 XXX XXX XXX"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">الرسالة</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
              placeholder="أخبرنا كيف يمكننا مساعدتك..."
              defaultValue={`مرحباً، أنا مهتم بـ ${item.nameAr}`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all btn-ripple font-semibold"
            style={{ background: '#FFC107' }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#E6AC00'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#FFC107'}
          >
            إرسال الاستفسار
          </button>
        </form>
      </Modal>
    </div>
  );
}
