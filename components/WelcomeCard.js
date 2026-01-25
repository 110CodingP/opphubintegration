import React, { useState } from 'react';
import SignInCard from './SignInCard';
import SignUpCard from './SignUpCard';

const WelcomeCard = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div style={styles.container}>

      <div style={styles.cardWrapper}>
        {isSignIn ? (
          <SignInCard onSwitch={() => setIsSignIn(false)} />
        ) : (
          <SignUpCard onSwitch={() => setIsSignIn(true)} />
        )}
      </div>

    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  toggleWrapper: {
    marginBottom: '20px',
    backgroundColor: '#e5e7eb',
    padding: '4px',
    borderRadius: '8px',
    display: 'flex',
    gap: '8px',
  },
  activeButton: {
    padding: '8px 24px',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#111827',
    transition: 'all 0.2s',
  },
  inactiveButton: {
    padding: '8px 24px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#6b7280',
    fontWeight: '500',
    transition: 'all 0.2s',
  },
  cardWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
};

export default WelcomeCard;
