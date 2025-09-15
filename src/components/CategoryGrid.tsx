import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface CategoryGridProps {
  categories?: CategoryItem[];
}

const CategoryGrid = ({ categories = defaultCategories }: CategoryGridProps) => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated furniture categories, each designed with attention to detail and crafted for comfort and style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                  <button className="mt-4 text-primary font-medium flex items-center text-sm hover:underline">
                    Explore Collection
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultCategories: CategoryItem[] = [
  {
    id: '1',
    name: 'Wardrobes',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    description: 'Sleek, spacious & custom-fit wardrobe designs for your bedroom.'
  },
  {
    id: '2',
    name: 'Dressing Tables',
    image: 'https://images.unsplash.com/photo-1595428821877-cbebe1149bbb?w=800&q=80',
    description: 'Elegant mirrors & storage solutions for your daily routine.'
  },
  {
    id: '3',
    name: 'Sofas',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    description: 'From cozy lounges to luxury statement pieces for your living room.'
  },
  {
    id: '4',
    name: 'Dining Tables',
    image: 'https://images.unsplash.com/photo-1615066390971-03e8b0275a0f?w=800&q=80',
    description: 'Perfectly crafted tables for family gatherings and entertaining guests.'
  },
  {
    id: '5',
    name: 'Beds',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    description: 'Comfort-driven with stylish designs for a peaceful night\'s sleep.'
  },
  {
    id: '6',
    name: 'Custom Options',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    description: 'Unique furniture designs crafted specifically to your requirements.'
  }
];

export default CategoryGrid;