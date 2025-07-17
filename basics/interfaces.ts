// Interfaces

// Describen la estructura del objeto, es decir, su aspecto

interface Person {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  // Declarar funciones: esta funcion retorna un string
  sayHello: () => string;
}

let person: Person = {
  name: "Ibra",
  code: "01",
  charge: 1,
  description: "Hola",
  sayHello: () => {
    console.log("Hola");
    // etc...
    return "Hola";
  },
};

let secundPerson: Person = {
  name: "",
  code: "",
  charge: 0,
  sayHello: () => {
    return "Hola 2";
  },
};

secundPerson.description?.toUpperCase();
