import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Send, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: '#', icon: <Instagram size={20} />, label: 'Instagram' },
    { href: '#', icon: <Youtube size={20} />, label: 'YouTube' },
    { href: '#', icon: <Send size={20} />, label: 'Telegram' },
    { href: '#', icon: <MessageCircle size={20} />, label: 'TikTok' },
  ];

  return (
    <footer className="bg-brand-lightBeige text-brand-darkText py-8 mt-auto border-t border-brand-olive/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/a33dddcd-538b-462d-858b-f6ccee66af81/fbfd35cc91156ab7b1a5791a1307973b.png" alt="شعار حرر فكرك المصغر" className="h-12 mx-auto md:mx-0 mb-2" />
            <p className="font-bold text-lg mb-2 text-primary">حرر فكرك</p>
            <p className="text-sm text-muted-foreground">
              نحو وعي مالي وتنمية ذاتية لبناء مستقبل أفضل.
            </p>
          </div>
          <div>
            <p className="font-semibold text-md mb-2 text-primary">روابط سريعة</p>
            <ul className="space-y-1">
              <li><Link to="/about" className="hover:text-secondary transition-colors text-sm text-muted-foreground">عن المشروع</Link></li>
              <li><Link to="/articles" className="hover:text-secondary transition-colors text-sm text-muted-foreground">المقالات</Link></li>
              <li><Link to="/products" className="hover:text-secondary transition-colors text-sm text-muted-foreground">المنتجات</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors text-sm text-muted-foreground">تواصل معنا</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-md mb-2 text-primary">تابعنا</p>
            <div className="flex justify-center md:justify-end space-x-4 rtl:space-x-reverse mb-4">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors" aria-label={link.label}>
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
              <Mail size={18} />
              <a href="mailto:info@hrarfikrak.com" className="hover:text-secondary transition-colors">info@hrarfikrak.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-olive/20 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} حرر فكرك. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;