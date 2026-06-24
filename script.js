const booksCard = document.querySelector(".books")
const newBookBtn = document.querySelector(".newBookBtn")
const addBookModal = document.querySelector("#addBookModal")
const confirmBookBtn = document.querySelector(".confirmBookBtn")
const cancelBtn = document.querySelector(".cancelBtn")

const titleInput = document.querySelector("#titleInput")
const authorInput = document.querySelector("#authorInput")
const descInput = document.querySelector("#descInput")
const hasReadInput = document.querySelector("#hasReadInput")

let library = []

class Book {
    constructor(title, author, desc, hasRead, bookID) {
        this.title = title
        this.author = author
        this.desc = desc
        this.hasRead = hasRead
        this.bookID = bookID
    }
}

function addBookToLibrary(title, author, desc, hasRead) {
    const newBook = new Book(title, author, desc, hasRead, crypto.randomUUID())
    library.push(newBook)
}

function displayBook(bookObj) {
    const newCard = document.createElement("div")
    newCard.classList.add("bookCard")
    newCard.setAttribute("data-id", bookObj.bookID)

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
    hasRead.classList.add("hasRead")

    if (bookObj.hasRead === true) {
        hasRead.innerText = "✓"
    }

    const newDeleteBtn = document.createElement("button")
    newDeleteBtn.classList.add("deleteCardBtn")
    newDeleteBtn.setAttribute("data-id", bookObj.bookID)
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
    booksCard.innerHTML = ""
    for (let book of library) displayBook(book)
}

newBookBtn.addEventListener("click", () => {
    addBookModal.showModal()
})

cancelBtn.addEventListener("click", () => {
    addBookModal.close()
})

confirmBookBtn.addEventListener("click", () => {
    event.preventDefault()

    addBookToLibrary(titleInput.value, authorInput.value, descInput.value, hasReadInput.checked)
    displayBook(library[library.length - 1])

    titleInput.value = ""
    authorInput.value = ""
    descInput.value = ""
    hasReadInput.checked = false
    addBookModal.close()
})

booksCard.addEventListener("click", () => {
    if (event.target.classList[0] === "hasRead") {
        library.forEach((book) => {
            if (book.bookID === event.target.parentElement.getAttribute("data-id")) {
                if (book.hasRead === true) {
                    event.target.innerText = ""
                    book.hasRead = false
                } else {
                    event.target.innerText = "✓"
                    book.hasRead = true
                }
            }
        })
    }

    if (event.target.classList[0] === "deleteCardBtn") {
        library = library.filter((book) => {
            if (book.bookID !== event.target.getAttribute("data-id")) {
                return book
            }
        })
        displayBooks()
    }
})

// addBookToLibrary("book1", "author1", "this is a book", true)
// addBookToLibrary("book2", "author2", "this is a book", false)
// addBookToLibrary("book3", "author3", "this is a book", true)
// addBookToLibrary("book4", "author4", "this is a book", true)
// addBookToLibrary("book5", "author5", "this is a book", false)
// addBookToLibrary("book6", "author6", "this is a book", true)
// addBookToLibrary("book7", "author7", "this is a book", false)

// displayBooks()