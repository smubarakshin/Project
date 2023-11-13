console.log('Hello World');
document.write('<h1>', 'Hello World', '<h1>');


let name = 'it-incubator';
let graduatesCount = 2000;
let areYouChampion = true;

document.write('<h1>', name, '<h1>');
document.write('<input type="number" value="' + graduatesCount + '">');
document.write('<input type="checkbox"', areYouChampion ? "checked" : "", '>');

let student = {
    info: {
     firstName: 'Ivan',
     lastName: 'Ivanov'   
    },
    address: {
      country: 'France',
      city: 'Paris',       
    }
 }

document.write('<h2>', student.info.firstName, ' ', student.info.lastName, '<h2>');
document.write('<h2>', student.address.city, ', ', student.address.country, '<h2>');
