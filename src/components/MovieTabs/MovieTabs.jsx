import {ListItem, UnorderedList} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React from "react";

const MovieTabs = ({links}) => (
  <UnorderedList>
    {links.map(({link, text}) => (
      <ListItem key={link}>
        <Link to={link}>{text}</Link>
      </ListItem>
    ))}
  </UnorderedList>
);

export default MovieTabs;
