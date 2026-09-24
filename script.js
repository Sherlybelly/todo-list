// ADD YOUR CODE BELOW 

const { createElement } = require("react");

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    // add more items here
    'grapes',
    'bread',
    'tea'
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');


const list = document.getElementById('list');





// 3. Write a function to display all items in the #list element
function updateList() {
    const todolist = document.getElementById("list");
    const item = createElement("li");
    item.interText=input.value;
    list.appendChild(li);
   
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function (event) {
    // add your code here
    text = document.getElementById('text').value;
    todoItems.push(text);
    updateList();

});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
    todoItems.sort();
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems = [];
    updateList();
});