document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('textInput');
    const displayElement = document.getElementById('displayText');
    const saveButton = document.getElementById('saveButton');
  
    // Funkcija išsaugoti tekstą į LocalStorage
    function saveToLocalStorage(text) {
      const savedTexts = JSON.parse(localStorage.getItem('inputTextName')) || [];
      savedTexts.push(text);
      localStorage.setItem('inputTextName', JSON.stringify(savedTexts));
    }
  
    // Funkcija atvaizduoti atsitiktinį įrašą iš LocalStorage
    function displayRandomText() {
      const savedTexts = JSON.parse(localStorage.getItem('inputTextName')) || [];
      if (savedTexts.length > 0) {
        const randomIndex = Math.floor(Math.random() * savedTexts.length);
        displayElement.textContent = savedTexts[randomIndex];
      } else {
        displayElement.textContent = 'Nėra išsaugotų tekstų';
      }
    }
  
    // 1. Keyboard event - tekstas atvaizduojamas iš karto
    inputElement.addEventListener('keyup', function () {
      displayElement.textContent = inputElement.value;
    });
  
    // 2. Submit mygtuko event - išsaugoti tekstą į LocalStorage ir atvaizduoti atsitiktinį įrašą
    saveButton.addEventListener('click', function (event) {
      event.preventDefault();
      const textToSave = inputElement.value;
      if (textToSave) {
        saveToLocalStorage(textToSave);
        inputElement.value = ''; // Išvalome input lauką po išsaugojimo
        displayRandomText(); // Atvaizduojame atsitiktinį įrašą po išsaugojimo
      }
    });
  
    displayRandomText(); // Atvaizduojame atsitiktinį įrašą pradinėje užkrovimo stadijoje
  });