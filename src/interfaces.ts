//Interfaces are contracts that contain rules which clases must comply with
interface IAnimal {
    name: string
    age: number

    feed(food: string, amount: number): void
}

//Use the 'implements' keyword to make sure that a class definition complies with the selected Interface
class Dog implements IAnimal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    //Interface methods don't contain method bodies, just the method signature only. 
    //The implementation of the method is instead written in the class that will implement the interface.
    feed(food: string, amount: number): void {
        console.log('Feeding', this.name, 'the Dog', amount, 'lbs of', food
        )
    }
}

class Fish implements IAnimal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log('Feeding', this.name, 'the Fish', amount, 'gr of', food
        )
    }
}

const FISH = new Fish('Nemo', 1)
const DOG = new Dog('Robert', 2)
FISH.feed('Krill', 30)
DOG.feed('Beef', 2)

//Result:
//Feeding Nemo the Fish 30 gr of Krill
//Feeding Robert the Dog 2 lbs of Beef