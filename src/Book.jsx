import { useContext } from "react";
import { LibraryContext } from "./LibraryContext";

export const Book = ({ book }) => {
  const { borrowBook, returnBook } = useContext(LibraryContext);

  return (
    <>
      <h4>📖 {book.title}</h4>
      <p>✍ {book.author}</p>
      {book.available ? (
        <button type="button" onClick={() => borrowBook(book.id)}>
          ⇩ Borrow
        </button>
      ) : (
        <button type="button" onClick={() => returnBook(book.id)}>
          ⏎ Return
        </button>
      )}
    </>
  );
};
