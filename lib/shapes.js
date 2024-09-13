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
        super(color)
    }
    render() {        
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
class Circle extends Shapes {
    constructor(color) {
        super(color)
    }
    render() {        
        return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
    }
}
class Square extends Shapes {
    constructor(color) {
        super(color)
    }
    render() {        
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}" />`;
    }
}

// const square = new Triangle();
// square.setColor('green');
// console.log(square);
// console.log(square.render);


module.exports = { Triangle, Circle, Square };
