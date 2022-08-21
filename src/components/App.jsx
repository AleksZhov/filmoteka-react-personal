import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('./Home/Home'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

// const createAsyncComp = path => lazy(() => import(path));
// const Cast = createAsyncComp('./Cast/Cast.jsx');
// const Home = createLazyComp('./Home/Home.jsx');
// const NotFound = createLazyComp('./Notfound/NotFound.jsx');
// const MovieDetails = createLazyComp('./MovieDetails/MovieDetails.jsx');
// const Movies = createLazyComp('./Movies/Movies.jsx');
// const Reviews = createLazyComp('./Reviews/Reviews.jsx');

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
