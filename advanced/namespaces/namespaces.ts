// Namesmapaces

// los Namespaces son como una cajita onde se pueden guardar cosas, clases, funciones etc.
// y se pueden importar desde cualquier otra parte del proyecto.
namespace DatabaseEntity {
  export class User {
    constructor(public name: string) {}
  }

  const myUser = new User("Kevin");
  // console.log(myUser);
}

// const myOtherUser = new DatabaseEntity.User("Miguel");
// console.log(myOtherUser);
