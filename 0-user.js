'use strict';

/*
 * Create an object `user` with properties:
 *  'name' (String),
 *  'email' (String),
 *  'age' (Number),
 * 
 * Properties should have valid values (you can use your personnal infos)
 *
 *
 * Créer un object `user` avec les propriétes:
 *  'name' (String),
 *  'email' (String),
 *  'age' (Number)
 *
 * Les propriétes doivent avoir des valeurs valides (vous pouvez utiliser vos
 * infos personnelles)
 * 
 */

// Your code :

const user = {
    Name: 'Diaby Ibrahim',
    Age : 18,
    City: 'Abidjan',
    Nationality: 'Ivoirian',
    Status : 'Student',
    Email : 'ibrahim.diaby@uvci.edu.ci',
};

console.log('\n                    ----- All information on User ----- \n');
console.log('Nom et Prenom :');
console.log(user['Name']);
console.log('\n');
console.log('Age :');
console.log(user['Age']);
console.log('\n');
console.log('Ville :');
console.log(user['City']);
console.log('\n');
console.log('Nationalité :');
console.log(user['Nationality']);
console.log('\n');
console.log('Profession :');
console.log(user['Status']);
console.log('\n');
console.log('Email :');
console.log(user['Email']);
console.log('\n');