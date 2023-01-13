import Link from "next/link";
import { useState } from "react";

import NavMobile from "./NavMobile";

import { FaBars, FaFilm, FaPlus } from "react-icons/fa";

const Navbar = () => {
  const [showNavMobile, setShowNavMobile] = useState(false);

  return (
    <header className="absolute z-10 w-full p-4">
      <div className="left-0 top-0 mx-auto flex w-full max-w-7xl items-center justify-between text-slate-50">
        <Link href="/" className="z-20 flex items-center justify-start gap-2">
          <FaFilm className="-rotate-45 text-xl text-red-500" />
          <span className="text-xl font-bold">TheCinephileHouse</span>
        </Link>

        <button
          onClick={() => {
            setShowNavMobile(!showNavMobile);
          }}
          className="z-20 md:hidden"
        >
          {showNavMobile ? (
            <FaPlus className="rotate-45 text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        <NavMobile showNavMobile={showNavMobile} />

        <div className="hidden gap-2 md:flex">
          <Link
            href="/signin"
            className="rounded-md px-2 py-1 font-medium text-slate-50 transition duration-200 ease-in-out hover:text-red-500"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-red-500 px-2 py-1 font-medium text-slate-50 transition duration-200 ease-in-out hover:bg-red-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
