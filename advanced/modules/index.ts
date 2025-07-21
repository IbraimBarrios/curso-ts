import { PI, generateId } from "./module";
import { User3 as Person } from "./module";

const myNumber = 10 * PI;

const myUser3: Person = { id: generateId().toString(), name: "Kevin" };

console.log({ myUser3, myNumber });
