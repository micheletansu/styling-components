import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the index state domain
 */

const selectIndexDomain = state => state.index || initialState;

/**
 * Other specific selectors
 */
const makeSelectIndexPosition = () =>
  createSelector(
    selectIndexDomain,
    substate => substate.position,
  );

/**
 * Default selector used by Index
 */

const makeSelectIndex = () =>
  createSelector(
    selectIndexDomain,
    substate => substate,
  );

export default makeSelectIndex;
export { selectIndexDomain, makeSelectIndexPosition };
