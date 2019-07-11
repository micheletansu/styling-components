import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

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

const css = {
  color: 'green',
  bg: 'yellow',
};

const MyStyledComponent = styled(ThemedBoxStyled)`
  color: violet !important;
`;

function MainBox({ position: selected }) {
  return (
    <div>
      {selected === 1 && (
        <div>
          <MainBoxStyled>Box 1 - Styled {selected}</MainBoxStyled>
          <p>Pro e contro</p>
          <pre style={{ display: 'inline', textAlign: 'left' }}>
            &lt;MainBoxStyled&gt;Box 1 - Styled {selected}
            &lt;/MainBoxStyled&gt;{'\n'}
            {'\n'}
          </pre>
          <pre style={{ display: 'inline', textAlign: 'left' }}>
            const MainBoxStyled = styled.div`{'\n'}
            {'\t'}color: ${'{'}props => props.color || 'grey'{'};\n'}
            {'\t'}font-size: 1em;{'\n'}
            {'\t'}margin: 1em;{'\n'}
            {'\t'}padding: 0.25em 1em;{'\n'}
            {'\t'}border: 2px solid grey;{'\n'}
            {'\t'}border-radius: 3px;{'\n'}
            `;{'\n'}
          </pre>
        </div>
      )}

      {selected === 2 && (
        <MainBoxStyled color="red">
          Box 2 - Styled with color html attr
        </MainBoxStyled>
      )}

      {selected === 3 && (
        <MainBoxStyled {...css}>
          Box 3 - Styled with attr props (spread op.)
        </MainBoxStyled>
      )}

      {selected === 4 && <div {...css}>Box 4 - Div not styled</div>}

      {selected === 5 && (
        <MasterBoxStyled {...css}>Box 5 - Extends Main Box</MasterBoxStyled>
      )}

      {selected === 6 && (
        <MasterBoxStyled as="span" {...css}>
          Box 6 - As span
        </MasterBoxStyled>
      )}

      {selected === 7 && (
        <ThemeProvider theme={theme}>
          <ThemedBoxStyled>
            <button type="button" style={{ float: 'left' }}>
              Normal button
            </button>
            Box 7 - Theme
            <ThemedButtonStyled>Themed button</ThemedButtonStyled>
          </ThemedBoxStyled>
        </ThemeProvider>
      )}

      {selected === 8 && (
        <MyStyledComponent style={{ color: 'green', borderColor: 'green' }}>
          Override inline css with important
        </MyStyledComponent>
      )}
    </div>
  );
}

MainBox.propTypes = {
  position: PropTypes.number,
};

export default MainBox;
