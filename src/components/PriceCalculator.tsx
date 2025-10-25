import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  name: string;
  price: number;
  icon: string;
}

const PriceCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isUrgent, setIsUrgent] = useState(false);

  const services: Service[] = [
    { id: 'diagnostic', name: 'Диагностика', price: 0, icon: 'Search' },
    { id: 'cleaning', name: 'Чистка от пыли', price: 500, icon: 'Wind' },
    { id: 'thermal', name: 'Замена термопасты', price: 800, icon: 'Thermometer' },
    { id: 'repair-pc', name: 'Ремонт ПК', price: 1000, icon: 'Wrench' },
    { id: 'repair-laptop', name: 'Ремонт ноутбука', price: 1500, icon: 'Laptop' },
    { id: 'build', name: 'Сборка ПК', price: 2000, icon: 'Box' },
    { id: 'upgrade', name: 'Апгрейд', price: 1500, icon: 'TrendingUp' }
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    const basePrice = services
      .filter(s => selectedServices.includes(s.id))
      .reduce((sum, s) => sum + s.price, 0);
    
    return isUrgent ? Math.round(basePrice * 1.5) : basePrice;
  };

  const total = calculateTotal();

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary neon-glow">Калькулятор</span> стоимости
          </h2>
          <p className="text-muted-foreground">Выберите нужные услуги и узнайте предварительную стоимость</p>
        </div>

        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {services.map(service => (
              <div
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
                  selectedServices.includes(service.id)
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={() => toggleService(service.id)}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name={service.icon} size={20} className="text-primary" />
                      <span className="font-semibold">{service.name}</span>
                    </div>
                    <span className="text-primary font-bold">
                      {service.price === 0 ? 'Бесплатно' : `${service.price}₽`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6 p-4 bg-background rounded-lg">
            <div
              onClick={() => setIsUrgent(!isUrgent)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Checkbox
                checked={isUrgent}
                onCheckedChange={setIsUrgent}
              />
              <div className="flex-1">
                <div className="font-semibold">Срочный выезд (в течение 1 часа)</div>
                <div className="text-sm text-muted-foreground">+50% к стоимости</div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold">Итого:</span>
              <span className="text-4xl font-bold text-primary">
                {total === 0 ? 'Бесплатно' : `${total}₽`}
              </span>
            </div>
            
            <Button
              onClick={() => document.getElementById('контакты')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6"
              disabled={selectedServices.length === 0}
            >
              <Icon name="Phone" className="mr-2" />
              Заказать за {total === 0 ? '0' : total}₽
            </Button>
            
            {selectedServices.length === 0 && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                Выберите хотя бы одну услугу
              </p>
            )}
          </div>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          * Указаны базовые цены без учета стоимости запчастей. Точная стоимость определяется после диагностики.
        </p>
      </div>
    </section>
  );
};

export default PriceCalculator;
