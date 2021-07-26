import React from "react";
import "./App.css";
import {Row} from "./compornents/Row";
import {Banner} from "./compornents/Banner";
import {Nav} from "./compornents/Nav";
import {requests} from "./request";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Banner/>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Anime Movies" fetchUrl={requests.fetchAnimeMovies}/>
            <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
        </div>
    );
}

export default App;
