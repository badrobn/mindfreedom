
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'خطأ في الإرسال',
        description: 'يرجى ملء جميع الحقول المطلوبة.',
        variant: 'destructive',
      });
      return;
    }
    // Simulate form submission
    console.log('Form data submitted:', formData);
    localStorage.setItem('contactFormSubmission', JSON.stringify(formData));
    toast({
      title: 'تم إرسال رسالتك بنجاح!',
      description: 'شكراً لتواصلك معنا. سنقوم بالرد في أقرب وقت ممكن.',
      variant: 'default',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-primary mb-4">تواصل معنا</h1>
        <p className="text-center text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          نحن هنا للاستماع إليك. سواء كان لديك سؤال، اقتراح، أو ترغب فقط في مشاركة أفكارك، لا تتردد في التواصل.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">أرسل لنا رسالة</CardTitle>
              <CardDescription>املأ النموذج أدناه وسنعاود الاتصال بك.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">الاسم الكامل</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="مثال: أحمد محمد" 
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 bg-beige-light border-beige-medium focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">البريد الإلكتروني</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 bg-beige-light border-beige-medium focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">رسالتك</Label>
                  <Textarea 
                    id="message" 
                    placeholder="اكتب رسالتك هنا..." 
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 min-h-[120px] bg-beige-light border-beige-medium focus:ring-primary"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3">
                  <Send size={18} className="ml-2 rtl:mr-2 rtl:ml-0" /> إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">معلومات الاتصال الأخرى</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">البريد الإلكتروني الرسمي:</p>
                  <a href="mailto:info@hrarfikrak.com" className="text-gray-600 hover:text-primary transition-colors">info@hrarfikrak.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">رقم الهاتف (اختياري):</p>
                  <p className="text-gray-600">سيتم توفيره قريباً</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">موقعنا:</p>
                  <p className="text-gray-600">نعمل عن بعد لخدمتكم في جميع أنحاء العالم</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8">
            <img  
                alt="خريطة توضيحية لموقع افتراضي" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
             src="https://images.unsplash.com/photo-1518487346609-25352f3e0c8c" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
  