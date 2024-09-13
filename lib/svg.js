const { Triangle, Circle, Square } = require("./shapes.js");
const { Characters } = require("./characters.js");

function createSVG(charactersInput, charactersColor, shapeInput, shapeColor) {
    // console.log(charactersInput);
    // console.log(charactersColor);
    // console.log(shapeInput);
    // console.log(shapeColor);

    function toUpperCase(shape) {
        return shape.charAt(0).toUpperCase() + shape.slice(1);
    }

    const upperCaseShape = toUpperCase(shapeInput);
    //   console.log(upperCaseShape);

    const classMap = { Triangle, Circle, Square };

    let shape;
    if (classMap[upperCaseShape]) {
        const ShapeClass = classMap[upperCaseShape];
        shape = new ShapeClass();
        shape.setColor(shapeColor);
    }

    //   console.log(shape);
    //   console.log(shape.render());

    const characters = new Characters();
    characters.setColor(charactersColor);
    characters.text = charactersInput;
    // console.log(characters);
    // console.log(characters.render());
    

    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  ${characters.render()}

</svg>
    `;
}

// createSVG('CDC', 'red', 'circle', 'blue');
// console.log(createSVG.toString());

module.exports = { createSVG };
