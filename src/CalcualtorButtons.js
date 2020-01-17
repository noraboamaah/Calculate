import React from 'react';
import Button from './Button';

const CalcualtorButtons = props => {
  return (
    <div style={styles}>
      <div>
        <Button item="7" itemType="number" value="7" name="7" onClick={props.buttonClicked} />

        <Button item="4" itemType="number" name="4" value="4" onClick={props.buttonClicked} />

        <Button item="1" itemType="number" name="1" value="1" onClick={props.buttonClicked} />

        <Button item="0" itemType="number" name="0" value="0" onClick={props.buttonClicked} />
      </div>
      <div>
        <Button item="8" itemType="number" name="8" value="8" onClick={props.buttonClicked} />

        <Button item="5" itemType="number" name="5" value="5" onClick={props.buttonClicked} />

        <Button item="2" itemType="number" name="2" value="2" onClick={props.buttonClicked} />

        <Button item="-" itemType="operator" name="-" value="-" onClick={props.buttonClicked} />
      </div>
      <div>
        <Button item="9" itemType="number" name="9" value="9" onClick={props.buttonClicked} />

        <Button item="6" itemType="number" name="6" value="6" onClick={props.buttonClicked} />

        <Button item="3" itemType="number" name="3" value="3" onClick={props.buttonClicked} />

        <Button item="+" itemType="operator" name="+" value="+" onClick={props.buttonClicked} />
      </div>
      <div>
        <Button item="DEL" itemType="operator" name="DEL" value="DEL" onClick={props.buttonClicked} />

        <Button item="=" itemType="operator" name="=" value="=" onClick={props.buttonClicked} />

        <Button item="*" itemType="operator" name="*" value="*" onClick={props.buttonClicked} />

        <Button item="/" itemType="operator" name="/" value="/" onClick={props.buttonClicked} />
      </div>
    </div>
  );
};

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  alignContent: 'center',
  height: '80%'
};

export default CalcualtorButtons;
