/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.sum = function (a, b) {
      return a + b;
    };
    this.subtraction = function (a, b) {
      return a - b;
    };
    this.multiplication = function (a, b) {
      return a * b;
    };
    this.division = function (a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error("Cannot divide by zero.");
      }
    };
  }
  
  let calculator = new Calculator();
  
  console.log(calculator.sum(10, 5));         
  console.log(calculator.subtraction(10, 5)); 
  console.log(calculator.multiplication(10, 5)); 
  console.log(calculator.division(10, 5));    
  

  