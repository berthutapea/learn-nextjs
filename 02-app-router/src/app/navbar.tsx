import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex bg-gray-800 py-2 px-5">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex ml-5">
        <Link href="/">
          <li className="mr-3 text-blue-300 cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="mr-3 text-blue-300 cursor-pointer">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="mr-3 text-blue-300 cursor-pointer">Profile</li>
        </Link>
      </ul>
    </nav>
  );
}
