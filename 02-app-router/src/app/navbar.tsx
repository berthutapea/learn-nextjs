import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between">
      <div className="flex items-center h-100">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-3 ${
                pathname === "/" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 ${
                pathname === "/about" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-3 ${
                pathname === "/about/profile" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <div className="flex justify-center items-center">
            <Image
              src="/images/profile.png"
              alt="profile"
              width={100}
              height={100}
              className="w-10 h-10 rounded-full mr-3"
            />
            <h4 className="text-white mr-3">{session.user.fullname}</h4>
            <button
              className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
