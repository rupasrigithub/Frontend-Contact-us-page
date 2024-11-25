import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AdImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const adImages = [
  '/ad1.jpeg',
  '/ad2.jpg',
  '/ad3.jpg',
  '/ad4.jpg',
  '/ad5.jpg',
  '/ad6.jpg',
  '/ad7.jpg',
  '/ad8.jpg',
  
];

export default function AdBanner() {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % adImages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AdImage 
      src={adImages[currentAdIndex]} 
      alt="Advertisement" 
    />
  );
}

