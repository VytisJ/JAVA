/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
2. Informacija, kuri pateikiama: "login" ir "avatar_url" (kaip nuotrauka) kortelėje
3. Žinutė - Press "Show Users" button to see users - turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const btn = document.querySelector('#btn');
const outputDiv = document.querySelector('#output');
const messageDiv = document.querySelector('#message');

btn.addEventListener('click', function () {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((users) => {
      messageDiv.style.display = 'none';
      const userCards = users.map((user) => createUserCard(user));
      outputDiv.innerHTML = userCards.join('');
    })
    .catch((error) => {
      outputDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    });
});

function createUserCard(user) {
  return `
    <div class="user-card">
      <img src="${user.avatar_url}" alt="Avatar" />
      <p class="username">${user.login}</p>
    </div>
  `;
}


