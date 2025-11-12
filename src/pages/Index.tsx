import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      name: "Для собак",
      icon: "Dog",
      count: "120+ товаров"
    },
    {
      name: "Для кошек",
      icon: "Cat",
      count: "95+ товаров"
    },
    {
      name: "Для птиц",
      icon: "Bird",
      count: "45+ товаров"
    },
    {
      name: "Для грызунов",
      icon: "Rabbit",
      count: "60+ товаров"
    }
  ];

  const products = [
    {
      name: "Премиум корм для собак",
      description: "Натуральные ингредиенты, 3 кг",
      price: "2 490 ₽",
      oldPrice: "2 990 ₽",
      badge: "Хит",
      image: "https://cdn.poehali.dev/projects/60e6e265-be3a-4690-8342-b4f9d97b9140/files/26268c43-fe8c-4a42-ab7d-f3ffab325512.jpg"
    },
    {
      name: "Интерактивная игрушка для кошек",
      description: "Умная игрушка с датчиком движения",
      price: "1 790 ₽",
      badge: "Новинка",
      image: "https://cdn.poehali.dev/projects/60e6e265-be3a-4690-8342-b4f9d97b9140/files/4b34d5e0-9afd-49a3-ba77-fd0735e72ceb.jpg"
    },
    {
      name: "Набор аксессуаров",
      description: "Поводок, ошейник и миска",
      price: "3 290 ₽",
      oldPrice: "4 500 ₽",
      badge: "Скидка",
      image: "https://cdn.poehali.dev/projects/60e6e265-be3a-4690-8342-b4f9d97b9140/files/d807ff8b-4890-4df3-be70-14af9e1e4ab3.jpg"
    }
  ];

  const features = [
    {
      icon: "Heart",
      title: "Качество",
      description: "Только проверенные бренды"
    },
    {
      icon: "Truck",
      title: "Доставка",
      description: "Бесплатно от 3000 ₽"
    },
    {
      icon: "Gift",
      title: "Подарки",
      description: "Бонусы к каждому заказу"
    },
    {
      icon: "HeadphonesIcon",
      title: "Поддержка",
      description: "Консультации 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🐾</div>
            <h1 className="text-2xl font-bold text-primary">PetShop</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-foreground/80 hover:text-primary transition-colors font-medium">Каталог</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">О нас</a>
            <a href="#delivery" className="text-foreground/80 hover:text-primary transition-colors font-medium">Доставка</a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            Корзина
          </Button>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/20 via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary text-primary-foreground text-sm px-4 py-1">
              🎉 Скидки до 30% на первый заказ
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Всё для ваших питомцев
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Корма, игрушки, аксессуары и уход — более 500 товаров для счастья ваших любимцев
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2">
                Акции
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Категории товаров</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-xl transition-all cursor-pointer hover-scale group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={category.icon as any} size={40} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные товары</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Самые востребованные товары с отличными отзывами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-2 overflow-hidden hover:shadow-2xl transition-all hover-scale group">
                <div className="relative aspect-square overflow-hidden bg-muted/20">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-bold">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">{product.oldPrice}</span>
                      )}
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                      <Icon name="ShoppingCart" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-full border-2">
              Показать все товары
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О нашем магазине</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              PetShop — это современный интернет-магазин товаров для животных. Мы работаем с 2020 года и помогли тысячам владельцев домашних питомцев найти всё необходимое для их любимцев.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              У нас только качественная продукция от проверенных производителей, быстрая доставка и приятные цены. Команда PetShop — это опытные специалисты, которые сами являются владельцами домашних животных.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Товаров<br />в каталоге</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <p className="text-muted-foreground">Довольных<br />клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Поддержка<br />клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🐾</div>
                <h3 className="text-xl font-bold">PetShop</h3>
              </div>
              <p className="text-muted-foreground">Всё для ваших любимых питомцев</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Для собак</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для кошек</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для птиц</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для грызунов</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <p className="text-muted-foreground mb-2">info@petshop.ru</p>
              <p className="text-muted-foreground mb-4">+7 (495) 123-45-67</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 PetShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
