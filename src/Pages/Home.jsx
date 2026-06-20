import { Heart, Users, BookOpen } from "lucide-react";
import React from "react";

function Home({ darkMode }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="animate-pulse">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Empowering Lives,
            <span className="block text-blue-500">Creating Opportunities</span>
          </h1>
        </div>

        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-10">
          NayePankh Foundation works towards education, empowerment, and
          community development for a brighter future.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:scale-105 transition">
            Donate Now
          </button>

          <button className="px-8 py-3 border rounded-xl hover:scale-105 transition">
            Become Volunteer
          </button>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-5">About Us</h2>

            <p className="text-lg leading-relaxed">
              NayePankh Foundation is dedicated to transforming communities
              through education, skill development, healthcare awareness, and
              social empowerment initiatives.
            </p>
          </div>

          <div className="rounded-3xl h-80 bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl hover:scale-105 transition duration-500"></div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-2 transition duration-300">
              <Users className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-4xl font-bold">10K+</h3>
              <p>Lives Impacted</p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-2 transition duration-300">
              <BookOpen className="w-12 h-12 mb-4 text-green-500" />
              <h3 className="text-4xl font-bold">500+</h3>
              <p>Education Programs</p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-2 transition duration-300">
              <Heart className="w-12 h-12 mb-4 text-red-500" />
              <h3 className="text-4xl font-bold">200+</h3>
              <p>Active Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl p-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>

          <p className="mb-8 text-lg">
            Become a volunteer and help us create lasting positive change in
            society.
          </p>

          <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Join Today
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className={`p-4 rounded-xl border ${darkMode ? " placeholder-gray-300" : " placeholder-gray-500"}`}
            />

            <input
              type="email"
              placeholder="Your Email"
              className={`p-4 rounded-xl border ${darkMode ? " placeholder-gray-300" : " placeholder-gray-500"}`}
            />
          </div>

          <textarea
            rows="5"
            placeholder="Message"
            className={`w-full mt-6 p-4 rounded-xl border ${darkMode ? " placeholder-gray-300" : " placeholder-gray-500"}`}
          ></textarea>

          <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-xl hover:scale-105 transition">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
}
export default Home;
