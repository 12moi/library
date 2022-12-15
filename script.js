// Data Structures

class Book {
    constructor(
      title = 'Unknown',
      author = 'Unknown',
      pages = '0',
      isRead = false
    ) {
      this.title = title
      this.author = author
      this.pages = pages
      this.isRead = isRead
    }
  }
  
  class Library {
    constructor() {
      this.books = []
    }
  
    addBook(newBook) {
      if (!this.isInLibrary(newBook)) {
        this.books.push(newBook)
      }
    }
  
    removeBook(title) {
      this.books = this.books.filter((book) => book.title !== title)
    }
  
    getBook(title) {
      return this.books.find((book) => book.title === title)
    }
  
    isInLibrary(newBook) {
      return this.books.some((book) => book.title === newBook.title)
    }
  }
  
  const library = new Library()
  