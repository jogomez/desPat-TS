function foo(bar: string) {
    return 'Hello, ' + bar
}

let noun = 'world'

// when we change the value of noun to a number (like 123), 
// the below line will throw a compilation error:
// "Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)"

console.log(foo(noun))