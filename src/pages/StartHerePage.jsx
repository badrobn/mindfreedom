
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Map, BookOpen, Users, ShoppingBag, MessageSquare } from 'lucide-react';

const StartHerePage = () => {
  const steps = [
    {
      icon: <Users size={32} className="text-primary" />,
      title: 'تعرف على مشروع "حرر فكرك"',
      description: 'ابدأ بفهم رؤيتنا ورسالتنا وكيف يمكننا مساعدتك في رحلتك نحو تطوير الذات والوعي المالي.',
      link: '/about',
      linkLabel: 'اقرأ المزيد عن المشروع'
    },
    {
      icon: <BookOpen size={32} className="text-primary" />,
      title: 'اكتشف مقالاتنا الملهمة',
      description: 'تصفح مكتبتنا المتنامية من المقالات التي تغطي مواضيع متنوعة في الوعي المالي، تطوير الذات، واستراتيجيات الحياة.',
      link: '/articles',
      linkLabel: 'تصفح المقالات'
    },
    {
      icon: <ShoppingBag size={32} className="text-primary" />,
      title: 'استفد من مواردنا ومنتجاتنا',
      description: 'اطلع على كتبنا الرقمية، قوالبنا العملية، وكورساتنا المصممة لتزويدك بالمعرفة والأدوات اللازمة للنجاح.',
      link: '/products',
      linkLabel: 'اكتشف المنتجات'
    },
    {
      icon: <MessageSquare size={32} className="text-primary" />,
      title: 'تواصل معنا وشاركنا رحلتك',
      description: 'نحن هنا لدعمك. لا تتردد في التواصل معنا لطرح الأسئلة، مشاركة اقتراحاتك، أو حتى لتقول مرحباً!',
      link: '/contact',
      linkLabel: 'تواصل معنا الآن'
    }
  ];

  const topContent = [
    { title: '5 خطوات لبدء رحلتك نحو الحرية المالية', link: '/articles/financial-freedom-steps', image: 'financial-journey-start' },
    { title: 'كيف تطور ذاتك باستمرار؟', link: '/articles/self-improvement-ideas', image: 'continuous-self-growth' },
    { title: 'مقدمة في الوعي المالي: لماذا هو مهم؟', link: '/articles/intro-financial-awareness', image: 'importance-financial-awareness' },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-primary mb-4 flex items-center justify-center gap-3">
          <Map size={40} /> ابدأ رحلتك من هنا
        </h1>
        <p className="text-center text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          مرحباً بك في "حرر فكرك"! إذا كنت جديدًا هنا، فهذه الصفحة هي دليلك لاستكشاف محتوى الموقع والاستفادة منه بأفضل شكل ممكن.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">خريطة طريقك في "حرر فكرك"</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-3 w-fit">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-700">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
                <div className="p-6 text-center">
                  <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to={step.link}>{step.linkLabel}</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">أفضل محتوى للبدء به</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {topContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-40 bg-gray-200">
                  <img  alt={content.title} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-md font-semibold text-gray-700 mb-2 h-12 overflow-hidden">{content.title}</h3>
                  <Button asChild variant="link" className="text-primary p-0">
                    <Link to={content.link}>اقرأ الآن &larr;</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div 
        className="text-center mt-12 p-8 bg-beige-DEFAULT rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">هل أنت مستعد لتحرير فكرك؟</h3>
        <p className="text-gray-700 mb-6">
          انضم إلى مجتمعنا المتنامي وابدأ رحلتك نحو مستقبل مالي وشخصي أفضل.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to="/">ابدأ من الصفحة الرئيسية</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default StartHerePage;
  