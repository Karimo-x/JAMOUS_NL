import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import CategoryCard from '../components/CategoryCard';
import { categories, equipment } from '../data/equipmentData';

export default function CategoriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categoriesWithCount = categories.map((cat) => ({
    ...cat,
    count: equipment.filter((e) => e.category === cat.id).length,
  }));

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={[{ label: 'الفئات' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            فئات الآليات
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تصفح آلياتنا حسب الفئة واختر ما يناسب احتياجات مشروعك
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoriesWithCount.map((category) => (
            <CategoryCard key={category.id} category={category} count={category.count} />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            نوفر جميع أنواع الآليات الثقيلة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">آليات البناء</h3>
              <p className="text-gray-700 leading-relaxed">
                من التركسات والحفارات إلى الجرافات والرافعات، نوفر مجموعة شاملة من معدات البناء الأوروبية المصممة للمشاريع الكبيرة والصغيرة.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">آليات النقل والرفع</h3>
              <p className="text-gray-700 leading-relaxed">
                رافعات شوكية، رافعات تلسكوبية، وشاحنات قلاب من أفضل العلامات التجارية الأوروبية لتلبية احتياجات النقل والرفع المختلفة.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">آليات الطرق</h3>
              <p className="text-gray-700 leading-relaxed">
                حوافر، سحابات، ومعدات تمهيد الطرق من علامات تجارية موثوقة لضمان جودة العمل وسرعة الإنجاز.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">معدات متخصصة</h3>
              <p className="text-gray-700 leading-relaxed">
                نوفر أيضاً معدات متخصصة حسب الطلب. تواصل معنا لمناقشة احتياجاتك الخاصة وسنجد لك الحل الأمثل.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
