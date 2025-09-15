import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigationItems = [
    { name: "About Us", href: "#about" },
    { name: "Our Collection", href: "#collection" },
    { name: "Custom Designs", href: "#custom" },
    { name: "Contact", href: "#contact" }
  ];

  const phoneNumber = "+917204501314";

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Home Link */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MJ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MJ Design Den</h1>
              <p className="text-xs text-gray-600">Premium Custom Furniture</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Section - Search, Call & WhatsApp Icons, CTA */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search furniture..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 h-9"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-600 hover:text-amber-600"
                >
                  <Search className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Call & WhatsApp Icons */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Call Icon */}
              <a
                href={`tel:${phoneNumber}`}
                className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 transition-colors duration-200"
                title="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              
              {/* WhatsApp Icon */}
              <a
                href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 transition-colors duration-200"
                title="WhatsApp us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Button */}
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
              Get Quote
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Search */}
                  <div className="flex items-center space-x-2">
                    <Input
                      type="text"
                      placeholder="Search furniture..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="ghost" size="sm">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Mobile Call & WhatsApp */}
                  <div className="flex items-center justify-center space-x-4 py-4 border-y">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors duration-200"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">Call</span>
                    </a>
                    <a
                      href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors duration-200"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">WhatsApp</span>
                    </a>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200 py-2"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t">
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                      Request Custom Design
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>+91 72045 01314</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>info@mjdesignden.com</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
