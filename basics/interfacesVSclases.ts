// Intefaces VS Clases

interface PersonInterface {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  sayHello: () => string;
}

class PersonClass {
  sayHello() {
    console.log("Grr...");
  }
}

const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();

interface PetInterface {
  sayHello: () => string;
}

class PetClass {
  sayHello() {
    return "Hola";
  }
}

class Dog2 implements PetInterface {
  sayHello () {
    return 'Hola desde Dog';
  } 
};

class Cat extends PetClass {};

const gato: Cat = new Cat();
gato.sayHello();