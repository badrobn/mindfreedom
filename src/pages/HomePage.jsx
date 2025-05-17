
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Zap, BarChart3 } from 'lucide-react';

const HomePage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('homePageSubscription', email);
      toast({
        title: "تم الاشتراك بنجاح!",
        description: "ستصلك خطتنا المجانية قريباً.",
        variant: "default",
      });
      setEmail('');
    } else {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال بريد إلكتروني صالح.",
        variant: "destructive",
      });
    }
  };

  const featuredProducts = [
    { id: 1, title: 'كتاب "حرر فكرك المالي"', description: 'دليلك الشامل لبناء وعي مالي قوي وتحقيق الاستقلال المالي.', image: 'financial-book-cover', link: '/products/1' },
    { id: 2, title: 'قوالب ميزانية مجانية', description: 'ابدأ بتنظيم أموالك اليوم مع هذه القوالب سهلة الاستخدام.', image: 'budget-templates', link: '/products/2' },
    { id: 3, title: 'كورس الوعي المالي (قريباً)', description: 'انضم إلى قائمتنا للتعرف على موعد إطلاق الكورس.', image: 'finance-course-promo', link: '/products/3' },
  ];

  const latestArticles = [
    { id: 1, title: '5 خطوات لبدء رحلتك نحو الحرية المالية', category: 'الوعي المالي', image: 'financial-freedom-steps', link: '/articles/1' },
    { id: 2, title: 'كيف تطور ذاتك باستمرار؟', category: 'تطوير الذات', image: 'self-improvement-ideas', link: '/articles/2' },
    { id: 3, title: 'أهمية القيم في تحقيق النجاح', category: 'القيم الإسلامية', image: 'islamic-values-success', link: '/articles/3' },
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      <motion.section 
        className="text-center py-12 md:py-20 bg-gradient-to-br from-beige-DEFAULT to-beige-light rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            اصنع وعيك، حرر فكرك، وابنِ حريتك خطوة بخطوة
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            مرحباً بك في "حرر فكرك"، وجهتك نحو تطوير الذات وبناء الوعي المالي بطريقة مبسطة وراقية.
          </motion.p>
          <motion.div 
            className="space-x-4 rtl:space-x-reverse"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              <Link to="/start-here">اكتشف المشروع</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg">
              <Link to="/products/free-guide">حمّل دليلك المجاني</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="about-us-snippet" 
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <Card className="max-w-3xl mx-auto bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gray-800">من نحن؟</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600 leading-relaxed">
              "حرر فكرك" هو مشروع يهدف إلى تمكين الأفراد لتحقيق الاستقلال المالي والشخصي من خلال محتوى تعليمي ملهم وأدوات عملية. نؤمن بأن الوعي هو الخطوة الأولى نحو التغيير الإيجابي، ونسعى لتقديم المعرفة بطريقة مبسطة وعملية تساعدك على بناء حياة أكثر حرية وذات معنى. قيمنا الأساسية هي الإيمان، التطوير المستمر، العمل بهدوء، والتأثير الإيجابي.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section 
        id="featured-products" 
        className="py-12 bg-beige-DEFAULT rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">أهم المنتجات الرقمية</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center mb-4">
                    <img  alt={product.title} className="object-cover w-full h-full rounded-t-lg" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  </div>
                  <CardTitle className="text-xl text-gray-700">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="text-primary p-0">
                    <Link to={product.link}>اعرف المزيد &larr;</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        id="latest-articles" 
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">أحدث المقالات والفيديوهات</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {latestArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + index * 0.2, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader>
                   <div className="w-full h-40 bg-gray-200 rounded-t-lg flex items-center justify-center mb-4">
                    <img  alt={article.title} className="object-cover w-full h-full rounded-t-lg" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  </div>
                  <span className="text-xs text-primary font-semibold">{article.category}</span>
                  <CardTitle className="text-lg text-gray-700 mt-1">{article.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="link" className="text-primary p-0">
                    <Link to={article.link}>اقرأ المزيد &larr;</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link to="/articles">عرض كل المقالات</Link>
          </Button>
        </div>
      </motion.section>

      <motion.section 
        id="newsletter-subscription" 
        className="py-12 bg-gradient-to-tr from-primary/80 to-accent/80 text-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
      >
        <div className="container mx-auto px-4 text-center">
          <BookOpen size={48} className="mx-auto mb-4 text-primary-foreground" />
          <h2 className="text-3xl font-bold mb-3">احصل على خطتك المجانية!</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-primary-foreground/90">
            ابدأ رحلتك نحو الحرية المالية والشخصية. اشترك الآن.
          </p>
          <form onSubmit={handleSubscription} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow h-12 text-gray-800 bg-white focus:ring-white"
              aria-label="البريد الإلكتروني للاشتراك في الخطة المجانية"
            />
            <Button type="submit" size="lg" className="bg-primary-foreground text-primary hover:bg-white/90 h-12 px-8">
              اشترك الآن
            </Button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
  