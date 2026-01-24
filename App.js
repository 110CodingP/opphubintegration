import React from 'react';
import WelcomeCard from './components/WelcomeCard';

function App() {
  return (
    <div style={styles.pageContainer}>
      <WelcomeCard />
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',            
    justifyContent: 'center',   
    alignItems: 'center',       
    minHeight: '100vh',         
    width: '100vw',             
    backgroundColor: '#f3f4f6', 
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  }
};

export default App;