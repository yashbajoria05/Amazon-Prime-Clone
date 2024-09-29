import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import requests, { base_url, key } from "../../requests";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { isMovie, type } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch(
        `${base_url}${isMovie === "movies" ? "movie" : "tv"}/${
          type ? type : "popular"
        }?api_key=${key}&page=2&language=en-US`
      );
      const actualData = await data.json();
      setMovies(actualData.results);
      // console.log(actualData.results);
    };
    getMovies();
  }, [type, isMovie]);

  return (
    <div className="Movies">
      <Banner
        url={
          isMovie === "movies"
            ? requests.fetchTopRated
            : requests.fetchTvTop_rated
        }
      />
      <div className="Movies_content">
        <div className="page_headers">
          <div className="page_title">
            {type
              ? type === "top_rated"
                ? "TOP RATED"
                : type.toUpperCase()
              : "POPULAR"}
          </div>
          <div className="all_btns">
            <NavLink
              to={
                isMovie === "movies"
                  ? "/movies/categories/popular"
                  : "/series/categories/popular"
              }
              className="link_btns"
            >
              Popular
            </NavLink>
            <NavLink
              to={
                isMovie === "movies"
                  ? "/movies/categories/top_rated"
                  : "/series/categories/top_rated"
              }
              className="link_btns"
            >
              Top Rated
            </NavLink>
            {isMovie === "movies" ? (
              <NavLink to="/movies/categories/upcoming" className="link_btns">
                Upcoming
              </NavLink>
            ) : (
              " "
            )}
          </div>
        </div>
        <div className="movie_list">
          {movies &&
            movies.map((movie) => (
              <Card
                key={movie.id}
                movieId={movie.id}
                movie={movie}
                type={isMovie === "movies" ? "movie" : "tv"}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
