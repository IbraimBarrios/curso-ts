// Modulos

export const PI = 3.1416;

export interface User3 {
  id: string;
  name: string;
}

export const generateId = () => {
  return Math.floor(Math.random() * 100);
};
