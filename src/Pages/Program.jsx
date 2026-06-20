import React from "react";

function Program() {
  return (
    <section id="programs" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">Our Programs</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl shadow-lg hover:-translate-y-3 transition">
            <h3 className="text-2xl font-bold mb-3">Education</h3>
            <p>
              Providing quality learning opportunities to underprivileged
              children.
            </p>
          </div>

          <div className="p-8 rounded-3xl shadow-lg hover:-translate-y-3 transition">
            <h3 className="text-2xl font-bold mb-3">Skill Development</h3>
            <p>Training youth with modern industry skills for employment.</p>
          </div>

          <div className="p-8 rounded-3xl shadow-lg hover:-translate-y-3 transition">
            <h3 className="text-2xl font-bold mb-3">Women Empowerment</h3>
            <p>
              Supporting women through education, awareness and
              entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Program;
