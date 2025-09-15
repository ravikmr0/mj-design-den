import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample featured furniture items
  const featuredItems: FeaturedItem[] = [
    {
      id: "1",
      title: "Modern Elegance Wardrobe",
      description:
        "A sleek, spacious wardrobe with custom-fit design and premium finish.",
      imageUrl:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      category: "Wardrobes",
    },
    {
      id: "2",
      title: "Luxe Comfort Sofa",
      description:
        "Plush, stylish sofa that combines comfort with contemporary design.",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      category: "Sofas",
    },
    {
      id: "3",
      title: "Artisan Dining Table",
      description:
        "Hand-crafted dining table perfect for family gatherings and entertaining.",
      imageUrl:
        "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80",
      category: "Dining Tables",
    },
    {
      id: "4",
      title: "Serene Dreams Bed",
      description:
        "Comfort-driven bed with elegant headboard and sturdy construction.",
      imageUrl:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      category: "Beds",
    },
    {
      id: "5",
      title: "Vanity Dressing Table",
      description:
        "Elegant dressing table with ample storage and premium mirror.",
      imageUrl:
        "https://images.unsplash.com/photo-1595428772970-87e19d52a0b7?w=800&q=80",
      category: "Dressing Tables",
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredItems.length]);

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Featured Collection
        </h2>
        <p className="text-lg text-gray-600">
          Discover our signature pieces crafted with precision and care
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {featuredItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden border-none shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 sm:-left-6" />
        <CarouselNext className="-right-4 sm:-right-6" />
      </Carousel>

      <div className="flex justify-center mt-6 space-x-2">
        {featuredItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
