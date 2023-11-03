import bookData from '../../data/books.json' assert { type: "json" };
import { v4 as uuid } from 'uuid';


const createBook = (title, author, isbn, pages, available, genre) => {
  const newBook = {
  id: uuid(),
  title,
  author,
  isbn,
  pages,
  available,
  genre
};
//This is the line where we think there is a bug in the code


  try {
    bookData.books.push(newBook);
  } catch (error) {
    console.log('Error in createBook')
    console.log(error);
  }
  return newBook;
}

export default createBook;
