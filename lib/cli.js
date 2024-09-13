const inquirer = require('inquirer');
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createSVG } = require("./svg.js");

const questions = [
    {
      type: "input",
      message: "Please enter three characters for your logo:",
      name: "charactersInput",
    },
    {
      type: "input",
      message: "Please enter a color for your logo:",
      name: "charactersColor",
    },
    {
      type: "list",
      message: "What kind of shape would you like for your logo?",
      name: "shapeInput",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      message: "Please enter a color for your shape:",
      name: "shapeColor",
    },
  ];
class CLI {
  run() {
    return inquirer
      .prompt(questions)
      .then(({ charactersInput, charactersColor, shapeInput, shapeColor }) => {
        const svg = createSVG(charactersInput, charactersColor, shapeInput, shapeColor);
        console.log(charactersInput, charactersColor, shapeInput, shapeColor);

        return writeFile(
          join(__dirname, "..", "examples", `${charactersInput}.svg`),
          svg
        );
      })
      .then(() => console.log(`Created svg file`))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;