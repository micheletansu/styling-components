/**
 *
 * Exemple4
 *
 */

import React from 'react';

const css = {
  color: 'green',
  bg: 'yellow',
};

function Exemple4() {
  return <div {...css}>Box 4 - Div not styled</div>;
}

Exemple4.propTypes = {};

export default Exemple4;
