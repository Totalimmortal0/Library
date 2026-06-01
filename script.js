let library = []

function Book(name, author, desc, bookID) {
    this.name = name
    this.author = author
    this.desc = desc
    this.bookID = bookID
}

function addBookToLibrary(name, author, desc) {
    const newBook = new Book(name, author, desc, crypto.randomUUID())
    library.push(newBook)
}

addBookToLibrary("book1", "author1", "this is a book")
addBookToLibrary("book2", "author2", "this is a book")
addBookToLibrary("book3", "author3", "this is a book")

console.log(library)