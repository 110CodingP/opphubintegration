import React from 'react';

export default function Button({ label, color = "#2563EB", onClick, type = "button" }) {
  const styles = {
    backgroundColor: color,
    color: "white", // Changed to white for better readability on blue
    padding: "12px 24px", // Fixed units for better consistency
    border: "none",
    borderRadius: "5px",
    margin: "10px 0",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    width: "100%", // Makes button full width in the card
  };

  return (
    <button style={styles} onClick={onClick} type={type}>
      {label}
    </button>
  );
} 
