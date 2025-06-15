import React from "react";

export default function SectionWrapper(props) {
  const { children, header, title } = props

  return (
    <section className="min-h-screen flex flex-col gap-10">
      <div className="bg-red-950 py-10 flex flex-col gap-2 justify-center items-center">
        <p className="text-lg">{header}</p>
        <h2 className="text-5xl">{title[0]} <span className="text-red-400">{title[1]}</span> {title[2]}</h2>

      </div>

    </section>
  )

}
