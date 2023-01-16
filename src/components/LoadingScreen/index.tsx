import { FaFilm } from "react-icons/fa";
import { PuffLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black text-red-500">
      <div className="relative flex items-center justify-center">
        {/* Spinner */}
        <PuffLoader color="#ef4444" size={150} />

        {/* Icon */}
        <FaFilm className="text-4x absolute -rotate-45" />
      </div>
    </div>
  );
};

export default LoadingScreen;
