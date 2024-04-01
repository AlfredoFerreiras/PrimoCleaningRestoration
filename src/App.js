import React, { Fragment, useState, useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Importing context and components
import { useLoading } from "./context/loading/LoadingContext";
import Navigation from "./Components/Navigation";
import MobileNavigation from "./Components/MobileNavigation";
import Footer from "./Components/Footer";
import AppRoutes from "./Routes"; // Adjust the import path according to your project structure
import LoadingSpinner from "./Components/Loading/Loading";

// Styles
import "./App.scss";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();
  const { isLoading, setIsLoading } = useLoading();

  // Effect for handling the loading state on route change
  useEffect(() => {
    setIsLoading(true);
    // Simulate loading or fetch data here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

  // Effect for managing scroll-related UI logic
  useEffect(() => {
    const handleScroll = () => {
      const positionY = window.scrollY;
      const windowWidth = window.innerWidth;
      setShowScrollToTop(positionY > 200 && windowWidth >= 1100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      <div className="App">
        <div className="wrapper">
          <MobileNavigationWrapper
            isOpen={isMobileMenuOpen}
            closeMenu={() => setIsMobileMenuOpen(false)}
          />
          <Navigation openMobileMenu={() => setIsMobileMenuOpen(true)} />
          <Suspense fallback={<div>Loading...</div>}>
            <AppRoutes />
          </Suspense>
          {showScrollToTop && (
            <button
              onClick={smoothScrollToTop}
              style={{ position: "fixed", bottom: "20px", right: "20px" }}>
              Scroll To Top
            </button>
          )}
          <Footer scrollToTop={smoothScrollToTop} />
        </div>
      </div>
    </Fragment>
  );
}

function MobileNavigationWrapper({ isOpen, closeMenu }) {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="mobile-navigation"
      unmountOnExit>
      <div className="mobile-menu-wrapper">
        <MobileNavigation closeMobileMenu={closeMenu} />
      </div>
    </CSSTransition>
  );
}

export default App;
