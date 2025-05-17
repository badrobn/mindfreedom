
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Target, Eye, HeartHandshake, TrendingUp, ShieldCheck, Users } from 'lucide-react';

const AboutPage = () => {
  const values = [
    { icon: <ShieldCheck className="text-primary" />, title: 'الإيمان', description: 'نؤمن بأن كل تغيير يبدأ من الداخل، وأن القيم الروحية هي أساس النجاح الحقيقي.' },
    { icon: <TrendingUp className="text-primary" />, title: 'التطوير المستمر', description: 'نسعى دائمًا لتعلم كل ما هو جديد ومفيد، ونشجع على النمو الشخصي والمهني الدائم.' },
    { icon: <HeartHandshake className="text-primary" />, title: 'العمل بهدوء', description: 'نركز على تقديم قيمة حقيقية بتأنٍ وإتقان، بعيدًا عن الضجيج، لتحقيق تأثير عميق ومستدام.' },
    { icon: <Users className="text-primary" />, title: 'التأثير الإيجابي', description: 'هدفنا هو إحداث فرق إيجابي في حياة متابعينا، ومساعدتهم على بناء مستقبل أفضل لأنفسهم ومجتمعاتهم.' },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-primary mb-8">عن مشروع "حرر فكرك"</h1>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800 flex items-center gap-2"><Target className="text-primary"/> سبب تأسيس المشروع</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              تأسس مشروع "حرر فكرك" من منطلق الرغبة في تقديم محتوى عربي هادف يجمع بين تطوير الذات وبناء الوعي المالي. لاحظنا حاجة ماسة إلى مصادر موثوقة ومبسطة تساعد الأفراد على فهم كيفية إدارة أموالهم بفعالية، وفي نفس الوقت، كيفية تطوير مهاراتهم الشخصية وقدراتهم لتحقيق حياة أكثر توازنًا ونجاحًا. نسعى لردم الفجوة بين الطموحات والإمكانيات من خلال توفير المعرفة والأدوات اللازمة.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800 flex items-center gap-2"><Eye className="text-primary"/> رؤيتنا ورسالتنا</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-gray-700 mb-2">رؤيتنا:</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              أن نكون المنصة الرائدة في العالم العربي لتمكين الأفراد من تحقيق الحرية المالية والشخصية، من خلال بناء وعي ذاتي ومالي متكامل.
            </p>
            <p className="font-semibold text-gray-700 mb-2">رسالتنا:</p>
            <p className="text-gray-700 leading-relaxed">
              تقديم محتوى تعليمي ملهم، أدوات عملية، ومنتجات رقمية مبتكرة تساهم في نشر ثقافة الوعي المالي وتطوير الذات، ومساعدة كل فرد على اكتشاف إمكاناته وتحقيق أهدافه بثقة واستقلالية.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">قيم المشروع</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
            >
              <Card className="text-center h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                    {React.cloneElement(value.icon, { size: 32 })}
                  </div>
                  <CardTitle className="text-xl text-gray-700">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <img  
            alt="فريق عمل حرر فكرك يعمل بتفانٍ" 
            className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
         src="https://images.unsplash.com/photo-1565841327798-694bc2074762" />
        <p className="mt-4 text-gray-600 italic">نعمل بشغف لتقديم الأفضل لكم.</p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
  