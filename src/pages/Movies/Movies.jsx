import React, {useState} from 'react';
import {Section, Container, Main} from "components/GlobalStyle";
import MovieSearch from "components/MovieSearch";
import useApiData from "hooks/useApiData";
import TrendingList from "components/TrendingList";
import { Box } from '@chakra-ui/react';
import {useSearchParams} from "react-router-dom";

const Movies = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [movieName, setMovieName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get('filter') ?? '';
  const {apiData} = useApiData(`/search/movie?api_key=${apiKey}&query=${movieName}`);

  const handleSave = () => {
    setMovieName(filterValue);
  }

  const changeInput = (eventTarget) => {
    const { value } = eventTarget;
    setSearchParams(value !== '' ? { filter: value } : {});
  }

  return (
    <Main>
      <Section>
        <Container>
          <MovieSearch save={handleSave} change={changeInput} value={filterValue}/>
          {apiData && (
            <Box mt='20px'>
              <TrendingList data={apiData.results}/>
            </Box>
          )}
        </Container>
      </Section>
    </Main>
  )
};

export default Movies;
