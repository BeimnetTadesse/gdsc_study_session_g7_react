 
import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <div className="random-number-generator">
      <button onClick={generateNumber}>Generate Number</button>
      {randomNumber && <p>Generated Number: {randomNumber}</p>}
    </div>
  );
};

export default RandomNumberGenerator;
