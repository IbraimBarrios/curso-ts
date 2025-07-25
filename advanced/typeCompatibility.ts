// Type Compatibility

// Ejemplo 1
interface Pet {
  name: string;
}

class Dog3 {
  name: string;

  constructor() {
    this.name = "Boby";
  }
}

let pet: Pet;

pet = new Dog3();

// Ejemplo 2

interface Pet2 {
  name: string;
}

let pet2: Pet2;

let dog = { name: "Lassie", owner: "Rudd Wetherwax" };
pet2 = dog;

console.log(pet2);

// Ejemplo 3
function green(pet: Pet2) {
  console.log(pet.name);
}
green(dog);

// Ejemplo 4

enum Status {
  ready,
  waiting,
}

enum Color {
  red,
  blue,
  green,
}

let state = Status.ready;
state = Color.green; // Error

// Ejemplo 5
class Animal3 {
  feet: number;
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number;
  constructor(numFeet: number) {}
}

let a: Animal3;
let s: Size;
a = s; // ok
s = a; // ok

// Ejemplo 6

interface Empty<T> {}
let x: Empty<number>;
let y: Empty<string>;
x = y; // ok, por que coincide con la estructura de x

// Ejemplo 7
interface NotEmpty<T> {
  data: T;
}
let x2: NotEmpty<number>; // {data: number}
let y2: NotEmpty<string>; // {data: string}
x = y; // Error, por que  x y y no son compatibles
