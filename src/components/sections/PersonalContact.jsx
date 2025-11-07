import React from "react";
import profilePic from "@/assets/profile.jpg";
import bgImage from "@/assets/background.jpg";
import sideImage from "@/assets/side.jpg";

const Contact = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center px-6 py-20 text-gray-200">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Neon Glass Card */}
      <div
        className="relative z-10 max-w-5xl w-full backdrop-blur-2xl rounded-2xl shadow-[0_0_30px_rgba(0,150,255,0.5)] border border-blue-400/30 overflow-hidden"
        style={{
          background: "rgba(10, 25, 47, 0.6)", // deep navy glass
          boxShadow: "0 0 30px rgba(0, 150, 255, 0.3)", // glowing blue edge
        }}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 p-8">
          <img
            src={profilePic}
            alt="Mae"
            className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-blue-400"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-300 drop-shadow-md mb-2">
              EM NAM 🌿
            </h2>
            <p className="text-blue-200 text-lg font-medium">Let's Get in Touch!</p>
            <p className="text-gray-300 mt-2 max-w-md">
              Feel free to reach out — I’d love to connect and share stories about
              tech, creativity, or life in general.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-10 pb-10 space-y-6">
          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4 drop-shadow">
              📞 Contact Information
            </h3>
            <ul className="space-y-3 text-lg text-gray-200">
              <li>
                <span className="font-semibold text-blue-300">Phone:</span> +63 912 345 6789
              </li>
              <li>
                <span className="font-semibold text-blue-300">Email:</span> evermae.manansala@cvsu.edu.ph
              </li>
              <li>
                <span className="font-semibold text-blue-300">Facebook:</span>{" "}
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  facebook.com/MHae Manansala
                </a>
              </li>
              <li>
                <span className="font-semibold text-blue-300">Instagram:</span>{" "}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  @eve.nam
                </a>
              </li>
              <li>
                <span className="font-semibold text-blue-300">GitHub:</span>{" "}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  github.com/emnam
                </a>
              </li>
            </ul>
          </div>

          {/* Closing Message */}
          <div className="mt-10">
            <p className="text-lg leading-relaxed text-gray-200 italic">
              Outside of coding, I love watching films, listening to calming music,
              and finding beauty in the simplest things.  
              I believe life, just like programming, is about progress — not perfection.
            </p>
          </div>

          {/* Decorative Image */}
          <div className="flex justify-center mt-10">
            <img
              src={sideImage}
              alt="Mae moments"
              className="w-80 h-56 object-cover rounded-xl shadow-lg border-4 border-blue-400"
            />
          </div>

          {/* Footer Quote */}
          <div className="text-center mt-10">
            <p className="text-blue-200 italic">“Feel free to reach out anytime 🌷”</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
