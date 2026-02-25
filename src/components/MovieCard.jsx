import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
          alt={movie.Title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold">{movie.Title}</h2>
          <p className="text-sm text-gray-400">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}