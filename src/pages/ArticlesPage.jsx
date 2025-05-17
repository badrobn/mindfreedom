
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tag, Search, Share2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

const allArticles = [
  { id: 1, title: 'مقدمة في الوعي المالي: لماذا هو مهم؟', category: 'الوعي المالي', date: '2025-05-10', summary: 'اكتشف أهمية الوعي المالي وكيف يمكن أن يغير حياتك للأفضل.', image: 'financial-awareness-intro', slug: 'intro-financial-awareness' },
  { id: 2, title: '7 عادات يومية لتطوير ذاتك بشكل فعال', category: 'تطوير الذات', date: '2025-05-08', summary: 'تعرف على عادات بسيطة يمكنك تبنيها لتحقيق نمو شخصي مستمر.', image: 'self-development-habits', slug: 'daily-self-development-habits' },
  { id: 3, title: 'استراتيجيات إدارة الوقت لزيادة الإنتاجية', category: 'استراتيجيات الحياة', date: '2025-05-05', summary: 'تعلم كيف تدير وقتك بفعالية لتحقيق أهدافك وتجنب التسويف.', image: 'time-management-strategies', slug: 'time-management-strategies' },
  { id: 4, title: 'القيم الإسلامية في التعاملات المالية', category: 'القيم الإسلامية', date: '2025-05-02', summary: 'استكشف كيف توجهنا القيم الإسلامية نحو تعاملات مالية أخلاقية وناجحة.', image: 'islamic-finance-ethics', slug: 'islamic-values-finance' },
  { id: 5, title: 'كيف تبدأ الاستثمار بمبلغ صغير؟', category: 'الوعي المالي', date: '2025-04-28', summary: 'دليل مبسط للمبتدئين حول كيفية دخول عالم الاستثمار بأقل التكاليف.', image: 'investing-small-amount', slug: 'investing-small-amount' },
  { id: 6, title: 'التغلب على الخوف من الفشل', category: 'تطوير الذات', date: '2025-04-25', summary: 'نصائح عملية لمواجهة الخوف من الفشل وتحويله إلى دافع للنجاح.', image: 'overcoming-fear-failure', slug: 'overcoming-fear-failure' },
];

const categories = ['الكل', 'الوعي المالي', 'تطوير الذات', 'استراتيجيات الحياة', 'القيم الإسلامية'];

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'الكل' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-primary mb-4">مقالات "حرر فكرك"</h1>
        <p className="text-center text-lg text-gray-700 mb-8">
          اكتشف مقالاتنا الملهمة في مجالات الوعي المالي، تطوير الذات، استراتيجيات الحياة، والقيم.
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-col md:flex-row gap-4 mb-8 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="relative flex-grow w-full md:w-auto">
          <Input 
            type="text"
            placeholder="ابحث في المقالات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-11 bg-white"
            aria-label="بحث في المقالات"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <Button 
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-200 ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'border-primary text-primary hover:bg-primary/10'}`}
            >
              <Tag size={16} className="ml-2 rtl:mr-2 rtl:ml-0" /> {category}
            </Button>
          ))}
        </div>
      </motion.div>

      {filteredArticles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-full h-48 bg-gray-200 rounded-t-lg mb-4 overflow-hidden">
                    <img  alt={article.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                  </div>
                  <span className="text-xs text-primary font-semibold">{article.category} - {article.date}</span>
                  <CardTitle className="text-xl text-gray-800 mt-1">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600">{article.summary}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button asChild variant="link" className="text-primary p-0">
                    <Link to={`/articles/${article.slug}`}>اقرأ المزيد &larr;</Link>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
                    <Share2 size={18} />
                    <span className="sr-only">مشاركة المقال</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.p 
          className="text-center text-gray-600 text-lg py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          لا توجد مقالات تطابق بحثك الحالي. حاول تغيير كلمات البحث أو الفئة.
        </motion.p>
      )}
    </div>
  );
};

export default ArticlesPage;
  