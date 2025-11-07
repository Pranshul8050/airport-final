import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroAirport1 from "@/assets/hero-airport-1.jpg";
import heroAirport2 from "@/assets/hero-airport-2.jpg";
import heroMumbai3 from "@/assets/hero-mumbai-3.jpg";

const slides = [
  {
    image: heroAirport1,
    title: "WELCOME TO MUMBAI INTERNATIONAL AIRPORT",
    subtitle: "Connecting The World To India's Financial Capital",
    cta: "EXPLORE SERVICES",
  },
  {
    image: heroAirport2,
    title: "FLY NONSTOP TO YOUR DREAM DESTINATION",
    subtitle: "Experience World-Class Aviation Excellence",
    cta: "BOOK NOW",
  },
  {
    image: heroMumbai3,
    title: "YOUR JOURNEY BEGINS HERE",
    subtitle: "Modern Facilities & Exceptional Hospitality Await",
    cta: "LEARN MORE",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[700px] overflow-hidden bg-navy">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-widest animate-fade-in drop-shadow-2xl">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl animate-slide-up drop-shadow-lg">
              {slide.subtitle}
            </p>
            <Button
              size="lg"
              className="bg-white text-navy hover:bg-white/90 hover:scale-105 transition-all duration-300 px-12 py-6 text-lg font-semibold tracking-wider shadow-2xl animate-slide-up"
            >
              {slide.cta}
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all hover:scale-110"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all hover:scale-110"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-12" : "bg-white/50 w-3 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
