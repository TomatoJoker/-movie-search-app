import React from 'react';
import {Section, Container} from "../GlobalStyle";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {Box} from "@chakra-ui/react";
import useApiData from "hooks/useApiData";

const CastItem = styled.li`
    margin-top: 30px;
  `;

const MovieCast = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const {movieId} = params;
  const {apiData} = useApiData(`/movie/${movieId}/credits?api_key=${apiKey}`);

  if (!apiData) {
    return null;
  }

  const movieCast = apiData.cast;

  if (movieCast && movieCast.length === 0) {
    return (
      <Section>
        <Container>
          <Box pt='40px'>
            <h3>We don't have any info about cast for this film</h3>
          </Box>
        </Container>
      </Section>
    )
  }

  return (
    <Section>
      <Container>
        <ul>
          {movieCast.map(({name, profile_path, character}) => (
            <CastItem key={name}>
              <img src={ profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}` : '/assets/img/none.svg'} width='200' height='300' alt={`${name}`}/>
              <Box as='h3' mt='10px'>{name}</Box>
              <Box as='h4' mt='5px'>{character}</Box>
            </CastItem>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export default MovieCast;
