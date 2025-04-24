import { useRouter } from 'next/router';

export default function KomunitasDetail() {
  const { id } = useRouter().query;

  // Fetch data komunitas by ID di sini (bisa pakai getStaticProps atau getServerSideProps)
  const komunitas = {
    logo: '/images/komunitas1.png',
    nama: 'Komunitas A',
    ketua: 'John Doe',
    deskripsi: 'Deskripsi panjang komunitas...',
    jadwal: 'Setiap Sabtu, 19.00 WIB',
    galeri: ['/images/k1.jpg', '/images/k2.jpg'],
  };

  return (
    <div className="p-6 flex gap-6">
      <img src={komunitas.logo} alt="Logo Komunitas" className="w-40 h-40 object-contain" />
      <div className="flex-1 space-y-4">
        <h2 className="text-xl font-bold">{komunitas.nama}</h2>
        <p><strong>Ketua:</strong> {komunitas.ketua}</p>
        <p><strong>Deskripsi:</strong> {komunitas.deskripsi}</p>
        <p><strong>Jadwal:</strong> {komunitas.jadwal}</p>
        <div className="grid grid-cols-2 gap-2">
          {komunitas.galeri.map((src, i) => (
            <img key={i} src={src} className="rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
}
