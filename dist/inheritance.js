"use strict";
//By using the keyword 'extends', we can create a derived class, 
//i.e. a copy of a base class (super class) so that we can refine it or specialize it further.
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding', this.name, 'the', this.constructor.name, amount, 'kg of', food);
    }
}
class Parrot extends Animal {
}
class Tortoise extends Animal {
}
class Jellyfish extends Animal {
    feed() {
        throw new Error("This method uses 'never' and should not exist in the derived class.");
    }
}
class Elephant extends Animal {
    constructor(name, age, isHungry) {
        super(name, age);
        this.isHungry = isHungry;
    }
    feed(food, amount) {
        if (this.isHungry) {
            super.feed(food, amount);
            this.isHungry = false;
        }
        else {
            console.log(this.name, 'the', this.constructor.name, 'will not eat', amount, 'kg of', food, 'because is not hungry');
        }
    }
}
const PARROT = new Parrot('Francisco', 8);
const TORTOISE = new Tortoise('Donatello', 12);
const JELLYFISH = new Jellyfish('X', 50);
const ELEPHANT = new Elephant('Elly', 35, true);
PARROT.feed('Seeds', 0.25);
TORTOISE.feed('Carrots', 0.5);
ELEPHANT.feed('Leaves', 25);
ELEPHANT.feed('Nuts', 2);
ELEPHANT.isHungry = true;
console.log('Elly is hungry again');
ELEPHANT.feed('Nuts', 5);
//JELLYFISH.feed()
/* Result:
Feeding Francisco the Parrot 0.25 kg of Seeds
Feeding Donatello the Tortoise 0.5 kg of Carrots
Feeding Elly the Elephant 25 kg of Leaves
Elly the Elephant will not eat 2 kg of Nuts because is not hungry
Elly is hungry again
Feeding Elly the Elephant 5 kg of Nuts
*/
// Note: uncommenting JELLYFISH.feed() will result in a run-time error:
//"throw new Error("This method uses 'never' and should not exist in the derived class.");
