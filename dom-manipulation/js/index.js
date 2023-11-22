// add, update and remove attributes

const paragraphNode = document.querySelector("#paragraph");

const parId = paragraphNode.getAttribute("id");
console.log("par ID: ", parId);

paragraphNode.setAttribute("id", "info-paragraph");
console.log("paragraphNode ID: ", paragraphNode.id);

paragraphNode.setAttribute("class", "paragraphs");
console.log("paragraphNode class: ", paragraphNode.className);

paragraphNode.removeAttribute("id");
console.log("is id removed?: ", paragraphNode);

// add, update and remove dom elements

const mainTitle = document.createElement("h1");
mainTitle.innerText = "This is the main title!";

const parent = document.querySelector("body");
parent.appendChild(mainTitle);

const siblingParagraph = document.querySelector("p");

parent.insertBefore(mainTitle, siblingParagraph);

const link = document.getElementById("google-link");
link.innerText = "go to google!";

link.setAttribute("href", "https://www.ironhack.com/us");
link.setAttribute("target", "_blank");

parent.removeChild(paragraphNode);

// add events to dom elements

const addCommentButton = document.querySelector("#add-comment-button");

addCommentButton.addEventListener("click", () => console.log("added comment"));

addCommentButton.addEventListener("click", () => {
    const newPar = document.createElement("p");
    newPar.innerText = "this is some super funny comment!";
    parent.appendChild(newPar);
});

// handle inputs

const newItemInput = document.querySelector("#item-input");
const addItemButton = document.querySelector("#add-item-button");
const deleteButtons = document.querySelectorAll(".delete-item-button");

addItemButton.addEventListener("click", () => {
    const listParent = document.querySelector("#item-list");

    const newLi = document.createElement("li");
    // newLi.innerHTML = newItemInput.value + ' <button class="delete-item-button">🗑</button>'
    newLi.innerHTML = `${newItemInput.value} <button class="delete-item-button">🗑</button>`

    listParent.appendChild(newLi);

    const newDeleteBtn = newLi.querySelector(".delete-item-button");

    newDeleteBtn.addEventListener("click", () => {
        const isOkToDelete = confirm("Are you sure you want to delete this item?");
        
        if(isOkToDelete) {
            const parentLiTag = newDeleteBtn.parentElement;
            parentLiTag.remove()
        }
    })

    newItemInput.value = "";
});

deleteButtons.forEach(oneButton => {
    oneButton.addEventListener("click", () => {
        const isOkToDelete = confirm("Are you sure you want to delete this item?");
        
        if(isOkToDelete) {
            const parentLiTag = oneButton.parentElement;
            parentLiTag.remove()
        }
    })
})