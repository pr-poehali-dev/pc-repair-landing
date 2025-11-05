import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ContactSectionProps {
  formData: { name: string; phone: string; message: string };
  isSubmitting: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactSection = ({ formData, isSubmitting, handleInputChange, handleSubmit }: ContactSectionProps) => {
  return (
    <section id="контакты" className="py-20 px-4 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent h-32 z-10"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-5 light:opacity-3">
        <img
          src="https://cdn.poehali.dev/projects/9df248c2-67be-4a7d-9801-0798ce14a199/files/fbf2c55e-06a6-49ff-af6b-6cf921696682.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Свяжитесь со <span className="text-primary neon-glow">мной</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-background border-primary/20 p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-card border-primary/20 placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-card border-primary/20 placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Опишите проблему"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-card border-primary/20 placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-transparent hover:bg-foreground text-foreground hover:text-background border-2 border-foreground font-bold py-6 text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </form>
          </Card>

          <Card className="bg-background border-primary/20 p-8 flex flex-col justify-center">
            <div className="text-center space-y-6">
              <div>
                <p className="text-xl text-muted-foreground mb-2">Или позвоните напрямую</p>
                <p className="text-2xl font-bold text-primary mb-2">Алексей</p>
                <a
                  href="tel:89940931512"
                  className="text-3xl md:text-4xl font-bold text-foreground drop-shadow-[0_0_10px_rgba(0,217,255,0.3)] hover:text-foreground/80 transition-colors"
                >
                  8 994 093 15 12
                </a>
              </div>
              
              <div className="pt-6">
                <p className="text-muted-foreground mb-4">Работаю по всему Улан-Удэ</p>
                <div className="flex justify-center gap-4">
                  <Button
                    className="bg-transparent hover:bg-primary text-primary hover:text-primary-foreground border-2 border-primary font-bold px-6 py-5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]"
                    onClick={() => window.open('https://t.me/89940931512', '_blank')}
                  >
                    <Icon name="Send" className="mr-2" />
                    Telegram
                  </Button>
                  <Button
                    className="bg-transparent hover:bg-secondary text-secondary hover:text-secondary-foreground border-2 border-secondary font-bold px-6 py-5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,39,0.5)]"
                    onClick={() => window.open('https://wa.me/79940931512', '_blank')}
                  >
                    <Icon name="MessageCircle" className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;