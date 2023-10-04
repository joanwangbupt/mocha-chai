const assert = require('chai').assert;
// const sayhello = require('../app').sayhello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

//Global vars
sayhelloResult = app.sayhello();
addNumbersResult = app.addNumbers(5,5);

describe('App', function(){

    describe('sayhello', function(){
        it('sayhello should reture hello', function(){
            // let result = app.sayhello();
            assert.equal(sayhelloResult, 'hello');
        });
    
        it('sayhello should return type string', function(){
            // let result = app.sayhello();
            assert.typeOf(sayhelloResult, 'string');
        });
    });
    
    describe('addNumbers', function(){
        it('addNumbers should be above 5', function(){
            // let result = app.addNumbers(5,5);
            assert.isAbove(addNumbersResult,5);
        });
    
        it('addNumbers should return type number', function(){
            // let result = app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
        });
    });    
});