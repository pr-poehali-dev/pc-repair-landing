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
  );
};

export default HeroSection;
