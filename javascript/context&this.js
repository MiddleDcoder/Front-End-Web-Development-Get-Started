
var joe = {
    firstName: 'Joe',
    lastName:'Eames',
    fullName: function(){ return this.firstName + ' ' + this.lastName; }
}

var dan = {
    firstName: 'Dan',
    lastName: 'Walhin'
}

dan.stolenFullName = joe.fullName;
//to undestand this the .stolenFullName() is the "this" keyword above from joe object

console.log(dan.stolenFullName());

/*
** result
Joe Eames
Dan Walhin
why? because the console.log(dan.stolenFullName()); is accessing the function at joe object
*/
/* Test this code
var fullName = joe.fullName;
var firstName = 'John';
var lastName = 'Papa';

console.log(fullname());
*/