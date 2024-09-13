class Characters {
    constructor(characters, charactersColor) {
        this.characters = characters;
        this.charactersColor = charactersColor;
    }

    render () {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.charactersColor}">${this.characters}</text>`
    }
}

// const characters = new Characters('SVG', 'red');

// console.log(characters);


module.exports = { Characters }