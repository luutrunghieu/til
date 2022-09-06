"use strict";

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

const greetings = 'hello';
const name = 'hieu';
const result = "".concat(greetings, " ").concat(name);
console.log(result);

const fn = () => 1;

Promise.resolve().finally();