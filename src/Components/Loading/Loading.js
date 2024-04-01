import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-24 h-24">
        {/* Main flame */}
        <div className="absolute bg-gradient-to-t from-yellow-600 to-red-500 rounded-full w-12 h-12 top-0 left-6 animate-pulse"></div>

        {/* Smaller flame */}
        <div className="absolute bg-gradient-to-t from-yellow-500 to-red-500 rounded-full w-8 h-8 top-4 left-8 animate-ping"></div>

        {/* Tiny flame */}
        <div className="absolute bg-gradient-to-t from-yellow-400 to-red-500 rounded-full w-6 h-6 top-2 left-10 animate-pulse delay-200"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
