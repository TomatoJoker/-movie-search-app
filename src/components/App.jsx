import {lazy, Suspense} from "react";
import {Routes, Route} from 'react-router-dom';
import {GlobalStyles} from './GlobalStyle';
import SharedLayout from "./SharedLayout";
import {ChakraProvider} from '@chakra-ui/react';

const Home = lazy(() => import("pages/Home"));
const MovieDetail = lazy(() => import("pages/MovieDetail"));
const MovieCast = lazy(() => import("components/MovieCast"));
const MovieReview = lazy(() => import("components/MovieReview"));
const Movies = lazy(() => import("pages/Movies"));

export const App = () => {
  return (
    <ChakraProvider>
      <GlobalStyles/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="movies" element={<Movies/>}/>
            <Route path='movies/:movieId' element={<MovieDetail/>}>
              <Route path='cast' element={<MovieCast/>}/>
              <Route path='reviews' element={<MovieReview/>}/>
            </Route>
            <Route path="*" element={<div><h1>404</h1></div>}/>
          </Route>
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
};
