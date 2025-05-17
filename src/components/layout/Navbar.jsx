import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Instagram, Youtube, Send, MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', text: 'الرئيسية' },
  { to: '/about', text: 'عن المشروع' },
  { to: '/articles', text: 'مقالات' },
  { to: '/products', text: 'منتجات' },
  { to: '/start-here', text: 'ابدأ من هنا' },
  { to: '/contact', text: 'تواصل' },
];

const socialIcons = [
  { href: '#', icon: <Instagram size={20} />, label: 'Instagram' },
  { href: '#', icon: <Youtube size={20} />, label: 'YouTube' },
  { href: '#', icon: <Send size={20} />, label: 'Telegram' },
  { href: '#', icon: <MessageCircle size={20} />, label: 'TikTok' },
];

const Navbar = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('subscribedEmail', email);
      toast({
        title: "تم الاشتراك بنجاح!",
        description: `شكراً لاشتراكك: ${email}`,
        variant: "default",
      });
      setEmail('');
    } else {
      toast({
        title: "خطأ في الاشتراك",
        description: "الرجاء إدخال بريد إلكتروني صالح.",
        variant: "destructive",
      });
    }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className="bg-brand-beige/90 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-brand-olive/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/a33dddcd-538b-462d-858b-f6ccee66af81/fbfd35cc91156ab7b1a5791a1307973b.png" alt="شعار حرر فكرك" className="h-10 inline-block mr-2" />
             <span className="hidden sm:inline">حرر فكرك</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-secondary ${
                    isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-3">
            {socialIcons.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
            <form onSubmit={handleSubscribe} className="flex items-center space-x-2 rtl:space-x-reverse">
              <Input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-9 w-40 text-sm bg-brand-lightBeige border-brand-olive/20 focus:ring-secondary placeholder-brand-darkText/60"
                aria-label="البريد الإلكتروني للاشتراك"
              />
              <Button type="submit" size="sm" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                اشترك
              </Button>
            </form>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="فتح القائمة" className="text-primary">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 bg-brand-lightBeige rounded-md shadow-lg p-4 border border-brand-olive/10"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col space-y-3 mb-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-brand-olive/10 hover:text-secondary ${
                        isActive ? 'bg-brand-olive/10 text-primary font-semibold' : 'text-muted-foreground'
                      }`
                    }
                  >
                    {link.text}
                  </NavLink>
                ))}
              </nav>
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2 mb-4">
                <Input 
                  type="email" 
                  placeholder="بريدك الإلكتروني للاشتراك" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 text-sm bg-brand-beige border-brand-olive/20 focus:ring-secondary placeholder-brand-darkText/60"
                  aria-label="البريد الإلكتروني للاشتراك"
                />
                <Button type="submit" variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  اشترك معنا
                </Button>
              </form>
              <div className="flex justify-center space-x-4">
                {socialIcons.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors" aria-label={social.label}>
                    {React.cloneElement(social.icon, { size: 24 })}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;