//This is an Object in Javascript  that will show the difference of JSON - (JavaScript Object Notation)
//refer to the xmlsample.json file

var person = {
    name: 'Douglas Crockford',
    age: 25,
    state: 'CA',
    giveKeyNote: function() { /* code */}
    //in Javascript Object you can define a property as a function, but in JSON you can't
}

//then also refer the xml file

// ways to convert a javascript object into a JSON file
console.log(JSON.stringify(person));


//to convert back a json into a javascript object
var json = JSON.stringify(person);
var newPerson = JSON.parse(json);
console.log(newPerson);