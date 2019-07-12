/**
 *
 * Exemple6
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

const MasterBoxStyled = styled(MainBoxStyled)`
  background: ${props => props.bg || 'white'};
`;

const css = {
  color: 'green',
  bg: 'yellow',
};

function Exemple6() {
  return (
    <MasterBoxStyled as="span" {...css}>
      Box 6 - As span
    </MasterBoxStyled>
  );
}

Exemple6.propTypes = {};

export default Exemple6;
