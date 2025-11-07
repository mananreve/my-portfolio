import React from "react";
import bgImage from "@/assets/background.jpg"; // make sure this image exists in src/assets/

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6 py-16 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.4)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl bg-black/30 backdrop-blur-md p-10 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-emerald-200 mb-6">About Me</h2>
        <p className="text-lg text-gray-100 leading-relaxed mb-8">
          I'm <span className="font-semibold text-emerald-300">Mae</span>, a Computer Science student who,
          unfortunately (HAHA), is doing my best to make it through this course I’ve chosen. It’s tough,
          but I’m surviving — and I’ll keep going. The road may be long, but what matters is that I’ve
          already come a long way.
        </p>

        <p className="text-gray-200 mb-10">
          If you want to know more about me — my hobbies, likes, and much more — just click the button below.
        </p>

       <a
  href="/aboutem"
  className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-all shadow-md"
>
  Click EM!
</a>

      </div>
    </section>
  );
};

export default About;
