import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AdvantagesSectionProps {
  advantagesRef: (node?: Element | null) => void;
  advantagesInView: boolean;
}

const advantages = [
  { icon: 'Clock', title: 'Быстрый выезд', description: 'Приеду в течение 1-2 часов' },
  { icon: 'Award', title: 'Гарантия качества', description: 'Гарантия на все виды работ' },
  { icon: 'BadgeCheck', title: 'Опыт 10+ лет', description: 'Решу любую проблему' },
  { icon: 'Wallet', title: 'Честные цены', description: 'Без скрытых платежей' },
  { icon: 'FileText', title: 'Работа с юр. лицами', description: 'По договору с закрывающими документами' }
];

const AdvantagesSection = ({ advantagesRef, advantagesInView }: AdvantagesSectionProps) => {
  return (
    <section id="преимущества" className="py-20 px-4 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent h-32 z-10"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-10 light:opacity-5">
        <img
          src="https://cdn.poehali.dev/projects/9df248c2-67be-4a7d-9801-0798ce14a199/files/9328c180-d42a-4922-8e36-e07807914200.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-card via-card/50 to-transparent h-32 z-10"></div>
      <div className="container mx-auto max-w-7xl relative z-10" ref={advantagesRef}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${advantagesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Почему <span className="text-primary neon-glow">выбирают нас</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {advantages.map((item, index) => (
            <Card
              key={index}
              className={`bg-background border-primary/20 p-6 text-center hover:border-primary transition-all hover-scale duration-500 ${advantagesInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name={item.icon} size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;