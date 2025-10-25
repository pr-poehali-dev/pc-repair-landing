import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CorporateSectionProps {
  corporateRef: (node?: Element | null) => void;
  corporateInView: boolean;
  scrollToSection: (id: string) => void;
}

const CorporateSection = ({ corporateRef, corporateInView, scrollToSection }: CorporateSectionProps) => {
  return (
    <section id="для бизнеса" className="py-20 px-4 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent h-32 z-10"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-5 light:opacity-3">
        <img
          src="https://cdn.poehali.dev/projects/9df248c2-67be-4a7d-9801-0798ce14a199/files/9328c180-d42a-4922-8e36-e07807914200.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-card via-card/50 to-transparent h-32 z-10"></div>
      <div className="container mx-auto max-w-5xl relative z-20" ref={corporateRef}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 transition-all duration-700 ${corporateInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Для <span className="text-primary neon-glow">корпоративных</span> клиентов
        </h2>
        <p className={`text-center text-xl text-muted-foreground mb-12 transition-all duration-700 delay-100 ${corporateInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Профессиональное обслуживание компьютерной техники для бизнеса
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className={`bg-background border-primary/20 p-8 transition-all duration-700 delay-200 ${corporateInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="FileText" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Работа по договору</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Официальный договор на обслуживание</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Акты выполненных работ</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Счета на оплату</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Все необходимые закрывающие документы</span>
              </li>
            </ul>
          </Card>

          <Card className={`bg-background border-primary/20 p-8 transition-all duration-700 delay-300 ${corporateInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Briefcase" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Услуги для бизнеса</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Абонентское обслуживание офисов</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Настройка локальных сетей</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Установка и настройка ПО</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Ремонт и модернизация парка техники</span>
              </li>
            </ul>
          </Card>
        </div>

        <Card className={`bg-gradient-to-r from-primary/10 to-background border-primary/30 p-8 transition-all duration-700 delay-400 ${corporateInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="Handshake" size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Специальные условия</h3>
                <p className="text-muted-foreground">Индивидуальные тарифы для постоянных клиентов</p>
              </div>
            </div>
            <Button
              onClick={() => scrollToSection('контакты')}
              className="bg-transparent hover:bg-primary text-primary hover:text-primary-foreground border-2 border-primary font-bold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] whitespace-nowrap"
            >
              Обсудить условия
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CorporateSection;