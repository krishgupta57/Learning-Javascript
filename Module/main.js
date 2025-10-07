// it is use to make the js file light weight using multiple js file
// basically user to reduse time complexcity

// there are 2 type of js module
// Per-define & User-define

// 2 types of js module -> 1. common js,  2. ES Module 

// we will use es module because of less complexcity

// to put the file in js using common js we use require() function
// to send the file in js using common js we use module.exports() function

// to send the file in js using es module we use export function
// to put the file in js using es module we use import function

// to link the file through js we use type="module" in script tag

import Demo from './Second.js'

console.log(Demo(2,3))

// there are 2 type of import export-> 1. Default, 2. Named
// Default -> when we have to call single function or single variable  // we can change the name of function when we import
// Named -> when we have to call multiple function or multiple variable

import {fun1 as Demo1,fun2 as Demo2} from './Second.js'
// to change the name of the function in named function we use as so thet it will be called as the other name
// fun1()

// fun2()

Demo1()

Demo2()