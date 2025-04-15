import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51RCyai4RV5HnBRgzJJEKqyxe6fVnx4AboULKNGHxtKvBXUr5C1ylhcxwU1QYgeZp98CItDfeYaIjQhouo3jfSAXz00cHyxztQ5'); // Replace with your actual Publishable Key from Stripe Dashboard


const Header = lazy(() => import('./components/header/Header'));
const HeroBanner = lazy(() => import('./components/heroBanner/HeroBanner'));
const FeatureGrid = lazy(() => import('./components/featureGrid/FeatureGrid'));
const FeaturedCategories = lazy(() => import('./components/featureGrid/FeaturedCategories'));
const FeaturedProducts = lazy(() => import('./components/featuredProducts/FeaturedProducts'));
const DealOfTheDay = lazy(() => import('./components/dealOfTheDay/DealOfTheDay'));
const Testimonial = lazy(() => import('./components/testimonial/Testimonial'));
const Partners = lazy(() => import('./components/partners/Partners'));
const Newsletter = lazy(() => import('./components/newsletter/Newsletter'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Checkout = lazy(() => import('./components/checkout/Checkout'));
const Login = lazy(() => import('./components/auth/Auth'));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loading-container">
            <img
              src="/assets/images/loader.webp"
              alt="Loading..."
              className="loading-image"
            />
          </div>
        }
      >
        {/* Render Header conditionally */}
        <ConditionalHeader />
        <Elements stripe={stripePromise}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroBanner />
                  <FeatureGrid />
                  <FeaturedCategories />
                  <FeaturedProducts />
                  <DealOfTheDay />
                  <Testimonial />
                  <Partners />
                  <Newsletter />
                  <Footer />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <Checkout />
                  <Newsletter />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Elements>
      </Suspense>
    </Router>
  );
}

function ConditionalHeader() {
  const location = useLocation();

  // Render the Header only if the current route is not '/login'
  if (location.pathname === "/login") {
    return null;
  }
  return <Header />;
}

export default App;
