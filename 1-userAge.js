import { isFunction, isObject } from 'util';

'use strict'

/*
 * Create a function `userAge` which take a user object and returns its age
 *
 * Créer une fonction `userAge` qui prend un object user et qui retourne son age
 *
 */

const user = {
    name: 'Ibrahim Diaby',
    email: 'ibrahim.diaby@uvci.edu.ci',
    age: 18,
}
 // copy the one from the previous exercice


// Your code :

const userAge = user => user


console.log(userAge(user[age]))

const assert = require('assert')

assert.strictEqual(userAge(user[Age]), isFunction)
assert.strictEqual(console.log(user[name]), 'Ibrahim Diaby')
assert.strictEqual(console.log(user[age]), 18)
assert.strictEqual(console.log(user[email]), 'ibrahim.diaby@uvci.edu.ci')


assert.strictEqual(user, isObject)
assert.strictEqual(console.log(user[name]), 'Ibrahim Diaby')
assert.strictEqual(console.log(user[age]), 18)
assert.strictEqual(console.log(user[email]), 'ibrahim.diaby@uvci.edu.ci')