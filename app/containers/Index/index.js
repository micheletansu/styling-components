import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled, { ThemeProvider } from 'styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import theme, { invertTheme } from '../../utils/theme';
import makeSelectIndex, { makeSelectIndexPosition } from './selectors';
import reducer from './reducer';
import { setPositionAction } from './actions';

const IndexButton = styled.button`
  color: ${props => props.theme.color};
  border: 2px solid;
  border-color: ${props => props.theme.color};
  background: ${props => props.theme.bg};
  margin: 0.3em;
  padding: 0.25em 1em;
  border-radius: 4px;
  font-size: 0.8em;
  display: block;
  cursor: pointer;
  width: 150px;
  :hover {
    font-weight: bolder;
    text-decoration: underline;
  }
`;

function getButtonList(selected, handleIndexClick) {
  const buttons = [];
  for (let i = 0; i < 8; i += 1) {
    buttons[i] = (
      <IndexButton type="button" onClick={() => handleIndexClick(i + 1)}>
        Box {i + 1}
      </IndexButton>
    );

    if (i + 1 === selected) {
      buttons[i] = (
        <ThemeProvider theme={invertTheme}>{buttons[i]}</ThemeProvider>
      );
    }
  }
  return buttons;
}

export function Index({ handleIndexClick, position }) {
  useInjectReducer({ key: 'index', reducer });
  const buttons = getButtonList(position, handleIndexClick);

  return (
    <div>
      <span>Index</span>
      <ThemeProvider theme={theme}>
        <div>{buttons.map(button => button)}</div>
      </ThemeProvider>
    </div>
  );
}

Index.propTypes = {
  handleIndexClick: PropTypes.func,
  position: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  index: makeSelectIndex(),
  position: makeSelectIndexPosition(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleIndexClick: position => dispatch(setPositionAction(position)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Index);
