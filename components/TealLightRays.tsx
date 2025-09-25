import React from "react"

export default function TealLightRays() {
  return (
    <div aria-hidden="true" className="light-rays absolute inset-[-10%] opacity-40">
      <div className="light-rays-layer ray-1" />
      <div className="light-rays-layer ray-2" />
      <div className="light-rays-layer ray-3" />
    </div>
  )
}
