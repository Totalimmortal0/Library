const booksCard = document.querySelector(".books")
const newBookBtn = document.querySelector(".newBookBtn")
const deleteCardBtn = document.querySelector(".deleteCardBtn")
const addBookModal = document.querySelector("#addBookModal")
const cancelBtn = document.querySelector(".cancelBtn")

let library = []

function Book(title, author, desc, hasRead, bookID) {
    this.title = title
    this.author = author
    this.desc = desc
    this.hasRead = hasRead
    this.bookID = bookID
}

function addBookToLibrary(title, author, desc, hasRead) {
    const newBook = new Book(title, author, desc, hasRead, crypto.randomUUID())
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

    const hasRead = document.createElement("div")
    if (bookObj.hasRead === true) {
        hasRead.classList.add("hasRead")
        hasRead.innerText = "✓"
    }

    const newDeleteBtn = document.createElement("button")
    newDeleteBtn.classList.add("deleteCardBtn")
    newDeleteBtn.innerText = "Delete"

    newCard.appendChild
    newCard.appendChild(newTitle)
    newCard.appendChild(newAuthor)
    newCard.appendChild(newDesc)
    newCard.appendChild(hasRead)
    newCard.appendChild(newDeleteBtn)

    booksCard.appendChild(newCard)
}

function displayBooks() {
    for (let book of library) displayBook(book)
}

newBookBtn.addEventListener("click", () => {
    addBookModal.showModal()
})

cancelBtn.addEventListener("click", () => {
    event.preventDefault()
    addBookModal.close()
})

addBookToLibrary("book1", "author1", "this is a book", true)
addBookToLibrary("book2", "author2", "this is a book", false)
addBookToLibrary("book3", "author3", "this is a book", true)
addBookToLibrary("book4", "author4", "this is a book", true)
addBookToLibrary("book5", "author5", "this is a book", false)
addBookToLibrary("book6", "author6", "this is a book", true)
addBookToLibrary("book7", "author7", "this is a book", false)

displayBooks()