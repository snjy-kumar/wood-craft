"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return

    let clientX: number

    if ("touches" in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }

    const rect = containerRef.current.getBoundingClientRect()
    const position = ((clientX - rect.left) / rect.width) * 100

    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      isDragging.current = false
    }

    window.addEventListener("mouseup", handleMouseUpGlobal)
    window.addEventListener("touchend", handleMouseUpGlobal)

    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal)
      window.removeEventListener("touchend", handleMouseUpGlobal)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=600&width=800&text=Before"
          alt="Before renovation"
          fill
          className="object-cover"
        />
      </div>

      {/* After Image */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image
          src="/placeholder.svg?height=600&width=800&text=After"
          alt="After renovation"
          fill
          className="object-cover"
        />
      </div>

      {/* Slider */}
      <div
        className="absolute inset-y-0 z-10 w-1 cursor-ew-resize bg-white"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
      >
        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-amber-700">
          <div className="flex h-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 rounded bg-black/50 px-2 py-1 text-sm text-white">Before</div>
      <div className="absolute bottom-4 right-4 rounded bg-black/50 px-2 py-1 text-sm text-white">After</div>
    </div>
  )
}

