import { useContext } from "react";
import { LibraryContext } from "./LibraryContext";
import { Book } from "./Book";

export const Category = ({ title, category }) => {
  const { books } = useContext(LibraryContext);
  const categoryBooks = books.filter((book) => book.category === category);
  return (
    <>
      <h3>
        {title} ({categoryBooks.length}):
      </h3>
      {categoryBooks.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </>
  );
};
