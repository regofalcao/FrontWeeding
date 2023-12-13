"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="flex justify-between px-4 lg:px-12 py-2 lg:py-4 bg-[#FFFBF5] text-[#5D6265]">
      <div className="flex flex-col lg:flex-row justify-between w-full border-b-2 border-black lg:border-none px-2 lg:px-5">
        <div className="mb-2 lg:mb-0">
          <Image src="/argotech.svg" height={80} width={80} alt="Logo" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center ">
          <Link
            className={`text-[#5D6265] ${
              pathname === "/login" ? "text-black" : ""
            }`}
            href="/login"
          >
            Login
          </Link>
          <Link
            className={`text-[#5D6265] ${pathname === "/" ? "text-black" : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`text-[#5D6265] ${
              pathname === "/sign-up" ? "text-black" : ""
            }`}
            href="/sign-up"
          >
            Create Account
          </Link>
        </div>
        <div className="text-lg lg:text-2xl flex text-black font-medium items-center">
          Friends Gallery
        </div>
      </div>
    </div>
  );
}
