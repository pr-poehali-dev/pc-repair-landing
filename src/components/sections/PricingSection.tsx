import { Card } from '@/components/ui/card';

interface PricingSectionProps {
  pricingRef: (node?: Element | null) => void;
  pricingInView: boolean;
}

const pricing = [
  { service: 'Диагностика', price: 'Бесплатно', highlight: true },
  { service: 'Чистка от пыли', price: 'от 500₽' },
  { service: 'Замена термопасты', price: 'от 800₽' },
  { service: 'Ремонт ПК', price: 'от 1000₽' },
  { service: 'Ремонт ноутбука', price: 'от 1500₽' },
  { service: 'Сборка ПК', price: 'от 2000₽' },
  { service: 'Апгрейд', price: 'от 1500₽' }
];

const PricingSection = ({ pricingRef, pricingInView }: PricingSectionProps) => {
  return (
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
  );
};

export default PricingSection;
