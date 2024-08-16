import React from 'react';
import {Container, Main} from 'components/GlobalStyle';
import {Box} from '@chakra-ui/react';
import TrendingList from "components/TrendingList";
import useApiData from "hooks/useApiData";

const Home = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const {apiData, error} = useApiData(`/trending/all/day?api_key=${apiKey}`);

  if (!apiData) {
    return null;
  }

  const trending = apiData.results;

  return (
    <Main>
      {error && (
        <h1>{error} <br/> Please reload page</h1>
      )}
      <section>
        <Container>
          <h1>Trending Today</h1>
          <Box mt={10}>
            <TrendingList data={trending}/>
          </Box>
        </Container>
      </section>
    </Main>
  )
};

export default Home;
