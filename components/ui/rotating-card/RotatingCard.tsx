import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const cardImages = [
  // Card 1 images
  [
    "/images/event/home/UXI1.webp",
    "/images/event/home/UXI2.webp",
    "/images/event/home/UXI3.webp",
    "/images/event/home/UXI4.webp",
    "/images/event/home/UXI5.webp",
    "/images/event/home/UXI6.webp",
  ],
  // Card 2 images
  [
    "/images/event/home/UXI7.webp",
    "/images/event/home/UXI8.webp",
    "/images/event/home/UXI9.webp",
    "/images/event/home/UXI10.webp",
    "/images/event/home/UXI11.webp",
    "/images/event/home/UXI12.webp",
  ],
  // Card 3 images
  [
    "/images/event/home/UXI13.webp",
    "/images/event/home/UXI14.webp",
    "/images/event/home/UXI15.webp",
    "/images/event/home/UXI16.webp",
    "/images/event/home/UXI1.webp",
    "/images/event/home/UXI2.webp",
  ],
];

export function RotatingCard({
  images,
  index,
}: {
  images: string[];
  index: number;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-2xl overflow-hidden group relative"
      style={{ aspectRatio: "4/3" }}
    >
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Conference moment ${i + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === i ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      ))}
    </motion.div>
  );
}
