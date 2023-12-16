import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Card from "../../Components/Card/Card";
import "./Search.css";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [shows, setShows] = useState([]);
  const { content } = useParams();

  useEffect(() => {
    const searchDetails = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/${
          content === "tv" ? "tv" : "movie"
        }?api_key=5398fb6049166b54d42e730f66c72f31&language=en-US&query=${searchText}&page=1&include_adult=false`
      );
      const actualdata = await data.json();
      setShows(actualdata.results);
    };
    let deleteTimerData = setTimeout(() => {
      searchDetails();
    }, 1000);
    searchDetails();
    return () => clearTimeout(deleteTimerData);
  }, [searchText, content]);

  return (
    <div className="Search">
      <div className="search_bar">
        <form className="input_box">
          <div className="all_btns">
            <NavLink to="/search/movie" className="link_btns">
              Movie
            </NavLink>
            <NavLink to="/search/tv" className="link_btns">
              TV
            </NavLink>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
        <div className="shows_list">
          {shows.map((show, i) => (
            <Card movie={show} type={content} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
