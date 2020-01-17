import React, { Component } from 'react';
import TextArea from './TextArea';
import CalcualtorButtons from './CalcualtorButtons';

class Calcualtor extends Component {
  state = {
    result: '',
    equalsPressed: false
  };

  buttonClicked = buttonValue => {
    switch (buttonValue) {
      case '=':
        this.calculate();
        this.setState({ equalsPressed: true });
        break;
      case 'DEL':
        this.setState({ result: '' });
        break;
      case '/':
      case '+':
      case '-':
      case '*':
        this.setState({ result: this.state.result + buttonValue, equalsPressed: false });
        break;
      default:
        if (this.state.equalsPressed) {
          this.setState({ result: '', equalsPressed: false }, () => {
            this.setState({ result: this.state.result + buttonValue });
          });
          return;
        }
        this.setState({ result: this.state.result + buttonValue });
    }
  };

  calculate = () => {
    this.setState({
      result: eval(this.state.result)
    });
  };

  render() {
    return (
      <div className="calculator">
        <TextArea result={this.state.result} />
        <CalcualtorButtons buttonClicked={this.buttonClicked} />
      </div>
    );
  }
}

export default Calcualtor;
