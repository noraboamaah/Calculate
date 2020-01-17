import React from 'react';

const Button = props => {
  const buttonClicked = e => {
    props.onClick(e.target.value);
  };
  return (
    <button
      value={props.value}
      onClick={buttonClicked}
      style={props.itemType === 'number' ? styles.number : styles.operator}
    >
      {props.value}
    </button>
  );
};
const styles = {
  number: {
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
