import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { base_url, key } from "../../requests";
import "./VideosList.css";

const VideosList = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(
        `${base_url}${type}/${id}/videos?api_key=${key}`
      );
      const Adata = await data.json();
      setVideos(Adata.results);
      // console.log(Adata.results);
    };
    getVideos();
  }, [id, type]);

  return (
    <div className="Videos">
      {videos.slice(0, 5).map((video, i) => (
        <div className="video_details" key={i}>
          <div className="video_title">{video ? video.name : ""}</div>
          <div className="video_frame">
            <iframe
              src={`https://www.youtube.com/embed/${video && video.key}`}
              title="video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosList;
