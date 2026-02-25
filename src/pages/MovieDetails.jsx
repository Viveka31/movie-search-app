import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/omdb";
import Loader from "../components/Loader";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={movie.Poster} className="w-72 rounded-lg" />

        <div>
          <h1 className="text-4xl font-bold">{movie.Title}</h1>
          <p className="text-gray-400 mt-2">{movie.Year} • {movie.Genre}</p>
          <p className="mt-4">{movie.Plot}</p>
          <p className="mt-4"><strong>Cast:</strong> {movie.Actors}</p>
          <p className="mt-2"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}