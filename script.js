// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    // add more items here
    'grapes',
    'bread',
    'tea',

];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const list = document.getElementById('list');
const textInput = document.getElementById('text')





// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
list.innerHTML = '';

    for (let i = 0; i < todoItems.length; i++) {
      
        const liElement = document.createElement('li')
        liElement.innerText = todoItems[i];
        list.appendChild(liElement);
    }
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function (event) {
    // add your code here
    const value = textInput.value;
    if (value.length > 0){
        todoItems.push(value);
        console.log(todoItems);
        
updateList();
       textInput.value ='';
    }
 

});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
    // todoItems.sort();

    todoItems.sort(function(a,b){
        return a.localeCompare(b);
    })

    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems = [];
    updateList();
});