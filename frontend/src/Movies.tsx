import data from "./MovideData.json";
import React from "react";

const MDS = data.MovieData;

function MovieList() {
  const [listMovies, setListOfMovies] = React.useState(MDS);
  const addMovie = () => {
    setListOfMovies([
      ...MDS,
      {
        Category: "Action/Adventure",
        Title: "Live Die Repeat: Edge of Tomorrow",
        Year: 2014,
        Director: "Doug Liman",
        Rating: "PG-13",
      },
    ]);
  };

  return (
    <>
      <div>
        <h1>Joe Hilton's Movie Collection</h1>
      </div>
      <div
        style={{
          paddingTop: "25px",
          marginLeft: "250px",
          marginRight: "250px",
        }}
      >
        <table className="table table-striped table-dark">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Category}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
