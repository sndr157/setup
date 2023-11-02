import express from 'express'
import booksRouter from './routes/books.js'
import recordsRouter from './routes/records.js'; // Import the 'records' router
import log from './middleware/logMiddleware.js'

const app = express()
app.use(express.json())

app.use(log) // Use the log middleware

app.use('/books', booksRouter)
app.use('/records', recordsRouter); // Use the 'records' router here

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
