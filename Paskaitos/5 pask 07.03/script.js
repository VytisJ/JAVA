const formHTML = document.querySelector('form');
formHTML.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const custAge = +event.target.custAge.value;
    const yourEmail = event.target.yourEmail.value;
    console.log(firstName);
    console.log(typeof(custAge));
    console.log(yourEmail);
})
