"use strict";
//Use the 'implements' keyword to make sure that a class definition complies with the selected Interface
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Interface methods don't contain method bodies, just the method signature only. 
    //The implementation of the method is instead written in the class that will implement the interface.
    feed(food, amount) {
        console.log('Feeding', this.name, 'the Dog', amount, 'lbs of', food);
    }
}
class Fish {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding', this.name, 'the Fish', amount, 'gr of', food);
    }
}
const FISH = new Fish('Nemo', 1);
const DOG = new Dog('Robert', 2);
FISH.feed('Krill', 30);
DOG.feed('Beef', 2);
//Result:
//Feeding Nemo the Fish 30 gr of Krill
//Feeding Robert the Dog 2 lbs of Beef
