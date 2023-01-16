import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-t-slate-200 py-2 text-center font-medium text-black/75">
      Built by{" "}
      <Link
        href="https://iamcamilomillan.vercel.app/"
        target="_blank"
        className="text-purple-600 transition-colors duration-200 ease-in-out hover:text-purple-400"
      >
        Camilo Millan
      </Link>{" "}
      &#9679;{" "}
      <Link
        href="https://github.com/CoGuisMod/the-cinephile-house"
        target="_blank"
        className="text-purple-600 transition-colors duration-200 ease-in-out hover:text-purple-400"
      >
        Github Repository
      </Link>
    </footer>
  );
};

export default Footer;
