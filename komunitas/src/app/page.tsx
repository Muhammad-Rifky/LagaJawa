// import FeatureCard from '@/components/FeatureCard'
// import ProductCard from '@/components/ProductCard'
// import GalleryCard from '@/components/GalleryCard'
import HoverCard from "@/components/HoverCard"

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 bg-white">
      <div className="w-full max-w-6xl">
        {/* KOMUNITAS */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-2">KOMUNITAS</h2>
          <p className="text-gray-600">Kegiatan komunitas kami yang bisa kamu ikuti</p>
          <div className="grid grid-cols-2 gap-6 justify-center items-start">
            {/* Card Komunitas */}
            <div className="relative group w-60 h-40">
              {/* Gambar default */}
              <img
                src="/images/komunitas-a.png"
                alt="Komunitas A"
                className="w-full h-full object-contain rounded-xl shadow-md"
              />

              {/* Hover content */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-xl scale-90 opacity-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10 p-4">
                <img
                  src="/images/komunitas1.png"
                  alt="Komunitas A"
                  className="w-full h-24 object-contain mb-2"
                />
                <h3 className="text-lg font-bold">Komunitas A</h3>
                <p className="text-sm text-gray-600">Ini adalah komunitas futsal untuk pemain amatir dan profesional...</p>
                <button
                  onClick={() => window.location.href = '/komunitas/a'}
                  className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                >
                  Detail Selengkapnya
                </button>
              </div>
            </div>

            {/* Card Komunitas B */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden w-60 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img
                src="/images/komunitas-b.png"
                alt="Komunitas B"
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Komunitas B</h3>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-2">PROGRAM</h2>
          <p className="text-gray-600">Program latihan dan event futsal</p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <HoverCard
              title="Program Latihan"
              description="Program ini dirancang untuk meningkatkan stamina dan teknik bermain futsal."
              image="/images/program1.jpg"
              link="/program/latihan"
            />
          </div>
        </section>
      </div>

      {/* <FeatureCard
    title="Futsal Court Premium"
    description="Professional-grade flooring and lighting"
    imageUrl="/images/img.jpg"
    buttonText='Detail'
    />
    <div className='mr-6'></div>
    <ProductCard
      title="Futsal Court Premium"
      description="Professional-grade flooring and lighting"
      imageUrl="/images/img.jpg"
    /> */}
    </main>
  )
}

