"use client"

import Image from "next/image"

const cards = [
  { image: "/Carousel-05.webp", scale: 0.65, offset: -320, zIndex: 1 },   // far left
  { image: "/Carousel-08.webp", scale: 0.75, offset: -210, zIndex: 2 },   // left
  { image: "/Carousel-01.webp", scale: 0.85, offset: -105, zIndex: 3 },   // center-left
  { image: "/Carousel-12.webp", scale: 1.0, offset: 0, zIndex: 4 },       // center
  { image: "/Carousel-09.webp", scale: 0.85, offset: 105, zIndex: 3 },    // center-right
  { image: "/Carousel-14.webp", scale: 0.75, offset: 210, zIndex: 2 },    // right
  { image: "/Carousel-03.webp", scale: 0.65, offset: 320, zIndex: 1 },    // far right
]

export default function ImageStack() {
  return (
    <div className="relative w-full h-[380px] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="absolute rounded-3xl overflow-hidden"
            style={{
              width: 280 * card.scale,
              height: 360 * card.scale,
              transform: `translateX(${card.offset}px)`,
              zIndex: card.zIndex,
              bottom: -140,
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src={card.image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
