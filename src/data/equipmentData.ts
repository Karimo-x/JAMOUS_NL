export interface Equipment {
  id: number;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  condition: 'ممتازة' | 'جيدة جداً' | 'جيدة';
  hours: number;
  location: string;
  image: string;
  images: string[];
  specs: {
    power?: string;
    capacity?: string;
    weight?: string;
    height?: string;
    reach?: string;
    engine?: string;
  };
  description: string;
  featured: boolean;
  origin: string;
}

export const categories = [
  { 
    id: 'wheel-loaders', 
    name: 'Wheel Loaders', 
    nameAr: 'التركسات', 
    icon: '🚜',
    image: '/images/volvo-l120h.png'
  },
  { 
    id: 'excavators', 
    name: 'Excavators', 
    nameAr: 'الحفارات', 
    icon: '🏗️',
    image: 'https://images.pexels.com/photos/30751525/pexels-photo-30751525.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  { 
    id: 'bulldozers', 
    name: 'Bulldozers', 
    nameAr: 'الجرافات', 
    icon: '🚧',
    image: 'https://images.pexels.com/photos/1009926/pexels-photo-1009926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  { 
    id: 'cranes', 
    name: 'Cranes', 
    nameAr: 'الرافعات', 
    icon: '🏗️',
    image: 'https://images.pexels.com/photos/28321426/pexels-photo-28321426.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  { 
    id: 'forklifts', 
    name: 'Forklifts', 
    nameAr: 'الرافعات الشوكية', 
    icon: '📦',
    image: 'https://images.pexels.com/photos/9957864/pexels-photo-9957864.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  { 
    id: 'rollers', 
    name: 'Rollers', 
    nameAr: 'الحوافر', 
    icon: '🛣️',
    image: 'https://images.pexels.com/photos/29470169/pexels-photo-29470169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
  { 
    id: 'dump-trucks', 
    name: 'Dump Trucks', 
    nameAr: 'شاحنات القلاب', 
    icon: '🚛',
    image: 'https://images.pexels.com/photos/35177799/pexels-photo-35177799.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
  },
];

export const brands = [
  { name: 'Caterpillar', logo: 'CAT' },
  { name: 'Volvo', logo: 'VOLVO' },
  { name: 'Komatsu', logo: 'KOMATSU' },
  { name: 'JCB', logo: 'JCB' },
  { name: 'Liebherr', logo: 'LIEBHERR' },
  { name: 'Hyundai', logo: 'HYUNDAI' },
  { name: 'Hitachi', logo: 'HITACHI' },
  { name: 'Bomag', logo: 'BOMAG' },
];

export const equipment: Equipment[] = [
  {
    id: 1,
    name: 'Caterpillar 950H Wheel Loader',
    nameAr: 'كاتربيلر 950H لودر عجلي',
    category: 'wheel-loaders',
    categoryAr: 'التركسات',
    brand: 'Caterpillar',
    model: '950H',
    year: 2020,
    price: 115000,
    condition: 'ممتازة',
    hours: 4200,
    location: 'ألمانيا',
    image: 'https://images.pexels.com/photos/33321431/pexels-photo-33321431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/33321431/pexels-photo-33321431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/33321432/pexels-photo-33321432.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/416988/pexels-photo-416988.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      power: '265 حصان',
      capacity: '3.5 م³',
      weight: '23,500 كجم',
      engine: 'Cat C9.3 ACERT',
    },
    description: 'لودر كاتربيلر 950H بحالة ممتازة، مستورد مباشرة من ألمانيا. تم فحصه بالكامل وصيانته بشكل دوري. محرك قوي وأداء عالي الكفاءة.',
    featured: true,
    origin: 'ألمانيا',
  },
  {
    id: 2,
    name: 'Volvo EC140B Excavator',
    nameAr: 'فولفو EC140B حفار',
    category: 'excavators',
    categoryAr: 'الحفارات',
    brand: 'Volvo',
    model: 'EC140B',
    year: 2019,
    price: 74000,
    condition: 'ممتازة',
    hours: 3800,
    location: 'السويد',
    image: 'https://images.pexels.com/photos/36657010/pexels-photo-36657010.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/36657010/pexels-photo-36657010.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/12063807/pexels-photo-12063807.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/33870733/pexels-photo-33870733.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      power: '167 حصان',
      capacity: '1.0 م³',
      weight: '21,800 كجم',
      reach: '9.7 متر',
      engine: 'Volvo D6E',
    },
    description: 'حفار فولفو EC140B بحالة ممتازة، استخدام خفيف، مع كافة الملحقات الأصلية. استهلاك وقود منخفض وأداء موثوق.',
    featured: true,
    origin: 'السويد',
  },
  {
    id: 3,
    name: 'Komatsu D65PX-17 Bulldozer',
    nameAr: 'كوماتسو D65PX-17 بلدوزر',
    category: 'bulldozers',
    categoryAr: 'الجرافات',
    brand: 'Komatsu',
    model: 'D65PX-17',
    year: 2017,
    price: 107000,
    condition: 'ممتازة',
    hours: 5100,
    location: 'هولندا',
    image: 'https://images.pexels.com/photos/1009926/pexels-photo-1009926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/1009926/pexels-photo-1009926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/416988/pexels-photo-416988.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      power: '220 حصان',
      capacity: '3.8 م³',
      weight: '20,500 كجم',
      engine: 'Komatsu SAA6D114E',
    },
    description: 'بلدوزر كوماتسو D65PX-17 قوي بحالة ممتازة، نظام GPS متكامل، نصل بحالة جيدة جداً. مثالية للمشاريع الكبيرة.',
    featured: true,
    origin: 'هولندا',
  },
  {
    id: 4,
    name: 'Liebherr LTM 1070-4.2 Mobile Crane',
    nameAr: 'ليبهر LTM 1070-4.2 رافعة متحركة',
    category: 'cranes',
    categoryAr: 'الرافعات',
    brand: 'Liebherr',
    model: 'LTM 1070-4.2',
    year: 2016,
    price: 450000,
    condition: 'جيدة جداً',
    hours: 6800,
    location: 'ألمانيا',
    image: 'https://images.pexels.com/photos/28321426/pexels-photo-28321426.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/28321426/pexels-photo-28321426.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/29502218/pexels-photo-29502218.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      capacity: '70 طن',
      reach: '50 متر',
      power: '367 حصان',
      weight: '48,000 كجم',
    },
    description: 'رافعة ليبهر LTM 1070-4.2 متحركة بقدرة رفع 70 طن، مع نظام تحكم حديث وشهادات سلامة أوروبية. مثالية للمشاريع الإنشائية الكبرى.',
    featured: true,
    origin: 'ألمانيا',
  },
  {
    id: 5,
    name: 'Hyundai HL760-9 Wheel Loader',
    nameAr: 'هيونداي HL760-9 لودر عجلي',
    category: 'wheel-loaders',
    categoryAr: 'التركسات',
    brand: 'Hyundai',
    model: 'HL760-9',
    year: 2020,
    price: 98000,
    condition: 'ممتازة',
    hours: 2200,
    location: 'بلجيكا',
    image: 'https://images.pexels.com/photos/416988/pexels-photo-416988.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/416988/pexels-photo-416988.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/33321432/pexels-photo-33321432.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      power: '242 حصان',
      capacity: '3.3 م³',
      weight: '22,300 كجم',
      engine: 'Cummins QSB6.7',
    },
    description: 'لودر هيونداي HL760-9 شبه جديد، استخدام خفيف جداً، نظام تكييف حديث، مقصورة مريحة، وضمان ممتد.',
    featured: false,
    origin: 'بلجيكا',
  },
  {
    id: 6,
    name: 'JCB 3CX Backhoe Loader',
    nameAr: 'JCB 3CX جرافة حفارة',
    category: 'excavators',
    categoryAr: 'الحفارات',
    brand: 'JCB',
    model: '3CX',
    year: 2018,
    price: 60000,
    condition: 'جيدة جداً',
    hours: 4500,
    location: 'المملكة المتحدة',
    image: 'https://images.pexels.com/photos/5125782/pexels-photo-5125782.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/5125782/pexels-photo-5125782.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/12063807/pexels-photo-12063807.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      power: '109 حصان',
      capacity: '1.0 م³',
      weight: '8,500 كجم',
      engine: 'JCB EcoMAX',
    },
    description: 'جرافة حفارة JCB 3CX متعددة الاستخدامات، مثالية للمشاريع الصغيرة والمتوسطة، صيانة منتظمة وسجل خدمة كامل.',
    featured: false,
    origin: 'المملكة المتحدة',
  },
  {
    id: 7,
    name: 'Bomag BW 211 D-5 Roller',
    nameAr: 'بوماج BW 211 D-5 حافرة',
    category: 'rollers',
    categoryAr: 'الحوافر',
    brand: 'Bomag',
    model: 'BW 211 D-5',
    year: 2019,
    price: 78000,
    condition: 'ممتازة',
    hours: 1800,
    location: 'ألمانيا',
    image: 'https://images.pexels.com/photos/29470169/pexels-photo-29470169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/29470169/pexels-photo-29470169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/29470165/pexels-photo-29470165.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      power: '129 حصان',
      weight: '11,500 كجم',
      capacity: 'عرض 2130 مم',
      engine: 'Deutz TCD 3.6',
    },
    description: 'حافرة بوماج BW 211 D-5 اهتزازية بحالة ممتازة، مثالية لأعمال الطرق والأسفلت، نظام اهتزاز فعال.',
    featured: false,
    origin: 'ألمانيا',
  },
  {
    id: 8,
    name: 'Hitachi ZX350LC-6 Excavator',
    nameAr: 'هيتاشي ZX350LC-6 حفار',
    category: 'excavators',
    categoryAr: 'الحفارات',
    brand: 'Hitachi',
    model: 'ZX350LC-6',
    year: 2020,
    price: 100000,
    condition: 'ممتازة',
    hours: 2900,
    location: 'فرنسا',
    image: 'https://images.pexels.com/photos/33870733/pexels-photo-33870733.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/33870733/pexels-photo-33870733.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/30751525/pexels-photo-30751525.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/36657010/pexels-photo-36657010.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      power: '271 حصان',
      capacity: '1.6 م³',
      weight: '35,200 كجم',
      reach: '11.4 متر',
      engine: 'Isuzu 6WG1X',
    },
    description: 'حفار هيتاشي ZX350LC-6 عالي الأداء، تقنيات حديثة لتوفير الوقود، نظام تحكم ذكي، وراحة قصوى للمشغل.',
    featured: false,
    origin: 'فرنسا',
  },
  {
    id: 9,
    name: 'Caterpillar TH414C GC Telehandler',
    nameAr: 'كاتربيلر TH414C رافعة تلسكوبية',
    category: 'forklifts',
    categoryAr: 'الرافعات الشوكية',
    brand: 'Caterpillar',
    model: 'TH414C GC',
    year: 2019,
    price: 60000,
    condition: 'جيدة جداً',
    hours: 3200,
    location: 'إيطاليا',
    image: 'https://images.pexels.com/photos/9957864/pexels-photo-9957864.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/9957864/pexels-photo-9957864.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/8760709/pexels-photo-8760709.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      capacity: '4 طن',
      height: '14 متر',
      power: '100 حصان',
      weight: '9,500 كجم',
    },
    description: 'رافعة تلسكوبية كاتربيلر TH414C GC متعددة الاستخدامات، مثالية للبناء والزراعة، ملحقات متنوعة.',
    featured: false,
    origin: 'إيطاليا',
  },
  {
    id: 10,
    name: 'Volvo L120H Wheel Loader',
    nameAr: 'فولفو L120H لودر عجلي',
    category: 'wheel-loaders',
    categoryAr: 'التركسات',
    brand: 'Volvo',
    model: 'L120H',
    year: 2021,
    price: 125000,
    condition: 'ممتازة',
    hours: 1500,
    location: 'السويد',
    image: '/images/volvo-l120h.png',
    images: [
      '/images/volvo-l120h.png',
      'https://images.pexels.com/photos/33201219/pexels-photo-33201219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/129544/pexels-photo-129544.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      power: '310 حصان',
      capacity: '4.2 م³',
      weight: '25,800 كجم',
      engine: 'Volvo D8J',
    },
    description: 'لودر فولفو L120H شبه جديد، تقنيات متقدمة، استهلاك وقود منخفض، ضمان الوكيل الأوروبي ساري المفعول.',
    featured: true,
    origin: 'السويد',
  },
  {
    id: 11,
    name: 'JCB 540-200 Telehandler',
    nameAr: 'JCB 540-200 رافعة تلسكوبية',
    category: 'forklifts',
    categoryAr: 'الرافعات الشوكية',
    brand: 'JCB',
    model: '540-200',
    year: 2018,
    price: 70000,
    condition: 'جيدة جداً',
    hours: 4100,
    location: 'المملكة المتحدة',
    image: 'https://images.pexels.com/photos/4487448/pexels-photo-4487448.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/4487448/pexels-photo-4487448.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/1267329/pexels-photo-1267329.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/8760709/pexels-photo-8760709.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      capacity: '4 طن',
      height: '20 متر',
      power: '145 حصان',
      weight: '12,400 كجم',
    },
    description: 'رافعة JCB 540-200 تلسكوبية بارتفاع رفع مميز، مناسبة للمشاريع الكبيرة، صيانة دورية منتظمة.',
    featured: false,
    origin: 'المملكة المتحدة',
  },
  {
    id: 12,
    name: 'Komatsu PC210LC Excavator',
    nameAr: 'كوماتسو PC210LC حفار',
    category: 'excavators',
    categoryAr: 'الحفارات',
    brand: 'Komatsu',
    model: 'PC210LC',
    year: 2017,
    price: 92000,
    condition: 'جيدة جداً',
    hours: 5800,
    location: 'بلجيكا',
    image: 'https://images.pexels.com/photos/30751525/pexels-photo-30751525.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    images: [
      'https://images.pexels.com/photos/30751525/pexels-photo-30751525.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      'https://images.pexels.com/photos/36657010/pexels-photo-36657010.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    ],
    specs: {
      power: '158 حصان',
      capacity: '0.93 م³',
      weight: '21,200 كجم',
      reach: '9.9 متر',
    },
    description: 'حفار كوماتسو PC210LC متوسط الحجم، مثالي للمشاريع المتنوعة، أداء موثوق وتكاليف تشغيل منخفضة.',
    featured: false,
    origin: 'بلجيكا',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'ربيع جاموس',
    role: 'مقاول إنشاءات',
    image: '👨‍💼',
    rating: 5,
    comment: 'تعامل احترافي وآليات بجودة عالية. اشتريت لودر كاتربيلر وكانت بحالة ممتازة كما وُصفت تماماً. أنصح بالتعامل مع JAMOUS_NL.',
  },
  {
    id: 2,
    name: 'محمد عزيزة',
    role: 'مدير مشاريع',
    image: '👨‍💼',
    rating: 5,
    comment: 'خدمة ممتازة من الاستشارة حتى التسليم. الآليات مستوردة من أوروبا وبجودة عالية. شكراً لفريق العمل المحترف.',
  },
  {
    id: 3,
    name: 'جواد جاموس',
    role: 'صاحب شركة نقل',
    image: '👨‍💼',
    rating: 5,
    comment: 'أفضل شركة للآليات الأوروبية في سوريا. الأسعار منافسة والجودة ممتازة. اشتريت منهم عدة آليات وجميعها تعمل بكفاءة عالية.',
  },
];

