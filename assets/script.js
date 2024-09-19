// console.log("Hello World!")

// get all the needed elements by their ids
const dialog = document.getElementById('dialog')

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const type = document.getElementById('type');
const read = document.getElementById('read');

const cancelBtn = document.getElementById('cancelBtn');

const confirmBtn = document.getElementById('confirmBtn');
const addBookBtn = document.getElementById('addBook');
const removeBtn = document.getElementById('removeBtn');
const readBtn = document.getElementById('readBtn')

const output = document.getElementById('table');
const tableTitle = document.getElementById('table_title');
const tableAuthor = document.getElementById('table_author');
const tableType = document.getElementById('table_type');
const tablePages = document.getElementById('table_pages');
const tableRead = document.getElementById('table_read');

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

confirmBtn.addEventListener('click', () => {
    event.preventDefault();

    addBookToLibrary();

    tableTitle.textContent = title.value;
    tableAuthor.textContent = author.value;
    tableType.textContent = type.value;
    tablePages.textContent = pages.value;
    tableRead.textContent = read.value === 'read' ? 'Read' : 'Unread';

    dialog.close();
});

cancelBtn.addEventListener('click', () => {
    dialog.close();
});

removeBtn.addEventListener('click', () => {
    output.remove();
});

readBtn.addEventListener('click', () => {
    if(readBtn.textContent === 'Read') {
        readBtn.textContent = 'Unread';
    } else {
        readBtn.textContent = 'Read';
    }
    
});

// All of your book objects are going to be stored in an array
const myLibrary = [];

function Book(title, author, type, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.type = type;
  this.pages = pages;
  this.read = read;
}

// let newBook = new Book('blye', 'ghfh', 'hjfhd', '565', 'read');
// console.log(newBook);

// add a function that can take user’s input and store the new book objects into an array.
function addBookToLibrary() {
  // do stuff here
    const titleVal = title.value;
    const authorVal = author.value;
    const typeVal = type.value;
    const pagesVal = pages.value;
    const readVal = read.value;

    const newBook = new Book(titleVal, authorVal, typeVal, pagesVal, readVal);

    myLibrary.push(newBook);
    console.log(myLibrary);
}


// Write a function that loops through the array and displays each book on the page. 

function displayBooks() {
    
}

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. 
// Add a button on each book’s display to remove the book from the library.

// Add a button on each book’s display to change its read status. 
// Create the function that toggles a book’s read status on your Book prototype instance.