// Genericos
// EL tipo de dato generico que puede representarse como una T
// Nota: de esta manera los campos son dinamicos
var myValue = {
    field: "",
};
// Ejemplo aplicado a Clases.
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
var myObject = new MyClass("Jose");
// Ejemplo con Funcion
function getData(id) { }
getData("LSGS23");
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "Kevin",
    };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200, 1);
console.log(res);
// Ejemplo 2. Caso de uso, Clase generica
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Kevin" },
    { id: 2, name: "Codigo" },
    { id: 1, name: "Facilito" },
];
var userCRUD = new CRUD(users);
userCRUD.addItem({ id: 4, name: "TypeScript" });
console.log(userCRUD.printItems());
