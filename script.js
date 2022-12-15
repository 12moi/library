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

  // User Interface

const accountBtn = document.getElementById('accountBtn')
const accountModal = document.getElementById('accountModal')
const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const errorMsg = document.getElementById('errorMsg')
const overlay = document.getElementById('overlay')
const addBookForm = document.getElementById('addBookForm')
const booksGrid = document.getElementById('booksGrid')
const loggedIn = document.getElementById('loggedIn')
const loggedOut = document.getElementById('loggedOut')
const loadingRing = document.getElementById('loadingRing')

const setupNavbar = (user) => {
  if (user) {
    loggedIn.classList.add('active')
    loggedOut.classList.remove('active')
  } else {
    loggedIn.classList.remove('active')
    loggedOut.classList.add('active')
  }
  loadingRing.classList.remove('active')
}

const setupAccountModal = (user) => {
  if (user) {
    accountModal.innerHTML = `
      <p>Logged in as</p>
      <p><strong>${user.email.split('@')[0]}</strong></p>`
  } else {
    accountModal.innerHTML = ''
  }
}

const openAddBookModal = () => {
  addBookForm.reset()
  addBookModal.classList.add('active')
  overlay.classList.add('active')
}

const closeAddBookModal = () => {
  addBookModal.classList.remove('active')
  overlay.classList.remove('active')
  errorMsg.classList.remove('active')
  errorMsg.textContent = ''
}

const openAccountModal = () => {
  accountModal.classList.add('active')
  overlay.classList.add('active')
}

const closeAccountModal = () => {
  accountModal.classList.remove('active')
  overlay.classList.remove('active')
}

const closeAllModals = () => {
  closeAddBookModal()
  closeAccountModal()
}

const handleKeyboardInput = (e) => {
  if (e.key === 'Escape') closeAllModals()
}

const updateBooksGrid = () => {
  resetBooksGrid()
  for (let book of library.books) {
    createBookCard(book)
  }
}

const resetBooksGrid = () => {
  booksGrid.innerHTML = ''
}

  