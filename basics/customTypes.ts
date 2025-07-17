// CustomTypes

// Tipos personalizados

type Person = {
  name: string;
  code: string | number;
  description?: string;
};

const newPerson: Person = {
  code: "01",
  name: "ibra",
};

type ServiceResponse = string | null | number | undefined;
type UserChange = 'admin' | 'normal' | 'superUser'

let response: ServiceResponse;
const myUserType: UserChange = 'admin';
