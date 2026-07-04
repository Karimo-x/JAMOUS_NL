import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumb items={[{ label: 'سياسة الخصوصية' }]} />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">سياسة الخصوصية</h1>
          <p className="text-gray-600 mb-8">آخر تحديث: يناير 2024</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. المقدمة</h2>
              <p className="leading-relaxed">
                في JAMOUS_NL، نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح هذه السياسة كيفية جمعنا واستخدامنا وحماية المعلومات التي تقدمها لنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. المعلومات التي نجمعها</h2>
              <p className="leading-relaxed mb-4">نقوم بجمع المعلومات التالية:</p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>الاسم الكامل</li>
                <li>عنوان البريد الإلكتروني</li>
                <li>رقم الهاتف</li>
                <li>معلومات الاستفسار أو الطلب</li>
                <li>معلومات تقنية (عنوان IP، نوع المتصفح)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. كيفية استخدام المعلومات</h2>
              <p className="leading-relaxed mb-4">نستخدم المعلومات المجمعة للأغراض التالية:</p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>الرد على استفساراتك وطلباتك</li>
                <li>تقديم خدماتنا بشكل أفضل</li>
                <li>إرسال معلومات عن الآليات الجديدة والعروض</li>
                <li>تحسين موقعنا وخدماتنا</li>
                <li>الامتثال للمتطلبات القانونية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. حماية المعلومات</h2>
              <p className="leading-relaxed">
                نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف. نستخدم تقنيات التشفير والبروتوكولات الأمنية لضمان سلامة بياناتك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. مشاركة المعلومات</h2>
              <p className="leading-relaxed">
                لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية. قد نشارك المعلومات فقط مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل أعمالنا، وفقط بالقدر اللازم لتقديم خدماتنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. ملفات تعريف الارتباط (Cookies)</h2>
              <p className="leading-relaxed">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات متصفحك، ولكن قد يؤثر ذلك على وظائف الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. حقوقك</h2>
              <p className="leading-relaxed mb-4">لديك الحق في:</p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>الوصول إلى معلوماتك الشخصية</li>
                <li>تصحيح أو تحديث معلوماتك</li>
                <li>طلب حذف معلوماتك</li>
                <li>الاعتراض على معالجة معلوماتك</li>
                <li>سحب موافقتك في أي وقت</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. الاتصال بنا</h2>
              <p className="leading-relaxed">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية معالجتنا لمعلوماتك، يرجى الاتصال بنا على:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p>البريد الإلكتروني: Karemjamous27@gmail.com</p>
                <p>الهاتف: +963 968 057 858</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. التغييرات على السياسة</h2>
              <p className="leading-relaxed">
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي تغييرات جوهرية من خلال نشر السياسة الجديدة على هذه الصفحة.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
