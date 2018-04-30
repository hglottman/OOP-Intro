var Animal = require('./animal');

var Mammal = require('./mammal');


class Lion extends Mammal {
    constructor(name, weight, foodAmount, energyLevel) {
        super(name, weight, foodAmount, energyLevel)
    }
}

module.exports = Lion