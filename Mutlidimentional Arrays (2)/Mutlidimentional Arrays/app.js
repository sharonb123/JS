/*
MultiDimensional Arrays
They are not directly provided by Javascript so if we want to create them,we have to use 1D arrays
To achieve this,we will put arrays in an array to create a multidimensional Array


There are 2 ways to achieve this,the first option would be to create separate arrays and then store in
one array as follows*/

/*
const student1 = ["Josh", 24, 238000];
const student2 = ["Ethan", 30, 230000];
const student3 = ["Mudryk", 28, 234100];
const student4 = ["Makabaza", 31, 223800];
const student5 = ["Sdwedwe", 29, 235000];

//using all these 1D arrays,we can then combine them to create a multi dimensional arrays as shown below
const students=[student1,student2,student3,student4,student5];
alert(students);

//2nd Option


const mystudents=[["Josh", 24, 238000],["Ethan", 30, 230000],
["Mudryk", 28, 234100],["Makabaza", 31, 223800],["Sdwedwe", 29, 235000]];
alert(mystudents);


//Accessing the elements of the array

//Let's work with students and get Sdwedwe's student number
//To achieve this,we will need an index

alert("Sdwedwe's student number is "+ students[4][2]);

//This notation will still work for my students,don't believe me? Well well...

//Iterating through the multidimensional array

for(let i=0;i<students.length;i++){
    ///this iteration would be for the rows/outer arrays
    for(let k=0;k<students[i].length;k++){
        //this iteration would be for rows/inner arrays
        console.log(students[i][k]);
    }
    console.log("-------");
}

//Adding elements in Multidimensional Array: Adding elements in multi-dimensional arrays can be achieved in two ways
// in inner array or outer array. The inner array can be done in two different ways.

students[0][3]="josh@belgiumcampus.ac.za";
console.log(students);

//method 2
students[1].push("ethan@belgiumcampus.ac.za");
console.log(students);


//Addingg elements to the outer array

students.push(["Joseph",33,237888]);

console.log(students);

//Removing elements from the inner array

students[0].pop();
console.log(students);

//Removing elements from the outer array
students.pop();
console.log(students);


//Got it???? Okayy time for exercises

/*
On the multidimentional array we have,add the last name at the begining of the first .."student1"
Remove the 2nd element in the 2nd array... student2
Add 3 elements in the 3rd array on position 2,email address,phone number,module
slice out elements from index 1 in the 2nd array

For everything you do,ensure that you display the results

*/



//Passing an array as a function parameter

function display(myarray){
console.log(myarray);
}

const cars=["VW","BMW","Volvo"];
display(cars);

//Passing a function as an Array elementss
const Arrr=[1,2,3,sum(20,20)];

function sum(x,y){
    return x+y;
}
console.log(Arrr);

//More methods
//he indexOf() method
//This method returns the position of the first occurrence of a value in a string.

let hello="Hello world!";
alert(hello.indexOf("world"));

//We can also find the first occurrence of a certain string  starting from a specific position

alert(hello.indexOf("l", 4));

//Map
//This method Creates a new array from calling a function for every array element.
//It's important to note that the Map method does not change the original array

const numbers = [1,2,3,4];
const mapped = numbers.map(add)

function add(numbers) {
  return numbers+1;
}
alert(numbers);
alert(mapped);

//filter
//This method creates a new array filled with elements that pass a test provided by a function.
//It's important to note that the Map method does not change the original array

const semesterMarks=[10,30,50,58,60,22,80];
const filterMarks=semesterMarks.filter(smark);

function smark(mark){
    return mark>=50;
}

alert(filterMarks);


/*
Go and explore the rest of the methods
Every
find
findIndex
forEach,
includes,
some,
sort

*/
