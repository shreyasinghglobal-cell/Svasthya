import React from 'react';
import AnimalSticker from './AnimalSticker';

export default function FoxtailOrchidIcon({ className = 'w-6 h-6' }) {
  return (
    <AnimalSticker
      animal="panda"
      alt="Svasthya Panda sticker"
      size={48}
      className={`block ${className}`}
    />
  );
}
