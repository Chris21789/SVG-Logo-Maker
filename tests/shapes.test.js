const {Triangle, Circle, Square} = require('../lib/shapes.js');

describe('Triangle', () =>{
    test('the color of the triangle should be the blue from the shape.setColor("blue") method', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="50,150 250,150 150,0" fill="blue" />');
    });
});

describe('Circle', () =>{
    test('the color of the circle should be the orange from the shape.setColor("orange") method', () => {
        const shape = new Circle();
        shape.setColor("orange");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="70" fill="orange" />');
    });
});

describe('Square', () =>{
    test('the color of the square should be the green from the shape.setColor("green") method', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
    });
});
