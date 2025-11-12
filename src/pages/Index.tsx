import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const menuItems = [
    {
      category: "Эспрессо",
      items: [
        { name: "Эспрессо", price: "150 ₽", description: "Классический итальянский кофе" },
        { name: "Американо", price: "180 ₽", description: "Эспрессо с горячей водой" },
        { name: "Капучино", price: "220 ₽", description: "Эспрессо, молоко, пенка" },
        { name: "Латте", price: "240 ₽", description: "Нежный кофе с молоком" }
      ]
    },
    {
      category: "Альтернатива",
      items: [
        { name: "Пуровер", price: "280 ₽", description: "Заваренный вручную кофе" },
        { name: "Аэропресс", price: "260 ₽", description: "Насыщенный и чистый вкус" },
        { name: "Колд брю", price: "290 ₽", description: "Холодный кофе 12ч экстракции" }
      ]
    }
  ];

  const desserts = [
    {
      name: "Круассан миндальный",
      price: "280 ₽",
      image: "https://cdn.poehali.dev/projects/60e6e265-be3a-4690-8342-b4f9d97b9140/files/ff721bfc-2e69-43f4-9ade-70480f00e4de.jpg"
    },
    {
      name: "Чизкейк Нью-Йорк",
      price: "350 ₽",
      image: "https://cdn.poehali.dev/projects/60e6e265-be3a-4690-8342-b4f9d97b9140/files/3a815091-d2e6-415f-a138-70704d73d151.jpg"
    },
    {
      name: "Тарт лимонный",
      price: "320 ₽",
      image: "https://cdn.poehali.dev/projects/60e6e265-be3a-4690-8342-b4f9d97b9140/files/6cc0d592-9f6a-4e4a-a016-29eeac94d1f0.jpg"
    }
  ];

  const features = [
    {
      icon: "Coffee",
      title: "Specialty кофе",
      description: "Только свежеобжаренные зёрна"
    },
    {
      icon: "Award",
      title: "Бариста",
      description: "Чемпионы национальных соревнований"
    },
    {
      icon: "MapPin",
      title: "В центре",
      description: "5 минут от метро Пушкинская"
    },
    {
      icon: "Wifi",
      title: "Wi-Fi",
      description: "Быстрый интернет для работы"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/98 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary tracking-tight">COFFEE LAB</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#menu" className="text-foreground/70 hover:text-primary transition-colors font-medium">Меню</a>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-medium">О нас</a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
            Забронировать стол
          </Button>
        </div>
      </header>

      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="text-6xl mb-2">☕</div>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight">
              Кофе как искусство
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-light">
              Specialty кофейня в самом сердце города.<br />Место для встреч, работы и вдохновения.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Посмотреть меню
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Наше меню</h2>
            <p className="text-lg text-muted-foreground font-light">Кофе, приготовленный с любовью</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
            {menuItems.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-3xl font-bold mb-8 text-primary tracking-tight">{section.category}</h3>
                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-border pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold">{item.name}</h4>
                        <span className="text-xl font-bold text-accent">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground font-light">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center tracking-tight">Десерты</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {desserts.map((dessert, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all border-2 hover-scale">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={dessert.image}
                      alt={dessert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-semibold">{dessert.name}</h4>
                      <span className="text-xl font-bold text-accent">{dessert.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={feature.icon as any} size={36} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">О Coffee Lab</h2>
            <p className="text-xl mb-6 leading-relaxed font-light opacity-90">
              Мы открылись в 2020 году с простой идеей: создать место, где каждая чашка кофе — это результат мастерства и внимания к деталям.
            </p>
            <p className="text-xl mb-12 leading-relaxed font-light opacity-90">
              Наши бариста работают только со specialty зёрнами прямой поставки, обжаренными специально для нас. Мы верим, что кофе может быть не просто напитком, а настоящим гастрономическим опытом.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-4xl font-bold mb-2">84+</div>
                <p className="text-sm opacity-80 font-light">Балла по SCA</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2020</div>
                <p className="text-sm opacity-80 font-light">Год основания</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5</div>
                <p className="text-sm opacity-80 font-light">Чемпионов в команде</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 tracking-tight">Как нас найти</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Адрес</h3>
                <div className="space-y-4 text-lg">
                  <div className="flex gap-3">
                    <Icon name="MapPin" size={24} className="text-accent flex-shrink-0" />
                    <p className="font-light">Москва, ул. Тверская, 12<br />5 минут от м. Пушкинская</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Clock" size={24} className="text-accent flex-shrink-0" />
                    <p className="font-light">Пн-Пт: 8:00 – 22:00<br />Сб-Вс: 9:00 – 23:00</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Phone" size={24} className="text-accent flex-shrink-0" />
                    <p className="font-light">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Социальные сети</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 text-lg hover:text-accent transition-colors group">
                    <Icon name="Instagram" size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="font-light">@coffeelab.moscow</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-lg hover:text-accent transition-colors group">
                    <Icon name="Facebook" size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="font-light">Coffee Lab Moscow</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-lg hover:text-accent transition-colors group">
                    <Icon name="Mail" size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="font-light">hello@coffeelab.ru</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">COFFEE LAB</h3>
              <p className="text-muted-foreground font-light">Specialty кофейня</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all">
                <Icon name="Instagram" size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all">
                <Icon name="Facebook" size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all">
                <Icon name="Mail" size={22} />
              </a>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground font-light">
            <p>© 2024 Coffee Lab. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
