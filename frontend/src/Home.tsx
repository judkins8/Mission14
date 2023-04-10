import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Joel Hilton's Film Collection</h1>
      <img src="./JoelHiltonHeadshot.jpg" alt="JoelHiltonHeadshot" />
      <br></br>
      <br></br>
      <Link to="/MovieCollection">View Movies</Link>
    </>
  );
}

export default Home;
