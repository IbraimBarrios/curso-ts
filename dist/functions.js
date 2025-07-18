// Functions
// Manera 1:
var sayHi = function (name) {
    console.log("Hola ".concat(name));
};
sayHi("Ibra");
// Manera 2
function sayGoodbye(name) {
    console.log("Hola ".concat(name, ", casi terminamos el curos"));
}
sayGoodbye("Maria");
// Tipar funciones
function show() {
    console.log("Mostrar");
}
function show2() {
    return 1;
}
function show3() {
    return "Mostrar";
}
function showSizeName(name) {
    return name.length;
}
var sizeName = showSizeName("ibraim");
console.log(sizeName);
var response = {
    id: 1,
    name: "Codigo facilito",
    charge: "Developer",
    number: 4,
};
function newShow(_a) {
    var name = _a.name;
    console.log("El Id mandado es: ", name);
    return 1;
}
newShow(response);
