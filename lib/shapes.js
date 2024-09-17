class Shapes {
  constructor(color) {
    this.color = color;
  }

  setColor(value) {
    if (value === "") {
      throw new Error("Color not choosen.");
    }
    this.color = value;
  }
}

class Triangle extends Shapes {
  constructor(color) {
    super(color);
  }
  render() {
    return `<polygon points="50,150 250,150 150,0" fill="${this.color}" />`;
  }
}
class Circle extends Shapes {
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="150" cy="100" r="70" fill="${this.color}" />`;
  }
}
class Square extends Shapes {
  constructor(color) {
    super(color);
  }
  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

// const shape = new Triangle();
// shape.setColor('green');
// console.log(shapeClass);
// console.log(shape.render());

module.exports = { Triangle, Circle, Square };
