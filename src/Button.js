import React from 'react';

const Button = props => {
  return <div style={props.itemType === 'number' ? styles.number : styles.operator}>{props.item}</div>;
};

const styles = {
  number: {
    width: '20%',
    margin: '0.2vw',
    height: '10vh',
    background: '#D6D6FA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '0.5rem'
  },

  operator: {
    width: '20%',
    margin: '0.2vw',
    height: '10vh',
    background: '#6D6D7F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '0.5rem'
  }
};

export default Button;
