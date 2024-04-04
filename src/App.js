import React, { Fragment, useState, useEffect, Suspense } from "react";

import { CSSTransition } from "react-transition-group";

// Importing context and components

import Navigation from "./Components/Navigation";
import MobileNavigation from "./Components/MobileNavigation";
import Footer from "./Components/Footer";
import AppRoutes from "./Routes"; // Adjust the import path according to your project structure
import LoadingSpinner from "./Components/Loading/Loading";

// Styles
import "./App.scss";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Effect for handling the loading state on route change
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds (for demonstration)
    }, 1000);
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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

            <Footer />
          </div>
        </div>
      )}
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
