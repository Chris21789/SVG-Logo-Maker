const { Triangle, Circle, Square } = require('./shapes.js');
const { Characters } = require('./characters.js');

// function testUpperCase() {
    function testUCInner (circle) {
        return circle.charAt(0).toUpperCase() + circle.slice(1);
    }
// }

console.log(testUCInner('test'));
  


function createSVG(responses) {

    const responseShape = responses.shape;
    responseShape.setColor(responses.shapeColor);
    const shapeClass = toUpperCase();
    
    function toUpperCase(responseShape) {
        return responseShape.charAt(0).toUpperCase() + responseShape.slice(1);
    }
    
    const characters = new Characters();


    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  ${characters.render()}

</svg>
    `
}

console.log(createSVG.toString());

module.exports = { createSVG }