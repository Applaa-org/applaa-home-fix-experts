import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Cookie Notice</h3>
            <p className="text-sm text-gray-300">
              We use cookies to enhance your experience, analyze site traffic, and personalize content. 
              By continuing to use our site, you agree to our use of cookies in accordance with our 
              <a href="#" className="underline ml-1 hover:text-white">Privacy Policy</a>.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={declineCookies}
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              Decline
            </Button>
            <Button 
              size="sm" 
              onClick={acceptCookies}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Accept All
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-2 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}