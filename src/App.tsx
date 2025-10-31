import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyBookButton from "./components/StickyBookButton";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <StickyBookButton />
          <CookieConsent />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create about route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create services route
const servicesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: Services,
})

// Create testimonials route
const testimonialsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/testimonials',
  component: Testimonials,
})

// Create contact route
const contactRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

// Create booking route
const bookingRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/booking',
  component: Booking,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  testimonialsRoute,
  contactRoute,
  bookingRoute,
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;