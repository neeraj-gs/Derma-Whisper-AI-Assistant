import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'CONCERNS', path: '/concerns' },
    { label: 'TREATMENT', path: '/treatments' },
    { label: 'TESTIMONIAL', path: '/testimonials' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'CONTACT US', path: '/contact' },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919632629459" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 9632629459</span>
            </a>
            <a href="mailto:skinsciencebengaluru@gmail.com" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span>skinsciencebengaluru@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur opacity-30"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SKINSCIENCE
              </h1>
              <p className="text-xs text-gray-600">SKIN | HAIR | AESTHETICS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Button
              id="ai-assistant-trigger"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              CALL US
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-3 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                id="ai-assistant-trigger-mobile"
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full shadow-lg"
              >
                CALL US
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};