// MappedTypes

// Cetraliza la logica para poder Mapear

interface Person {
  name: string;
  age: number;
}

// interface GetPerson {
//   getName: () => string;
//   getAge: () => number;
// }

// Ejemplo de Centralizado
type Getter<T> = {
  [Property in keyof T as `get${Capitalize<
    string & Property
  >}`]: () => T[Property];
};
// End

type GetPerson = Getter<Person>;

interface Animal {
  id: string;
  name: string;
  type: string;
  isAdopted: boolean;
}

type GetAnimal = Getter<Animal>;
