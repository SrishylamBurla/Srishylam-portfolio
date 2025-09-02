
import { useState } from "react";
import ScrollFadeIn from "./ScrollInFade";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="bg-[#000000] bg-[url('https://www.transparenttextures.com/patterns/argyle.png')] text-white py-10 md:py-20 lg:py-28">
      <div className="container px-4 sm:px-6 md:px-10 lg:px-24 mx-auto" id="about">
        <ScrollFadeIn direction="up">
          {/* Title */}
          <h1 className="text-3xl text-center font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            About Me
          </h1>

          {/* Image + Description */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            <img
              className="rounded-lg mx-auto w-44 sm:w-56 md:w-64 lg:w-72 object-cover border border-emerald-400 transform transition-transform duration-300 hover:scale-105"
              src="./ezgif.com-resize.png"
              alt="hero-image"
            />

            <div className="flex-1">
              <p className="text-gray-300 text-base leading-relaxed mb-8 text-justify">
                A dedicated Full Stack Developer with a strong passion for
                learning new technologies and building impactful web applications.
                I have hands-on experience in developing responsive frontend and
                backend applications using technologies like React.js, Node.js,
                HTML, CSS, JavaScript, and Next.js. I focus on writing clean,
                maintainable code and building user-friendly, scalable solutions.
              </p>

              {/* Skills Progress Bars */}
              <div className="space-y-4">
                {[
                  { label: "HTML & CSS", width: "w-10/12" },
                  { label: "JavaScript", width: "w-8/12" },
                  { label: "ReactJS", width: "w-9/12" },
                  { label: "NodeJS", width: "w-9/12" },
                  { label: "MongoDB", width: "w-9/12" },
                  { label: "NextJS", width: "w-8/12" },
                  { label: "Figma - UI/UX", width: "w-8/12" },
                ].map(({ label, width }, idx) => (
                  <ScrollFadeIn direction="up" key={idx}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <label className="sm:w-3/12 md:w-2/12 text-base text-gray-200">
                        {label}
                      </label>
                      <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div
                          className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-transform duration-300 hover:scale-105 ${width}`}
                        ></div>
                      </div>
                    </div>
                  </ScrollFadeIn>
                ))}
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-10 space-x-8">
        {["education", "experience"].map((tab) => (
          <ScrollFadeIn direction="up" key={tab}>
            <button
              onClick={() => setActiveTab(tab)}
              className={`text-2xl font-semibold border-b-2 transition duration-300 ${
                activeTab === tab
                  ? "border-emerald-400 text-emerald-400"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          </ScrollFadeIn>
        ))}
      </div>

      {/* Education / Experience Content */}
      {activeTab === "education" ? (
        <div className="grid grid-cols-1 justify-items-center gap-6 mt-12 mb-10 px-4">
          <div className="border border-emerald-400 rounded-lg p-6 bg-black max-w-2xl w-full shadow-lg shadow-blue-400/30 hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-bold">Bachelor of Technology</h3>
            <p className="text-gray-300 text-base">
              Electronics and Communication Engineering – St.Mary's Engineering
              College (2015–2019)
            </p>
            <p className="text-gray-300 text-base">Hyderabad, Telangana, India</p>
          </div>

          <div className="border border-emerald-400 rounded-lg p-6 bg-black max-w-2xl w-full shadow-lg shadow-violet-400/30 hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-bold">Intermediate</h3>
            <p className="text-gray-300 text-base">
              Vikas Junior College - (2013–2015)
            </p>
            <p className="text-gray-300 text-base">Peddapally, Telangana, India</p>
          </div>
        </div>
      ) : (
        <ScrollFadeIn direction="up">
          <div className="grid grid-cols-1 justify-items-center gap-6 mt-12 mb-10 px-4">
            <div className="border border-emerald-400 rounded-lg p-6 bg-black max-w-2xl w-full shadow-lg shadow-violet-400/30 hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold">IT Recruiter</h3>
              <div className="text-gray-300 text-base">
                SCreatives Software Pvt Ltd. - (July-2021 to April-2022)
                <p className="text-gray-300">Hyderabad, Telangana, India</p>
                <hr className="mt-4 border border-gray-600" />
                <div className="mt-4 space-y-2">
                  <span className="font-semibold text-gray-200">Description:</span>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Identifying Job Requirements</li>
                    <li>Sourcing and Attracting Candidates</li>
                    <li>Screening and Evaluating Candidates</li>
                    <li>Facilitating Interviews and Hiring Decisions</li>
                    <li>Coordinating Interviews and Decision Making</li>
                    <li>Managing Job Offers and Onboarding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      )}
    </div>
  );
};

export default About;
