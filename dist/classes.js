"use strict";
class Cat {
    constructor(name) {
        this.stepsWalked = 0;
        this.age = 1;
        this.name = name;
    }
    walk(steps) {
        console.log(this.name + ' the cat has walked ' + steps + ' steps.');
        this.stepsWalked += steps;
    }
    totalStepCount() {
        return this.stepsWalked;
    }
    birthday() {
        this.age += 1;
    }
    getAge() {
        return this.age;
    }
    meow() {
        console.log('Cat is meowing');
    }
}
const CAT = new Cat("Robert");
CAT.walk(30);
CAT.walk(20);
CAT.meow();
CAT.birthday();
console.log(CAT.name, 'the cat is', CAT.age, 'years old, and has walked a total of', CAT.totalStepCount(), 'steps.');
// Robert the cat is 2 years old, and has walked a total of  50  steps.
