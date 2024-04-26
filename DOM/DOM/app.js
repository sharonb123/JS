/*DOM enables us to us to use Javascript to make changes/access elements on our HTML pages,on both the HTML and CSS

In the DOM,all HTML elements are defined as objects

JavaScript can change all the HTML elements in the page--HTML
Tags like <p>
JavaScript can change all the HTML attributes in the page--img src
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page


The Document Object represents your webpage,so it means that if 
you want to make changes on the webpage,you should first specify 
the Document

Firstly what you would want to do is to get the element that you want to access/manipulate,you can get this element using its className,tagname/idName/CSS selector

***********************************
Getting an element by its className
***********************************

<p class="myParagraph"></p>

document.getElementByClassName(paragraph)


*****************************
Getting an element by its id
*****************************

<p id="myParagraph"></p>

document.getElementById(paragraph)

*********************************
Getting an element by its TagName
*********************************

<p></p>

document.getElementByTagName('p')

**************************************
Getting an element by its CSS Selector
**************************************

<p id="myParagraph"></p>

document.getElementById("#myParagraph")
Changing html elements



First you have to access your desired element and then you can make your desired changes

const toChange=document.getElementById(paragaph);

Now toChange will contain that certain element you want to change,you will then go make changes to this element

toChange.innerHTML=new html Content/text

The innerHTML can be used to get/replace html contents

*/



let domVar=document.getElementById("parr");
domVar.innerHTML="Using ID";

document.getElementById("change").innerHTML="DOm is much better";



let parTag=document.getElementsByTagName("p");
//console.log(parTag);


//Changing the value of the attribute

document.getElementById("pic").src="data:image/jpeg;base64,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";
//Using DOM to change the CSS

//document.getElement.style.property=style

domVar.style.color="red";

//domVar.style.backgroundColor="Green";
//domVar.style.fontFamily="Ariel";
/*
let body=document.getElementById("body");
body.style.backgroundColor="Purple";


*/
//Query Selector


let query=document.querySelector(".parr1");
//console.log(query.innerHTML);

//QuerySelectorAll
//Returns nodelist object of matched elements

let queryAll=document.querySelectorAll(".parr1");
console.log(queryAll);

//To access a certain element in a nodeList,you will need an index

//console.log(queryAll[1].innerHTML);

//queryAll[0].style.color="tomato";
//queryAll[1].style.color="tomato";
/*
for(let k in queryAll){
    //queryAll[k].style.color="tomato";
}*/


let pars=document.getElementsByClassName('parr1');


pars[1].innerHTML="Isco";
pars[2].innerHTML="Siiiuuuuuuuuu";
//console.log(pars);