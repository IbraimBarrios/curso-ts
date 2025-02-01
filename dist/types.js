//tipos(o tipados) pricipales de datos son:
var age = "hello";
var agMonths = 20;
var isSenior = true;
var person = {};
// ejemplos de listas en typeScript
var fruits = ["uva", "pera"];
var persons = [
    { name: "platano", color: "amarillo" },
    { name: "uva", color: "verde" },
];
// tipos especiales de datos en typeScript
// Nota: any asepta todo tipo de dato y puede Re-asicnarce, ejemplo:
var response = "hello";
response = 20;
response = true;
response = ["hola", 123];
// void, ejecuta cosas pero no retorna nada
function hello() {
    console.log("Hello");
}
// unknown, similara any pero mas controlado
var response2;
response2 = true;
if (response2) {
    console.log("here");
}
// tipos de datos basios
var response3 = null;
var response4 = undefined;
var response5 = 5;
var response6;
var response7;
var response8;
var response9;
response8 === null || response8 === void 0 ? void 0 : response8.toString().concat("");
