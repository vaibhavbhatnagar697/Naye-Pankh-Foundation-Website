import React from "react";

function Event() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="h-56 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="p-6">
              <h3 className="font-bold text-xl">Education Drive</h3>
              <p className="mt-2">
                Helping children access learning resources.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="h-56 bg-gradient-to-r from-green-500 to-teal-500"></div>
            <div className="p-6">
              <h3 className="font-bold text-xl">Blood Donation Camp</h3>
              <p className="mt-2">
                Community health awareness and donation drive.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="h-56 bg-gradient-to-r from-pink-500 to-red-500"></div>
            <div className="p-6">
              <h3 className="font-bold text-xl">Women Leadership Workshop</h3>
              <p className="mt-2">
                Empowering women through leadership training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
