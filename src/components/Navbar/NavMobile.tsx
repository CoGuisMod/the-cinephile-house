import Link from "next/link";

import { FaSearch } from "react-icons/fa";

const NavMobile = ({ showNavMobile }: { showNavMobile: boolean }) => {
  return (
    <div
      className={`${
        showNavMobile ? "" : "translate-x-full"
      } fixed right-0 top-0 flex h-screen w-full flex-col items-center justify-center  bg-slate-900/50 backdrop-blur-sm transition-transform duration-200 ease-in-out md:hidden`}
    >
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search movies or shows."
          className="rounded-full py-1 pl-2 pr-10 text-2xl text-slate-900"
        />

        <button className="absolute right-1 rounded-full bg-red-500 p-1 text-2xl text-slate-900">
          <FaSearch />
        </button>
      </div>

      <div className="py-8" />

      <div className="flex flex-col gap-2">
        <Link
          href="/signin"
          className="rounded-md px-2 py-1 text-2xl font-medium text-slate-50 transition duration-200 ease-in-out hover:text-red-500"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="rounded-md bg-red-500 px-2 py-1 text-2xl font-medium text-slate-50 transition duration-200 ease-in-out hover:bg-red-600"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default NavMobile;
