import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Card.css";

const Card = ({ movie, type, movieId }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="card_details">
          <SkeletonTheme baseColor="#1a242f" highlightColor="#ffffff31">
            <Skeleton height={325} width={215} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/${movie ? movie.media_type || type : ""}/${movie.id}`}>
          <div className="card_details">
            <div className="cardImg">
              <img
                key={movieId}
                src={`https://image.tmdb.org/t/p/original/${
                  movie && movie.poster_path
                }`}
                className="cards_img"
                alt={movie.original_title || movie.original_name}
              />
            </div>
            <div className="card_overlay">
              <div className="card_title">
                {movie ? movie.original_title || movie.original_name : ""}
              </div>
              <div className="card_ratings">
                <div className="card_release">
                  {movie ? movie.first_air_date || movie.release_date : ""}
                </div>
                <div className="rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="card_overview">
                {movie ? movie.overview.slice(0, 120) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
