// Interfaces
var _a;
var person = {
    name: "Ibra",
    code: "01",
    charge: 1,
    description: "Hola",
    sayHello: function () {
        console.log("Hola");
        // etc...
        return "Hola";
    },
};
var secundPerson = {
    name: "",
    code: "",
    charge: 0,
    sayHello: function () {
        return "Hola 2";
    },
};
(_a = secundPerson.description) === null || _a === void 0 ? void 0 : _a.toUpperCase();
