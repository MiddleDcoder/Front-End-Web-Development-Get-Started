/*var obj = {};
obj.prop1 = 3;
console.log(obj); */

//function object
/*function log(arg){
    console.log(arg);
}

log.myProp = 3;
console.dir(log); */

/*
var ary = [3];
ary.myProp = 3;
console.dir(ary); */

/*var obj = {};
obj.name = 'Joe';
console.log(obj.name); */
//other way
/*
var obj = {};
obj.name = 'Joe';
console.log(obj['name']);

for(var i=0; i<5; i++){
    obj['prop'+ i] = i;
}
console.log(obj); */


//Object sample 
// the bracket syntax does mean an array this is accessing the property of an object.
var obj = {};
obj.name = 'Joe';
obj.age = 99;
//console.log(obj['name']);
console.log(readProp(obj, 'name'));
console.log(readProp(obj, 'age'));
obj['full name'] = 'Joe Eames';
console.log(obj);

function readProp(item, prop){
    return item[prop];
}