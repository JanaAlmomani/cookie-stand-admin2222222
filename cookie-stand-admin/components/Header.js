import Link from 'next/link';

export default function Header() {
  return (
    <header className=" bg-green-300 p-4 text-black flex justify-between">
      <h1 className="text-4xl font-bold">Cookie Stand Admin</h1>
      <Link href="/overview">
        <p className="text-lg font-bold bg-CCFFFF px-4 py-2 rounded-lg shadow-md">overview</p>
      </Link>
    </header>
  );
}


// import Link from 'next/link';

// export default function Header() {
//   return (
//     <header className="bg-green-300 p-4 text-black flex justify-between">
//       <h1 className="text-4xl font-bold">Cookie Stand Admin</h1>
//       <Link href="/overview">
//         <a className="text-lg font-bold bg-ccffff px-4 py-2 rounded-lg shadow-md">overview</a>
//       </Link>
//     </header>
//   );
// }
