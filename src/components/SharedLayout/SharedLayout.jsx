import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Container } from '../GlobalStyle';
import { Box } from '@chakra-ui/react';

const Header = styled.header`
  padding: 20px 0px;
  border-bottom: 1px solid ${props => props.theme.colors.dark};
`;

const MenuLink = styled(NavLink)`
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.dark};
  transition: ${props => props.theme.animation.speed} ${props => props.theme.animation.timeFunction} color;

  &:hover,
  &.active {
    color: ${props => props.theme.colors.accent};
  }
`

const SharedLayout = () => (
    <>
      <Header>
        <Container>
          <nav>
            <Box as="ul" display='flex' gap='20'>
              <li>
                <MenuLink to='/'>Home</MenuLink>
              </li>
              <li>
                <MenuLink to='/movies'>Movies</MenuLink>
              </li>
            </Box>
          </nav>
        </Container>
      </Header>
      <Outlet/>
    </>
  )
;

export default SharedLayout;
