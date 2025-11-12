import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const ingredients = [
    {
      name: "Алоэ вера",
      benefits: "Увлажняет и успокаивает кожу",
      icon: "Leaf"
    },
    {
      name: "Масло ши",
      benefits: "Питает и восстанавливает",
      icon: "Droplet"
    },
    {
      name: "Лаванда",
      benefits: "Снимает воспаления",
      icon: "Flower2"
    },
    {
      name: "Кокосовое масло",
      benefits: "Защищает и смягчает",
      icon: "Shell"
    }
  ];

  const products = [
    {
      name: "Увлажняющий крем",
      description: "С алоэ и гиалуроновой кислотой",
      price: "1 990 ₽",
      image: "https://cdn.poehali.dev/projects/60e6e265-be3a-4690-8342-b4f9d97b9140/files/3f5e3532-4b87-45a4-9152-141235c0fdb8.jpg"
    },
    {
      name: "Питательная сыворотка",
      description: "С маслом ши и витамином Е",
      price: "2 490 ₽",
      image: "https://cdn.poehali.dev/projects/60e6e265-be3a-4690-8342-b4f9d97b9140/files/032f0c6d-7b24-45a8-9a71-eb2d7191394f.jpg"
    },
    {
      name: "Успокаивающий тоник",
      description: "С лавандой и ромашкой",
      price: "1 490 ₽",
      image: "https://cdn.poehali.dev/projects/60e6e265-be3a-4690-8342-b4f9d97b9140/files/8e2a7051-5293-4574-8d12-2b5d534a00d7.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-primary">Natura</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#ingredients" className="text-foreground/80 hover:text-primary transition-colors">Ингредиенты</a>
            <a href="#products" className="text-foreground/80 hover:text-primary transition-colors">Продукция</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О бренде</a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </header>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Красота от природы
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Органическая косметика, созданная из натуральных ингредиентов для заботы о вашей коже и планете
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="ingredients" className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Натуральные ингредиенты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы используем только проверенные органические компоненты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ingredients.map((ingredient, index) => (
              <Card key={index} className="border-border/40 hover:shadow-lg transition-all hover-scale bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={ingredient.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{ingredient.name}</h3>
                  <p className="text-muted-foreground">{ingredient.benefits}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наша продукция</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждый продукт создан с любовью к природе и вашей коже
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-border/40 overflow-hidden hover:shadow-xl transition-all hover-scale bg-card">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О бренде Natura</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Мы верим, что красота начинается с природы. Каждый наш продукт создается вручную из органических ингредиентов, выращенных без пестицидов и химикатов.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Наша миссия — создавать косметику, которая заботится о вашей коже и сохраняет природу для будущих поколений. Мы используем экологичную упаковку и поддерживаем локальных фермеров.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Натуральные<br />ингредиенты</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">0</div>
                <p className="text-muted-foreground">Химических<br />добавок</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Эко</div>
                <p className="text-muted-foreground">Упаковка<br />из переработанных материалов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Natura</h3>
              <p className="text-muted-foreground">Органическая косметика для вашей естественной красоты</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-muted-foreground mb-2">info@natura.eco</p>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Mail" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 Natura. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
