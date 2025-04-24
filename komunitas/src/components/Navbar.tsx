import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="Logo" className="h-10" />
        <h1 className="text-xl font-bold">LAGA JAWA FUTSAL</h1>
      </div>
      <div className="space-x-4">
        <Link href="/">Beranda</Link>
        <Link href="/kegiatan">Kegiatan</Link>
        <Link href="/artikel">Artikel</Link>
        <Link href="/sewa">Sewa</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
