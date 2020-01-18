import React from 'react';
import { StyleRoot } from 'radium';

const Button = props => {
  const buttonClicked = e => {
    props.onClick(e.target.value);
  };
  return (
    <StyleRoot>
      <button
        value={props.value}
        onClick={buttonClicked}
        style={props.itemType === 'number' ? styles.number : styles.operator}
      >
        {props.value}
      </button>
    </StyleRoot>
  );
};
const styles = {
  number: {
    '@media screen and (min-width: 300px) and (max-width: 700px)': {
      width: '18vw'
    },
    width: '5vw',
    margin: '0.2vw',
    height: '10vh',
    background: '#D6D6FA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '0.5rem',
    fontWeight: 'bold',
    fontSize: 16
  },

  operator: {
    '@media screen and (min-width: 300px) and (max-width: 700px)': {
      width: '18vw'
    },
    width: '5vw',
    margin: '0.2vw',
    height: '10vh',
    background: '#6D6D7F',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '0.5rem',
    fontWeight: 'bold',
    fontSize: 16
  }
};

export default Button;
