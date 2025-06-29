import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../Utils/repforce";
import Button from "./Button";


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
  const [showModal, setShowModal] = useState(false)
  const [workoutType, setWorkoutType] = useState('individual')
  const [muscle, setMuscle] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function toggleButton() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {

    if (muscle.includes(muscleGroup)) {
      setMuscle(muscle.filter(val => val !== muscleGroup))
      return
    }

    if (muscle.length > 2) {
      return
    }

    if (workoutType !== 'individual') {
      setMuscle([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscle([...muscle, muscleGroup])
    if (muscle.length === 2) {
      setShowModal(false)
    }

  }


  return (
    <SectionWrapper header={'Generate Your Workout'} title={['it\'s', 'Huge', 'O\'Clock']}>
      <Header index={'01'} title={'Pick Your Workout'} description={'Select Your Workout'} />
      <div className="grid grid-cols-2  sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setMuscle([])
              setWorkoutType(type)
            }} key={typeIndex} className={"bg-red-950 border  py-4 duration-75 hover:border-red-600 rounded-md " + (type === workoutType ? "border-red-400" : "border-black")}>
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          )
        })}
      </div>
      <Header index={'02'} title={'Pick Your Muscles'} description={'Select The Muscles judged'} />
      <div className="flex flex-col bg-red-950 border border-black  duration-75 hover:border-red-400 rounded-md">
        <button onClick={toggleButton} className="relative flex items-center p-2 justify-center">
          <p className="uppercase">{muscle.length === 0 ? "Select muscle groups" : muscle.join(" ")}</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className='flex flex-col px-3 pb-3'>
            {(workoutType === 'individual' ? WORKOUTS[workoutType] : Object.keys(WORKOUTS[workoutType])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button onClick={() => {
                  updateMuscles(muscleGroup)

                }} className={"hover:text-red-200 duration-100 " + (muscle.includes(muscleGroup) ? 'text-red-400' : 'text-white')} key={muscleGroupIndex}>
                  <p className="uppercase">{muscleGroup}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>


      <Header index={'03'} title={'Pick Your Objective'} description={'Select Your Ultimate Objective'} />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, typeScheme) => {
          return (
            <button onClick={() => {
              setGoal(scheme)
            }} key={typeScheme} className={"bg-red-950 border  py-4 duration-75 hover:border-red-600 rounded-md " + (scheme === goal ? 'border-red-400' : ' border-black')}>
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          )
        })}
      </div>


      <Button func={() => {
      }} name={"Formulate"}></Button>
    </SectionWrapper>

  )
}
