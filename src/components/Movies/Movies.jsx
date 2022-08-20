import { useState, useEffect } from 'react';
import { APIservise } from 'components/services/APIservice';
import { Container } from '../App.styled';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchedMoviesArr, setSearchedMoviedArr] = useState([]);
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
    await console.log(result);
    const receivedMoviesArray = await result.results;
    setSearchedMoviedArr(receivedMoviesArray);
  };

  const submitHandle = e => {
    e.preventDefault();
    setSearchValue(inputSearchValue);
  };

  useEffect(() => {
    if (searchValue !== '') {
      getMoviesArray();
    }
    //eslint-disable-next-line
  }, [searchValue]);

  return (
    <main>
      <Container>
        <form onSubmit={submitHandle}>
          <label>
            <input
              type="text"
              name="movie-input-search"
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
