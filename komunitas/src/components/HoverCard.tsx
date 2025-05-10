'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface HoverCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function HoverCard({ title, description, image, link }: HoverCardProps) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="relative w-60 h-40 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Gambar awal */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay saat hover */}
      {hover && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-300">
          <img
            src={image}
            alt="Preview"
            className="w-24 h-16 object-cover rounded mb-2 border border-white"
          />
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="text-xs mb-2 text-center">{description.split('.')[0]}.</p>
          <Link href={link}>
            <button className="text-xs bg-white text-black px-3 py-1 rounded hover:bg-gray-200">
              Selengkapnya
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
