'use client'

import { useRef, useState } from "react";
import { About } from "../components/about/about";
import { motion, useScroll } from "framer-motion";
// import { useMouse } from "@uidotdev/usehooks";
// x, y, elementX, elementY, elementPositionX, elementPositionY

import useMouse from "@react-hook/mouse-position";
// x, y, pageX, pageY, clientX, clientY, screenX, screenY, elementWidth, elementHeight, isOver, isDown, isTouch



export default function Home() {
  const mouseEleRef = useRef(null)
  const scrollRef = useRef(null)
  const mouseRef = useRef(null)
  const { scrollYProgress } = useScroll({
    container: scrollRef
  })
  // const [mouse, ref] = useMouse()
  const mouse = useMouse(mouseRef, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  const mouseEle = useMouse(mouseEleRef, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  return (
    <>
      <div className="flex items-center justify-center h-full bg-slate-300" ref={mouseRef}>
        <div className="absolute self-start">
          Hover me and see where I am relative to the element:
          <br />
          x: {mouse.x}
          y: {mouse.y}
        </div>
        <div
          className="size-96 bg-red-500 rounded-2xl z-10"
          ref={mouseEleRef}
        >
          Mouse x: {mouseEle.x}
          <br /> 
          Mouse y: {mouseEle.y}
          <br />
          Client x: {mouseEle.clientX}
          <br /> 
          Client y: {mouseEle.clientY}
          <br />
        </div>
      </div>
    </>
  );
}