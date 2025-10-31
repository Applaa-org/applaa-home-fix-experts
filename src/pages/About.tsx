import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Shield, Clock, CheckCircle, Wrench, Zap, Home } from 'lucide-react';

export default function About() {
  const certifications = [
    { name: "Gas Safe Registered", icon: <Wrench className="w-8 h-8 text-blue-600" /> },
    { name: "NICEIC Approved", icon: <Zap className="w-8 h-8 text-yellow-600" /> },
    { name: "Building Regulations Compliant", icon: <Home className="w-8 h-8 text-green-600" /> },
    { name: "Fully Insured", icon: <Shield className="w-8 h-8 text-purple-600" /> }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" },
    { number: "12", label: "Month Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Home Fix Experts</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner for professional home services across the UK
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2009, Home Fix Experts has grown from a small family business to one of the UK's most trusted home service providers. We started with a simple mission: to provide reliable, professional, and affordable home services that homeowners can count on.
                </p>
                <p className="text-gray-600 mb-4">
                  Today, we serve thousands of customers across Manchester, London, Birmingham, and beyond. Our team of certified engineers and tradespeople are committed to delivering exceptional service on every job, no matter how big or small.
                </p>
                <p className="text-gray-600">
                  We believe in transparency, quality workmanship, and putting our customers first. That's why all our work comes with a comprehensive 12-month guarantee and we're available 24/7 for emergencies.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <img 
                  src="https://picsum.photos/600/400?random=team" 
                  alt="Our Team"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications & Standards</h2>
            <p className="text-xl text-gray-600">Fully certified and compliant with all industry standards</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {cert.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
                  <p className="text-gray-600">We never compromise on quality. Every job is completed to the highest standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                  <p className="text-gray-600">We show up on time, every time. Your time is valuable, and we respect that.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                  <p className="text-gray-600">All work is performed safely and in compliance with current regulations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                  <p className="text-gray-600">Your satisfaction is our priority. We go above and beyond to exceed expectations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Home Fix Experts Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust us with their home services
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
            <Link to="/booking">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}