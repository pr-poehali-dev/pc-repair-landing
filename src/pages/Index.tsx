import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useInView } from 'react-intersection-observer';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: pricingRef, inView: pricingInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: advantagesRef, inView: advantagesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    { icon: 'Wrench', title: 'Ремонт ПК', description: 'Диагностика и устранение любых неисправностей' },
    { icon: 'Laptop', title: 'Ремонт ноутбуков', description: 'Восстановление работоспособности всех моделей' },
    { icon: 'Cpu', title: 'Замена термопасты', description: 'Снижение температуры и продление срока службы' },
    { icon: 'PackagePlus', title: 'Сборка ПК', description: 'Сборка компьютера под ваши задачи' },
    { icon: 'TrendingUp', title: 'Апгрейд', description: 'Модернизация компьютера для повышения производительности' },
    { icon: 'Sparkles', title: 'Чистка', description: 'Профилактика и очистка от пыли' }
  ];

  const pricing = [
    { service: 'Диагностика', price: 'Бесплатно', highlight: true },
    { service: 'Чистка от пыли', price: 'от 500₽' },
    { service: 'Замена термопасты', price: 'от 800₽' },
    { service: 'Ремонт ПК', price: 'от 1000₽' },
    { service: 'Ремонт ноутбука', price: 'от 1500₽' },
    { service: 'Сборка ПК', price: 'от 2000₽' },
    { service: 'Апгрейд', price: 'от 1500₽' }
  ];

  const advantages = [
    { icon: 'Clock', title: 'Быстрый выезд', description: 'Приеду в течение 1-2 часов' },
    { icon: 'Award', title: 'Гарантия качества', description: 'Гарантия на все виды работ' },
    { icon: 'BadgeCheck', title: 'Опыт 10+ лет', description: 'Решу любую проблему' },
    { icon: 'Wallet', title: 'Честные цены', description: 'Без скрытых платежей' },
    { icon: 'FileText', title: 'Работа с юр. лицами', description: 'По договору с закрывающими документами' }
  ];

  const faqs = [
    { 
      question: 'Сколько стоит диагностика?', 
      answer: 'Диагностика абсолютно бесплатна! Вы платите только за ремонт, если решите его сделать.' 
    },
    { 
      question: 'Как быстро можете приехать?', 
      answer: 'Обычно приезжаю в течение 1-2 часов после звонка. В срочных случаях могу быстрее.' 
    },
    { 
      question: 'Даете ли гарантию на работу?', 
      answer: 'Да, на все виды работ даю гарантию. Срок зависит от типа услуги.' 
    },
    { 
      question: 'Работаете в выходные?', 
      answer: 'Да, работаю без выходных. Звоните в любое удобное время!' 
    },
    { 
      question: 'Выезжаете ли вы на дом?', 
      answer: 'Да, выезжаю по всему Улан-Удэ. Также можете привезти технику ко мне.' 
    },
    { 
      question: 'Работаете ли с юридическими лицами?', 
      answer: 'Да, работаю с юридическими лицами по договору. Предоставляю все необходимые закрывающие документы: договор, акт выполненных работ, счет.' 
    }
  ];

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
    <div className="min-h-screen bg-[#0A0E27] text-white">
      <nav className="fixed top-0 w-full bg-[#0A0E27]/90 backdrop-blur-md z-50 border-b border-[#00D9FF]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-[#00D9FF] neon-glow">Компьютерный мастер</h1>
          
          <div className="hidden md:flex gap-6">
            {['Главная', 'Услуги', 'Прайс', 'Преимущества', 'FAQ', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm hover:text-[#00D9FF] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection('контакты')}
              className="hidden sm:flex bg-transparent hover:bg-[#00D9FF] text-[#00D9FF] hover:text-[#0A0E27] font-semibold border-2 border-[#00D9FF] transition-all duration-300"
            >
              Позвонить
            </Button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#00D9FF] p-2"
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0A0E27] border-t border-[#00D9FF]/20 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {['Главная', 'Услуги', 'Прайс', 'Преимущества', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 hover:text-[#00D9FF] transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => {
                  scrollToSection('контакты');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#00D9FF] hover:bg-[#00D9FF]/80 text-[#0A0E27] font-semibold neon-border border-2 border-[#00D9FF]"
              >
                Позвонить
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Компьютерный <br />
                <span className="text-[#00D9FF] neon-glow">мастер</span>
              </h1>
              <div className="inline-block bg-white text-[#0A0E27] px-6 py-3 rounded-full font-bold text-xl border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Диагностика бесплатно
              </div>
              <p className="text-xl text-gray-300">
                Ремонт компьютеров и ноутбуков в Улан-Удэ. <br />
                Быстро, качественно, с гарантией.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('контакты')}
                  className="bg-transparent hover:bg-[#00D9FF] text-[#00D9FF] hover:text-[#0A0E27] border-2 border-[#00D9FF] font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]"
                >
                  <Icon name="Phone" className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button
                  onClick={() => scrollToSection('услуги')}
                  className="bg-transparent hover:bg-white text-white hover:text-[#0A0E27] border-2 border-white font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                  Услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#00D927] rounded-lg blur-3xl opacity-20"></div>
              <div className="relative rounded-lg bg-gradient-to-br from-[#00D9FF]/10 to-[#00D927]/10 border border-[#00D9FF]/30 p-12 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                  <Icon name="Cpu" size={120} className="text-[#00D9FF] opacity-80" />
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-[#00D9FF]">Профессиональный</p>
                    <p className="text-2xl text-gray-300">ремонт и обслуживание</p>
                  </div>
                  <div className="flex gap-8 mt-4">
                    <Icon name="Laptop" size={48} className="text-[#00D927]" />
                    <Icon name="Monitor" size={48} className="text-[#00D9FF]" />
                    <Icon name="HardDrive" size={48} className="text-[#00D927]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-[#0D1235] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-transparent to-transparent h-32 z-10"></div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.poehali.dev/projects/9df248c2-67be-4a7d-9801-0798ce14a199/files/fbf2c55e-06a6-49ff-af6b-6cf921696682.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D1235] via-[#0D1235]/50 to-transparent h-32 z-10"></div>
        <div className="container mx-auto relative z-10" ref={servicesRef}>
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Наши <span className="text-[#00D9FF] neon-glow">услуги</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`bg-[#0A0E27] border-[#00D9FF]/20 p-6 hover:border-[#00D9FF] transition-all cursor-pointer group duration-500 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`w-16 h-16 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D9FF]/20 transition-all ${activeService === index ? 'neon-border border-2 border-[#00D9FF]' : ''}`}>
                  <Icon name={service.icon} size={32} className="text-[#00D9FF]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="прайс" className="py-20 px-4 relative">
        <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-[#0D1235] via-transparent to-transparent h-32 z-0"></div>
        <div className="container mx-auto max-w-3xl relative z-10" ref={pricingRef}>
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-[#00D9FF] neon-glow">Прайс</span>-лист
          </h2>
          <div className="space-y-4">
            {pricing.map((item, index) => (
              <Card
                key={index}
                className={`p-6 flex justify-between items-center transition-all duration-500 ${pricingInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} ${
                  item.highlight
                    ? 'bg-gradient-to-r from-white/20 to-[#00D9FF]/20 border-white border-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'bg-[#0D1235] border-[#00D9FF]/20'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="text-lg font-semibold">{item.service}</span>
                <span className={`text-2xl font-bold ${item.highlight ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'text-[#00D9FF]'}`}>
                  {item.price}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 px-4 bg-[#0D1235] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-transparent to-transparent h-32 z-10"></div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.poehali.dev/projects/9df248c2-67be-4a7d-9801-0798ce14a199/files/9328c180-d42a-4922-8e36-e07807914200.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D1235] via-[#0D1235]/50 to-transparent h-32 z-10"></div>
        <div className="container mx-auto relative z-10" ref={advantagesRef}>
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${advantagesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Почему <span className="text-[#00D9FF] neon-glow">выбирают нас</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <Card
                key={index}
                className={`bg-[#0A0E27] border-[#00D9FF]/20 p-6 text-center hover:border-[#00D9FF] transition-all hover-scale duration-500 ${advantagesInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-[#00D9FF]/10 flex items-center justify-center mx-auto mb-4 neon-border border-2 border-[#00D9FF]">
                  <Icon name={item.icon} size={40} className="text-[#00D9FF]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 relative">
        <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-[#0D1235] via-transparent to-transparent h-32 z-0"></div>
        <div className="container mx-auto max-w-3xl relative z-10" ref={faqRef}>
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Вопросы и <span className="text-[#00D9FF] neon-glow">ответы</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-[#0D1235] border-[#00D9FF]/20 rounded-lg px-6 transition-all duration-500 ${faqInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-[#00D9FF] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-[#0D1235] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-transparent to-transparent h-32 z-10"></div>
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://cdn.poehali.dev/projects/9df248c2-67be-4a7d-9801-0798ce14a199/files/fbf2c55e-06a6-49ff-af6b-6cf921696682.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Свяжитесь со <span className="text-[#00D9FF] neon-glow">мной</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#0A0E27] border-[#00D9FF]/20 p-8">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-6">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-[#0D1235] border-[#00D9FF]/20 text-white placeholder:text-gray-500 focus:border-[#00D9FF]"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-[#0D1235] border-[#00D9FF]/20 text-white placeholder:text-gray-500 focus:border-[#00D9FF]"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Опишите проблему"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-[#0D1235] border-[#00D9FF]/20 text-white placeholder:text-gray-500 focus:border-[#00D9FF]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-transparent hover:bg-white text-white hover:text-[#0A0E27] border-2 border-white font-bold py-6 text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
              </form>
            </Card>

            <Card className="bg-[#0A0E27] border-[#00D9FF]/20 p-8 flex flex-col justify-center">
              <div className="text-center space-y-6">
                <div>
                  <p className="text-xl text-gray-300 mb-2">Или позвоните напрямую</p>
                  <p className="text-2xl font-bold text-[#00D9FF] mb-2">Алексей</p>
                  <a
                    href="tel:89940931512"
                    className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:text-white/80 transition-colors"
                  >
                    8 994 093 15 12
                  </a>
                </div>
                
                <div className="pt-6">
                  <p className="text-gray-400 mb-4">Работаю по всему Улан-Удэ</p>
                  <div className="flex justify-center gap-4">
                    <Button
                      className="bg-transparent hover:bg-[#00D9FF] text-[#00D9FF] hover:text-[#0A0E27] border-2 border-[#00D9FF] font-bold px-6 py-5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]"
                      onClick={() => window.open('https://t.me/89940931512', '_blank')}
                    >
                      <Icon name="Send" className="mr-2" />
                      Telegram
                    </Button>
                    <Button
                      className="bg-transparent hover:bg-[#00D927] text-[#00D927] hover:text-[#0A0E27] border-2 border-[#00D927] font-bold px-6 py-5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,39,0.5)]"
                      onClick={() => window.open('https://wa.me/89940931512', '_blank')}
                    >
                      <Icon name="MessageCircle" className="mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-[#00D9FF]/20">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 КомпМастер Улан-Удэ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;