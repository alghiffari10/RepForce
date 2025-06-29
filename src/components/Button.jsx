import React from "react";


export default function Button(props) {
  const { name, func } = props

  return (
    <button onClick={func} className="group relative overflow-hidden px-8 py-4 rounded-md border-2 border-red-400 text-white transition-all duration-300">
      <span className="absolute inset-0 bg-red-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
      <p className="relative z-10 group-hover:text-white transition-colors duration-300">{name}</p>
    </button>
  )
}
