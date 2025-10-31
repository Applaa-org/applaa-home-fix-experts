import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Clock, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { showSuccess, showError } from '@/utils/toast';
import { services } from '@/data/services';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: undefined as Date | undefined,
    time: '',
    address: '',
    message: '',
    urgency: 'standard'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    showSuccess('Booking request submitted successfully! We\'ll confirm your appointment within 2 hours.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      service: '', 
      date: undefined, 
      time: '', 
      address: '', 
      message: '',
      urgency: 'standard'
    });
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const urgentServices = services.filter(s => s.category === 'Plumbing' || s.category === 'Electrical');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Service</h1>
            <p className="text-xl text-blue-100">
              Schedule an appointment with our expert team
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Service Booking Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Service Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Service Type *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.title}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleChange('urgency', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (24/7)</SelectItem>
                            <SelectItem value="urgent">Urgent (Within 24h)</SelectItem>
                            <SelectItem value="standard">Standard (Within 3-5 days)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Preferred Appointment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.date}
                              onSelect={(date) => handleChange('date', date)}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select value={formData.time} onValueChange={(value) => handleChange('time', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                            <SelectItem value="evening">Evening (4PM - 6PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Service Address */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Service Address</h3>
                    <div>
                      <Label htmlFor="address">Full Address *</Label>
                      <Textarea
                        id="address"
                        rows={3}
                        value={formData.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        placeholder="Enter the complete address where the service is needed"
                        required
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                    <div>
                      <Label htmlFor="message">Describe the issue or service needed</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Please provide details about the service you need..."
                      />
                    </div>
                  </div>

                  {/* Emergency Notice */}
                  {formData.urgency === 'emergency' && (
                    <Card className="border-red-200 bg-red-50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-5 h-5 text-red-600" />
                          <p className="text-red-800">
                            <strong>Emergency Service:</strong> For immediate assistance, please call us at 0800 123 4567.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Service Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-gray-600">We respond to all booking requests within 2 hours</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Guaranteed Service</h3>
                  <p className="text-sm text-gray-600">All work comes with a 12-month guarantee</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Local Experts</h3>
                  <p className="text-sm text-gray-600">Serving all areas across the UK</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}