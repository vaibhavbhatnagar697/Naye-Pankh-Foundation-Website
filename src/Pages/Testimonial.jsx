import React from "react";

function Testimonial() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-2 transition duration-300">
            <p>
              "NayePankh Foundation changed my life by providing access to
              education."
            </p>
            <h4 className="font-bold mt-4">- Student Beneficiary</h4>
          </div>

          <div className="p-8 rounded-3xl shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-2 transition duration-300">
            <p>"Volunteering here has been a rewarding experience."</p>
            <h4 className="font-bold mt-4">- Volunteer</h4>
          </div>

          <div className="p-8 rounded-3xl shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-2 transition duration-300">
            <p>"An NGO truly making a difference in society."</p>
            <h4 className="font-bold mt-4">- Community Partner</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonial;
