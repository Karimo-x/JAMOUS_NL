// EmailJS Configuration
// To get your credentials:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an Email Service (e.g., Gmail)
// 3. Create an Email Template with these variables: {{to_name}}, {{from_name}}, {{message}}, {{reply_to}}, {{subject}}, {{phone}}
// 4. Replace the placeholder values below with your actual credentials

export const emailConfig = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  TO_EMAIL: 'Karemjamous27@gmail.com',
};
