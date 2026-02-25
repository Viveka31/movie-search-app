import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ refreshHome }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      refreshHome(); // trigger new fetch
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="bg-black text-white px-8 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1
          onClick={handleHomeClick}
          className="cursor-pointer text-2xl font-bold text-red-500"
        >
          🎬 MovieSearch
        </h1>

        <button
          onClick={handleHomeClick}
          className="hover:text-red-400 transition"
        >
          Home
        </button>
      </div>
    </nav>
  );
}