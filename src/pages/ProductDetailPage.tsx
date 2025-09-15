import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share2, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CustomDesignForm from "@/components/CustomDesignForm";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState("Oak");
  const [isWishlist, setIsWishlist] = useState(false);

  // Mock product data - in a real app this would come from an API
  const product = {
    id: productId || "1",
    name: "Elegance Wardrobe",
    category: "Wardrobes",
    price: "₹45,000",
    description:
      "A sophisticated wardrobe with ample storage space, featuring elegant design elements and premium craftsmanship. Perfect for modern bedrooms seeking both style and functionality.",
    features: [
      "Spacious interior with adjustable shelving",
      "Soft-close doors and drawers",
      "Built-in LED lighting system",
      "Anti-scratch and stain-resistant finish",
      "Custom compartment options",
    ],
    dimensions: {
      height: "210 cm",
      width: "180 cm",
      depth: "60 cm",
    },
    materials: ["Oak", "Walnut", "Maple", "Cherry"],
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    ],
    inStock: true,
    customizable: true,
  };

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link to="/category/wardrobes" className="hover:text-primary">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
              <motion.img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === index ? "border-primary" : "border-transparent"}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-semibold text-gray-900">
                  {product.name}
                </h1>
                <p className="text-xl font-medium text-primary mt-2">
                  {product.price}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleWishlist}
                  className={isWishlist ? "text-red-500" : ""}
                >
                  <Heart
                    className={`h-5 w-5 ${isWishlist ? "fill-red-500" : ""}`}
                  />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {product.inStock ? (
              <div className="flex items-center mt-4 text-green-600">
                <Check className="h-4 w-4 mr-1" />
                <span>In Stock</span>
              </div>
            ) : (
              <div className="flex items-center mt-4 text-red-600">
                <span>Out of Stock</span>
              </div>
            )}

            <Separator className="my-6" />

            <p className="text-gray-700">{product.description}</p>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-3">Select Material</h3>
              <div className="flex flex-wrap gap-3">
                {product.materials.map((material) => (
                  <Badge
                    key={material}
                    variant={
                      selectedMaterial === material ? "default" : "outline"
                    }
                    className="cursor-pointer px-4 py-2 text-sm"
                    onClick={() => setSelectedMaterial(material)}
                  >
                    {material}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-3">Dimensions</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-md p-3 text-center">
                  <p className="text-sm text-gray-500">Height</p>
                  <p className="font-medium">{product.dimensions.height}</p>
                </div>
                <div className="border rounded-md p-3 text-center">
                  <p className="text-sm text-gray-500">Width</p>
                  <p className="font-medium">{product.dimensions.width}</p>
                </div>
                <div className="border rounded-md p-3 text-center">
                  <p className="text-sm text-gray-500">Depth</p>
                  <p className="font-medium">{product.dimensions.depth}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">Add to Cart</Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex-1">
                    Request Custom Design
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Request Custom Design</DialogTitle>
                  </DialogHeader>
                  <CustomDesignForm productName={product.name} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features">
            <TabsList className="w-full justify-start border-b">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="customization">
                Customization Options
              </TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="py-6">
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Materials</h3>
                  <p>Premium {selectedMaterial} wood with natural finish</p>
                  <p className="mt-1">High-quality hardware and fittings</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Care Instructions</h3>
                  <p>Clean with soft, dry cloth</p>
                  <p className="mt-1">Avoid direct sunlight and moisture</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="customization" className="py-6">
              <div className="space-y-4">
                <p>
                  Our furniture can be customized to fit your specific needs and
                  preferences:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Custom dimensions to fit your space perfectly</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Alternative materials and finishes available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>
                      Additional features like specialized compartments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Hardware and handle options</span>
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mt-4">Request Custom Design</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Request Custom Design</DialogTitle>
                    </DialogHeader>
                    <CustomDesignForm productName={product.name} />
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={`https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80`}
                    alt="Related product"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-3 font-medium">Modern Wardrobe {item}</h3>
                <p className="text-primary">₹38,000</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
