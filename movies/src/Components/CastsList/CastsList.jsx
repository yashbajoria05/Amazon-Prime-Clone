import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CastsList.css";

const CastsList = ({ type }) => {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCasts = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=5398fb6049166b54d42e730f66c72f31`
      );
      const castData = await data.json();
      setCasts(castData.cast);
    };
    getCasts();
  }, [id, type]);
  return (
    <div className="Casts">
      <h2>{casts ? "Casts" : ""}</h2>
      <div className="casts_list">
        {casts.slice(0, 6).map((cast, i) => (
          <div className="cast_profile" key={i}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                cast && cast.profile_path
              }`}
              className="cast_pic"
              alt="Casts_List"
            />
            <span className="cast_title">{cast ? cast.original_name : ""}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastsList;
