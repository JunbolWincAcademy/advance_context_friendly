import { useState } from "react";
import { collection } from "./collection";
import { Books } from "./Books";
import { LibraryContext } from "./LibraryContext";

function Library() {
  const [books, setBooks] = useState(collection.books);
  const borrowBook = (id) => {
    const newBooks = books.map((book) =>
      book.id === id ? { ...book, available: false } : book
    );
    return setBooks(newBooks);
  };
  const returnBook = (id) => {
    const newBooks = books.map((book) =>
      book.id === id ? { ...book, available: true } : book
    );
    return setBooks(newBooks);
  };
  return (
    <div className="App">
      <h1>Library</h1>
      <LibraryContext.Provider value={{ books, borrowBook, returnBook }}>
        <Books />
      </LibraryContext.Provider>
    </div>
  );
}

export default Library;
