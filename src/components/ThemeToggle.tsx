import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    
    if (initialTheme === 'light') {
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="relative w-10 h-10 rounded-full hover:bg-[#00D9FF]/10"
      aria-label="Переключить тему"
    >
      <Icon 
        name={theme === 'dark' ? 'Lightbulb' : 'LightbulbOff'} 
        size={20} 
        className={theme === 'dark' ? 'text-[#00D9FF]' : 'text-yellow-500'}
      />
    </Button>
  );
};

export default ThemeToggle;
