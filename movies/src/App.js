import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import SeriesDetails from "./Pages/SeriesDetails/SeriesDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:isMovie/categories/:type" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<SeriesDetails />} />
        <Route path="/search/:content" element={<Search />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
