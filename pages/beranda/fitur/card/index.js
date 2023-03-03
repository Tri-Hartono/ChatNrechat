import React from 'react';
import Image from 'next/image';

export default function CardFitur({ ImageFitur, title, detail }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-8 justify-center">
        <Image src={ImageFitur} height={170} alt="" />
        <div className="flex flex-col gap-2 h-full">
          <h2>{title}</h2>
          <p>{detail}</p>
        </div>
      </div>
    </div>
  );
}
