// console.log("Hello World!")

// get all the needed elements by their ids
const dialog = document.getElementById('dialog')
const form = document.getElementById('form');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const type = document.getElementById('type');
const read = document.getElementById('read');

const cancelBtn = document.getElementById('cancelBtn');

const confirmBtn = document.getElementById('confirmBtn');
const addBookBtn = document.getElementById('addBook');

// const output = document.getElementById('table');
const tableTitle = document.getElementById('table_title');
const tableAuthor = document.getElementById('table_author');
const tableType = document.getElementById('table_type');
const tablePages = document.getElementById('table_pages');
const tableRead = document.getElementById('table_read');



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
            
// add a function that can take user’s input and store the new book objects into an array.
function addBookToLibrary() {

    // do stuff here
    const newBook = new Book(title.value, author.value, type.value, pages.value, read.value);
    
    myLibrary.push(newBook);
    
    displayBooks();
    console.log(myLibrary);
}


// Write a function that loops through the array and displays each book on the page. 

const output = document.getElementById('booksContainer');
function displayBooks() {
    output.innerHTML = '';


    myLibrary.forEach((book, index) =>{
        const newTable = document.createElement('table');

        const newTableContent = `
        <tr>
        <th colspan="2">${book.title}</th>
        </tr>
        <tr>
        <td>Author</td>
        <td>${book.author}</td>
        </tr>
        <tr>
        <td>Type</td>
        <td>${book.type}</td>
        </tr>
        <tr>
        <td>Number of pages</td>
        <td>${book.pages}</td>
        </tr>
        <tr>
        <td>The book has been read</td>
        <td><button class="readBtn" data-index="${index}">${book.read}</button></td>
        </tr>
        <tr>
        <td colspan="2"><button class="removeBtn" data-index="${index}">Remove</button></td>
        </tr>`;
        
        // output.innerHTML += newRow;

        newTable.innerHTML = newTableContent; 
        newTable.style.display = 'block'; 

        output.appendChild(newTable);
    });
    addReadBookBtnClick();
    removeBookBtnCLick();
}

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
    form.reset();

});

confirmBtn.addEventListener('click', () => {
    event.preventDefault();
    

    if (form.checkValidity()) {
        // if the form is valid, add the book
        addBookToLibrary();
        dialog.close(); 
        output.style.display = 'grid';
    } else {
        // if the form is invalid, report the issues
        form.reportValidity();
    }
    

});

cancelBtn.addEventListener('click', () => {
    dialog.close();
});

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. 


function addReadBookBtnClick() {
    const addBookBtn = document.querySelectorAll('.readBtn');
    addBookBtn.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            myLibrary[index].read = myLibrary[index].read === 'read' ? 'unread' : 'read';
            displayBooks();
        })
    })
}

// Add a button on each book’s display to remove the book from the library.

function removeBookBtnCLick() {
    const removeBtn = document.querySelectorAll('.removeBtn');
    removeBtn.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            myLibrary.splice(index, 1);
            displayBooks();
        });
    });

    if ( output.innerHTML === '') {
    output.style.display = 'none'
    }
}

// Add a button on each book’s display to change its read status. 
// Create the function that toggles a book’s read status on your Book prototype instance.


