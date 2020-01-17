import React from 'react';

const TextArea = props => {
  return (
    <>
      <div style={styles.textArea}>
        <p style={styles.inputNumbers}>{props.result}</p>
      </div>
    </>
  );
};

const styles = {
  textArea: {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    background: '#A2A2BD',
    width: '100%',
    height: '25%'
  },
  inputNumbers: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    margin: 0,
    textAlign: 'right',
    padding: '30px 40px 10px 40px',
    fontWeight: 'bold',
    fontSize: '24px'
  }
};

export default TextArea;
