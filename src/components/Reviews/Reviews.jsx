import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { APIservise } from 'components/services/APIservice';

function Reviews() {
  const { movieId } = useParams();
  const [reviewList, setReviewList] = useState([]);
  const getMovieReviews = async () => {
    const result = await APIservise.getMovieReviews(movieId);
    setReviewList(result.results);
  };
  useEffect(() => {
    getMovieReviews();
    //eslint-disable-next-line
  }, []);

  return (
    <section>
      {reviewList.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul>
        {reviewList.map(({ id, author, content }) => (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Reviews;
