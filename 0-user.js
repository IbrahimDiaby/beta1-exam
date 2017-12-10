import { isObject } from 'util';

'use strict'

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
    name: 'Ibrahim Diaby',
    email: 'ibrahim.diaby@uvci.edu.ci',
    age: 18,
}

console.log(user[name])
console.log(user[email])
console.log(user[age])

const assert = require('assert')

assert.strictEqual(user[], isObject)
assert.strictEqual(console.log(user[name]), 'Ibrahim Diaby')
assert.strictEqual(console.log(user[age]), 18)
assert.strictEqual(console.log(user[email]), 'ibrahim.diaby@uvci.edu.ci')