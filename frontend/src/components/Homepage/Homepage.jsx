import React from "react";
import {
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaSignInAlt,
  FaList,
  FaChartPie,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoDocumentTextSharp } from "react-icons/io5";
import { CiAlarmOn } from "react-icons/ci";
import { IoCreate } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const HeroSection = ({username}) => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white max-w-full py-20 px-4 mt-5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-5xl font-bold text-center">
            Make your resume within 5 mins
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-xl text-center">
            Make your resume for all professional purpose and download it.
          </p>

          {/* Feature Icons */}
          <div className="flex space-x-8 mt-10">
            <div className="flex flex-col items-center">
              <IoDocumentTextSharp className="text-3xl" />
              <p className="mt-2">Generate Resume</p>
            </div>
            {/* <div className="flex flex-col items-center">
              <FaFilter className="text-3xl" />
              <p className="mt-2">Transactions Filtering</p>
            </div> */}
            <div className="flex flex-col items-center">
              <CiAlarmOn className="text-3xl" />
              <p className="mt-2">Save Time</p>
            </div>
          </div>

          {/* Call to Action Button */}
          {username?<Link to="/resume">
            <button className="mt-8 px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </Link>:<Link to="/">
            <button className="mt-8 px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </Link>}
          
        </div>
      </div>
      {/* How it works */}
      <div className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          How It Works
        </h2>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-blue-500 text-white mb-4">
              <FaSignInAlt className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold">Sign Up</h3>
            <p>Register and start generating resume in a minute.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-green-500 text-white mb-4">
              <IoCreate className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold">Create Resume</h3>
            <p>Quickly add your details.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-yellow-500 text-white mb-4">
              <IoMdDownload className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold">Download</h3>
            <p>Download your resume(pdf) and use it.</p>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-gray-100 py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          What Our Users Say
        </h2>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-xl text-gray-400" />
            <p className="mt-4">
              "This app has revolutionized the way of creating resume. Highly
              intuitive and user-friendly."
            </p>
            <p className="mt-4 font-bold">- Sourav</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-xl text-gray-400" />
            <p className="mt-4">
              "Finally, a great app! It saves lots of time."
            </p>
            <p className="mt-4 font-bold">- Anurag</p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-blue-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Ready to generate your resume?
          </h2>
          <p className="mt-4">
            Join us now and show some love!
          </p>
          {/* <Link to="/register">
            <button className="mt-8 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Sign Up For Free
            </button>
          </Link> */}
          <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
          <a href="https://www.linkedin.com/in/anurag-chandra-485876267/" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center py-4">
                <FaLinkedin className="text-3xl md:text-4xl lg:text-5xl" />
                
              </div>
            </a>
           <a href="https://www.instagram.com/anurag_16_01/" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center py-4">
                <FaInstagramSquare className="text-3xl md:text-4xl lg:text-5xl" />
                
              </div>
            </a>
            <a href="https://github.com/AnuragChandra16" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center py-4">
                <FaGithub className="text-3xl md:text-4xl lg:text-5xl" />
                
              </div>
            </a>
            <a href="https://x.com/AnuragChan37994" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center py-4">
                <FaXTwitter className="text-3xl md:text-4xl lg:text-5xl" />
                
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default HeroSection;