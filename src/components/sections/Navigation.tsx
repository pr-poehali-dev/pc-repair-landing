import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ThemeToggle from '@/components/ThemeToggle';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-primary neon-glow">Компьютерный мастер</h1>
        
        <div className="hidden md:flex gap-6 items-center">
          {['Главная', 'Услуги', 'Прайс', 'Преимущества', 'FAQ'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('контакты')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 shadow-lg hover:shadow-primary/50 transition-all"
          >
            <Icon name="Phone" size={16} className="mr-2" />
            Бесплатная консультация
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary p-2"
            aria-label="Меню"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-primary/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {['Главная', 'Услуги', 'Прайс', 'Преимущества', 'Для бизнеса', 'FAQ', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => {
                scrollToSection('контакты');
                setIsMobileMenuOpen(false);
              }}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold neon-border border-2 border-primary"
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