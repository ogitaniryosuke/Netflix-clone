import React from "react";
import "./App.css";
import { Row } from "./compornents/Row";
import { Banner } from "./compornents/Banner";
import { Nav } from "./compornents/Nav";
import { requests } from "./request";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Anime Movies" fetchUrl={requests.feactAnimeMovies} />
      <Row title="Documentary Movies" fetchUrl={requests.feactDocumentMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.feactRomanceMovies} />
    </div>
  );
}

export default App;
