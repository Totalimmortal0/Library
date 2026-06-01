const booksCard = document.querySelector(".books")

let library = []

function Book(title, author, desc, bookID) {
    this.title = title
    this.author = author
    this.desc = desc
    this.bookID = bookID
}

function addBookToLibrary(title, author, desc) {
    const newBook = new Book(title, author, desc, crypto.randomUUID())
    library.push(newBook)
}

function displayBook(bookObj) {
    const newCard = document.createElement("div")
    newCard.classList.add("bookCard")

    const newTitle = document.createElement("h2")
    newTitle.classList.add("bookTitle")
    newTitle.innerText = bookObj.title

    const newAuthor = document.createElement("h4")
    newAuthor.classList.add("bookAuthor")
    newAuthor.innerText = bookObj.author

    const newDesc = document.createElement("p")
    newDesc.classList.add("bookDesc")
    newDesc.innerText = bookObj.desc

    newCard.appendChild
    newCard.appendChild(newTitle)
    newCard.appendChild(newAuthor)
    newCard.appendChild(newDesc)

    booksCard.appendChild(newCard)
}

function displayBooks() {
    // for loop calling displayBook() on every item in the library list
}

addBookToLibrary("book1", "author1", "this is a book")
addBookToLibrary("book2", "author2", "this is a book")
addBookToLibrary("book3", "author3", "this is a book")

displayBook(library[0])
displayBook(library[1])
displayBook(library[2])

console.log(displayBooks())