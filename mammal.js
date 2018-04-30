
var Animal = require('./animal');


class Mammal extends Animal {
    constructor(name, weight, foodAmount, energyLevel) {
        super(name, weight, foodAmount, energyLevel, 35);
    }
}

module.exports = Mammal