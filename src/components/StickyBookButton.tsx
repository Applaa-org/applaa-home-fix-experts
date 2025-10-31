import { Link } from '@tanstack/react-router';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

export default function StickyBookButton() {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <Button asChild className="bg-blue-600 hover:bg-blue-700 shadow-lg rounded-full px-6 py-3">
        <Link to="/booking" className="flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span>Book Now</span>
        </Link>
      </Button>
    </div>
  );
}