/*Creating an Object

const obj={};

Creating a Map

const student=new Map()
/*We will then use the Student instance to interact with our Map 
properties and methods;

Inserting key value pairs in our Object

const insertVals={key:val1, kay:val1....}

Inserting key value pairs in Maps
--We use the set method which belongs to the Map Class


student.set("firstName","Lionel");
student.set("lastName","Messi");
student.set("age",32);
*/
/*Accessing values in an Object

obj.keyName

Accesing values in a Map, for this we use a get method

*/

//alert(student.get("firstName"));

/*
Counting the Number of elements in a Collection,

With an Object you have to make use of a loop or Object.keys(obj).length

With Maps you can achieve this by using the size property

*/

//alert(student.size);

/*Removing elements from the collection

With Objects

delete objname.keyName

with Maps

map.delete(key)*/

//student.delete("age");
//alert(student.get("age"));

//Maps have a clear() method which deletes all the Map elements


//student.clear();

//alert(student.get("firstName"));

//Maps also have the has method that checks if a certain key exists 
//in the map

/*The entries() method returns an iterator object with the 
[key,values] in a Map
*/
/*
for (const stud of student.entries()) {
//alert(stud);
}

/*The keys() method returns an iterator object with the keys in 
a Map

for (const stud of student.keys()) {
    //alert(stud);
    }

/*The values() method returns an iterator object with the values in 
a Map

for (const stud of student.values()) {
    //alert(stud);
    }

/*The forEach() method invokes a callback for each key/value
 pair in a Map:

 student.forEach(function(value, key) {
//console.log(key + " : "+ value)
})
*/

/*Sets
A set is a collection of unique values
It can hold any value of any data type

A Set is a class,so to use its properties and methods, you
first have to create its instance

*/


const myset=new Set();

//To add elements in the set,we use the add() method and pass the
//value 

myset.add("I hate Mondays");
myset.add("I hate Mondays");
myset.add("I wish weekends were longer!");

//You can even add objects,arrays,or functions as values

//Objects

const myobj={today:"Monday", tomorrow:"Tuesday", stat:"Friyayy"};

myset.add(myobj);



//Arrays
const arr=[1,2,3,3,3,4,5];

myset.add(arr);

//functions

function doStuff(){
    return "The finner things in life never come easy!";
}

myset.add(doStuff());

//delete,clear and has are implemented in the same way as the Maps

myset.forEach(function(value) {
    console.log(value)
    })