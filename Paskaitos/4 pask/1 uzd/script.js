// document.querySelector("#forLoop").textContent = "BMW Volvo Saab Ford Fiat Audi"

let skaiciai = ["Vienas", "Du", "Trys", "Keturi", "Penki"];

let text = "";
for (let i = 0; i < skaiciai.length; i++) {
  text += skaiciai[i] + "<br>";
}
// text += skaiciai;

// console.log(text)

document.querySelector ("#skaiciai").innerHTML = text;