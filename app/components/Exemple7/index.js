/**
 *
 * Exemple7
 *
 */

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';

const MainBoxStyled = styled.div`
  color: ${props => props.color || 'gray'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
`;

const ThemedBoxStyled = styled(MainBoxStyled)`
  color: ${props => props.theme.color};
  border-color: ${props => props.theme.color};
  background: ${props => props.theme.bg};
`;

const ThemedButtonStyled = styled.button`
  color: ${props => props.theme.color};
  border-color: ${props => props.theme.color};
  background: ${props => props.theme.bg};
  border-radius: 3px;
  float: right;
  font-size: 0.8em;
`;

function Exemple7() {
  return (
    <ThemeProvider theme={theme}>
      <ThemedBoxStyled>
        <button type="button" style={{ float: 'left' }}>
          Normal button
        </button>
        Box 7 - Theme
        <ThemedButtonStyled>Themed button</ThemedButtonStyled>
      </ThemedBoxStyled>
    </ThemeProvider>
  );
}

Exemple7.propTypes = {};

export default Exemple7;
