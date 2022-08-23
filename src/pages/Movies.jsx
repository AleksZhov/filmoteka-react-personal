import { useState, useEffect } from 'react';
import { APIservise } from '../services/APIservice';
import { Container } from '../components/App.styled';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchedMoviesArr, setSearchedMoviedArr] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const searchedMovieName = searchParams.get('movieName');
  const [error, setError] = useState(null);

  const inputHandle = e => {
    setInputSearchValue(e.currentTarget.value);
  };

  const getMoviesArray = async () => {
    setError(null);
    const result = await APIservise.searchMovieByQueryAndPage(
      searchValue,
      setError
    );
    const receivedMoviesArray = await result.results;
    setSearchedMoviedArr(receivedMoviesArray);
  };

  const submitHandle = e => {
    console.log(inputSearchValue);
    e.preventDefault();
    setSearchedMoviedArr([]);
    setSearchParams({ query: inputSearchValue });
    setSearchValue(inputSearchValue);
  };

  useEffect(() => {
    const query = searchParams.get('query') || '';
    if (query !== inputSearchValue) {
      setSearchValue(query);
    }
    if (searchValue === '') return;
    getMoviesArray();
    //eslint-disable-next-line
  }, [searchValue]);

  return (
    <main>
      <Container>
        <form onSubmit={submitHandle}>
          <label>
            <input
              type="text"
              name="movieInputSearch"
              value={inputSearchValue}
              onChange={inputHandle}
            ></input>
          </label>
          <button type="submit">Search</button>
        </form>
        {error ? (
          <h2>{error} Something went wrong</h2>
        ) : (
          <ul>
            {searchedMoviesArr.map(({ id, title, name }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title || name}</Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </main>
  );
};

export default Movies;
