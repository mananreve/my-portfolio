import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "@/assets/background.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center text-white relative px-6"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-1000"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.4)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Mae 🌿</h1>
        <p className="text-lg mb-8 leading-relaxed">
          A <span className="font-semibold">Computer Science student</span> with a curious mind and a creative heart.
        I love exploring how technology connects people and ideas.
        Every project I build is a step toward learning, growing, and finding my place in the tech world.
        </p>
        <p className="text-base italic text-gray-200 mb-8">
          “Even if the road is long, what matters most is how far I’ve already come.”
        </p>

        {/* About Me Button */}
        <button
          onClick={handleAboutClick}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105"
        >
          About Me
        </button>
      </div>
    </section>
  );
};

export default Home;
