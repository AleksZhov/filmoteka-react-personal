import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
// const createAsyncComp = path => lazy(() => import(path));

const Home = lazy(() => import('./Home/Home'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

// const Cast = createAsyncComp('./Cast/Cast.jsx');
// const Home = createLazyComp('./Home/Home.jsx');
// const NotFound = createLazyComp('./Notfound/NotFound.jsx');
// const MovieDetails = createLazyComp('./MovieDetails/MovieDetails.jsx');
// const Movies = createLazyComp('./Movies/Movies.jsx');
// const Reviews = createLazyComp('./Reviews/Reviews.jsx');

export const App = () => {
  return (
    <Suspense fallback={<h2>Loading ... </h2>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
