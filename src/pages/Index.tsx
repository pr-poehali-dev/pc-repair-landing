import { useState, lazy, Suspense } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';
import MessengerWidget from '@/components/MessengerWidget';
import PriceCalculator from '@/components/PriceCalculator';

const ServicesSection = lazy(() => import('@/components/sections/ServicesSection'));
const PricingSection = lazy(() => import('@/components/sections/PricingSection'));
const AdvantagesSection = lazy(() => import('@/components/sections/AdvantagesSection'));
const CorporateSection = lazy(() => import('@/components/sections/CorporateSection'));
const FAQSection = lazy(() => import('@/components/sections/FAQSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.05, rootMargin: '50px' });
  const { ref: pricingRef, inView: pricingInView } = useInView({ triggerOnce: true, threshold: 0.05, rootMargin: '50px' });
  const { ref: advantagesRef, inView: advantagesInView } = useInView({ triggerOnce: true, threshold: 0.05, rootMargin: '50px' });
  const { ref: corporateRef, inView: corporateInView } = useInView({ triggerOnce: true, threshold: 0.05, rootMargin: '50px' });
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true, threshold: 0.05, rootMargin: '50px' });

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
      
      <TrustSection />
      
      <MessengerWidget />
      
      <Suspense fallback={<div className="h-screen" />}>
        <ServicesSection 
          servicesRef={servicesRef}
          servicesInView={servicesInView}
          activeService={activeService}
          setActiveService={setActiveService}
        />
      </Suspense>
      
      <Suspense fallback={<div className="h-96" />}>
        <PricingSection 
          pricingRef={pricingRef}
          pricingInView={pricingInView}
        />
      </Suspense>
      
      <PriceCalculator />
      
      <Suspense fallback={<div className="h-96" />}>
        <AdvantagesSection 
          advantagesRef={advantagesRef}
          advantagesInView={advantagesInView}
        />
      </Suspense>
      
      <Suspense fallback={<div className="h-96" />}>
        <CorporateSection 
          corporateRef={corporateRef}
          corporateInView={corporateInView}
          scrollToSection={scrollToSection}
        />
      </Suspense>
      
      <Suspense fallback={<div className="h-96" />}>
        <FAQSection 
          faqRef={faqRef}
          faqInView={faqInView}
        />
      </Suspense>
      
      <Suspense fallback={<div className="h-96" />}>
        <ContactSection 
          formData={formData}
          isSubmitting={isSubmitting}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </Suspense>
    </div>
  );
};

export default Index;