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
