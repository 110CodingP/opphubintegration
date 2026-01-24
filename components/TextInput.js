import React from 'react';

export default function TextInput({ label, value, onChange, placeholder, type = "text" }) {
  const containerStyle = {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left', // Ensures label stays on the left
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: '600',
    color: '#374151',
    fontSize: '14px',
  };

  const inputStyle = {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '50px',
    border: '1px solid gray', // Reduced thickness slightly for cleaner web look
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box', // Prevents padding from breaking layout
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type} // Allows for "password" or "email" types
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
}