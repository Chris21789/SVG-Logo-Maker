const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createSVG } = require("./svg.js");
const { choices } = require("yargs");
const fs = require("fs");
const { Characters } = require("./characters.js");

class CLI {
  constructor() {
    this.title = "";

    this.svg = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter three characters for your logo:",
          name: "characters",
        },
        {
          type: "input",
          message: "Please enter a color for your logo:",
          name: "logoColor",
        },
        {
          type: "list",
          message: "What kind of shape would you like for your logo?",
          name: "shape",
          choices: ["Triangle", "Circle", "Square"],
        },
        {
          type: "input",
          message: "Please enter a color for your shape:",
          name: "shapeColor",
        },
      ])
      .then(({ characters, logoColor, shape, shapeColor }) => {
        this.title = `${characters} Logo`;
        this.svg.push({ characters, logoColor, shape, shapeColor });
        console.log(characters, logoColor, shape, shapeColor);

        return writeFile(
          join(__dirname, "..", "examples", `${characters}.svg`),
          createSVG(this.title, this.svg)
        );
      })
      .then(() => console.log(`Created ${this.svg.characters}.svg`))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;
