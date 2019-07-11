import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import MainBox from 'components/MainBox';
import Index from 'containers/Index';
import { makeSelectIndexPosition } from 'containers/Index/selectors';
import './index.css';

const inlineStyleObject = {
  flex: 1,
};

export function HomePage({ position }) {
  // No styled components in this template
  return (
    <div className="container">
      <section style={{ flex: 0, fontSize: '30px', margin: '0.67em 0' }}>
        <Index />
      </section>

      <section style={inlineStyleObject}>
        <h1>Styled components</h1>
        <MainBox {...{ position }} />
      </section>
    </div>
  );
}

HomePage.propTypes = {
  position: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  position: makeSelectIndexPosition(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(HomePage);
