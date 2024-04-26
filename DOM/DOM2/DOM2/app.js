let h=document.getElementById("heading");
h.innerHTML="Creating New elements";

/*According to the W3C HTML DOM standard, everything in an HTML document is a node:

The entire document is a document node
Every HTML element is an element node
The text inside HTML elements are text nodes
Every HTML attribute is an attribute node (deprecated)
All comments are comment nodes

So if we want to create a new element on our HTML DOM/Web Page,we should first create the element and then append it
to the existing element,this can be in a div, a list,a table,or just anywhere on your page

Let's first append a new element to our div,we will also do that for the body,in terms of lists/tables and everything
else,you guys can go explore but the concept is the same throught
*/


//So firstly you will need to create the parent,which is the html element/tag you want, then you create the child,
//this can be whatever that you will be putting in your html tag

const parent=document.createElement("p");
let child=document.createTextNode("Chelsea");


//After creating the parent and the child,you will need to append the child to the parent
parent.appendChild(child);

//Now you have created a new element and a its text node,you willl have to now add this to the existing element
//which is the div in this case,so first get the div you want then add the new created element

let currentdiv=document.getElementById("paragraphs");
//currentdiv.appendChild(parent);


// Inserting a new element before an existing element,so let's say we want to create a new element and put it before
//Man U
//The logic is that we first need to create that element,then you get the existing element, and then add the new
//element before the existing element

let newParagraph=document.createElement("p");
let newText=document.createTextNode("Arsenal");
newParagraph.appendChild(newText);

let divTag=document.getElementById("paragraphs");
let existingParagraph=document.getElementById("manu");
//divTag.insertBefore(newParagraph,existingParagraph);

//Exercise,create a new image and add it on the div

//If we wanted to add an element on the body itself than the div/list/table, we use the body property
//document.body

let newP=document.createElement("p");
let newT=document.createTextNode("Man U won't win the League,the glory days are not coming back!");
newP.appendChild(newT);


//document.body.appendChild(newP);
//if you wanted to inset this before the div element you would do this
//document.body.insertBefore(newP,divTag);


//Okay you can go experiment with deleting elements and editing them

/*
********
*Events*
********
This is the action that will happen when we interact with the DOM Nodes
For example,what action do we want to see when we click  button,click the text,hover over something and all that
*/

/*
function change(){
    let p=document.getElementById("pchange");
    p.style.color="Green";
}


function add(){
    let num1=parseInt(document.getElementById("txt1").value);
    let num2=parseInt(document.getElementById("txt2").value);
    let result=document.getElementById("txt3");

        alert(num1);
    result.value=num1+num2;

    if(result.value<10){
        document.body.style.backgroundColor="Orange";
    }

}

*/

//Creating an unordered list

/*
let ul=document.createElement("ul");
let li=document.createElement("li");
let txt=document.createTextNode("Okayyy");

ul.appendChild(li);
li.appendChild(txt);

let li1=document.createElement("li");
let txt1=document.createTextNode("Noooooooo");

ul.appendChild(li1);
li1.appendChild(txt1);

document.body.appendChild(li);
document.body.appendChild(li1);
*/