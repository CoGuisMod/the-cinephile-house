import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MovieCard from "../MovieCard";

const MoviesSlider = ({
  sliderId,
  sliderTitle,
  movies,
}: {
  sliderId: string;
  sliderTitle: string;
  movies: any;
}) => {
  const slideLeft = () => {
    var slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className="text-2xl font-medium">{sliderTitle}</h2>
      <div className="group relative mt-4">
        <FaChevronLeft
          onClick={slideLeft}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-red-500 p-2 text-4xl text-slate-50 opacity-0 transition-opacity duration-200 ease-in-out hover:bg-red-600 group-hover:opacity-100"
        />
        <div
          id={sliderId}
          className="h-full w-full space-x-4 overflow-x-scroll scroll-smooth whitespace-nowrap pl-10 scrollbar-hide"
        >
          {movies
            ? movies.map((movie: any, id: number) => (
                <MovieCard key={id} movie={movie} />
              ))
            : "Loading..."}
        </div>
        <FaChevronRight
          onClick={slideRight}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-red-500 p-2 text-4xl text-slate-50 opacity-0 transition-opacity duration-200 ease-in-out hover:bg-red-600 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default MoviesSlider;
