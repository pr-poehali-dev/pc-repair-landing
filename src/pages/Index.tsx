import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PricingSection from '@/components/sections/PricingSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import CorporateSection from '@/components/sections/CorporateSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: pricingRef, inView: pricingInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: advantagesRef, inView: advantagesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: corporateRef, inView: corporateInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Заявка отправлена!",
        description: "Алексей свяжется с вами в ближайшее время.",
      });

      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позвонить.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      
      <HeroSection scrollToSection={scrollToSection} />
      
      <ServicesSection 
        servicesRef={servicesRef}
        servicesInView={servicesInView}
        activeService={activeService}
        setActiveService={setActiveService}
      />
      
      <PricingSection 
        pricingRef={pricingRef}
        pricingInView={pricingInView}
      />
      
      <AdvantagesSection 
        advantagesRef={advantagesRef}
        advantagesInView={advantagesInView}
      />
      
      <CorporateSection 
        corporateRef={corporateRef}
        corporateInView={corporateInView}
        scrollToSection={scrollToSection}
      />
      
      <FAQSection 
        faqRef={faqRef}
        faqInView={faqInView}
      />
      
      <ContactSection 
        formData={formData}
        isSubmitting={isSubmitting}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Index;