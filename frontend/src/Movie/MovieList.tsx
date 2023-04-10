import { useEffect, useState } from "react";
import { Movie } from "../types/movie";

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);


    useEffect(() => {
        const fetchMovies = async () => {
            const rsp = await fetch("https://localhost:4000/movie");
            const temp = await rsp.json();
            setMovieData(temp);
        };

        fetchMovies();
    }, []);

  return (
    <>
    <div className="row">
        <h4>The Movies</h4>
    </div>
        <table className="table table-striped table-dark mx-auto" style={{width:"800px" }}>
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Edited</th>
                <th>Lent To</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {movieData.map((m) => (
                <tr key={m.movieId}>
                  <td>{m.title}</td>
                <td>{m.category}</td>
                <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                      <td>{m.edited}</td>
                      <td>{m.lentTo}</td>
                      <td>{m.notes}</td>
                </tr>
              ))}
            </tbody>
              </table>
    </>
  );
}

export default MovieList;
