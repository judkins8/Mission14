import { Movie } from '../types/movie';
import styles from '../Banner.module.css';
import { useEffect, useState } from 'react';

//table of the movies page
function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  //keep api from being called over and over again
  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch('https://localhost:4000/movie');
      const temp = await response.json();
      setMovieData(temp);
    };

    getMovies();
  }, []);

  return (
    <>
      <center>
        <br />
        <h3 className={styles.h3}>
          <u>My Movie Collection</u>
        </h3>
        <br />
      </center>

      <table className="table table-bordered">
        <thead className="bg-light">
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.movieID}>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.category}</td>
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
