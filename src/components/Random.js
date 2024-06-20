import React, { useState, useEffect } from 'react';
import './random.css';

// Sample array of names
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah"];

const Random = () => {
 
  const [currentName, setCurrentName] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  // Function to randomly select a name
  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  useEffect(() => {
    // Set an initial random name
    setCurrentName(getRandomName());

    // Update the name at regular intervals
    const intervalId = setInterval(() => {
      setAnimationClass('fade-out');
      setTimeout(() => {
        setCurrentName(getRandomName());
        setAnimationClass('fade-in');
      }, 500);
    }, 3000); // Change name every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="chat-container">
      <h1>ChatGPT</h1>
      <p className={`name-display ${animationClass}`}>{currentName}</p>
    </div>
  );
};


export default Random




