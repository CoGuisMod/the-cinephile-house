import Link from "next/link";
import { useState } from "react";

import NavMobile from "./NavMobile";

import { FaBars, FaFilm, FaPlus, FaUser } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const [showNavMobile, setShowNavMobile] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

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

        {user ? (
          <div className="relative flex items-start justify-center">
            <button
              onClick={() => setShowUserOptions(!showUserOptions)}
              className="text-xl duration-200 ease-in-out hover:text-red-500"
            >
              <FaUser />
            </button>
            {showUserOptions ? (
              <div className="absolute flex w-20 translate-y-6 flex-col overflow-hidden rounded-md bg-slate-900">
                <Link
                  href="/profile"
                  className="w-full py-1 text-center transition-colors duration-200 ease-in-out hover:bg-slate-800"
                >
                  Profile
                </Link>
                <div className="h-px w-full bg-slate-50" />
                <button
                  onClick={handleLogout}
                  className="w-full py-1 text-center transition-colors duration-200 ease-in-out hover:bg-slate-800"
                >
                  Log out
                </button>
              </div>
            ) : null}
          </div>
        ) : (
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
        )}
      </div>
    </header>
  );
};

export default Navbar;
