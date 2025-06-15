import React from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../Utils/repforce";

function Header(props) {
  const { index, title, description } = props
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl text-red-400 font-semibold">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>

  )
}

export default function Generator() {
  return (
    <SectionWrapper header={'Generate Your Workout'} title={['it\'s', 'Huge', 'O\'Clock']}>
      <Header index={'01'} title={'Pick Your Workout'} description={'Select Your Workout'} />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((index, typeIndex) => {
          return (
            <button key={typeIndex} className="bg-red-950 border border-black py-4 duration-100 hover:border-red-400 rounded-md">
              <p className="capitalize">{index.replaceAll("_", " ")}</p>
            </button>
          )
        })}
      </div>
      <Header index={'02'} title={'Pick Your Muscles'} description={'Select The Muscles judged'} />
      <div className="">
      </div>

      <Header index={'03'} title={'Pick Your Objective'} description={'Select Your Ultimate Objective'} />
      <div className="">
      </div>


    </SectionWrapper>
  )
}
