import shopDine1 from "@/assets/shop-dine-1.jpg";
import shopDine2 from "@/assets/shop-dine-2.jpg";
import shopDine3 from "@/assets/shop-dine-3.jpg";
import shopDine4 from "@/assets/shop-dine-4.jpg";
import shopDine5 from "@/assets/shop-dine-5.jpg";

const ShopDine = () => {
  const images = [
    { src: shopDine1, alt: "Airport Cafe" },
    { src: shopDine2, alt: "Restaurant Dining" },
    { src: shopDine3, alt: "Shopping Area" },
    { src: shopDine4, alt: "Coffee Shop" },
    { src: shopDine5, alt: "Airport Lounge" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-light text-center text-foreground mb-6 tracking-widest">
          SHOP & DINE
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-xl">
          Looking for Something Local?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <span className="text-white text-xl font-semibold tracking-wider">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopDine;
