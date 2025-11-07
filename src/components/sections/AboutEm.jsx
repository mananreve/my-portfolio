import React from "react";
import profilePic from "@/assets/cat.jpg";
import sideImage from "@/assets/matcha.jpg";
import bgImage from "@/assets/background.jpg";

const AboutEm = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center px-6 py-20 text-gray-800">
      {/* Background with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bgImage})`, filter: "brightness(0.6)" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl w-full bg-blue-950/70 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-blue-400/40">
        <div className="flex flex-col md:flex-row items-center gap-8 p-8">
          {/* Profile Image */}
          <img
            src={profilePic}
            alt="Mae"
            className="w-44 h-44 object-cover rounded-full shadow-lg border-4 border-blue-300"
          />

          {/* Intro Section */}
          <div className="text-center md:text-left text-white">
            <h2 className="text-3xl font-bold text-blue-200 mb-2">I'm MHAE 🌿</h2>
            <p className="text-lg">
              A 22-year-old <span className="font-medium text-blue-300">Computer Science student</span> who’s learning,
              discovering, and laughing her way through the challenges of life and coding.
            </p>
            <p className="text-blue-300 mt-3 italic">
              “Doing my best, one day (and one error) at a time 😅.”
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="px-10 pb-10 space-y-10 text-white">
          {/* Personal Info */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">🌸 Personal Information</h3>
            <ul className="space-y-2 text-lg">
              <li><strong>Full Name:</strong> Ever Mae Manansala</li>
              <li><strong>Age:</strong> 22 years old</li>
              <li><strong>Birthday:</strong> November 19, 2002</li>
              <li><strong>Course:</strong> Bachelor of Science in Computer Science</li>
              <li><strong>School:</strong> Cavite State University</li>
              <li><strong>From:</strong> Bacoor, Cavite, Philippines 🇵🇭</li>
            </ul>
          </div>

          {/* Background */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">💫 Background</h3>
            <p className="text-lg leading-relaxed">
              My track on my senior high year is actually a programming but unfortunately the pandemic happens so the only knowledge I gain back then 
              only the HTML&CSS, because the rest of the lesson are on modular and where not able to do a practical or face-to-face demo. I also work during pandemic as a supermarket
              cashier at sm soutmall but only for months and I learn how to interact with people with different attitude and behavior each day.  I stopped for
              2 years that's why all the programming lesson are seems new to me especailly I only know the basics.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">⚙️ Skills & Tools</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-lg">
              <li>HTML & CSS</li>
              <li>JavaScript (Basic)</li>
              <li>React.js(Basic and Still Learning</li>
              <li>Canva & Figma (Basic)</li>
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
              <li>Good Communication</li>
            </ul>
          </div>

          {/* Likes & Dislikes */}
          <div className="grid md:grid-cols-2 gap-8">
            <div> 
              <h3 className="text-2xl font-semibold text-blue-300 mb-3">🌼 Likes</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Pastel colors and cozy aesthetics</li>
                <li>Matcha (my ultimate comfort drink 🍵)</li>
                <li>Music that heals the soul 🎶</li>
                <li>Warm sunsets and rainy afternoons</li>
                <li>Quiet moments of peace</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-300 mb-3">🌧️ Dislikes</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Dishonesty and unnecessary drama</li>
                <li>Cold food that’s supposed to be warm 🍲</li>
                <li>Being rushed or overwhelmed</li>
                <li>Long coding errors that don’t make sense 😭</li>
                <li>Loud surroundings</li>
              </ul>
            </div>
          </div>

          {/* Side Image */}
          <div className="flex justify-center mt-10">
            <img
              src={sideImage}
              alt="Mae Lifestyle"
              className="w-80 h-56 object-cover rounded-xl shadow-md border-4 border-blue-300"
            />
          </div>

          {/* Closing Message */}
          <div className="mt-10 text-center">
            <p className="text-lg leading-relaxed text-blue-100">
              Life’s not always perfect — but that’s what makes it beautiful.  
              I believe in growing through every moment, embracing imperfection,  
              and finding joy in small victories. 🌷
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEm;
