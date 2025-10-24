import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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
    { icon: 'Wallet', title: 'Честные цены', description: 'Без скрытых платежей' }
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
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      <nav className="fixed top-0 w-full bg-[#0A0E27]/90 backdrop-blur-md z-50 border-b border-[#00D9FF]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#00D9FF] neon-glow">КомпМастер</h1>
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
          <Button
            onClick={() => scrollToSection('контакты')}
            className="bg-[#00D9FF] hover:bg-[#00D9FF]/80 text-[#0A0E27] font-semibold neon-border border-2 border-[#00D9FF]"
          >
            Позвонить
          </Button>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Компьютерный <br />
                <span className="text-[#00D9FF] neon-glow">мастер</span>
              </h1>
              <div className="inline-block bg-[#00D927] text-[#0A0E27] px-6 py-3 rounded-full font-bold text-xl neon-border border-2 border-[#00D927]">
                Диагностика бесплатно
              </div>
              <p className="text-xl text-gray-300">
                Ремонт компьютеров и ноутбуков в Улан-Удэ. <br />
                Быстро, качественно, с гарантией.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('контакты')}
                  className="bg-[#00D9FF] hover:bg-[#00D9FF]/80 text-[#0A0E27] font-bold text-lg px-8 py-6 rounded-full neon-border border-2 border-[#00D9FF]"
                >
                  <Icon name="Phone" className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button
                  onClick={() => scrollToSection('услуги')}
                  variant="outline"
                  className="border-2 border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF]/10 font-bold text-lg px-8 py-6 rounded-full"
                >
                  Услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#00D927] rounded-lg blur-3xl opacity-30"></div>
              <img
                src="https://cdn.poehali.dev/files/d2de3749-3cd0-4301-a4b7-4ae8a082c487.jpg"
                alt="Компьютерный мастер"
                className="relative rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-[#0D1235]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Наши <span className="text-[#00D9FF] neon-glow">услуги</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-[#0A0E27] border-[#00D9FF]/20 p-6 hover:border-[#00D9FF] transition-all cursor-pointer group"
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

      <section id="прайс" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-[#00D9FF] neon-glow">Прайс</span>-лист
          </h2>
          <div className="space-y-4">
            {pricing.map((item, index) => (
              <Card
                key={index}
                className={`p-6 flex justify-between items-center ${
                  item.highlight
                    ? 'bg-gradient-to-r from-[#00D927]/20 to-[#00D9FF]/20 border-[#00D927] border-2 neon-border'
                    : 'bg-[#0D1235] border-[#00D9FF]/20'
                }`}
              >
                <span className="text-lg font-semibold">{item.service}</span>
                <span className={`text-2xl font-bold ${item.highlight ? 'text-[#00D927] neon-glow' : 'text-[#00D9FF]'}`}>
                  {item.price}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 px-4 bg-[#0D1235]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Почему <span className="text-[#00D9FF] neon-glow">выбирают нас</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <Card
                key={index}
                className="bg-[#0A0E27] border-[#00D9FF]/20 p-6 text-center hover:border-[#00D9FF] transition-all hover-scale"
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

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Вопросы и <span className="text-[#00D9FF] neon-glow">ответы</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#0D1235] border-[#00D9FF]/20 rounded-lg px-6"
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

      <section id="контакты" className="py-20 px-4 bg-[#0D1235]">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Свяжитесь со <span className="text-[#00D9FF] neon-glow">мной</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">Работаю по всему Улан-Удэ</p>
          
          <Card className="bg-[#0A0E27] border-[#00D9FF]/20 p-8 space-y-6">
            <div>
              <p className="text-2xl font-bold text-[#00D9FF] mb-2">Алексей</p>
              <a
                href="tel:89940931512"
                className="text-4xl font-bold text-[#00D927] neon-glow hover:text-[#00D927]/80 transition-colors"
              >
                8 994 093 15 12
              </a>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button
                className="bg-[#00D9FF] hover:bg-[#00D9FF]/80 text-[#0A0E27] font-bold px-8 py-6 text-lg rounded-full neon-border border-2 border-[#00D9FF]"
                onClick={() => window.open('https://t.me/89940931512', '_blank')}
              >
                <Icon name="Send" className="mr-2" />
                Telegram
              </Button>
              <Button
                className="bg-[#00D927] hover:bg-[#00D927]/80 text-[#0A0E27] font-bold px-8 py-6 text-lg rounded-full neon-border border-2 border-[#00D927]"
                onClick={() => window.open('https://wa.me/89940931512', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </Card>
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
