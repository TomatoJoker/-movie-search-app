import React from 'react';
import {ListItem, UnorderedList} from "@chakra-ui/react";
import {Link, useLocation} from "react-router-dom";

const TrendingList = ({data}) => {
  const location = useLocation();
  const {pathname, search} = location;

  return (
    <UnorderedList>
      {data.map(({id, title, name}) => (
        <ListItem key={id}>
          <Link to={`/movies/${id}`} state={{from: pathname + search}}>
            {title ? title : name}
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  )
};

export default TrendingList;
