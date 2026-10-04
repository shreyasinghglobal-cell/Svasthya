import React from 'react';

const ANIMAL_STICKERS = {
  panda: '/animals/panda.png',
  bear: '/animals/bear.png',
  fox: '/animals/fox.png',
  rabbit: '/animals/rabbit.png',
  elephant: '/animals/elephant.png',
  sheep: '/animals/sheep.png',
  cow: '/animals/cow.png',
  deer: '/animals/deer.png',
  rhinoceros: '/animals/rhinoceros.png'
};

const PACK_STICKERS = {
  'love-birds': '/stickers/love/love-birds.png',
  'love-letter': '/stickers/love/love-letter.png',
  love: '/stickers/love/love.png',
  'stay-at-home': '/stickers/stay-at-home/stay-at-home.png',
  reading: '/stickers/stay-at-home/reading.png',
  'tea-time': '/stickers/stay-at-home/tea-time.png',
  listening: '/stickers/stay-at-home/listening.png',
  'watering-plants': '/stickers/stay-at-home/watering-plants.png'
};

export default function AnimalSticker({
  animal = 'panda',
  sticker,
  alt,
  size = 40,
  className = '',
  style = {},
  ...props
}) {
  const stickerSrc = PACK_STICKERS[sticker] || ANIMAL_STICKERS[animal] || ANIMAL_STICKERS.panda;

  return (
    <img
      src={stickerSrc}
      alt={alt ?? `${sticker || animal} sticker`}
      width={size}
      height={size}
      className={className}
      style={{ width: typeof size === 'number' ? `${size}px` : size, height: typeof size === 'number' ? `${size}px` : size, objectFit: 'contain', ...style }}
      {...props}
    />
  );
}
