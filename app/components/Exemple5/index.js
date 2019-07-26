/**
 *
 * Exemple5
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
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
  bg: 'orange',
};

function Exemple5() {
  return <MasterBoxStyled {...css}>Box 5 - Extends Main Box</MasterBoxStyled>;
}

Exemple5.propTypes = {};

export default Exemple5;
