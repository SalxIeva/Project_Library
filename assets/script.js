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
const addBookBtn = document.getElementsByClassName('addBook');
const removeBtn = document.getElementById('removeBtn');
const readBtn = document.getElementsByClassName('readBtn')

const output = document.getElementById('table');
const tableTitle = document.getElementById('table_title');
const tableAuthor = document.getElementById('table_author');
const tableType = document.getElementById('table_type');
const tablePages = document.getElementById('table_pages');
const tableRead = document.getElementById('table_read');


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

// readBtn.addEventListener('click', () => {
    //     if(readBtn.textContent === 'Read') {
        //         readBtn.textContent = 'Unread';
        //     } else {
            //         readBtn.textContent = 'Read';
            //     }
            
            // });
            
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
                
                displayBooks();
                console.log(myLibrary);
            }
            
            
            // Write a function that loops through the array and displays each book on the page. 
            
            function displayBooks() {
                output.innerHTML = '';
                
                myLibrary.forEach((book, index) =>{
                    const newRow = `
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
                    
                    output.appendChild(newRow);
                })
            }
            
            // Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. 
            addBookBtn.addEventListener('click', () => {
                dialog.showModal();
            });
            
            
            function addReadBookBtnClick() {
                addBookBtn.forEach(button => {
                    button.addEventListener('click', () => {
                        const index = button.getAttribute('data-index');
                        // myLibrary[index].read = myLibrary[index].read === 'read' ? 'unread' : 'read';
                        
                        if(myLibrary[index].read.textContent === 'Read') {
                            myLibrary[index].read.textContent = 'Unread';
                        } else {
                            myLibrary[index].read.textContent = 'Read';
                        }
                        displayBooks();
                    })
                })
            }
            
            // Add a button on each book’s display to remove the book from the library.
            
            // Add a button on each book’s display to change its read status. 
            // Create the function that toggles a book’s read status on your Book prototype instance.