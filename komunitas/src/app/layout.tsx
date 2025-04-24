// src/app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Laga Jawa Futsal',
  description: 'Website komunitas dan fasilitas lapangan',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  )
}
