import React from 'react';
import ForumPage from './ForumPage'; // Ensure the path matches your file structure
import './App.css'; // Optional: if you have global styles

function App() {
  return (
    <div className="App">
      {/* You can wrap it in a main tag or a layout container */}
      <main>
        <ForumPage />
      </main>
    </div>
  );
}

export default App;