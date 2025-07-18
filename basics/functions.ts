// Functions

// Manera 1:
const sayHi = (name) => {
  console.log(`Hola ${name}`);
};

sayHi("Ibra");

// Manera 2
function sayGoodbye(name) {
  console.log(`Hola ${name}, casi terminamos el curos`);
}

sayGoodbye("Maria");

// Tipar funciones

function show(): void {
  console.log("Mostrar");
}

function show2(): number {
  return 1;
}

function show3(): string {
  return "Mostrar";
}

function showSizeName(name: string): number {
  return name.length;
}
let sizeName = showSizeName("ibraim");
console.log(sizeName);

interface ResponseServiceCD {
  id: number;
  name: string;
  charge: string;
  number: number;
}

const response2: ResponseServiceCD = {
  id: 1,
  name: "Codigo facilito",
  charge: "Developer",
  number: 4,
};

function newShow({ name }: ResponseServiceCD): number {
  console.log("El Id mandado es: ", name);
  return 1;
}

newShow(response2);
