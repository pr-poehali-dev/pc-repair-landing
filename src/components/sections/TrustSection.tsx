import { Card } from '@/components/ui/card';

const TrustSection = () => {
  const stats = [
    { value: '500+', label: 'Довольных клиентов' },
    { value: '10 лет', label: 'На рынке' },
    { value: '2 часа', label: 'Среднее время выезда' },
    { value: '98%', label: 'Успешных ремонтов' }
  ];

  const clients = [
    { name: 'Школа №5', logo: '🏫' },
    { name: 'Офис "Байкал"', logo: '🏢' },
    { name: 'Кафе "Встреча"', logo: '☕' },
    { name: 'Салон "Элегант"', logo: '💇' },
    { name: 'Магазин "Техно"', logo: '🛒' },
    { name: 'Клиника "Здоровье"', logo: '🏥' }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Нам доверяют</h3>
          <p className="text-muted-foreground">Обслуживаем бизнес и частных клиентов</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <Card key={index} className="p-4 text-center hover:border-primary transition-colors">
              <div className="text-4xl mb-2">{client.logo}</div>
              <div className="text-xs text-muted-foreground">{client.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
