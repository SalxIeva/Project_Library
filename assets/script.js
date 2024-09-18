// console.log("Hello World!")

// get all the needed elements by their ids
const dialog = document.getElementById('dialog')

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const types = document.getElementById('type');
const read = document.getElementById('read');

const cancelBtn = document.getElementById('cancelBtn');

const confirmBtn = document.getElementById('confirmBtn');
const addBookBtn = document.getElementById('addBook');
const removeBtn = document.getElementById('removeBtn');
const readBtn = document.getElementById('readBtn')

const output = document.getElementById('table');
const tableTitle = document.getElementById('table_title');
const tableAuthor = document.getElementById('table_author');
const tablePages = document.getElementById('table_pages');
const tableRead = document.getElementById('table_read');

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

confirmBtn.addEventListener('click', () => {
    e.preventDefault();
    dialog.close();
})
// All of your book objects are going to be stored in an array
const myLibrary = [];

function Book() {
  // the constructor...
}

// add a function that can take user’s input and store the new book objects into an array.
function addBookToLibrary() {
  // do stuff here
}


// Write a function that loops through the array and displays each book on the page. 
// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. 
// Add a button on each book’s display to remove the book from the library.

// Add a button on each book’s display to change its read status. 
// Create the function that toggles a book’s read status on your Book prototype instance.