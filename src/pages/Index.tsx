import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from '@/components/ui/icon'

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="font-montserrat font-bold text-2xl text-primary">
              IdeaBrend
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">Процесс</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-secondary/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Мерч и подарки с логотипом 
                <span className="text-primary">для выставок и мероприятий</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Производим брендированную продукцию для конференций, выставок и корпоративных мероприятий. 
                <span className="font-semibold text-primary">От 100 единиц за 3-5 дней.</span>
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
                  <div className="font-montserrat font-bold text-2xl text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">мероприятий</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
                  <div className="font-montserrat font-bold text-2xl text-primary">3 дня</div>
                  <div className="text-sm text-muted-foreground">от заказа</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
                  <div className="font-montserrat font-bold text-2xl text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">поддержка</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-8 py-4 text-lg rounded-xl">
                  <Icon name="Gift" size={20} className="mr-2" />
                  Получить каталог
                </Button>
                <Button variant="outline" size="lg" className="border-2 font-montserrat font-semibold px-8 py-4 text-lg rounded-xl">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/6036925d-c164-49e6-90a2-9f0723449ffb.jpg" 
                alt="Набор корпоративных сувениров" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Опыт работы с 500+ компаниями и безупречная репутация в сфере корпоративных подарков
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Clock",
                title: "Быстрое производство",
                description: "Изготавливаем заказы от 3 до 7 рабочих дней. Срочные заказы — за 24 часа."
              },
              {
                icon: "Award",
                title: "Премиальное качество",
                description: "Используем только сертифицированные материалы и современное оборудование."
              },
              {
                icon: "Users",
                title: "Персональный менеджер",
                description: "Каждому клиенту назначается персональный менеджер на всех этапах."
              },
              {
                icon: "Palette",
                title: "Уникальный дизайн",
                description: "Разрабатываем эксклюзивные макеты под ваш бренд и корпоративный стиль."
              },
              {
                icon: "ShieldCheck",
                title: "Гарантия качества",
                description: "Предоставляем гарантию на всю продукцию и возврат средств при браке."
              },
              {
                icon: "TrendingUp",
                title: "Выгодные цены",
                description: "Прямые поставки от производителей. Скидки до 30% на крупные заказы."
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-montserrat font-semibold text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Примеры наших работ
            </h2>
            <p className="text-xl text-muted-foreground">
              Более 1000 успешных проектов для российских и международных компаний
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 animate-fade-in">
              <img 
                src="/img/6561b6c5-5df5-4dfc-b485-6ae2ef63a272.jpg" 
                alt="Офисные сувениры" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="animate-fade-in">
              <img 
                src="/img/b52144a6-a54a-4bb2-82c2-3ffe9a8c7b01.jpg" 
                alt="Команда с брендированными товарами" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { company: "ТехноСфера", items: "500 блокнотов, 300 ручек", category: "IT-компания" },
              { company: "БизнесГрупп", items: "200 кружек, 150 футболок", category: "Консалтинг" },
              { company: "СтартапХаб", items: "100 пауэрбанков, 200 стикеров", category: "Стартап" }
            ].map((project, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-montserrat text-lg">{project.company}</CardTitle>
                  <CardDescription className="text-primary font-medium">{project.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.items}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Мерч для любых мероприятий
            </h2>
            <p className="text-xl text-muted-foreground">
              Специализируемся на брендированной продукции для B2B событий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: "Building", 
                title: "Выставки и форумы", 
                items: "Промостенды, баннеры, рекламная продукция",
                description: "Привлекательный мерч для стендов, который запомнится посетителям"
              },
              { 
                icon: "Users", 
                title: "Конференции", 
                items: "Блокноты, ручки, папки, бейджи",
                description: "Полезные и стильные подарки для участников мероприятий"
              },
              { 
                icon: "Trophy", 
                title: "Корпоративы", 
                items: "Футболки, кружки, сувениры, награды",
                description: "Создаём атмосферу единства команды с фирменным мерчем"
              }
            ].map((event, index) => (
              <Card key={index} className="text-left hover:shadow-lg transition-all animate-fade-in hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={event.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-montserrat text-xl mb-2">{event.title}</CardTitle>
                  <CardDescription className="text-primary font-medium text-base">{event.items}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Популярная продукция
            </h2>
            <p className="text-xl text-muted-foreground">
              Топ-категории мерча для мероприятий с готовыми тиражами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "BookOpen", title: "Блокноты А5", items: "100 шт.", price: "от 4900₽" },
              { icon: "Coffee", title: "Кружки", items: "50 шт.", price: "от 7500₽" },
              { icon: "Shirt", title: "Футболки", items: "100 шт.", price: "от 19900₽" },
              { icon: "Smartphone", title: "Пауэрбанки", items: "50 шт.", price: "от 24500₽" }
            ].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all animate-fade-in hover:scale-105">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={category.icon as any} size={40} className="text-primary" />
                  </div>
                  <CardTitle className="font-montserrat text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{category.items}</p>
                  <p className="text-2xl font-montserrat font-bold text-primary">{category.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-muted-foreground">
              Простой и понятный процесс от заявки до получения готовой продукции
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Заявка", description: "Оставляете заявку и получаете консультацию в течение часа" },
              { step: "02", title: "Дизайн", description: "Создаём макеты и согласовываем дизайн с вашим брендом" },
              { step: "03", title: "Производство", description: "Изготавливаем продукцию на современном оборудовании" },
              { step: "04", title: "Доставка", description: "Доставляем готовую продукцию в удобное для вас время" }
            ].map((step, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 font-montserrat font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас руководители компаний
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                position: "Директор по маркетингу, ТехноПлюс",
                text: "Отличное качество продукции и быстрые сроки! Заказывали корпоративные подарки для конференции — все было готово точно в срок.",
                rating: 5
              },
              {
                name: "Михаил Сидоров",
                position: "HR-директор, ИнноВейт",
                text: "Работаем с IdeaBrend уже третий год. Всегда качественно, в срок и с отличным сервисом. Рекомендуем!",
                rating: 5
              },
              {
                name: "Елена Козлова",
                position: "Руководитель отдела закупок, МегаКорп",
                text: "Заказывали 500 комплектов для сотрудников. Качество превзошло ожидания, а цены оказались очень выгодными.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="font-montserrat text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-4">
              Получите подборку идей для вашего бренда
            </h2>
            <p className="text-xl text-white/90">
              Оставьте заявку и получите персональные предложения в течение часа
            </p>
          </div>
          
          <Card className="animate-fade-in shadow-2xl border-0">
            <CardContent className="p-8">
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Ваше имя *</label>
                    <Input placeholder="Введите ваше имя" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Компания</label>
                    <Input placeholder="Название компании" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Телефон *</label>
                    <Input placeholder="+7 (999) 123-45-67" className="h-12" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input placeholder="your@email.com" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Комментарий</label>
                    <Textarea placeholder="Расскажите о ваших потребностях..." className="h-24 resize-none" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold h-14 text-lg rounded-xl">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить предложения
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    <Icon name="Clock" size={16} className="inline mr-1" />
                    Ответим в течение 1 часа в рабочее время
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-montserrat font-bold text-2xl mb-4">IdeaBrend</div>
              <p className="text-white/80 mb-4">Корпоративные сувениры с брендингом для вашего успеха</p>
              <div className="flex space-x-4">
                <Icon name="Phone" size={20} className="text-white/60" />
                <span className="text-white/80">+7 (495) 123-45-67</span>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Канцелярская продукция</li>
                <li>Текстильная продукция</li>
                <li>Сувенирная посуда</li>
                <li>Электронные гаджеты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Контакты</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>Москва, ул. Примерная, 123</p>
                <p>info@ideabrend.ru</p>
                <p>Пн-Пт: 9:00-18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 IdeaBrend. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index