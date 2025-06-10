const getString = window.location.search;
console.log(getString);

const info = new URLSearchParams(getString);
console.log(info);

// console.log(info.get('first'));
// console.log(info.get('last'));
// console.log(info.get('ordinance'));
// console.log(info.get('date'));
// console.log(info.get('location'));
// console.log(info.get('phone'));
// console.log(info.get('email'));

document.querySelector('#results'). innerHTML = `
    <p>Appointment for ${info.get('first')} ${info.get('last')}</p>
    <p>Proxy ${info.get('ordinance')} on ${info.get('date')} in the ${info.get('location')}</p>
    <p>Your Phone: ${info.get('phone')}</p>
    <p>Your email is ${info.get('email')}</p>

`