class Cat {
    name: string
    stepsWalked: number = 0
    age: number = 1

    constructor(name: string) {
        this.name = name
    }

    walk(steps: number): void {
        console.log(
            this.name + ' the cat has walked ' + steps + ' steps.'
        )
        this.stepsWalked += steps
    }

    totalStepCount(): number {
        return this.stepsWalked
    }

    birthday(): void{
        this.age += 1
    }

    getAge() : number{
        return this.age
    }

    meow(): void {
        console.log('Cat is meowing');
    }
}

const CAT = new Cat("Robert");
CAT.walk(30);
CAT.walk(20);
CAT.meow();
CAT.birthday();
console.log(
            CAT.name,'the cat is', CAT.age, 'years old, and has walked a total of',
            CAT.totalStepCount(), 'steps.'
)
// Robert the cat is 2 years old, and has walked a total of  50  steps.