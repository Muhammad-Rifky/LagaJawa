'use client'

import { useParams } from 'next/navigation'

export default function KomunitasDetailPage() {
  const params = useParams()
  const slug = params?.slug

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Detail Komunitas: {slug}</h1>
      <p>Informasi lengkap mengenai komunitas {slug} akan ditampilkan di sini.</p>
    </div>
  )
}
