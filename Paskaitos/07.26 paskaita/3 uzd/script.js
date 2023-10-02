// Patikriname, ar yra slapukas su išsaugota spalva
const savedColor = getCookie("selectedColor");
if (savedColor) {
  document.body.style.backgroundColor = savedColor;
  showDeleteButton();
}

// Formos pateikimo veiksmas
document.getElementById("colorForm").onsubmit = function (event) {
  event.preventDefault();
  const selectedColor = document.getElementById("colorInput").value;
  
  // Išsaugome spalvą slapuke
  setCookie("selectedColor", selectedColor);

  // Nustatome fono spalvą
  document.body.style.backgroundColor = selectedColor;

  // Rodyti mygtuką Delete
  showDeleteButton();
};

// Mygtuko Delete veiksmas
document.getElementById("deleteButton").onclick = function () {
  // Ištriname slapuką
  deleteCookie("selectedColor");
  // Persikrauname puslapį
  location.reload();
};

// Funkcija, kuri rodo mygtuką Delete
function showDeleteButton() {
  document.getElementById("deleteButton").style.display = "inline";
}

// Funkcija, kuri nustato slapuką
function setCookie(name, value) {
  document.cookie = `${name}=${value};max-age=31536000;path=/`;
}

// Funkcija, kuri gauna slapuką pagal pavadinimą
function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

// Funkcija, kuri ištrina slapuką pagal pavadinimą
function deleteCookie(name) {
  document.cookie = `${name}=;max-age=0;path=/`;
}
