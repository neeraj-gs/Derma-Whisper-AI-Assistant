import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">SKINSCIENCE</h3>
                <p className="text-xs text-gray-400">SKIN | HAIR | AESTHETICS</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              SkinScience, nestled in the heart of Banashankari, Bangalore is the one-stop destination for all your
              dermatological needs. Established by Bangalore's leading dermatologist Dr. Vani Vasanth.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 pt-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919632629459" className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+91 9632629459</span>
              </a>
              <a href="mailto:skinsciencebengaluru@gmail.com" className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">skinsciencebengaluru@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  942, 1st Floor, above ICICI Bank,<br />
                  near BDA Complex, 21st main,<br />
                  BSK 2nd Stage, Bengaluru - 560070
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">About Clinic</Link>
              <Link to="/concerns" className="block text-gray-300 hover:text-white transition-colors text-sm">Concerns</Link>
              <Link to="/treatments" className="block text-gray-300 hover:text-white transition-colors text-sm">Treatments</Link>
              <Link to="/testimonials" className="block text-gray-300 hover:text-white transition-colors text-sm">Testimonials</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Popular Treatments</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Laser Hair Reduction</p>
              <p className="text-gray-300 text-sm">Acne Treatment</p>
              <p className="text-gray-300 text-sm">Anti-Aging Solutions</p>
              <p className="text-gray-300 text-sm">Pigmentation Removal</p>
              <p className="text-gray-300 text-sm">Facial Contouring</p>
              <p className="text-gray-300 text-sm">Hair Regrowth Therapy</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Skinscience. All rights reserved. | Designed by Digilantern
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/admin" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919632629459"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-40"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2c-.122.425.313.857.738.738l3.032-.892A9.938 9.938 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
      </a>
    </footer>
  );
};