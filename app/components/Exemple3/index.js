/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/**
 *
 * Exemple3
 *
 */

import React from 'react';
import styled from 'styled-components';

const breakpoints = {
  sm: '(max-width: 420px)',
  md: '(max-width: 1024px)',
  lg: '(max-width: 1300px)',
};

const calculateStuff = props => {
  console.group('calculateStuff props:');
  for (const [key, value] of Object.entries(props)) {
    console.info(`${key}: ${value}`);
  }
  console.groupEnd();
  return 'orange';
};

const MainBoxStyled = styled.div`
  color: ${props => props.color || 'gray'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;

  @media ${breakpoints.md} {
    background: ${calculateStuff};
  }
`;

const css = {
  color: 'green',
  bg: 'yellow',
};

function Exemple3() {
  return (
    <MainBoxStyled {...css}>
      Box 3 - Styled with attr props (spread op.)
    </MainBoxStyled>
  );
}

Exemple3.propTypes = {};

export default Exemple3;
