import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="главная" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Компьютерный <br />
              <span className="text-primary neon-glow">мастер</span>
            </h1>
            <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-xl border-2 border-primary shadow-[0_0_20px_rgba(0,217,255,0.3)] dark:bg-white dark:text-[#0A0E27] dark:border-white">
              Диагностика бесплатно
            </div>
            <p className="text-xl text-muted-foreground">
              Ремонт компьютеров и ноутбуков в Улан-Удэ. <br />
              <span className="font-semibold text-foreground">Приедем в течение 2 часов.</span> Средний ремонт — 1 день.
            </p>
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-primary" />
                <span>Выезд за 2 часа</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="ShieldCheck" size={20} className="text-primary" />
                <span>Гарантия 6 мес</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Wrench" size={20} className="text-primary" />
                <span>Опыт 10+ лет</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('контакты')}
                className="bg-transparent hover:bg-primary text-primary hover:text-primary-foreground border-2 border-primary font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]"
              >
                <Icon name="Phone" className="mr-2" />
                Вызвать мастера
              </Button>
              <Button
                onClick={() => scrollToSection('услуги')}
                className="bg-transparent hover:bg-foreground text-foreground hover:text-background border-2 border-foreground font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Услуги
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-3xl opacity-20"></div>
            <div className="relative rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 p-12 backdrop-blur-sm">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <Icon name="Cpu" size={120} className="text-primary opacity-80" />
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">Профессиональный</p>
                  <p className="text-2xl text-muted-foreground">ремонт и обслуживание</p>
                </div>
                <div className="flex gap-8 mt-4">
                  <Icon name="Laptop" size={48} className="text-secondary" />
                  <Icon name="Monitor" size={48} className="text-primary" />
                  <Icon name="HardDrive" size={48} className="text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;