import React from 'react';

export default function TextInput({ label, value, onChange, placeholder }) {
  const containerStyle = {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column'
  };

  const inputStyle = {
    padding: '5%',
    fontSize: '90%',
    borderRadius: '50px',
    border: '3px solid gray',
   // textColor:'pink',
  };

  return (
    <div style={containerStyle}>
      <label style={{ marginBottom: '5px', fontWeight: '600',color:'black' }}>{label}</label>
      <input 
        type="text"
        value={value} 
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)} 
        style={inputStyle}
      />
    </div>
  );
}