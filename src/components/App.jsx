import {Routes, Route} from 'react-router-dom';
import {GlobalStyles} from './GlobalStyle';
import SharedLayout from "./SharedLayout";
import { ChakraProvider } from '@chakra-ui/react';
import Home from "pages/Home";
import MovieDetail from "pages/MovieDetail";
import MovieCast from "components/MovieCast";
import MovieReview from "components/MovieReview";
import Movies from "pages/Movies";

export const App = () => {
  return (
    <ChakraProvider>
      <GlobalStyles/>
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
    </ChakraProvider>
  );
};
