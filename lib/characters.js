class Characters {
    constructor(color) {
        this.color = color;
    }
    
    setColor(value) {
        if (value === "") {
          throw new Error("Color not choosen.");
        }
        this.color = value;
      }

    render () {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}

// const characters = new Characters('SVG', 'red');
// console.log(characters);

module.exports = { Characters }