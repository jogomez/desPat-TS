class Animalito {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the ' +
                this.constructor.name +
                ' ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Gato extends Animalito {}

class Perro extends Animalito {}

const GATO = new Gato('Cosmo', 8)
const PERRO = new Perro('Rusty', 12)
GATO.feed('Fish', 0.1)
PERRO.feed('Beef', 0.25)