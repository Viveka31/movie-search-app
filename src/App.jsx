import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshHome = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <BrowserRouter>
      <Navbar refreshHome={refreshHome} />
      <Routes>
        <Route path="/" element={<Home refreshKey={refreshKey} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}