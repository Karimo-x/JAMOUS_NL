# إعداد EmailJS لإرسال الرسائل

## الخطوة 1: إنشاء حساب EmailJS
1. اذهب إلى [https://www.emailjs.com/](https://www.emailjs.com/)
2. سجل حساب مجاني باستخدام بريدك الإلكتروني
3. قم بتأكيد حسابك عبر الرابط المرسل إلى بريدك

## الخطوة 2: إضافة خدمة بريد إلكتروني (Email Service)
1. بعد تسجيل الدخول، اذهب إلى **Email Services**
2. اضغط على **Add New Service**
3. اختر **Gmail** (أو أي خدمة بريد أخرى تفضلها)
4. اتبع التعليمات لربط حساب Gmail الخاص بك
5. بعد الربط، ستحصل على **Service ID** - انسخه

## الخطوة 3: إنشاء قالب البريد الإلكتروني (Email Template)
1. اذهب إلى **Email Templates**
2. اضغط على **Create New Template**
3. أدخل اسم للقالب (مثلاً: "Contact Form")
4. في قسم **To Email**، أدخل: `Karemjamous27@gmail.com`
5. في قسم **Subject**، أدخل: `{{subject}}`
6. في قسم **Content**، استخدم هذا النص:

```
مرحباً {{to_name}}،

لقد وصلتك رسالة جديدة من موقع JAMOUS_NL:

**الاسم:** {{from_name}}
**البريد الإلكتروني:** {{reply_to}}
**رقم الهاتف:** {{phone}}
**الموضوع:** {{subject}}

**الرسالة:**
{{message}}

---
تم الإرسال عبر نموذج التواصل في موقع JAMOUS_NL
```

7. اضغط **Save**
8. ستحصل على **Template ID** - انسخه

## الخطوة 4: الحصول على المفتاح العام (Public Key)
1. اذهب إلى **Account Settings**
2. ستجد **Public Key** في قسم **General**
3. انسخ المفتاح العام

## الخطوة 5: تحديث ملف الإعدادات
1. افتح الملف: `src/config/emailjs.ts`
2. استبدل القيم التالية بالمعلومات التي حصلت عليها:

```typescript
export const emailConfig = {
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',      // استبدل بـ Service ID الخاص بك
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',    // استبدل بـ Template ID الخاص بك
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',      // استبدل بـ Public Key الخاص بك
  TO_EMAIL: 'Karemjamous27@gmail.com',    // بريدك الإلكتروني
};
```

## الخطوة 6: اختبار النموذج
1. شغل التطبيق: `npm run dev`
2. اذهب إلى صفحة "تواصل معنا"
3. املأ النموذج واضغط "إرسال الرسالة"
4. تحقق من وصول الرسالة إلى بريدك الإلكتروني

## ملاحظات مهمة
- الخطة المجانية من EmailJS تسمح بإرسال 200 رسالة شهرياً
- تأكد من أن جميع الحقول في القالب مطابقة لأسماء المتغيرات في الكود
- إذا واجهت مشاكل، تحقق من console في المتصفح للأخطاء
- يمكنك تخصيص تصميم البريد الإلكتروني من قسم Email Templates

## الدعم الفني
إذا واجهت أي مشاكل:
- راجع وثائق EmailJS: https://www.emailjs.com/docs/
- تحقق من أن Service ID و Template ID و Public Key صحيحة
- تأكد من أن خدمة البريد الإلكتروني مرتبطة بشكل صحيح
