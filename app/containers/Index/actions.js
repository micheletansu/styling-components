/*
 *
 * Index actions
 *
 */

import { SET_POSITION } from './constants';

export function setPositionAction(payload) {
  return {
    type: SET_POSITION,
    payload,
  };
}
