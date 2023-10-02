// window.onload = function() {
//     // Patikriname, ar sutikimas jau yra įrašytas localStorage
//     let consent = localStorage.getItem('consent');
  
//     // Jei sutikimas nėra įrašytas, atvaizduojame popup
//     if (!consent) {
//       const userConsent = confirm('Sutinkate su terminais ir sąlygomis?');
  
//       if (userConsent) {
//         // Įrašome sutikimą į localStorage
//         localStorage.setItem('consent', 'accepted');
//         console.log('Sutikimas įrašytas į localStorage.');
//       } else {
//         console.log('Nesutikote su terminais ir sąlygomis.');
//       }
//     } else {
//       console.log('Jau sutikote su terminais ir sąlygomis anksčiau.');
//     }
//   };
  



window.onload = function() {
    let consent = sessionStorage.getItem('consent');
    if (!consent) {
      const userConsent = confirm('Sutinkate su terminais ir sąlygomis?');
  
      if (userConsent) {
        sessionStorage.setItem('consent', 'accepted');
        console.log('Sutikimas įrašytas į sessionStorage.');
      } else {
        console.log('Nesutikote su terminais ir sąlygomis.');
      }
    } else {
      console.log('Jau sutikote su terminais ir sąlygomis anksčiau.');
    }
  };
  