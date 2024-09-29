import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Row from "../../Components/Row/Row";
import { img_url, base_url, key } from "../../requests";
import CastsList from "../../Components/CastsList/CastsList";
import VideosList from "../../Components/VideosList/VideosList";
import "./MovieDetails.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetch(
        `${base_url}movie/${id}?api_key=${key}&language=en-US`
      );
      const all_data = await data.json();
      setMovie(all_data);
      window.scrollTo(0, 0);
      // console.log(all_data);
    };
    getDetails();
  }, [id]);

  return (
    <div className="detailsPage">
      <div className="bgImg">
        <div className="gradient"></div>
        <img
          key={id}
          className="backdrop"
          src={`${img_url}/${
            movie && (movie.backdrop_path || movie.poster_path)
          }`}
          alt="backdrop_img"
        />
      </div>
      <div className="allDetails">
        <div className="MovieLeft">
          <img
            key={movie.id}
            className="poster"
            src={`https://image.tmdb.org/t/p/w500/${
              movie && movie.poster_path
            }`}
            alt="poster_img"
          />
        </div>
        <div className="MovieRight">
          <div className="movie_title">{movie ? movie.original_title : ""}</div>
          <div className="rating_genres">
            <div className="all_ratings">
              <div className="release">{movie ? movie.release_date : ""}</div>
              <div className="duration">
                {movie ? movie.runtime + " mins" : ""}
              </div>
              <div className="rating">
                {movie ? movie.vote_average + " " : ""}
                <i className="fas fa-star" />
                {movie ? "  (" + movie.vote_count + ") Votes" : ""}
              </div>
            </div>
            <div className="genres">
              {movie.genres &&
                movie.genres.map((genre) => (
                  <span key={genre.id} className="genre">
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="MovieOverview">
            {movie ? movie.overview + "..." : ""}
          </div>
          <CastsList type="movie" key={id} />
        </div>
      </div>
      <div className="all_videos">
        <VideosList type="movie" key={id} />
      </div>
      <div className="row">
        <Row
          title="You May Also Like"
          fetchURL={`${base_url}/movie/${id}/similar?api_key=${key}`}
          content="movie"
        />
      </div>
    </div>
  );
};

export default MovieDetails;
