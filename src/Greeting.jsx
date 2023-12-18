 
import React, { useState } from 'react';

const Greeting = ({ name }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="greeting">
      <button onClick={toggleVisibility}>Toggle Greeting</button>
      {isVisible && <p>Hello, {name}!</p>}
    </div>
  );
};

export default Greeting;
