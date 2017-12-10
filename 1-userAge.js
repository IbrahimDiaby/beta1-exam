'use strict';

/*
 * Create a function `userAge` which take a user object and returns its age
 *
 * Créer une fonction `userAge` qui prend un object user et qui retourne son age
 *
 */

const user = {
    Name: 'Diaby Ibrahim',
    Age : 18,
    City: 'Abidjan',
    Nationality: 'Ivoirian',
    Status : 'Student',
    Email : 'ibrahim.diaby@uvci.edu.ci',
};
 // copy the one from the previous exercice

const userAge = arr => console.log(arr);
    
// Your code :
console.log('\n                   ----- Information about userAge -----\n')
console.log('Cher :');
console.log(user['Name']);
console.log('\n')
console.log('Vous avez :')
userAge(user['Age']);