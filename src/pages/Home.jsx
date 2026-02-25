import { useEffect, useState } from "react";
import { searchMovies } from "../api/omdb";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Home({ refreshKey }) {
  const defaultSearches = ["Batman", "Harry", "Spider", "Fast", "Mission"];

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Load random movies on first load AND when Home is refreshed
  useEffect(() => {
    const randomQuery =
      defaultSearches[Math.floor(Math.random() * defaultSearches.length)];

    setPage(1);
    setType("");
    setQuery(randomQuery);
  }, [refreshKey]); // <-- important

  // 🔥 Fetch whenever query/page/type changes
  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await searchMovies(query, page, type);

        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        setMovies(data.Search || []);
        setTotalResults(Number(data.totalResults) || 0);
      } catch (err) {
        setMovies([]);
        setTotalResults(0);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, page, type]);

  return (
    <div className="p-6 bg-gradient-to-br from-slate-900 to-gray-800 min-h-screen text-white">
      <SearchBar
        setQuery={(q) => {
          setPage(1);
          setQuery(q);
        }}
        setType={(t) => {
          setPage(1);
          setType(t);
        }}
      />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!loading && movies.length === 0 && !error && (
        <p className="text-center text-lg mt-6">No movies found.</p>
      )}

      {!loading && movies.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}

      {!error && totalResults > 10 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalResults={totalResults}
        />
      )}
    </div>
  );
}