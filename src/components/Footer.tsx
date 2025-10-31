import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">HF</span>
              </div>
              <span className="text-xl font-bold">Home Fix Experts</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted local experts for plumbing, electrical, and building services across the UK. 
              Professional, reliable, and fully certified tradespeople.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-white transition-colors">
                  Book Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">24/7 Emergency</p>
                  <p className="text-white">0800 123 4567</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">info@homefixexperts.co.uk</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white">123 Service Road<br />Manchester, M1 2AB</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Home Fix Experts. All rights reserved. | 
              <a href="#" className="hover:text-white ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-white ml-1">Terms of Service</a> | 
              <a href="#" className="hover:text-white ml-1">GDPR Compliance</a>
            </p>
            <MadeWithApplaa />
          </div>
        </div>
      </div>
    </footer>
  );
}