// people array
const people=[];

// person constructor
function Person(name,surname,age,gender)
{
    this.name=name;
    this.surname=surname;
    this.age= age;
    this.gender=gender;

};


// loop for asking details 
// variable declaration
let askName=    prompt("please enter name");
let askSurname= prompt("please enter surname");
let askAge=     prompt("please enter age");
let askGender=  prompt("please enter gender");


// creating new variables to store new persons object when it loops
let person1= new Person();
let person2= new Person();
let person3= new Person();
let person4= new Person();


// loop to  ask for user details
for (let i=0; i<=3; i++) // outer loop rows
{
        let person1= new Person();
        let person2= new Person();
        let person3= new Person();
        let person4= new Person();

    for(let j= 0;[i][j]<=3;j++) //inner loop colomns
    {
        Person(askName,askSurname,askAge,askGender); 

        
        
    }
    
} 




