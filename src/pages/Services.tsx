import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wrench, Zap, Home, Hammer, Clock, Shield, CheckCircle } from 'lucide-react';
import { services, serviceCategories } from '@/data/services';

export default function Services() {
  const categoryIcons = {
    "Plumbing": <Wrench className="w-6 h-6" />,
    "Electrical": <Zap className="w-6 h-6" />,
    "Building": <Home className="w-6 h-6" />,
    "Maintenance": <Hammer className="w-6 h-6" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services & Pricing</h1>
            <p className="text-xl text-blue-100">
              Professional services at competitive prices. No hidden fees, just quality work.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="all">All Services</TabsTrigger>
              {serviceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.name.toLowerCase()}>
                  <span className="flex items-center space-x-2">
                    {categoryIcons[category.name as keyof typeof categoryIcons]}
                    <span>{category.name}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.name.toLowerCase()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services
                    .filter(service => service.category === category.name)
                    .map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <span>Emergency Rates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">£85-£150/hour</p>
                  <p className="text-gray-600">24/7 emergency service with no call-out fees</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wrench className="w-6 h-6 text-green-600" />
                    <span>Standard Rates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600 mb-2">£60-£100/hour</p>
                  <p className="text-gray-600">Regular maintenance and repair services</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-purple-600" />
                    <span>Project Quotes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-600 mb-2">Fixed Price</p>
                  <p className="text-gray-600">Detailed quotes for larger projects</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Service Not Listed?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us for custom solutions and competitive quotes
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
            <Link to="/contact">Get Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{service.title}</CardTitle>
          <Badge variant="secondary">{service.category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-blue-600">{service.price}</p>
            <p className="text-sm text-gray-500">{service.duration}</p>
          </div>
          <div className="text-3xl">{service.icon}</div>
        </div>
        <div className="space-y-2 mb-4">
          {service.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
        <Button className="w-full" asChild>
          <Link to="/booking">Book This Service</Link>
        </Button>
      </CardContent>
    </Card>
  );
}