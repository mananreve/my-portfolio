import React from "react";
import bgImage from "@/assets/background.jpg";
import project1 from "@/assets/restorantedelsignore.jpg";
import project2 from "@/assets/rps.jpg";

const Projects = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center px-6 py-20 text-gray-100">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.5)",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full bg-blue-950/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-blue-400/40">
        <h2 className="text-4xl font-bold text-center text-blue-200 mb-12">
          💻 My Projects
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 border border-blue-400/30">
            <img
              src={project1}
              alt="Project 1"
              className="w-full h-56 object-cover rounded-lg mb-5 border border-blue-300"
            />
            <h3 className="text-2xl font-semibold text-blue-200 mb-3">
              Project 1: Restorante Del Signore
            </h3>
             <p className="text-blue-100 leading-relaxed">
              This is the first website we created as Computer Science students.  
              It’s a basic online resto ordering built using{" "}
              <span className="font-medium text-blue-300">HTML, CSS, and JavaScript</span>.  
              The site focuses mainly on the{" "}
              <span className="font-medium text-blue-300">front-end design</span> —  
              meaning the add-to-cart feature and ordering system aren’t functional yet.  
              It was our first step into the world of web development,  
              where we learned about structure, layout, and basic interactivity 🌿.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 border border-blue-400/30">
            <img
              src={project2}
              alt="Project 2"
              className="w-full h-56 object-cover rounded-lg mb-5 border border-blue-300"
            />
            <h3 className="text-2xl font-semibold text-blue-200 mb-3">
             Project 2: Rock-Paper-Scissors Game (Java GUI)
            </h3>
            <p className="text-blue-100 leading-relaxed">
              This is a simple yet fun{" "}
              <span className="font-medium text-blue-300">Rock-Paper-Scissors game</span>  
              developed using <span className="font-medium text-blue-300">Java and GUI</span>.  
              It’s a working game with a{" "}
              <span className="font-medium text-blue-300">scoring system</span> and allows multiple game trials.  
              The only challenge we encountered was that during multiplayer mode,  
              it couldn’t fully hide each player’s move — but it still delivers a great learning experience  
              about logic handling, GUI layout, and user interaction 🕹️.
            </p>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center mt-14">
          <p className="text-blue-200 text-lg italic">
            “Each project is a reflection of growth — one idea, one challenge, one victory at a time.” 🌷
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
