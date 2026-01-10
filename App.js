import React, { useState } from 'react';
import TextInput from './components/TextInput'; // Make sure the filename matches exactly
import Button from './components/Button';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Frontend Brush-up</h1>
      <TextInput 
        label="Enter your text here:" 
        placeholder="Type something..." 
        value={inputValue} 
        onChange={setInputValue} 
      />
      <div style={{ marginTop: '20px', color: '#666' }}>
        <strong>Live Preview:</strong> {inputValue || "(Waiting for you to type...)"}
      </div>
      <div>
      <Button 
        label="click here"
        color="red"
      />
      </div>
    </div>
  );
}