import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Calendar } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Testimonials</h1>
            <p className="text-xl text-blue-100 mb-8">
              Real reviews from real customers who trust Home Fix Experts
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold">{averageRating}</div>
                <div className="flex items-center justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-blue-100 mt-2">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">{testimonials.length}</div>
                <p className="text-sm text-blue-100 mt-2">Total Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                    <Badge variant="outline">{testimonial.service}</Badge>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(testimonial.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Our Customers Love Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">Would recommend us</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                <p className="text-gray-600">Average satisfaction score</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24h</div>
                <p className="text-gray-600">Average response time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}