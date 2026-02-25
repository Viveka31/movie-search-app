import { useState } from "react";

export default function SearchBar({ setQuery, setType }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!input.trim()) return; // prevent empty search

    setQuery(input.trim());
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row gap-4"
    >
      <input
        type="text"
        placeholder="Search movies..."
        className="p-3 rounded bg-gray-700 text-white flex-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <select
        onChange={(e) => setType(e.target.value)}
        className="p-3 rounded bg-gray-700 text-white"
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>

      <button
        type="submit"
        className="bg-red-600 px-6 py-3 rounded hover:bg-red-700"
      >
        Search
      </button>
    </form>
  );
}