// Clases

// Las clases es un contrato o un molde que vamos a utilizar para
//  definir la estructura de los objetos que vamos a crear en nuestra aplicación

class Animal {
  // cuando es publica, es opcional ponerle Public a la Variable 
  public name: "Vaca";
  color: "Blanco";
  private age = 10;
  protected identity = "111";

  constructor() {}

  sayHi() {
    console.log("Grrr...", this.age);
  }
}

// Herencia
class Dog extends Animal {
  type: "Malish";

  constructor() {
    super();
  }
};

const myAnimal: Animal = new Animal();
myAnimal.sayHi();

const myDog: Dog = new Dog();
myDog.type