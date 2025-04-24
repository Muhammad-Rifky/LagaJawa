'use client'
import { useState } from 'react'

export default function GalleryCard({ image, title }: { image: string, title: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative transition-transform duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border rounded-md"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      {hovered && (
        <div className="absolute inset-0 bg-black/60 text-white flex items-center justify-center text-center text-sm px-2">
          {title}
        </div>
      )}
    </div>
  )
}
