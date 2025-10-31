import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Clock, Shield, Award, Wrench, Zap, Home, Hammer, Star } from 'lucide-react';
import { services, serviceCategories } from '@/data/services';
import { testimonials } from '@/data/testimonials';

export default function Index() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "24/7 Emergency Service",
      description: "Available round the clock for urgent repairs and emergencies"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Fully Insured & Certified",
      description: "All our engineers are fully qualified and insured for your peace of mind"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "12-Month Guarantee",
      description: "All work comes with a comprehensive 12-month guarantee"
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Local Experts",
      description: "Serving communities across the UK with local knowledge"
    }
  ];

  const categoryIcons = {
    "Plumbing": <Wrench className="w-12 h-12 text-blue-600" />,
    "Electrical": <Zap className="w-12 h-12 text-yellow-600" />,
    "Building": <Home className="w-12 h-12 text-green-600" />,
    "Maintenance": <Hammer className="w-12 h-12 text-purple-600" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Trusted by 10,000+ UK Homeowners
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Plumbing, Electrical & Building Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert tradespeople you can trust. Fast, reliable, and affordable solutions for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                <Link to="/booking">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Emergency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for all your home maintenance needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {categoryIcons[category.name as keyof typeof categoryIcons]}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {services.filter(s => s.category === category.name).length} services available
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Home Fix Experts?</h2>
            <p className="text-xl text-gray-600">Professional service you can count on</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                  <p className="text-sm text-gray-500 mt-3">{testimonial.service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/testimonials">View All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free, no-obligation quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}