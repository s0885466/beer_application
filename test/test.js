function sayName(name) {
    return message = 'My name is ' + name;
}

//var assert = require('chai').assert;
var should = require('chai').should();

describe('test', function () {
   it('test', function () {
       sayName('name').should.equal('My name is name');
   })
});

