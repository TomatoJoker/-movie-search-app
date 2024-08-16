import {createGlobalStyle, styled} from 'styled-components';

const hexToRgba = (hex, opacity) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 18px;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.light};
    background-position: top center;
    background-size: cover;
    color: ${props => props.theme.colors.dark};
    font-family: sans-serif;
  }

  span, a, p, strong, em, b {
    line-height: 1.5;
  }

  a {
    color: inherit;
  }

  ul {
    padding: 0px;
    list-style: none;
  }

  *:focus, *:focus-visible {
    outline: none !important;
  }

  h1, h2, h3, h4, h5, h6 {
    display: block;
    font-weight: 700;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.75rem;
    line-height: 1.4;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1.6;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.7;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
  }

  main {
    flex: 1 0 auto;
  }

  button {
    padding: 0;
    border: 0;
    background-color: transparent;
  }

  a {
    transition: ${props => props.theme.animation.speed} ${props => props.theme.animation.speed} ease-in-out;
    color: inherit;

    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const Container = styled.div`
  max-width: calc(${props => props.theme.layout.desktopWidth} + ${props => props.theme.layout.padding} * 2);
  width: 100%;
  padding-left: ${props => props.theme.layout.padding};
  padding-right: ${props => props.theme.layout.padding};
  margin-left: auto;
  margin-right: auto;
`;

const Main = styled.main`
  padding: 50px 0px;
`

const Section = styled.section`
    padding-bottom: 50px;
    border-bottom: 1px solid ${props => props.theme.colors.dark};
  `

export {Container, GlobalStyles, Main, Section, hexToRgba};

