let myLibary = [];
const books = document.querySelector('.books');
const dialog = document.querySelector('.pop');
const show = document.querySelector('.show');
const close = document.querySelector('#close-dialog-button');
const submit = document.querySelector('.submit');

function Book(author, title, page, read) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}


function addBook() {
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const page = document.querySelector('#page').value;
    const read = document.querySelector('#read').checked;
    const book = new Book(author, title, page, read);
    myLibary.push(book);
    displayBooks();
}

function addButton(book, element) {
    let button = document.createElement('button');
    button.textContent = 'Remove';
    button.addEventListener('click', () => {
        myLibary.splice(myLibary.indexOf(book), 1);
        displayBooks();
    });
    element.appendChild(button);
    button = document.createElement('button');
    button.textContent = 'Toggle Read';
    button.addEventListener('click', () => {
        book.toggleRead();
        displayBooks();
    });
    element.appendChild(button);
}

function displayBooks() {
    books.innerHTML = '';
    for (const b of myLibary) {
        const book = document.createElement('div');
        book.classList.add('book');
        const author = document.createElement('div');
        author.textContent = "Author: " + b.author;
        book.appendChild(author)
        const title = document.createElement('div');
        title.textContent = "Title: " + b.title;
        book.appendChild(title);
        const page = document.createElement('div');
        page.textContent = "Pages: " + b.page;
        book.appendChild(page);
        const read = document.createElement('div');
        read.textContent = "Read?: " +  b.read;
        book.appendChild(read);
        addButton(b, book);
        books.appendChild(book);
    }
}

show.addEventListener('click', () => {
    dialog.showModal();
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
    dialog.close();

});

