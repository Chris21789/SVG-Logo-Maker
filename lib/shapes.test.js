const { describe } = require('yargs');
const {Triangle, Circle, Square} = require('./shapes.js');

describe('Triangle', () =>{
    test('the color of the triangle should be the blue from the shape.setColor("blue") method', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe('Circle', () =>{
    test('the color of the circle should be the orange from the shape.setColor("orange") method', () => {
        const shape = new Circle();
        shape.setColor("orange");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="orange" />');
    })
})

describe('Square', () =>{
    test('the color of the square should be the green from the shape.setColor("green") method', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    })
})
