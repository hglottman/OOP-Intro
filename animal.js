class Animal {
    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length > 2) {
            this._name = newName;
        }
       
        else {
            console.log("Error: provided name must be 2 characters or longer");
        }
    }

    get weight() {
        return this._weight;
    }

    set weight(newWeight) {
        if (newWeight > 0) {
            this._weight = newWeight;
        }
       
        else {
            console.log("Error: provided weight must be more than 0");
        }
    }
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    mate(partner){
        if (this.constructor.name === partner.constructor.name){
            let newBaby = new Animal ("newBorn", 70);
            return newBaby
        } else {
            console.log('find someone else');
        }
    }

    // constructor(name, weight, foodAmount, energyLevel, bodyTemperature) 
    //     this.name = name;
    //     this.weight = weight;
    //     this.foodAmount = foodAmount;
    //     this.energyLevel = energyLevel;
    //     this.bodyTemperature = bodyTemperature;

// play() {
//     this.energyLevel -= 50;
//     console.log(this.energyLevel);
// }

// eat() {
//     this.energyLevel += this.foodAmount;
//     console.log(this.energyLevel);
// }

// greet() {
//     console.log("Trumpets!");
// }
};

class Fish extends Animal {

    get weight() {
        return this._weight;
    }

    set weight(newWeight) {
        if (newWeight < 100) {
            this._weight = newWeight;
        }
       
        else {
            console.log("Error: provided weight must be less than 100");
        }
    }

    constructor(name, weight) {
        super(name, weight);
    }
}

module.exports = Animal
