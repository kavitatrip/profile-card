import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; // Briefcase icon

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="bg-blue-200 text-gray-400 text-left font-sans font-semibold p-4 m-5 rounded-lg flex flex-col items-center animate-fade-in">
        <h2 className="text-xl">Kavita Tripathi | Portfolio 🚀</h2>

        <div className="flex justify-start items-center flex-wrap">
          {/* Profile Image Section */}
          <div className="shadow-2xl w-80 h-80 rounded-xl p-2 m-5 flex items-center justify-center bg-white transition-transform duration-300 hover:scale-105">
            <img
              className="w-72 p-2 rounded-lg"
              src="https://onjsdev.com/_next/image?url=https%3A%2F%2Fapi.onjsdev.com%2Fuploads%2Fjavascript_346517_yx_079b05ea99.jpg&w=1920&q=75"
              alt="Profile"
            />
          </div>

          {/* Details Section */}
          <section className="shadow-xl w-[40rem] h-80 rounded-md p-4 m-5 font-sans font-semibold text-emerald-900 bg-white flex flex-col justify-center animate-slide-in">
            <p className="text-lg">Hey there! ✋</p>
            <p className="text-2xl font-bold">UI Developer | React.js Specialist | 4 Years Experience</p>
            <p className="text-md mt-2">
              I create clean, modern, and engaging web interfaces. Let’s collaborate!
            </p>

            {/* Professional Social Icons */}
            <div className="mt-4 flex gap-4">
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/kavita-tripathi-74a064205/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/kavitatrip/Kavita-2.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>

              {/* Briefcase Icon (Replacing Naukri) */}
              <a
                href="https://www.naukri.com/mnjuser/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faBriefcase} size="lg" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Navbar;
