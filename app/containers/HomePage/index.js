import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Index from 'containers/Index';
import { makeSelectIndexPosition } from 'containers/Index/selectors';
import './index.css';

import Exemple1 from 'components/Exemple1';
import Exemple2 from 'components/Exemple2';
import Exemple3 from 'components/Exemple3';
import Exemple4 from 'components/Exemple4';
import Exemple5 from 'components/Exemple5';
import Exemple6 from 'components/Exemple6';
import Exemple7 from 'components/Exemple7';
import Exemple8 from 'components/Exemple8';
import Exemple9 from 'components/Exemple9';

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
        <h1 style={{ color: 'orange' }}>Styling Stay Long {selected}</h1>
        <Switch>
          <Route exact path="/Exemple1" component={Exemple1} />
          <Route exact path="/Exemple2" component={Exemple2} />
          <Route exact path="/Exemple3" component={Exemple3} />
          <Route exact path="/Exemple4" component={Exemple4} />
          <Route exact path="/Exemple5" component={Exemple5} />
          <Route exact path="/Exemple6" component={Exemple6} />
          <Route exact path="/Exemple7" component={Exemple7} />
          <Route exact path="/Exemple8" component={Exemple8} />
          <Route exact path="/Exemple9" component={Exemple9} />
        </Switch>
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
