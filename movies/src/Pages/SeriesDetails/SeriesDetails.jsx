import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_url, base_url, key } from "../../requests";
import Row from "../../Components/Row/Row";
import CastsList from "../../Components/CastsList/CastsList";
import VideosList from "../../Components/VideosList/VideosList";
import "./SeriesDetails.css";
// import "../MovieDetails/MovieDetails.css";

const SeriesDetails = () => {
  const [series, setSeries] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const series_data = await fetch(
        `${base_url}/tv/${id}?api_key=${key}&language=en-US`
      );
      const series_data_json = await series_data.json();
      setSeries(series_data_json);
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
          key={series.id}
          className="backdrop"
          src={`${img_url}/${
            series && (series.backdrop_path || series.poster_path)
          }`}
          alt="backdrop_img"
        />
      </div>
      <div className="allDetails">
        <div className="MovieLeft">
          <img
            key={series.id}
            className="poster"
            src={`${img_url}/${series && series.poster_path}`}
            alt="poster_img"
          />
        </div>
        <div className="MovieRight">
          <div className="movie_title">
            {series ? series.original_title || series.original_name : ""}
          </div>
          <div className="rating_genres">
            <div className="all_ratings">
              <div className="release">
                {series ? series.last_air_date : ""}
              </div>
              <div className="seasons">
                Seasons : {series ? series.number_of_seasons : ""}
              </div>
              <div className="rating">
                {series ? series.vote_average : ""}
                <i className="fas fa-star" />
                {series ? " (" + series.vote_count + ")Votes" : ""}
              </div>
            </div>
            <div className="genres">
              {series.genres &&
                series.genres.map((genre) => (
                  <span key={genre.id} className="genre">
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="MovieOverview">{series ? series.overview : ""}</div>
          <div className="casts">
            <CastsList type="tv" key={id} />
          </div>
        </div>
      </div>
      <div className="all_videos">
        <VideosList type="tv" key={id} />
      </div>
      <div className="row">
        <Row
          title="You May Also Like"
          fetchURL={`${base_url}/tv/${id}/similar?api_key=${key}`}
          content="tv"
        />
      </div>
    </div>
  );
};

export default SeriesDetails;
