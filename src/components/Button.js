import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    console.log(':: click ::');
  };

  render() {
    const btnText = this.props.text || 'Click Me';

    return (
      <button onClick={this.handleClick}>{btnText}</button>
    );
  }
}

Button.propTypes = {
  text: React.PropTypes.string
};

export default Button;
