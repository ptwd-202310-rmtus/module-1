

console.log("JS file is connected!");

// get element by id
const mainTitle = document.getElementById("title1");
console.log("main title: ", mainTitle);

// get element(s) by class name

// when we use getElementsByClassName we expect to get an "array" (HTML collection)

const paragraphs = document.getElementsByClassName("paragraph");
console.log("paragraphs: ", paragraphs);

// HTML collection is an array-like list of nodes

[...paragraphs].forEach(elem => console.log("elem: ", elem));

// const arr = Array.from(paragraphs) -> alternative way to turn HTML collection into an array

// get element(s) by tag

const pars = document.getElementsByTagName("p");

console.log("pars are: ", pars);

// querySelector() -> returns an object, that is the 1st found match

const title2 = document.querySelector("#title2");
console.log("using querySelector: ", title2)

const par1 = document.querySelector("p");
console.log("using querySelector to get the 1st paragraph: ", par1)

const productsSubtitleH2 = document.querySelector(".products h2");
console.log("using querySelector to get the 2nd h2: ", productsSubtitleH2)

// getting all elements using querySelectorAll -> returns Node List (it is an array, not HTML collection)

const allParagraphs = document.querySelectorAll("p");

console.log("Total number of paragraphs on the page is: ", allParagraphs.length, "and here are the paragraphs: ", allParagraphs)

allParagraphs.forEach(par => console.log(par));

// accessing the elements' properties and content

console.log("main title content is: ", document.getElementById("title1").innerHTML)
console.log("main title content is: ", mainTitle.innerText)

document.getElementById("my-div").innerHTML = "<h1> Goodbye! </h1>"

document.getElementById("my-div").innerText = "hello again!"

mainTitle.style.color = "red";
mainTitle.style.backgroundColor = "yellow";
mainTitle.style.padding = "30px";

allParagraphs.forEach(par => {
    par.style.fontStyle = "italic";
    par.style.color = "violet";
})

allParagraphs[0].id = "paragraph-1";

// add one more class - 1 way:
allParagraphs[1].className += " red";

// add one more class - 2nd way:
allParagraphs[2].classList.add("italic-letters");

// remove class
allParagraphs[2].classList.remove("paragraph");

// toggle class
allParagraphs[2].classList.toggle("some-class")