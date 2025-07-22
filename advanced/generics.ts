// Genericos
// EL tipo de dato generico que puede representarse como una T
// Nota: de esta manera los campos son dinamicos
// La T puede ser considerada como un Comodin, cuando la logica del codigo es generica.

// Ejemplo: Basico.
interface MyInterface<T> {
  // field: string | number;
  field: T;
}

const myValue: MyInterface<string> = {
  field: "",
};

// Ejemplo aplicado a Clases.

class MyClass<T> {
  field: T;

  constructor(field: T) {
    this.field = field;
  }
}

const myObject: MyClass<string> = new MyClass("Jose");

// Ejemplo con Funcion

function getData<T>(id: string): Promise<T> | void {}
getData("LSGS23");

// Ejemplo con clases. Caso de uso real

interface UserResponse {
  id: number;
  name: string;
}

class HttpResponse<T> {
  data: T;
  status: number;
  code: number;

  constructor(data: T, status: number, code: number) {
    this.data = data;
    this.status = status;
    this.code = code;
  }
}

const fetchUser = (): UserResponse => {
  return {
    id: 1,
    name: "Kevin",
  };
};

const myUser = fetchUser();
const res = new HttpResponse(myUser, 200, 1);
console.log(res);

// Ejemplo 2. Caso de uso, Clase generica
class CRUD<T> {
  items: T[];
  constructor(items: T[]) {
    this.items = items;
  }

  addItem(item: T) {
    this.items.push(item);
  }

  removeLastItem() {
    this.items.pop();
  }

  printItems(): T[] {
    return this.items;
  }
}

const users: UserResponse[] = [
  { id: 1, name: "Kevin" },
  { id: 2, name: "Codigo" },
  { id: 1, name: "Facilito" },
];

const userCRUD: CRUD<UserResponse> = new CRUD(users);
userCRUD.addItem({ id: 4, name: "TypeScript" });
console.log(userCRUD.printItems());
