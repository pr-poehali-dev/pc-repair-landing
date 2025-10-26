import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQSectionProps {
  faqRef: (node?: Element | null) => void;
  faqInView: boolean;
}

const faqs = [
  { 
    question: 'Сколько стоит диагностика?', 
    answer: 'Первая диагностика и консультация — бесплатно! Вы платите только за ремонт, если решите его сделать.' 
  },
  { 
    question: 'Как быстро можете приехать?', 
    answer: 'Обычно приезжаю в течение 1-2 часов после звонка. В срочных случаях могу быстрее.' 
  },
  { 
    question: 'Даете ли гарантию на работу?', 
    answer: 'Да, на все виды работ даю гарантию. Срок зависит от типа услуги.' 
  },
  { 
    question: 'Работаете в выходные?', 
    answer: 'Да, работаю без выходных. Звоните в любое удобное время!' 
  },
  { 
    question: 'Выезжаете ли вы на дом?', 
    answer: 'Да, выезжаю по всему Улан-Удэ. Также можете привезти технику ко мне.' 
  },
  { 
    question: 'Работаете ли с юридическими лицами?', 
    answer: 'Да, работаю с юридическими лицами по договору. Предоставляю все необходимые закрывающие документы: договор, акт выполненных работ, счет.' 
  }
];

const FAQSection = ({ faqRef, faqInView }: FAQSectionProps) => {
  return (
    <section id="faq" className="py-20 px-4 relative">
      <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-card via-transparent to-transparent h-32 z-0"></div>
      <div className="container mx-auto max-w-3xl relative z-10" ref={faqRef}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Вопросы и <span className="text-primary neon-glow">ответы</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`bg-card border-primary/20 rounded-lg px-6 transition-all duration-500 ${faqInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;