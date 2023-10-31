import express from 'express'
import booksRouter from './routes/books.js'

const app = express()

// Middleware to parse JSON request bodies
app.use(express.json())

app.us('/books', booksRouter)

// Root route to test if the server is running
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
