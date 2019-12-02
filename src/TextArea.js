import React, { useState } from 'react';

const TextArea = props => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  return (
    <>
      <div style={styles.textArea}>
        <p style={styles.inputNumbers}>{input}</p>
        <p style={styles.outputNumbers}>{output}</p>
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
  },
  outputNumbers: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    margin: 0,
    textAlign: 'right',
    padding: '0px 40px 40px 30px',
    fontWeight: 'bold',
    fontSize: '24px'
  }
};

export default TextArea;
