'use strict';

// From:
// https://nodejs.org/en/knowledge/getting-started/what-is-require/
// - The basic functionality of require is that it reads a JavaScript file,
//   executes the file, and then proceeds to return the exports object
const basic = require('seanchen-npm-basic').basicSingleton;
const second = require('seanchen-npm-basic').basicSingleton;

// set the message from basic instance
basic.setMsg('Hello from basic!');

// both instances will have the same message.
basic.greetingMsg();
second.greetingMsg();

// both instances are acturally the same.
console.log(basic === second);

second.setMsg('Hello from second!');

basic.greetingMsg();
second.greetingMsg();