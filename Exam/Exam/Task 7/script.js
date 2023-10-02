/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "keys" masyve.
-------------------------------------------------------------------------- */
function showObjectValues(obj) {
  return Object.values(obj);
}
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};
const valuesArray = showObjectValues(audi);
console.log(valuesArray);
