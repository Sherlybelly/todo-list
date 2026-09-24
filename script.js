// ADD YOUR CODE BELOW 

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

const sortButton = document.getElementById('sort');
const clearButton = document.getElementById('clear');

const list = document.getElementById('list');





// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
    let text = todoItems

    document.getElementById("list").innerHTML = text;
  
}

updateList();


// const input = document.getElementById('textinput');

// input.addEventListener('keyup', function (event) {
//     console.log(event);
//     const text = event.target.value;
//     console.log(text)
//     const paragraphElement = document.getElementById('livedisplay');
//     paragraphElement.innerText = text;
//     //key up for lesslag
//     //key down for lag
//     //change when u click out
// })


// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
});