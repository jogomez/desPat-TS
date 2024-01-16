//Strings
let foo: string
foo = 'ABC'
foo = '123'
foo = 'ABC = 123'
foo = 'quick brown fox, \n etc'
foo = "It wasn't \n \"me\""

console.log('foo :>> ', foo);

//Boolean
let bar: boolean
bar = true;
bar = false;

console.log('bar :>> ', bar);

//Array types
let str_arr: string[]
str_arr = ['a', 'b', 'c', 'd']
let num_arr: number[]
num_arr = [1, 2, 3, 4]
let bool_arr: boolean[]
bool_arr = [true, false, true]
let unkn_arr: unknown[]
unkn_arr = [1, 'a', true, ['even', 'another', 'internal', 'array']]

console.log("str_arr :>>", str_arr) //get the whole array

// Arrays use a zero based index.
console.log("str_arr[1] :>>", str_arr[1]) //b
console.log("num_arr[0] :>>", num_arr[0]) //1
console.log("bool_arr[1] :>>", bool_arr[1]) //false
console.log("unkn_arr[2] :>>", unkn_arr[2]) //true

// log the whole array
console.log("str_arr :>>", str_arr)

// log how may items in the array
console.log("str_arr.length :>>", str_arr.length)

// returns and removes the last item from the array
console.log("str_arr.pop() :>>", str_arr.pop())
console.log("str_arr :>>", str_arr)

// returns and removes the first item from the array
console.log("str_arr.shift() :>>", str_arr.shift())
console.log("str_arr :>>", str_arr)

// add an item to the end, returns the new arr lenght
console.log("str_arr.push('z') :>>",str_arr.push("z"))
console.log("str_arr :>>", str_arr)

// add an item to the end, returns the new arr lenght
console.log("str_arr.push(...['g','h']) :>>",str_arr.push(...['g','h']))
console.log("str_arr :>>", str_arr)

// add an item to the beginning, returns the arr length
console.log("str_arr.unshift('x') :>>", str_arr.unshift('x'))
console.log("str_arr :>>", str_arr)

// remove 2 items starting at the 3rd item (0 based index)
console.log("str_arr.splice(3, 2) :>>", str_arr.splice(3, 2))
console.log("str_arr :>>", str_arr)

// replace an item (0 based index)
str_arr[1] = 'y'
console.log("str_arr[1] = 'y' (replace the item with index 1)")
console.log('str_arr :>> ', str_arr);

