/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiama
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector('form');
const searchInput = document.querySelector('#search');
const outputDiv = document.querySelector('#output');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const kilograms = parseFloat(searchInput.value);
  if (isNaN(kilograms)) {
    outputDiv.innerHTML = '<p class="error">Įveskite teisingą skaičių.</p>';
    return; }
    const pounds = kilograms * 2.2046;
    const grams = kilograms / 0.001;
    const ounces = kilograms * 35.274;
    const resultHTML = `
    <table class="result-table">
      <tr>
        <td><strong>Svarai (lb):</strong></td>
        <td>${pounds.toFixed(2)}</td>
      </tr>
      <tr>
        <td><strong>Gramai (g):</strong></td>
        <td>${grams.toFixed(2)}</td>
      </tr>
      <tr>
        <td><strong>Uncijos (oz):</strong></td>
        <td>${ounces.toFixed(2)}</td>
      </tr>
    </table>
  `;
  outputDiv.innerHTML = resultHTML;
});


  

  
  
  

