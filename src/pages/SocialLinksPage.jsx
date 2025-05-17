
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // Added import
import { Instagram, Youtube, Send, MessageCircle, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const socialPlatforms = [
  { name: 'Instagram', icon: <Instagram size={32} />, link: 'https://instagram.com/hrarfikrak', color: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500', description: 'تابعنا للحصول على نصائح يومية ملهمة ومحتوى بصري جذاب.' },
  { name: 'YouTube', icon: <Youtube size={32} />, link: 'https://youtube.com/hrarfikrak', color: 'bg-red-600', description: 'شاهد فيديوهاتنا التعليمية، المقابلات، والدروس العملية.' },
  { name: 'Telegram', icon: <Send size={32} />, link: 'https://t.me/hrarfikrak', color: 'bg-sky-500', description: 'انضم إلى قناتنا للحصول على تحديثات حصرية ومناقشات تفاعلية.' },
  { name: 'TikTok', icon: <MessageCircle size={32} />, link: 'https://tiktok.com/@hrarfikrak', color: 'bg-black', description: 'مقاطع فيديو قصيرة وممتعة حول الوعي المالي وتطوير الذات.' },
  { name: 'LinkedIn', icon: <Linkedin size={32} />, link: 'https://linkedin.com/company/hrarfikrak', color: 'bg-blue-700', description: 'تواصل معنا مهنياً وتابع أخبار تطورات المشروع.' },
  { name: 'Twitter (X)', icon: <Twitter size={32} />, link: 'https://twitter.com/hrarfikrak', color: 'bg-sky-400', description: 'أفكار سريعة، أخبار، وتفاعل مباشر مع مجتمعنا.' },
  { name: 'Facebook', icon: <Facebook size={32} />, link: 'https://facebook.com/hrarfikrak', color: 'bg-blue-600', description: 'انضم إلى صفحتنا لمتابعة آخر المستجدات والمشاركة في مجتمعنا.' },
];

const SocialLinksPage = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-primary mb-4">تابعنا على منصات التواصل الاجتماعي</h1>
        <p className="text-center text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          انضم إلى مجتمع "حرر فكرك" على منصاتك المفضلة وكن على اطلاع دائم بكل جديد.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialPlatforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
          >
            <Card className="h-full flex flex-col text-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className={`p-4 rounded-full text-white mb-3 ${platform.color}`}>
                  {platform.icon}
                </div>
                <CardTitle className="text-xl text-gray-800">{platform.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 text-sm leading-relaxed">{platform.description}</p>
              </CardContent>
              <div className="p-6">
                <Button asChild className={`${platform.color} text-white hover:opacity-90 w-full`}>
                  <a href={platform.link} target="_blank" rel="noopener noreferrer">
                    تابعنا الآن
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="text-center mt-12 p-8 bg-beige-DEFAULT rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">لماذا تتابعنا؟</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          من خلال متابعتنا، ستحصل على محتوى قيم ومتنوع يساعدك على:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6 inline-block text-right">
            <li>تطوير وعيك المالي والشخصي.</li>
            <li>اكتساب مهارات جديدة ومفيدة.</li>
            <li>البقاء على اطلاع بأحدث النصائح والاستراتيجيات.</li>
            <li>التفاعل مع مجتمع إيجابي وداعم.</li>
        </ul>
        <div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/contact">لديك اقتراح لمنصة أخرى؟ أخبرنا!</Link>
            </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialLinksPage;
  