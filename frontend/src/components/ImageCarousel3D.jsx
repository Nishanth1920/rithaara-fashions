import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Instagram } from 'lucide-react'

import img1 from "../public/home-images/saree1.jpeg";
import img2 from "../public/home-images/saree2.jpeg";
import img3 from "../public/home-images/saree3.jpeg";
import img4 from "../public/home-images/saree4.jpeg";
import img5 from "../public/home-images/saree5.jpeg";
import img6 from "../public/home-images/saree6.jpg";
import img7 from "../public/home-images/saree7.jpg";
import img8 from "../public/home-images/saree8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ImageCarousel = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);
  const total = images.length;

  // 🔁 Auto rotate
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 2000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  return (
    <div
      className="relative w-full py-3 overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={stopAutoSlide}
      onTouchEnd={startAutoSlide}
    >
      <div className="relative flex justify-center items-center h-[380px] md:h-[420px]">
        {images.map((img, index) => {
          let offset = index - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer group"
              animate={{
                x: offset * 240,
                scale: isActive ? 1 : 0.9,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: isActive ? 10 : 5,
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              onClick={() => setActive(index)}
            >
              <div className="relative w-[200px] h-[300px] md:w-[240px] md:h-[360px]
    rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <a
                  href="https://www.instagram.com/rithaara_fashions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="block w-full h-full"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0
        group-hover:opacity-100 transition-opacity
        flex items-center justify-center
        pointer-events-none"
                  >
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </a>
              </div>
            </motion.div>

          );
        })}
      </div>


      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${i === active ? "bg-black" : "bg-black/30"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
