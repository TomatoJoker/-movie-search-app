import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Box } from "@chakra-ui/react";

const BackTo = ({text = 'Go back'}) => {
  const location = useLocation();
  const { state } = location;

  return (
    <Box mb='20px'>
      <Link to={state ? state.from : '/'}>← {text}</Link>
    </Box>
  )
};

export default BackTo;
