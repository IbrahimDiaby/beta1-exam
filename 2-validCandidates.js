'use strict'

/*
 * Create a function `validCandidates` that takes an array of users
 * and returns only those which age is between 18 & 25 (both included)
 *
 * Créer une fonction `validCandidates` qui prend un array d'utilisateurs
 * et retourne seulement ceux qui ont entre 18 et 25 ans (inclus)
 * 
 */

const users = [
  { name: 'kouame fofana', email: 'k.fofana@mail.co', age: 19 },
  { name: 'seydou koné', email: 's.kone@mail.co', age: 23 },
  { name: 'abdoulaye koné', email: 'a.kone@mail.co', age: 18 },
  { name: 'fanta bamba', email: 'f.bamba@mail.co', age: 26 },
  { name: 'karidja coulibaly', email: 'k.coulibaly@mail.co', age: 21 },
  { name: 'siaka traoré', email: 's.traore@mail.co', age: 18 },
  { name: 'ahou bakayoko', email: 'a.bakayoko@mail.co', age: 27 },
  { name: 'naminata dao', email: 'n.dao@mail.co', age: 20 },
  { name: 'naminata koné', email: 'n.kone@mail.co', age: 23 },
  { name: 'awa coulibaly', email: 'a.coulibaly@mail.co', age: 17 },
  { name: 'drissa coulibaly', email: 'd.coulibaly@mail.co', age: 20 },
  { name: 'adjoua traoré', email: 'a.traore@mail.co', age: 25 },
  { name: 'aya dao', email: 'a.dao@mail.co', age: 18 },
  { name: 'siaka koné', email: 's.kone@mail.co', age: 22 },
  { name: 'sita touré', email: 's.toure@mail.co', age: 24 },
]

// Your code :


const validCandidates = users => users;

    console.log(validCandidates(users['0']));
    console.log(validCandidates(users['1']));
    console.log(validCandidates(users['2']));
    console.log(validCandidates(users['4']));
    console.log(validCandidates(users['5']));
    console.log(validCandidates(users['7']));
    console.log(validCandidates(users['8']));
    console.log(validCandidates(users['9']));
    console.log(validCandidates(users['10']));
    console.log(validCandidates(users['11']));
    console.log(validCandidates(users['12']));
    console.log(validCandidates(users['13']));
    console.log(validCandidates(users['14']));

/* const validCandidates = users => {
  let count = 0;
  let resultat = '';
  let result = '';
  
 for(count = 0; count < users.length; count++){
  
      if((((users['count'].age) >= 18)) && ((users['count'].age) <= 25)){
        result = resultat + console.log(users['count']);
  }
  
  else{
        resultat = '';
  }
}
      return result;
}

console.log(validCandidates(users));

console.log(users.length);
console.log(users['1']);
console.log(users['1']['age']);
console.log(users['1']['name']);
console.log(Object.keys(users))
console.log(Object.keys)
console.log(users['3'].age) */