//tipos(o tipados) pricipales de datos son:
let age: string = "hello";
let agMonths: number = 20;
let isSenior: boolean = true;
let person: object = {};

// ejemplos de listas en typeScript
let fruits: string[] = ["uva", "pera"];
let persons: object[] = [
  { name: "platano", color: "amarillo" },
  { name: "uva", color: "verde" },
];

// tipos especiales de datos en typeScript
// Nota: any asepta todo tipo de dato y puede Re-asicnarce, ejemplo:
let response: any = "hello";

response = 20;
response = true;
response = ["hola", 123];

// void, ejecuta cosas pero no retorna nada
function hello(): void {
  console.log("Hello");
}

// unknown, similara any pero mas controlado
let response2: unknown;
response2 = true;
if(response2){
  console.log("here");
}

// tipos de datos basios
let response3 = null;
let response4 = undefined;



// Combinacion de tipos
type ResponseTypeService = string | undefined;

type ExampleTypes = {
  name: string,
  age: number
}

let response5: number | null = 5;
let response6: ResponseTypeService;

let response7: ResponseTypeService;
let response8: ResponseTypeService;

let response9: ExampleTypes;

response8?.toString().concat("");

