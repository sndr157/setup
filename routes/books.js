import express from 'express'
import getBooks from './services/books/getBooks.js'
import getBookById from './services/books/getBookById.js'
import updateBookById from './services/books/updateBookById.js'
import createBook from './services/books/createBook.js'
import deleteBook from './services/books/deleteBook.js'

// Create a router instance
const router = express.Router()

// Define routes

// Route to get a list of books
router.get('/', (req, res) => {
  try {
    const books = getBooks()
    res.status(200).json(books)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting the list of books!')
  }
})

// Route to get a specific book by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params
    const book = getBookById(id)

    if (!book) {
      res.status(404).send(`Book with id ${id} was not found!`)
    } else {
      res.status(200).json(book)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while getting the book by id!')
  }
})

// Route to update a book by ID
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params
    const { title, author, isbn, pages, available, genre } = req.body
    const updatedBook = updateBookById(id, title, author, isbn, pages, available, genre)
    res.status(200).json(updatedBook)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while updating the book by id!')
  }
})

// Route to Delete a book by ID
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params
    const deletedBookId = deleteBook(id)

    if (!deletedBookId) {
      res.status(404).send(`Book with id ${id} was not found!`)
    } else {
      res.status(200).json({
        message: `Book with id ${deletedBookId} was deleted!`
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong while deleting book by id!')
  }
})

// Export the router
export default router
