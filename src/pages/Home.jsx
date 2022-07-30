import React from "react";
import { Main } from "../components/Main";
import Row from "../components/Row";
import requesets from "../requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Popular" fetchURL={requesets.requestPopular} />
      <Row rowID="2" title="Up Coming" fetchURL={requesets.requestUpComing} />
      <Row rowID="3" title="Top Rated" fetchURL={requesets.requestTopRated} />
      <Row rowID="4" title="Trending" fetchURL={requesets.requestTrending} />
      <Row
        rowID="5"
        title="Now Playing"
        fetchURL={requesets.requestNowPlaying}
      />
    </div>
  );
};

export default Home;
