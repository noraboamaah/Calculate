import React from 'react';
import Button from './Button';

const CalcualtorButtons = () => {
  return (
    <div style={styles}>
      <>
        <Button item="7" itemType="number" />
        <Button item="8" itemType="number" />
        <Button item="9" itemType="number" />
        <Button item="DEL" itemType="operator" />
      </>
      <>
        <Button item="4" itemType="number" />
        <Button item="5" itemType="number" />
        <Button item="6" itemType="number" />
        <Button item="+" itemType="operator" />
      </>
      <>
        <Button item="1" itemType="number" />
        <Button item="2" itemType="number" />
        <Button item="3" itemType="number" />
        <Button item="*" itemType="operator" />
      </>
      <>
        <Button item="." itemType="operator" />
        <Button item="0" itemType="number" />
        <Button item="=" itemType="operator" />
        <Button item="-" itemType="operator" />
      </>
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
