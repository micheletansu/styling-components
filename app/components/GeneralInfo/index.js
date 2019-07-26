/**
 *
 * GeneralInfo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function GeneralInfo() {
  return (
    <ul>
      <li>
        Repo:{' '}
        <a href="https://github.com/micheletansu/styling-speech.git">
          https://github.com/micheletansu/styling-speech.git
        </a>
      </li>
      <li>npm install --save styled-components</li>
      <li>
        SC Allows to create normal react components by only defining styles
      </li>
      <li>
        It solves such important problem like CSS modularity, provides non-CSS
        features like nesting, and all these features supplied with
        zero-configuration
      </li>
      <li>
        Developers no need to think about uniq names for CSS classes they even
        don’t need to think about classes at all
      </li>
    </ul>
  );
}

GeneralInfo.propTypes = {};

export default GeneralInfo;
