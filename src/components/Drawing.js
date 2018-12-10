import React from 'react';
import '../styles/Drawing.scss';

class Drawing extends React.Component {

  componentDidMount() {
    this.renderCanvas();
  }

  componentDidUpdate(prevProps) {
    if (this.props.strikes !== prevProps.strikes) {
      console.log('componentDidUpdate strikes is', this.props.strikes)
      this.renderCanvas();
    }
  }

  renderCanvas = () => {
    const { strikes } = this.props;

    let c = document.getElementById("drawing");

    if (c === null) {
      return;
    }

    const ctx = c.getContext("2d");
    ctx.lineWidth = 3;

    if (strikes === 0) {
      ctx.beginPath();
      ctx.moveTo(90, 98);
      ctx.bezierCurveTo(98, 45, 135, 38, 173, 27);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(171, 26);
      ctx.bezierCurveTo(219, 105, 195, 225, 188, 280);
      ctx.stroke();
    }

    if (strikes === 1) {
      //circle face
      ctx.beginPath();
      ctx.arc(97, 123, 26, 0, 2 * Math.PI);
      ctx.stroke();
    }

    if (strikes === 2) {
      ctx.beginPath();
      ctx.moveTo(93, 148);
      ctx.bezierCurveTo(93, 191, 109, 191, 127, 191);
      ctx.stroke();
    }

    if (strikes === 3) {
      //left leg
      ctx.beginPath();
      ctx.moveTo(127.5, 191.25);
      ctx.bezierCurveTo(116.25, 198.75, 108.75, 206.25, 108.75, 236.25);
      ctx.stroke();

      //right leg
      ctx.beginPath();
      ctx.moveTo(127.5, 191.25);
      ctx.bezierCurveTo(138.75, 198.75, 146.25, 202.5, 161.25, 195);
      ctx.stroke();
    }

    if (strikes === 4) {
      //left arm
      ctx.beginPath();
      ctx.moveTo(96.75, 168.75);
      ctx.bezierCurveTo(90, 150, 82.5, 217.5, 41.25, 150);
      ctx.stroke();
    }

    if (strikes === 5) {
      //right arm
      ctx.beginPath();
      ctx.moveTo(96, 168.75);
      ctx.bezierCurveTo(108.75, 180, 123.75, 180, 150, 150);
      ctx.stroke();
    }

    if (strikes === 6) {
      ctx.lineWidth = 4;

      //begin left eye x
      ctx.beginPath();
      ctx.moveTo(79, 109);
      ctx.lineTo(90, 118);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(90, 107);
      ctx.lineTo(79, 118);
      ctx.stroke();

      //begin right eye x
      ctx.beginPath();
      ctx.moveTo(98, 106);
      ctx.lineTo(108, 114);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(108, 104);
      ctx.lineTo(98, 115);
      ctx.stroke();

      //frown
      ctx.beginPath();
      ctx.moveTo(98, 142);
      ctx.bezierCurveTo(101, 127, 112, 131, 115, 132);
      ctx.stroke();
    }
  }

  render() {
    return (
      <canvas id="drawing" width="225" height="300">

      </canvas>
    );
  }
}

export default Drawing;