// Namesmapaces
var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Kevin");
    // console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
// const myOtherUser = new DatabaseEntity.User("Miguel");
// console.log(myOtherUser);
/// <reference path="namespaces.ts" />
var myOtherUser = new DatabaseEntity.User("Codigo Facilito!!.");
console.log(myOtherUser);
