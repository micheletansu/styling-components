/**
 *
 * Exemple2
 *
 */

import React from 'react';
import styled from 'styled-components';

const MainBoxStyled = styled.div`
  color: ${props => props.color || 'gray'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
`;

function Exemple2() {
  return (
    <MainBoxStyled color="red">
      Box 2 - Styled with color html attr
    </MainBoxStyled>
  );
}

Exemple2.propTypes = {};

export default Exemple2;
