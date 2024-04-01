import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use loading context
export const useLoading = () => useContext(LoadingContext);
