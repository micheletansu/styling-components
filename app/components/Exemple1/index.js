/**
 *
 * Exemple1
 *
 */

import React from 'react';
import styled from 'styled-components';

const MainBoxStyled = styled.div`
  color: orange;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
`;

function Exemple1() {
  return (
    <div>
      <MainBoxStyled>Box 1 - Styled</MainBoxStyled>

      <div style={{ textAlign: 'center' }}>
        <pre style={{ display: 'inline', textAlign: 'left' }}>
          &lt;MainBoxStyled&gt;Box 1 - Styled&lt;/MainBoxStyled&gt;{'\n'}
          {'\n'}
        </pre>

        <pre style={{ display: 'inline-block', textAlign: 'left' }}>
          const MainBoxStyled = styled.div`{'\n'}
          {'\t'}color: ${'{'}props =&gt; props.color || {'"'}grey{'"'}
          {'};\n'}
          {'\t'}font-size: 1em;{'\n'}
          {'\t'}margin: 1em;{'\n'}
          {'\t'}padding: 0.25em 1em;{'\n'}
          {'\t'}border: 2px solid grey;{'\n'}
          {'\t'}border-radius: 3px;{'\n'}
          `;{'\n'}
        </pre>
      </div>
    </div>
  );
}

Exemple1.propTypes = {};

export default Exemple1;
