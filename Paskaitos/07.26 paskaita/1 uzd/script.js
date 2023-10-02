const form = document.getElementById("myForm");
const textInput = document.getElementById("textInput");
const displayArea = document.getElementById("displayArea");

textInput.addEventListener("input", () => {
const typedText = textInput.value;
displayArea.textContent = typedText;
});

// Function to save text to LocalStorage on form submit
form.addEventListener("submit", (event) => {
event.preventDefault(); // Prevents the form from being submitted traditionally
const typedText = textInput.value;
  if (typedText.trim() !== "") {
    // Check if the input is not empty or only spaces
    localStorage.setItem("savedText", typedText);
    alert("Text saved to LocalStorage!");
  } else {
    alert("Please enter some text before submitting.");
  }
});

// Load the previously saved text on page load
window.addEventListener("load", () => {
  const savedText = localStorage.getItem("savedText");
  if (savedText) {
    textInput.value = savedText;
    displayArea.textContent = savedText;
  }
});