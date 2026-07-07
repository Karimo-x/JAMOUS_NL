import { useEffect } from 'react';
import { Target, Eye, Award, Globe, Users, TrendingUp, CheckCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={[{ label: 'من نحن' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            من نحن
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            شركة رائدة في استيراد وتجارة الآليات الثقيلة الأوروبية عالية الجودة في سوريا
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              تأسست JAMOUS_<span style={{ color: '#FFC107' }}>NL</span> بهدف سد الفجوة في سوق الآليات الثقيلة في سوريا من خلال توفير معدات أوروبية عالية الجودة بأسعار منافسة. نحن نؤمن بأن كل مشروع يستحق أفضل المعدات، ولهذا نعمل بلا كلل لجلب أفضل الآليات من أوروبا.
            </p>
            <p>
              نتعامل مباشرة مع موردين موثوقين في ألمانيا، السويد، هولندا، المملكة المتحدة، وغيرها من الدول الأوروبية. كل آلية نقدمها تخضع لفحص شامل من قبل فريق من الخبراء قبل الشحن، مما يضمن حصولك على معدات موثوقة وذات جودة عالية.
            </p>
            <p>
              مع سنوات من الخبرة في مجال استيراد المعدات الثقيلة، بنينا سمعة قوية مبنية على الثقة والاحترافية. عملاؤنا يثقون بنا لأننا نقدم لهم قيمة حقيقية وخدمة استثنائية.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">مهمتنا</h3>
            <p className="leading-relaxed">
              توفير آليات ثقيلة أوروبية عالية الجودة بأسعار منافسة، مع تقديم خدمة عملاء استثنائية ودعم مستمر لشركائنا.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
            <p className="leading-relaxed">
              أن نكون الشريك الأول والأكثر موثوقية في سوق الآليات الثقيلة في سوريا، معروفين بجودة منتجاتنا واحترافية خدماتنا.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">قيمنا</h3>
            <p className="leading-relaxed">
              الصدق، الشفافية، الاحترافية، والالتزام بتقديم أفضل قيمة لعملائنا. نضع رضا العميل في قمة أولوياتنا.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">قيمنا الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <CheckCircle className="w-8 h-8 text-amber-500" />,
                title: 'الجودة أولاً',
                description: 'نختار فقط أفضل الآليات التي تلبي أعلى معايير الجودة الأوروبية',
              },
              {
                icon: <Users className="w-8 h-8 text-amber-500" />,
                title: 'التركيز على العميل',
                description: 'نضع احتياجات عملائنا في المقدمة ونعمل على تجاوز توقعاتهم',
              },
              {
                icon: <Globe className="w-8 h-8 text-amber-500" />,
                title: 'الشفافية',
                description: 'نوفر معلومات كاملة وصادقة عن كل آلية نعرضها للبيع',
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
                title: 'الابتكار',
                description: 'نسعى دائماً لتحسين خدماتنا واعتماد أفضل الممارسات في الصناعة',
              },
            ].map((value, index) => (
              <div key={index} className="flex items-start space-x-4 space-x-reverse p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* European Sourcing */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 md:p-12 mb-16 text-white">
          <h2 className="text-3xl font-bold mb-6">الاستيراد الأوروبي</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            نستورد آلياتنا مباشرة من أفضل الأسواق الأوروبية، مما يضمن حصولك على معدات بأعلى مواصفات الجودة والموثوقية.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['🇩🇪 ألمانيا', '🇸🇪 السويد', '🇳🇱 هولندا', '🇬🇧 المملكة المتحدة', '🇫🇷 فرنسا'].map((country, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{country.split(' ')[0]}</div>
                <div className="text-lg font-semibold">{country.split(' ')[1]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">لماذا تختار JAMOUS_<span style={{ color: '#FFC107' }}>NL</span>؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'معدات أوروبية عالية الجودة',
              'فحص احترافي قبل البيع',
              'أسعار منافسة وقابلة للتفاوض',
              'شحن موثوق وآمن',
              'دعم احترافي 24/7',
              'خبرة واسعة في سوق الآليات',
              'استيراد مباشر من أوروبا',
              'ضمان على الأجزاء الرئيسية',
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '+100', label: 'آلية متاحة', icon: '🚜' },
            { number: '+50', label: 'عميل راضٍ', icon: '😊' },
            { number: '+10', label: 'دول أوروبية', icon: '🇪🇺' },
            { number: '24/7', label: 'خدمة العملاء', icon: '⏰' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 text-center card-hover">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">مسيرتنا</h2>
          <div className="space-y-12">
            {[
              {
                year: '2015',
                title: 'البداية',
                description: 'تأسيس الشركة بهدف توفير آليات أوروبية عالية الجودة في سوريا',
              },
              {
                year: '2017',
                title: 'التوسع',
                description: 'إضافة شراكات جديدة مع موردين في السويد وهولندا',
              },
              {
                year: '2019',
                title: 'النمو',
                description: 'تجاوز 50 عميل راضٍ وتوسيع مجموعة الآليات المتاحة',
              },
              {
                year: '2021',
                title: 'الريادة',
                description: 'أصبحنا من الشركات الرائدة في استيراد الآليات الأوروبية',
              },
              {
                year: '2024',
                title: 'الحاضر',
                description: 'خدمة شاملة 24/7 ومجموعة واسعة من الآليات من أفضل العلامات التجارية',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6 space-x-reverse">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-amber-600">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-amber-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
