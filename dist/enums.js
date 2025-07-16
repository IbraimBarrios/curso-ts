// Enums
//Las enumeraciones en TypeScript proporcionan una manera de definir un conjunto de constantes
// con nombre, lo que hace que el código sea más legible y fácil de mantener al representar un
// conjunto fijo de valores relacionados.
var Users;
(function (Users) {
    Users[Users["NormalUser"] = 1] = "NormalUser";
    Users[Users["PayedUSer"] = 2] = "PayedUSer";
    Users["AdminUser"] = "admin";
    Users[Users["MegaUser"] = 3] = "MegaUser";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser);
