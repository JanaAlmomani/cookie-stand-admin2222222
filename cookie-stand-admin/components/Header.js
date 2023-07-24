import Link from 'next/link';
export default function Header() {
    return (
      <header className="bg-green-500 p-4 text-black flex justify-between">
        <h1 className="text-4xl font-bold">Cookie Stand Admin</h1>
          <Link href="/overview" className="text-l font-bold ">overview</Link>
      </header>
    )
  }