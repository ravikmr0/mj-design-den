import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";
import { ChevronRight, Star, Award, Palette, DollarSign } from "lucide-react";
import Header from "./Header";

const featuredProducts = [
  {
    id: '1',
    name: 'Royal Oak Wardrobe',
    category: 'Wardrobes',
    price: '₹85,000',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    description: 'Spacious 4-door wardrobe with premium oak finish and soft-close hinges.'
  },
  {
    id: '2', 
    name: 'Elegant Dressing Table',
    category: 'Dressing Tables',
    price: '₹45,000',
    image: 'https://images.unsplash.com/photo-1595428821877-cbebe1149bbb?w=800&q=80',
    description: 'Modern dressing table with LED mirror and ample storage compartments.'
  },
  {
    id: '3',
    name: 'Luxury Sofa Set',
    category: 'Sofas',
    price: '₹1,25,000',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    description: 'Premium 3+2 seater sofa set with Italian leather upholstery.'
  },
  {
    id: '4',
    name: 'Grand Dining Table',
    category: 'Dining Tables',
    price: '₹75,000',
    image: 'https://images.unsplash.com/photo-1615066390971-03e8b0275a0f?w=800&q=80',
    description: '8-seater dining table crafted from solid teak wood with elegant design.'
  }
];

const categories = [
  {
    name: 'Wardrobes',
    icon: '👔',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    description: 'Custom wardrobes designed to maximize your storage space with style.'
  },
  {
    name: 'Dressing Tables',
    icon: '💄',
    image: 'https://images.unsplash.com/photo-1595428821877-cbebe1149bbb?w=800&q=80',
    description: 'Elegant dressing tables with mirrors and organized storage solutions.'
  },
  {
    name: 'Sofas',
    icon: '🛋️',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    description: 'Comfortable and stylish sofas for your living room relaxation.'
  },
  {
    name: 'Dining Tables',
    icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1615066390971-03e8b0275a0f?w=800&q=80',
    description: 'Beautiful dining tables for memorable family gatherings.'
  },
  {
    name: 'Beds',
    icon: '🛏️',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    description: 'Comfortable beds designed for the perfect night\'s sleep.'
  },
  {
    name: 'Custom Designs',
    icon: '✨',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    description: 'Unique furniture pieces tailored to your specific requirements.'
  }
];

