// Interfaces
//Conocidos como contrator, sirven para declarar objetos. ejemplo: Persona, carro, casa etc.
// Carateristicas: 
// - son mas generales u organizadas
// - se pueden acoplar o composicion

// Custom types
// aceptan cualquier tipo de datos. suelen ser mas especificos, 


type Person2 = {
  name: string;
  age: number;
};

interface Employee extends Person2 {
  charge: string;
}

const newEmployee: Employee = {
  name: "ibra",
  age: 20,
  charge: "",
};

// Union types

type User = {
  id: string;
};

type Admin = User & Person2;

const myAdmin: Admin = {
  id: "l1",
  name: "pepe",
  age: 23,
};

// Acoplar o componer Interfaces

interface Developer {
  name: string;
  stack: string[];
}

interface Developer {
  phone: string;
}

// const me: Developer = {
//   // phone
// }

