import React from 'react';
import { Container, Main, Section } from 'components/GlobalStyle';
import { styled } from 'styled-components';
import {useParams, Outlet} from "react-router-dom";
import useApiData from "hooks/useApiData";
import MovieInfo from 'components/MovieInfo';
import MovieTabs from "components/MovieTabs";
import BackTo from "components/BackTo";


const Tabs = styled.section`
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.dark};
  `

const MovieDetail = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const {movieId} = useParams();
  const { apiData, error } = useApiData(`/movie/${movieId}?api_key=${apiKey}`);

  const NavItem = [
    {link: 'cast', text: 'Cast'},
    {link: 'reviews', text: 'Reviews'}
  ]

  return (
    <Main>
      {error && (
        <h1>{error} <br/> Please reload page</h1>
      )}
      {apiData && (
        <>
          <Section>
            <Container>
              <BackTo link='/'/>
              <MovieInfo data={apiData}/>
            </Container>
          </Section>
          <Tabs>
            <Container>
              <MovieTabs links={NavItem}/>
            </Container>
          </Tabs>
          <Outlet/>
        </>
      )}
    </Main>

  )
};

export default MovieDetail;
