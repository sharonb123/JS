/*An Object is an collection of properties.. and this can be written using key value pairs

keys...are gonna be more like variables/placeholders
values...actual values that are going to be stored in the keys

---------------
Creating an Object

const obj={key:value}

e.g for that car example we had
*/
const car={brand: "VW",
            colour: "Red",
            opendoor: function(){
                return "door open";
          }
}

/*
Unlike Arrays,with objects,if you want to access a certail value or element you are going to use a key/propertyName

/This will give you the actual Value for that key

*/
alert(car.brand);
// You can use the same concept to access the Object Methods(Functions within an object)

alert(car.opendoor());

//To iterate an Object, you have to use a for in loop

for(let c in car){
    console.log(car[c]);
}

//You can also have an array within your object

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford"},
      {name:"BMW"},
      {name:"Fiat"}
    ]
  }

  //if you wanted to access any array element in  the object

  /* You first have to specifyTheObjName.arrayname[index].propertyName;

  e.g, to get BMW, we will do the following

  */

  alert(myObj.cars[1].name);


  //So if you wanted to Get every element in the array you would use a nested loop,the first one for the object
  // Then the 2nd one for the array itself




  /*Main Event

  Constructor
  This is gonn abe more like a template for our objects

  so to achieve this 

  We have to create a function,the functionName should start with a CapitalLetter,then in the arguments ,we are 
  going to pass the object's properties

  e.g functiom MyConstructor(val1,val2,val3){
    this.myV=val1;
    this.myV=val2;
    this.myV=val3;
  }

  Please not that you use the 'this' key word,remove it and see what's gonna happen if you are curious enough

  then to create an Object,we can use this constructor

  We can do something like this

  const obj1=new MyConstructor("WEB2",23000,true);

  // you can proceed to create more elements like this

  const obj2=new MyConstructor("PRG",50000,true)
  const obj3=new MyConstructor("STATS",12000,false)

  please check this link for a short example
  https://www.youtube.com/watch?v=DaUFyK8M4WY


  Goodluck Guys

  
  */

 