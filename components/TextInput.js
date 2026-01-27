import React from 'react';

export default function TextInput({ label, value, onChange, placeholder, type = "text" }) {
  const containerStyle = {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left', 
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
    border: '1px solid gray', 
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box', 
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type} 
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
}
