import { Card } from '@/components/ui/card';

interface PricingSectionProps {
  pricingRef: (node?: Element | null) => void;
  pricingInView: boolean;
}

const pricing = [
  { service: 'Диагностика', price: 'Бесплатно', highlight: true, description: 'Приедем и определим причину поломки' },
  { service: 'Чистка от пыли', price: '500₽', description: 'Полная очистка от пыли и грязи' },
  { service: 'Замена термопасты', price: '800₽', description: 'Замена с качественной пастой Arctic' },
  { service: 'Ремонт ПК', price: '1000₽', description: 'Диагностика + ремонт (без стоимости запчастей)' },
  { service: 'Ремонт ноутбука', price: '1500₽', description: 'Диагностика + ремонт (без стоимости запчастей)' },
  { service: 'Сборка ПК', price: '2000₽', description: 'Подбор комплектующих и сборка под ключ' },
  { service: 'Апгрейд', price: '1500₽', description: 'Модернизация компьютера (консультация + установка)' }
];

const PricingSection = ({ pricingRef, pricingInView }: PricingSectionProps) => {
  return (
    <section id="прайс" className="py-20 px-4 relative">
      <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-card via-transparent to-transparent h-32 z-0"></div>
      <div className="container mx-auto max-w-3xl relative z-10" ref={pricingRef}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary neon-glow">Прайс</span>-лист
        </h2>
        <div className="space-y-4">
          {pricing.map((item, index) => (
            <Card
              key={index}
              className={`p-6 flex justify-between items-center transition-all duration-500 ${pricingInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} ${
                item.highlight
                  ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-primary border-2 shadow-[0_0_20px_rgba(0,217,255,0.3)]'
                  : 'bg-card border-primary/20'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex-1">
                <div className="text-lg font-semibold mb-1">{item.service}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
              <span className={`text-2xl font-bold ml-4 ${item.highlight ? 'text-primary drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]' : 'text-primary'}`}>
                {item.price}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;