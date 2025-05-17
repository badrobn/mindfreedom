
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Star, UserCheck } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: 'سارة أحمد',
    title: 'كيف غير "حرر فكرك" نظرتي للمال؟',
    story: 'قبل متابعتي لمشروع "حرر فكرك"، كنت أعاني من إدارة مصاريفي الشهرية. بفضل المقالات والأدوات المجانية، تعلمت كيف أضع ميزانية واقعية وألتزم بها. الآن أشعر بتحكم أكبر في حياتي المالية!',
    image: 'woman-smiling-laptop',
    date: '15 أبريل 2025'
  },
  {
    id: 2,
    name: 'خالد عبدالله',
    title: 'من ديون إلى ادخار بفضل الوعي',
    story: 'كنت غارقًا في الديون ولم أكن أعرف من أين أبدأ. النصائح حول ترتيب الأولويات المالية وخطة سداد الديون كانت بمثابة طوق نجاة. بدأت بتطبيقها واليوم أنا خالٍ من الديون وأدخر للمستقبل.',
    image: 'man-happy-budgeting',
    date: '28 مارس 2025'
  },
  {
    id: 3,
    name: 'فاطمة علي',
    title: 'تطوير الذات انعكس على حياتي المهنية',
    story: 'لم أكن أركز فقط على الجانب المالي، بل استفدت كثيرًا من مقالات تطوير الذات. تعلمت مهارات جديدة في إدارة الوقت والتواصل، مما ساعدني على الحصول على ترقية في عملي.',
    image: 'professional-woman-office',
    date: '10 مايو 2025'
  },
];

const SuccessStoriesPage = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-primary mb-4 flex items-center justify-center gap-3">
          <Award size={40} /> قصص نجاح ملهمة
        </h1>
        <p className="text-center text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          شهادات وتجارب ناجحة من متابعي مشروع "حرر فكرك". اكتشف كيف ساعدنا الآخرين في رحلتهم نحو حياة أفضل.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full flex flex-col bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                    <img  alt={story.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-800">{story.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">{story.date}</CardDescription>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary">{story.title}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 leading-relaxed italic">"{story.story}"</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-12 p-10 bg-gradient-to-br from-primary/80 to-accent/80 text-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <UserCheck size={48} className="mx-auto mb-4 text-primary-foreground" />
        <h3 className="text-3xl font-bold mb-4">هل لديك قصة نجاح لتشاركها؟</h3>
        <p className="text-lg mb-8 max-w-xl mx-auto text-primary-foreground/90">
          نحب أن نسمع كيف ساعدك "حرر فكرك" في تحقيق أهدافك. قصتك قد تلهم الكثيرين!
        </p>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-white/90 px-8 py-3 text-lg">
          <Link to="/contact?subject=ShareMyStory">شارك قصتك معنا</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default SuccessStoriesPage;
  