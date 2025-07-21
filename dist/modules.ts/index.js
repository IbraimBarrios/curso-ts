"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./module");
var myNumber = 10 * module_1.PI;
var myUser3 = { id: (0, module_1.generateId)().toString(), name: "Kevin" };
console.log({ myUser3: myUser3, myNumber: myNumber });
