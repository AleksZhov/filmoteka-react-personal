import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { APIservise } from 'components/services/APIservice';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  const getMovieCast = async () => {
    const result = await APIservise.getMovieCredits(movieId);
    await console.log(result);
    setCastList(result.cast);
  };
  useEffect(() => {
    getMovieCast();
    //eslint-disable-next-line
  }, []);
  return (
    <section>
      {castList.length === 0 && (
        <p> We don't have cast information for the moment</p>
      )}
      <ul>
        {castList.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
              width="100"
            />
            <p>{name}</p>
            <p> Character : {character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
