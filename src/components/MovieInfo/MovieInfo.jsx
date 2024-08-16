import React from 'react';
import {Box} from "@chakra-ui/react";

const MovieInfo = ({data}) => {
  const {title, overview, poster_path, vote_average, genres} = data;

  return (
    <Box display='flex' gap='40px'>
      <Box maxW='300px' minW='300px'>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
      </Box>
      <Box display='flex' gap={10} alignItems='flex-start' pb='20px'>
        <Box flexGrow={1}>
          <Box as='h1' mb={5}>
            {title}
          </Box>
          <Box mb={5}>
            User score: {vote_average}
          </Box>
          <Box as='h2' mb={5}>
            Overview
          </Box>
          <Box mb={5}>
            <p>{overview}</p>
          </Box>
          <Box as='h2' mb={5}>
            Genres
          </Box>
          <Box as='ul' display='flex' gap='20px'>
            {genres.map(({id, name}) => (
              <li key={id}>{name}</li>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default MovieInfo;
