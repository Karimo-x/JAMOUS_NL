# نشر الموقع على Vercel مع متغيرات البيئة

## ما تم إعداده:
- تم تحديث ملف `src/config/emailjs.ts` لاستخدام متغيرات البيئة
- تم إنشاء ملف `.env` مع بيانات EmailJS الخاصة بك
- تم إضافة `.env` إلى `.gitignore` لحماية البيانات الحساسة
- تم إنشاء `.env.example` كقالب للمطورين الآخرين

## الخطوات لنشر الموقع على Vercel:

### 1. رفع الكود إلى GitHub
```bash
git add .
git commit -m "Add environment variables for EmailJS"
git push origin main
```

### 2. إعداد متغيرات البيئة في Vercel
1. اذهب إلى [https://vercel.com](https://vercel.com) وسجل الدخول
2. اضغط **Add New Project**
3. اختر مستودع GitHub الخاص بك
4. قبل الضغط على **Deploy**، اضغط على **Environment Variables**
5. أضف المتغيرات التالية:

| Key | Value |
|-----|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_ji78poe` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_qiat3bm` |
| `VITE_EMAILJS_PUBLIC_KEY` | `izvdwEWeAcPEHw4lx` |

6. اضغط **Save**
7. اضغط **Deploy**

### 3. بعد النشر
- سيقوم Vercel تلقائياً ببناء المشروع ونشره
- ستحصل على رابط مثل: `https://your-project.vercel.app`
- متغيرات البيئة ستكون محمية ولن تكون مرئية في الكود العام

### 4. اختبار النموذج
1. افتح الرابط الذي حصلت عليه
2. اذهب إلى صفحة "تواصل معنا"
3. املأ النموذج واختبر إرسال الرسالة

## ملاحظات مهمة:
- ملف `.env` لن يتم رفعه إلى GitHub (محمي بواسطة .gitignore)
- متغيرات البيئة في Vercel آمنة ومشفرة
- يمكنك تعديل متغيرات البيئة في أي وقت من لوحة تحكم Vercel
- إذا غيرت بيانات EmailJS، يجب تحديثها في Vercel أيضاً
