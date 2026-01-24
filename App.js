import React, { useState } from 'react';
import SignInCard from './components/SignInCard'; // Adjust path if needed
import SignUpCard from './components/SignUpCard'; // Adjust path if needed

function App() {
  // State to toggle between the two views
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      
      {/* Toggle Controls (For testing purposes) */}
      <div className="mb-8 p-1 bg-gray-200 rounded-lg inline-flex">
        <button
          onClick={() => setIsSignIn(true)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            isSignIn 
              ? 'bg-white text-gray-900 shadow-sm' 
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          View Sign In
        </button>
        <button
          onClick={() => setIsSignIn(false)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            !isSignIn 
              ? 'bg-white text-gray-900 shadow-sm' 
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          View Sign Up
        </button>
      </div>

      {/* Render the selected card */}
      <div className="w-full flex justify-center">
        {isSignIn ? <SignInCard /> : <SignUpCard />}
      </div>

    </div>
  );
}

export default App;