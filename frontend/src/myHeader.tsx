import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function MyHeader() {
  return (
    <>
      <div
        className="row nav"
        style={{
          paddingTop: "25px",
          paddingBottom: "25px",
          borderBottom: "solid black",
        }}
      >
        <div className="col-4 align-self-center text-start">
          <h1 style={{ marginLeft: "25px", color: "white" }}>
            Joel Hiltons Awesome Website
          </h1>
        </div>
        <div className="col align-self-center text-end">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/Podcasts">Podcasts</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/MovieCollection">Movie Collection</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyHeader;
