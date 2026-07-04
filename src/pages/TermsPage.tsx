import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumb items={[{ label: 'الشروط والأحكام' }]} />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">الشروط والأحكام</h1>
          <p className="text-gray-600 mb-8">آخر تحديث: يناير 2024</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. القبول بالشروط</h2>
              <p className="leading-relaxed">
                باستخدامك لموقع JAMOUS_NL والخدمات المقدمة، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. خدماتنا</h2>
              <p className="leading-relaxed">
                نحن نوفر منصة لعرض وبيع الآليات الثقيلة المستوردة من أوروبا. جميع المعلومات المقدمة على الموقع دقيقة حسب علمنا، ولكن قد تتغير دون إشعار مسبق.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. الأسعار والدفع</h2>
              <ul className="list-disc list-inside space-y-2 mr-6 leading-relaxed">
                <li>جميع الأسعار المعروضة بالدولار الأمريكي وهي قابلة للتفاوض</li>
                <li>الأسعار لا تشمل رسوم الشحن والجمارك</li>
                <li>نحتفظ بالحق في تغيير الأسعار في أي وقت</li>
                <li>يتم الاتفاق على طرق الدفع بين الطرفين</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. وصف المنتجات</h2>
              <p className="leading-relaxed">
                نبذل قصارى جهدنا لوصف الآليات بدقة وتوفير معلومات شاملة. ومع ذلك، لا نضمن أن جميع الأوصاف دقيقة بنسبة 100٪ أو كاملة أو خالية من الأخطاء. يُنصح بفحص الآلية شخصياً أو من خلال وكيل قبل الشراء.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. الشحن والتسليم</h2>
              <ul className="list-disc list-inside space-y-2 mr-6 leading-relaxed">
                <li>نوفر خدمات شحن موثوقة من أوروبا إلى سوريا</li>
                <li>مدة الشحن المقدرة من 3 إلى 6 أسابيع حسب الموقع</li>
                <li>تكاليف الشحن يتم الاتفاق عليها قبل الشراء</li>
                <li>المشتري مسؤول عن رسوم الجمارك والضرائب المحلية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. الضمان</h2>
              <p className="leading-relaxed">
                نوفر ضمان على الأجزاء الرئيسية للآليات حسب الاتفاق. مدة الضمان وتغطيته تختلف حسب نوع الآلية وحالتها. تفاصيل الضمان يتم توضيحها في عقد البيع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. المسؤولية</h2>
              <p className="leading-relaxed">
                لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام خدماتنا أو الآليات المشتراة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. الملكية الفكرية</h2>
              <p className="leading-relaxed">
                جميع المحتويات على هذا الموقع، بما في ذلك النصوص والصور والشعارات، محمية بحقوق الطبع والنشر وهي ملك لـ JAMOUS_NL. لا يجوز استخدام أو نسخ أي محتوى دون إذن كتابي مسبق.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. إلغاء الطلب</h2>
              <p className="leading-relaxed">
                يمكن إلغاء الطلبات قبل الشحن حسب الشروط المتفق عليها. بعد الشحن، لا يمكن إلغاء الطلب إلا في حالات استثنائية ووفقاً للشروط المحددة في عقد البيع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. حل النزاعات</h2>
              <p className="leading-relaxed">
                في حالة وجود أي نزاع، سنسعى لحله بالطرق الودية أولاً. إذا لم يتم التوصل إلى اتفاق، فإن القانون السوري هو القانون الواجب التطبيق.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. التعديلات</h2>
              <p className="leading-relaxed">
                نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. التعديلات تصبح سارية فور نشرها على الموقع. استمرارك في استخدام الموقع بعد التعديلات يعني موافقتك على الشروط الجديدة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. الاتصال بنا</h2>
              <p className="leading-relaxed">
                لأي أسئلة حول هذه الشروط والأحكام، يرجى الاتصال بنا على:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p>البريد الإلكتروني: Karemjamous27@gmail.com</p>
                <p>الهاتف: +963 968 057 858</p>
                <p>العنوان: سوريا – ريف دمشق – التل</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
