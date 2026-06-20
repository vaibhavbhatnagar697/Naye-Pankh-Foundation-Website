import React from "react";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpagoCm5_-2RtKST-J-cjXekHJAL7_bMDQwP51xpL0Q&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIU6693iOe6qWTShBZ_lydSevlWuECHDCesYdPjsrRQw&s=10",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {images.map((img, index) => (
            <div
              key={index}
              className="h-64 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`NGO Child ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
