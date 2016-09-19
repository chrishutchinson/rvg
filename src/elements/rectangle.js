const util = require('util');
const React = require('react');

class Rectangle extends React.Component {

  render() {
    const {
      x, y,
      fill,
      height, width
    } = this.props;
    
    return (
      <rect x={x} y={y} fill={fill} height={height} width={width} />
    );
  }

}

// Prop types
Rectangle.propTypes = {
  x: React.PropTypes.any.isRequired,
  y: React.PropTypes.any.isRequired,
  fill: React.PropTypes.string.isRequired,
  height: React.PropTypes.any.isRequired,
  width: React.PropTypes.any.isRequired
};

Rectangle.defaultProps = {
  x: 0,
  y: 0,
  fill: '#000',
  height: 100,
  width: 100
}

module.exports = Rectangle;