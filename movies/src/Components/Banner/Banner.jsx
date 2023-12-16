import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link, useParams } from "react-router-dom";
import "./Banner.css";

const Banner = ({ url }) => {
  const [banner, setBanner] = useState([]);
  const { isMovie } = useParams();

  useEffect(() => {
    const getBanner = async () => {
      const data = await fetch(url);
      const actData = await data.json();
      setBanner(actData.results);
      //   console.log(actData.results);
    };
    getBanner();
  }, [url]);

  return (
    <>
      <div className="Banner">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          transitionTime={3}
          showStatus={false}
        >
          {banner.map((movie) => (
            <Link
              to={`/${isMovie === "movies" ? "movie" : "tv"}/${movie.id}`}
              className="link"
              key={movie.id}
            >
              <div className="img_gradient1"></div>
              <div className="img_gradient2"></div>
              <div className="BannerImg">
                <img
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original/${
                    movie && movie.backdrop_path
                  }`}
                  alt={movie.original_name || movie.original_title}
                />
              </div>
              <div className="BannerOverlay">
                <div className="Banner_title">
                  {movie ? movie.original_name || movie.original_title : ""}
                </div>
                <div className="Banner_details">
                  <div className="Banner_release">
                    {movie ? movie.first_air_date || movie.release_date : ""}
                  </div>
                  <div className="Banner_rating">
                    {movie ? movie.vote_average : ""}
                  </div>
                </div>
                <p className="Banner_description">
                  {movie ? movie.overview.slice(0, 150) + "..." : ""}
                </p>
                <div className="btns">
                  <Link
                    to={`/${isMovie === "movies" ? "movie" : "tv"}/${movie.id}`}
                    className="link"
                  >
                    Watch Now
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
