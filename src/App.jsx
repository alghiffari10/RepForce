import React from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'

function App() {
  return (
    <main className="min-h-screen flex flex-col text-white text-sm sm:text-base relative overflow-hidden">
      <div className="absolute inset-0 z-0 animate-gradient-move bg-gradient-to-r from-gray-900 via-red-900 to-black bg-[length:300%_300%]" />
      <div className="relative z-10">
        <Hero />
        <Generator />
        <Workout />
      </div>
    </main>
  )

}

export default App
