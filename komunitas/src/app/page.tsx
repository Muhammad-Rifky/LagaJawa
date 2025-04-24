import Carousel from '@/components/Carousel'
import { fasilitas } from '@/data/fasilitas'
import { komunitas } from '@/data/komunitas'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleClick = (item: any) => {
    router.push(`/komunitas/${item.id}`)
  }

  return (
    <>
      <section className="text-center my-8">
        <h2 className="text-2xl font-bold">FASILITAS</h2>
        <p>Kenyamanan dan kepuasan anda prioritas kami</p>
        <Carousel items={fasilitas} onClickItem={handleClick} />
      </section>

      <section className="text-center my-8">
        <h2 className="text-2xl font-bold">KOMUNITAS & PROGRAM</h2>
        <p>Kegiatan dan program yang tersedia di kami</p>
        <Carousel items={komunitas} onClickItem={handleClick} />
      </section>
    </>
  )
}
