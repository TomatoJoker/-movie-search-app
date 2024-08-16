import React from 'react';
import {Section, Container} from "../GlobalStyle";
import {useParams} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import {UnorderedList, ListItem} from "@chakra-ui/react";
import useApiData from "hooks/useApiData";

const MovieReview = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const { movieId} = params;
  const { apiData } = useApiData(`/movie/${movieId}/reviews?api_key=${apiKey}`);;

  if (!apiData) {
    return null;
  }

  const movieReview = apiData.results;

  if (movieReview && movieReview.length === 0) {
    return (
      <Section>
        <Container>
          <Box pt='40px'>
            <h3>We don't have any review for this film</h3>
          </Box>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        {movieReview && (
          <UnorderedList>
          {movieReview.map(({id, author, content}) => (
              <ListItem key={id} mt='30px'>
                <h3>{author}</h3>
                <Box mt='20px'>
                  <p>{content}</p>
                </Box>
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </Container>
    </Section>
  )
};

export default MovieReview;