const whyChooseUs = [
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Premium Quality',
    description: 'Only the finest materials and craftsmanship in every piece.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: '10+ Years Experience',
    description: 'Decade of expertise in custom furniture design and manufacturing.'
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Custom Designs',
    description: 'Personalized furniture solutions tailored to your space and style.'
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Best Value',
    description: 'Competitive pricing without compromising on quality or service.'
  }
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80",
      title: "Crafted Comfort for Every Home",
      subtitle: "Premium sofas and lounge seating tailored to your lifestyle.",
      cta: "Shop Sofas"
    },
    {
      image: "https://images.unsplash.com/photo-1615066390971-03e8b0275a0f?w=1600&q=80",
      title: "Gather Around in Style",
      subtitle: "Elegant dining tables designed for memorable meals.",
      cta: "View Dining"
    },
    {
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
      title: "Sleep Better, Live Better",
      subtitle: "Beds that blend luxury, support, and timeless design.",
      cta: "Browse Beds"
    },
    {
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1600&q=80",
      title: "Storage, Simplified Beautifully",
      subtitle: "Smart wardrobes crafted to maximize space and style.",
      cta: "Explore Wardrobes"
    }
  ];
  const [heroApi, setHeroApi] = useState<CarouselApi | null>(null);
  const [isHover, setIsHover] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!heroApi || isHover) return;
    const id = window.setInterval(() => {
      heroApi.scrollNext();
    }, 3500);
    return () => window.clearInterval(id);
  }, [heroApi, isHover]);

  useEffect(() => {
    if (!heroApi) return;
    const onSelect = () => setSelectedIndex(heroApi.selectedScrollSnap());
    heroApi.on("select", onSelect);
    onSelect();
    return () => {
      heroApi.off("select", onSelect);
    };
  }, [heroApi]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative px-4 sm:px-6 lg:px-8 pt-4"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Carousel className="w-full" opts={{ loop: true }} setApi={setHeroApi}>
          <CarouselContent>
            {slides.map((s, idx) => (
              <CarouselItem key={idx}>
                <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] rounded-2xl overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-10 left-6 right-6 sm:left-12 sm:right-12">
                    <div className="max-w-3xl">
                      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        {s.title}
                      </h2>
                      <p className="text-lg sm:text-xl text-white/85 mb-6">
                        {s.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700">
                          {s.cta}
                        </Button>
                        <a href="#collection">
                          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                            Explore Collection
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-20" />
          <CarouselNext className="flex right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-20" />
        </Carousel>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => heroApi?.scrollTo(i)}
              className={`h-2.5 w-2.5 rounded-full ${selectedIndex === i ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Spotlight Collections */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1615066390971-03e8b0275a0f?w=1200&q=80"
                  alt="Grand Dining Tables"
                  className="w-full h-full object-cover md:h-full aspect-[16/10]"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-amber-100 text-amber-700 text-xs font-medium">Dining</span>
              </div>
              <div className="p-6 md:order-1 flex flex-col justify-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Grand Dining Tables</h4>
                <p className="text-gray-600 mb-4">Elegant solid-wood dining tables crafted for family gatherings and entertaining, finished to perfection.</p>
                <Button className="w-fit bg-amber-600 hover:bg-amber-700 text-white">View Dining Collection</Button>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80"
                  alt="Comfort-First Beds"
                  className="w-full h-full object-cover md:h-full aspect-[16/10]"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-amber-100 text-amber-700 text-xs font-medium">Beds</span>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Comfort-First Beds</h4>
                <p className="text-gray-600 mb-4">Premium frames and headboards paired with cozy finishes for restful, luxurious sleep.</p>
                <Button className="w-fit bg-amber-600 hover:bg-amber-700 text-white">View Bed Collection</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" id="collection">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Featured Collections</h3>
            <Badge variant="secondary" className="text-amber-700 bg-amber-100">
              Signature Pieces
            </Badge>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-2">
                        {product.category}
                      </Badge>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-amber-600">
                          {product.price}
                        </span>
                        <Button variant="outline" size="sm">
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h3>
            <p className="text-lg text-gray-600">Explore our specialized furniture categories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  selectedCategory === category.name ? 'ring-2 ring-amber-500' : ''
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {category.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-amber-50 hover:border-amber-300"
                  >
                    Explore {category.name}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">About MJ Design Den</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Bangalore, MJ Design Den specializes in creating furniture that blends elegance, comfort, and functionality. 
              From classic designs to modern innovations, every piece is tailored to reflect your lifestyle and space.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
            <p className="text-lg text-gray-600">What makes MJ Design Den special</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-orange-600" id="custom">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h3>
          <p className="text-xl text-amber-100 mb-8">
            Let's create furniture that perfectly matches your vision and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-50">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-lg text-gray-600">Ready to start your furniture journey? Contact us today!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  📞
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600">+91 72045 01314</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  📧
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600">info@mjdesignden.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  📍
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h4>
                <p className="text-gray-600">Muneshwara Nagar, Bangalore, India, 560068</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <span className="text-xl font-bold">MJ Design Den</span>
              </div>
              <p className="text-gray-400">
                Creating furniture that blends elegance, comfort, and functionality for your perfect space in Bangalore.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Custom Furniture Design</li>
                <li>Interior Consultation</li>
                <li>Space Planning</li>
                <li>Material Selection</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@mjdesignden.com</p>
                <p>📞 +91 72045 01314</p>
                <p>📍 Muneshwara Nagar, Bangalore, India, 560068</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MJ Design Den. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
