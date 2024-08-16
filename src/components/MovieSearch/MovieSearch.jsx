import React from 'react';
import styled from "styled-components";
import { hexToRgba } from "components/GlobalStyle";

const Form = styled.form`
    max-width: 600px;
    display: flex;

    & input,
    & button {
      height: 40px;
      display: flex;
      align-items: center;
      transition: ${props => props.theme.animation.speed} ${props => props.theme.animation.speed} ease-in-out;
    }

    & button {
      padding: 10px 10px;
      background: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.light};
      border: 1px solid ${props => props.theme.colors.accent};

      &:hover {
        background: ${props => hexToRgba(props.theme.colors.accent, 0.6)};
      }
    }

    & input {
      flex-grow: 1;
      padding: 0px 10px;
      border: 1px solid ${props => props.theme.colors.dark};

      &:focus {
        border-color: ${props => props.theme.colors.accent};
      }
    }
  `

const MovieSearch = ( { save, change, value } ) => {
  const handleSave = () => {
    save();
  }

  return (
    <Form>
      <input onChange={(e) => change(e.currentTarget)} value={value} type="text"/>
      <button type='button' onClick={handleSave}>Search</button>
    </Form>
  )
};

export default MovieSearch;
