import { useState } from 'react';
import Icon from '@/components/ui/icon';

const MessengerWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const messengers = [
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      url: 'https://wa.me/79021234567',
      color: 'bg-[#25D366] hover:bg-[#20BA5A]'
    },
    {
      name: 'Telegram',
      icon: 'Send',
      url: 'https://t.me/computermasteruu',
      color: 'bg-[#0088cc] hover:bg-[#0077b3]'
    },
    {
      name: 'Позвонить',
      icon: 'Phone',
      url: 'tel:+79021234567',
      color: 'bg-primary hover:bg-primary/90'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 flex flex-col gap-3 animate-fade-in">
          {messengers.map((messenger, index) => (
            <a
              key={messenger.name}
              href={messenger.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${messenger.color} text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-3 pr-6`}
              style={{ 
                animation: `slideInRight 0.3s ease-out ${index * 0.1}s backwards`
              }}
            >
              <Icon name={messenger.icon} size={24} />
              <span className="font-semibold">{messenger.name}</span>
            </a>
          ))}
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'
        } text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center`}
        aria-label="Открыть мессенджеры"
      >
        <Icon 
          name={isOpen ? 'X' : 'MessageSquare'} 
          size={28}
          className="transition-transform duration-300"
        />
      </button>
    </div>
  );
};

export default MessengerWidget;