import { APIservise } from 'components/services/APIservice';
import { useState, useEffect } from 'react';
import { Container } from '../App.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  const [error, setError] = useState(null);

  const getMoviesArray = async () => {
    setError(null);
    setMoviesArr([]);
    const result = await APIservise.getTrendingMovies(setError);
    const receivedMoviesArray = await result?.results;
    setMoviesArr(receivedMoviesArray);
  };

  useEffect(() => {
    getMoviesArray();
  }, []);

  return (
    <main>
      <Container>
        {error === null ? (
          <section>
            <h1>Trending today</h1>
            <ul>
              {moviesArr.map(({ id, title, name }) => (
                <li key={id}>
                  <Link to={`/movies/${id}`}>{title || name}</Link>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <h2>{error} Something went wrong...</h2>
        )}
      </Container>
    </main>
  );
};

export default Home;