export const faqs = [
  {
    question: 'هل الآليات مستوردة من أوروبا فعلاً؟',
    answer: 'نعم، جميع آلياتنا مستوردة مباشرة من دول أوروبية موثوقة مثل ألمانيا، السويد، هولندا، والمملكة المتحدة. نوفر كافة الوثائق والشهادات التي تثبت المصدر الأوروبي.',
  },
  {
    question: 'هل يتم فحص الآليات قبل البيع؟',
    answer: 'نعم، كل آلية يتم فحصها بشكل شامل من قبل فريق فني متخصص قبل عرضها للبيع. نوفر تقرير فحص مفصل لكل آلية.',
  },
  {
    question: 'ما هي طرق الدفع المتاحة؟',
    answer: 'نوفر عدة خيارات للدفع: الدفع الكامل، التقسيط، والدفع عند الاستلام. يمكننا مناقشة الخيار الأنسب لك.',
  },
  {
    question: 'كم يستغرق الشحن إلى سوريا؟',
    answer: 'عادة يستغرق الشحن من أوروبا إلى سوريا من 3 إلى 6 أسابيع حسب الموقع والآلية. نوفر متابعة كاملة لعملية الشحن.',
  },
  {
    question: 'هل تقدمون ضمان على الآليات؟',
    answer: 'نعم، نوفر ضمان على جميع الآليات يغطي الأجزاء الرئيسية. مدة الضمان تختلف حسب حالة الآلية وسنة الصنع.',
  },
  {
    question: 'هل يمكن طلب آلية غير موجودة في الموقع؟',
    answer: 'بالتأكيد، يمكننا البحث عن أي آلية تحتاجها في السوق الأوروبية وتوفيرها لك بأفضل سعر وجودة.',
  },
];
