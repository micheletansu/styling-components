/**
 *
 * Exemple9
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { css } from 'styled-components';

const basicStyle = `
  background-color: orange;
  padding: 1rem 1.5em;
  font-size: 1em;
  color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin: 0 1em 0.5em 0;
`;

const iconStyle = `
  background-color: green;
  margin-right: 1rem;
`;

const Button = ({ label, icon }) => (
  <button type="button" css={basicStyle}>
    {icon && <span css={iconStyle}>{icon}</span>}
    {label}
  </button>
);
Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

const color = 'white';
const colorBlack = 'black';
const colorDanger = 'red';
const bg = 'orange';

function Exemple9() {
  return (
    <div css="border: 2px solid orange">
      <p
        css={`
          background: ${bg};
          color: ${color};
        `}
      >
        Plugin babel-plugin-styled-components
        <br />
      </p>
      <p
        css={css`
          color: ${colorBlack};
          ${props => props.danger && `color: ${colorDanger}; font-weight: 600`}
        `}
      >
        permette l'utilizzo dell'attributo html css
      </p>
      <p
        danger
        css={css`
          color: ${colorBlack};
          ${props => props.danger && `color: ${colorDanger}; font-weight: 800`}
        `}
      >
        npm install --save-dev babel-plugin-styled-components@latest
      </p>

      <Button label="Without icon" />
      <Button label="With it" icon={<img src="" alt="^_^" />} />
    </div>
  );
}

Exemple9.propTypes = {};

export default Exemple9;
