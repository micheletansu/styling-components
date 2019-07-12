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

export function HomePage({ selected }) {
  // No styled components in this template
  return (
    <div className="container">
      <section style={{ flex: 0, fontSize: '30px', margin: '0.67em 0' }}>
        <Index />
      </section>

      <section style={inlineStyleObject}>
        <h1 style={{ color: 'orange' }}>Styling Staylong</h1>
        <MainBox {...{ selected }} />
      </section>
    </div>
  );
}

HomePage.propTypes = {
  selected: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  selected: makeSelectIndexPosition(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(HomePage);
