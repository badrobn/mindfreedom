
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Download, BookOpen } from 'lucide-react';

const products = [
  { 
    id: 1, 
    title: 'كتاب "حرر فكرك المالي"', 
    description: 'دليلك الشامل لبناء وعي مالي قوي، فهم أساسيات الادخار والاستثمار، ووضع خطة لتحقيق الاستقلال المالي. يتضمن الكتاب أمثلة عملية وتمارين تطبيقية.', 
    price: '49.99 ر.س', 
    type: 'كتاب رقمي', 
    image: 'ebook-financial-freedom', 
    slug: 'financial-freedom-ebook',
    icon: <BookOpen className="text-primary" size={24}/>
  },
  { 
    id: 2, 
    title: 'مجموعة قوالب الميزانية الشاملة', 
    description: 'ابدأ بتنظيم أموالك اليوم مع هذه المجموعة من القوالب المصممة لمساعدتك على تتبع دخلك ونفقاتك، وتحديد أهدافك المالية. (Excel/Google Sheets)', 
    price: 'مجاني', 
    type: 'قوالب رقمية', 
    image: 'budget-templates-pack', 
    slug: 'budget-templates-pack',
    icon: <Download className="text-primary" size={24}/>
  },
  { 
    id: 3, 
    title: 'كورس الوعي المالي للمبتدئين (قريباً)', 
    description: 'انضم إلى قائمتنا البريدية لتكون أول من يعلم عند إطلاق الكورس. سيغطي الكورس أساسيات التخطيط المالي، الادخار الذكي، ومقدمة في الاستثمار.', 
    price: 'سيتم الإعلان عنه', 
    type: 'كورس عبر الإنترنت', 
    image: 'finance-course-online', 
    slug: 'financial-awareness-course',
    icon: <ShoppingBag className="text-primary" size={24}/>
  },
  { 
    id: 4, 
    title: 'دليل الأهداف الذكية (SMART Goals)', 
    description: 'تعلم كيف تضع أهدافًا واضحة وقابلة للقياس لتحقيقها بفعالية في جوانب حياتك المختلفة. دليل عملي ومبسط.', 
    price: '19.99 ر.س', 
    type: 'دليل رقمي', 
    image: 'smart-goals-guide', 
    slug: 'smart-goals-guide',
    icon: <BookOpen className="text-primary" size={24}/>
  },
];

const ProductsPage = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-primary mb-4">منتجاتنا ومواردنا الرقمية</h1>
        <p className="text-center text-lg text-gray-700 mb-8">
          اكتشف مجموعتنا من الكتب، القوالب، والكورسات المصممة لمساعدتك في رحلتك نحو الوعي المالي وتطوير الذات.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="w-full h-56 bg-gray-200">
                <img  alt={product.title} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-gray-800">{product.title}</CardTitle>
                  {product.icon}
                </div>
                <span className="text-xs text-muted-foreground">{product.type}</span>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-600 leading-relaxed">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-100">
                <p className="text-lg font-semibold text-primary">{product.price}</p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to={`/products/${product.slug}`}>
                    {product.price === 'مجاني' ? 'تحميل الآن' : (product.title.includes('(قريباً)') ? 'سجل اهتمامك' : 'عرض التفاصيل')}
                  </Link>
                </Button>
              </CardFooter>
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
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">هل تبحث عن شيء محدد؟</h3>
        <p className="text-gray-700 mb-6">
          إذا كان لديك أي استفسارات حول منتجاتنا أو اقتراحات لموارد جديدة، لا تتردد في التواصل معنا.
        </p>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
          <Link to="/contact">تواصل معنا</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default ProductsPage;
  