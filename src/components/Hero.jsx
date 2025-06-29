import React from "react";
import Button from "./Button";

/**
 * @components
 * @param {Object} Hero - The components that shows Hero secrions 
 * @returns {JSX.Elements} render jsx elements;
 * */

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Rep<span className="text-red-400">Force</span></h1>
      </div>
      <p className="text-sm md:text-xl font-light leading-relaxed">
        <span className="text-red-400 font-medium">RepForce</span> is your personal strength coach, built to guide you with
        <span className="text-red-400 font-medium"> personalized training plans.</span> Unlock your full potential, stay focused, and build the body you’ve always wanted.
        Because progress isn’t given it’s <span className="text-red-400 font-medium">earned.</span>
      </p>
      <Button func={() => {
        window.location.href = "#generate"
      }} name={"Accept & Begin"}></Button>
    </div>
  )


}
