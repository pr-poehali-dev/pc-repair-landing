import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-[#0A0E27]/90 backdrop-blur-md z-50 border-b border-[#00D9FF]/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-[#00D9FF] neon-glow">Компьютерный мастер</h1>
        
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
        
        <div className="flex items-center gap-4">
          <Button
            onClick={() => scrollToSection('контакты')}
            className="hidden sm:flex bg-transparent hover:bg-[#00D9FF] text-[#00D9FF] hover:text-[#0A0E27] font-semibold border-2 border-[#00D9FF] transition-all duration-300"
          >
            Позвонить
          </Button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#00D9FF] p-2"
            aria-label="Меню"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E27] border-t border-[#00D9FF]/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {['Главная', 'Услуги', 'Прайс', 'Преимущества', 'Для бизнеса', 'FAQ', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-[#00D9FF] transition-colors"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => {
                scrollToSection('контакты');
                setIsMobileMenuOpen(false);
              }}
              className="bg-[#00D9FF] hover:bg-[#00D9FF]/80 text-[#0A0E27] font-semibold neon-border border-2 border-[#00D9FF]"
            >
              Позвонить
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
