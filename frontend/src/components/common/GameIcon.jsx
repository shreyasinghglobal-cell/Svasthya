import React from 'react';
import AnimalSticker from '../AnimalSticker';

const GAME_STICKERS = {
  ShoppingBasket: 'tea-time',
  Clock: 'stay-at-home',
  Users: 'love-birds',
  Music: 'listening',
  Eye: 'fox',
  BrainCircuit: 'panda',
  Sparkles: 'love',
  Shapes: 'panda',
  ListOrdered: 'reading',
  Grid: 'panda',
  Smile: 'love',
  Heart: 'love',
  HelpCircle: 'panda',
  Gamepad2: 'stay-at-home',
  Navigation: 'elephant',
  Compass: 'elephant',
  MapPin: 'rhinoceros',
  Utensils: 'tea-time',
  BookOpen: 'reading',
  Calendar: 'stay-at-home',
  Palette: 'love',
  Layers: 'panda',
  Leaf: 'watering-plants',
  meal: 'tea-time',
  Droplets: 'tea-time',
  Pill: 'love',
  Footprints: 'watering-plants'
};

export default function GameIcon({ icon, className = 'w-12 h-12', size = 48 }) {
  if (React.isValidElement(icon)) {
    return icon;
  }

  if (typeof icon === 'function') {
    const Component = icon;
    return <Component className={className} size={size} />;
  }

  const sticker = typeof icon === 'string' ? GAME_STICKERS[icon] || 'panda' : 'panda';
  return <AnimalSticker sticker={sticker} alt="" size={size} className={className} />;
}
