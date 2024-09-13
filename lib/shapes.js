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
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}
class Circle extends Shapes {
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
  }
}
class Square extends Shapes {
  constructor(color) {
    super(color);
  }
  render() {
    return `<rect x="10" y="10" width="30" height="30" fill="${this.color}" />`;
  }
}

function test() {
  function toUpperCase(responseShape) {
    return responseShape.charAt(0).toUpperCase() + responseShape.slice(1);
  }

  const classMap = { Triangle, Circle, Square };

  const responseShape = "circle";
  const upperCaseShape = toUpperCase(responseShape);

  if (classMap[upperCaseShape]) {
    const shapeClass = classMap[upperCaseShape];
    const shape = new shapeClass();
    shape.setColor("yellow");
    return shape;
  }
  console.log(shape);
}

console.log(test());

// console.log(shapeClass);
// console.log(toUpperCase(responseShape));

// responseShape.setColor(responses.shapeColor);

// const shape = new Triangle();
// shape.setColor('green');

// console.log(shape.render());

module.exports = { Triangle, Circle, Square };
