import React from "react";
import Banner from "../../Components/Banner/Banner";
import requests from "../../requests";
import Row from "../../Components/Row/Row";

const Home = () => {
  return (
    <div className="Home" style={{ paddingBottom: "4rem" }}>
      <Banner url={requests.fetchNetflixOriginals} />
      <Row
        title="Amazon Orignals and Exclusives"
        fetchURL={requests.fetchNetflixOriginals}
        content="tv"
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row
        title="Recommended Movies"
        fetchURL={requests.fetchTopRated}
        content="movie"
      />
      <Row
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        content="movie"
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        content="movie"
      />
      <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        content="movie"
      />
      <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        content="movie"
      />
      <Row
        title="Documantaries"
        fetchURL={requests.fetchDocumantaries}
        content="movie"
      />
    </div>
  );
};

export default Home;
