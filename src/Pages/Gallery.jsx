import React from "react";

function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="h-64 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-700"></div>

          <div className="h-64 rounded-2xl bg-gradient-to-r from-purple-400 to-purple-700"></div>

          <div className="h-64 rounded-2xl bg-gradient-to-r from-green-400 to-green-700"></div>

          <div className="h-64 rounded-2xl bg-gradient-to-r from-pink-400 to-pink-700"></div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
