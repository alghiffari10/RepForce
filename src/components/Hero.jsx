import React from "react";


/**
 * @components
 * @param {Object} Hero - The components that shows Hero secrions 
 * @returns {JSX.Elements} render jsx elements;
 * */

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Rep<span className="text-red-400">Force</span></h1>
      </div>
      <p className="text-sm md:text-xl font-light leading-relaxed">
        <span className="text-red-400 font-medium">RepForce</span> is your personal strength coach, built to guide you with
        <span className="text-red-400 font-medium"> personalized training plans.</span> Unlock your full potential, stay focused, and build the body you’ve always wanted.
        Because progress isn’t given it’s <span className="text-red-400 font-medium">earned.</span>
      </p>
      <button className="group relative overflow-hidden px-8 py-4 rounded-md border-2 border-red-400 text-red-400 transition-all duration-300">
        <span className="absolute inset-0 bg-red-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
        <p className="relative z-10 group-hover:text-white transition-colors duration-300">Accept & Begin</p>
      </button>
    </div>
  )


}
