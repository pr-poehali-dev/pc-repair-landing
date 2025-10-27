import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServicesSectionProps {
  servicesRef: (node?: Element | null) => void;
  servicesInView: boolean;
  activeService: number | null;
  setActiveService: (value: number | null) => void;
}

const services = [
  { icon: 'Wrench', title: 'Ремонт ПК', description: 'Диагностика и устранение любых неисправностей' },
  { icon: 'Laptop', title: 'Ремонт ноутбуков', description: 'Восстановление работоспособности всех моделей' },
  { icon: 'Cpu', title: 'Замена термопасты', description: 'Снижение температуры и продление срока службы' },
  { icon: 'PackagePlus', title: 'Сборка ПК', description: 'Сборка компьютера под ваши задачи' },
  { icon: 'TrendingUp', title: 'Апгрейд', description: 'Модернизация компьютера для повышения производительности' },
  { icon: 'Sparkles', title: 'Чистка', description: 'Профилактика и очистка от пыли' }
];

const ServicesSection = ({ servicesRef, servicesInView, activeService, setActiveService }: ServicesSectionProps) => {
  return (
    <section id="услуги" className="py-20 px-4 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent h-32 z-10"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-10 light:opacity-5">
        <img
          src="https://cdn.poehali.dev/projects/9df248c2-67be-4a7d-9801-0798ce14a199/files/fbf2c55e-06a6-49ff-af6b-6cf921696682.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-card via-card/50 to-transparent h-32 z-10"></div>
      <div className="container mx-auto max-w-7xl relative z-10" ref={servicesRef}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Наши <span className="text-primary neon-glow">услуги</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-background border-primary/20 p-6 hover:border-primary transition-all cursor-pointer group duration-500 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className={`w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all ${activeService === index ? 'neon-border border-2 border-primary' : ''}`}>
                <Icon name={service.icon} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;