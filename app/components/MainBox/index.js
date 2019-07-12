/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import Exemple1 from '../Exemple1';
import Exemple2 from '../Exemple2';
import Exemple3 from '../Exemple3';
import Exemple4 from '../Exemple4';
import Exemple5 from '../Exemple5';
import Exemple6 from '../Exemple6';
import Exemple7 from '../Exemple7';
import Exemple8 from '../Exemple8';

function MainBox({ selected }) {
  return (
    <div>
      {selected === 1 && <Exemple1 />}
      {selected === 2 && <Exemple2 />}
      {selected === 3 && <Exemple3 />}
      {selected === 4 && <Exemple4 />}
      {selected === 5 && <Exemple5 />}
      {selected === 6 && <Exemple6 />}
      {selected === 7 && <Exemple7 />}
      {selected === 8 && <Exemple8 />}
    </div>
  );
}

MainBox.propTypes = {
  selected: PropTypes.number,
};

export default MainBox;
