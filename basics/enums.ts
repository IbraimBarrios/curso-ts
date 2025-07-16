// Enums

//Las enumeraciones en TypeScript proporcionan una manera de definir un conjunto de constantes
// con nombre, lo que hace que el código sea más legible y fácil de mantener al representar un
// conjunto fijo de valores relacionados.

enum Users {
  NormalUser = 1,
  PayedUSer = 2,
  AdminUser = "admin",
  MegaUser = 3,
}

const myUser = Users.AdminUser;
console.log(myUser);
