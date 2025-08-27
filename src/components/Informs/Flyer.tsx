
'use client'

import {useState} from 'react'
import Image from 'next/image'

interface FlippingCardsProps {
    imageUrl: string;
    altText: string;
    cardText:string
}

export const Flyer = ({imageUrl, altText, cardText}: FlippingCardsProps) => {
  
    const [isFlipping, setIsFlipping] = useState<boolean>(false)
    
    const handleFlip = () => {
        setIsFlipping(!isFlipping)
    }


    return (
         <div
      onClick={handleFlip}
      className={`
        relative w-48 h-64 cursor-pointer
      `}
      style={{ perspective: '1000px', overflow:'hidden'}}
    >
      <div
        className={`
          absolute w-full h-full transition-transform duration-700
           [transform-style:preserve-3d] [backface-visibility: hidden]
          ${isFlipping ? '[transform:rotateY(180deg)]' : ''}         
        `}
        style={{backfaceVisibility: 'hidden'}}
      >
        <div
          className="
            absolute w-full h-full
            p-4 flex items-center justify-center text-center

          "
        >
          <p>{cardText}</p>
        </div>

        <div
          className="
            absolute inset-0 w-full h-full bg-gray-800 text-white rounded-lg
          "
        >
          <div className='relative w-full h-full [backface-visibility: hidden]' >
         <Image
            src={imageUrl}
            alt={altText}
           fill
            className="rounded-lg object-cover"
          />

          </div>
        </div>
      </div>
         </div>
  );
}


