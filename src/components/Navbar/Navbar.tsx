import Link from "next/link";
import Router from "next/router";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const router = Router;

  const handleLogOut = async () => {
    await logout();
    router.push("/");
  };

  return (
    <header className="p-4">
      <div className="flex justify-between">
        <div>
          <Link href="/" className="text-lg font-bold">
            TheCinephileHouse
          </Link>
          <nav></nav>
        </div>
        {user ? (
          <button onClick={() => handleLogOut()}>Log out</button>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/signin">Sign in</Link>
            <Link href="/signup">Sign up</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
