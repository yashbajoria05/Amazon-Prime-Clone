import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Row.css";

const Row = ({ title, fetchURL, content }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch(fetchURL);
      const allData = await data.json();
      setMovies(allData.results);
    };
    getMovies();
  }, [fetchURL]);

  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map((movie) => (
            <Card movie={movie} type={content} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
