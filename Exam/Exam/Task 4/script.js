/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
function displayCars(carsData) {
  const outputDiv = document.querySelector('#output'); 
  carsData.forEach(car => {
    const brandDiv = document.createElement('div');
    brandDiv.classList.add('brand-card');

    const brandName = document.createElement('h2');
    brandName.textContent = car.brand;
    brandDiv.appendChild(brandName);

    const modelsList = document.createElement('ul');
    car.models.forEach(model => {
      const modelItem = document.createElement('li');
      modelItem.textContent = model;
      modelsList.appendChild(modelItem);
    });
    brandDiv.appendChild(modelsList);

    outputDiv.appendChild(brandDiv);
  });
}
fetch(ENDPOINT)
  .then(response => response.json())
  .then(data => displayCars(data))
  .catch(error => console.error('Error fetching data:', error));