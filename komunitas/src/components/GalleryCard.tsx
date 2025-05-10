'use client'

import Link from 'next/link'
import Image from 'next/image'

interface GalleryCardProps {
  image: string
  title: string
  link: string
}

export default function GalleryCard({ image, title, link }: GalleryCardProps) {
  return (
    <div className="relative w-64 h-40 overflow-hidden rounded-xl shadow-md group cursor-pointer">
      {/* Gambar utama */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay saat hover */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white p-4">
        <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
        <Link
          href={link}
          className="mt-2 px-4 py-1 text-sm bg-white text-black rounded hover:bg-gray-100 transition"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  )
}
