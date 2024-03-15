import { createContext, useContext, useState } from 'react';
import { collection } from './collection';

export const LibraryContext = createContext({});

LibraryContext.displayName = 'LibraryContext';

export const LibraryContextProvider = ({ children }) => {
  const [books, setBooks] = useState(collection.books);
  const borrowBook = (id) => {
    const newBooks = books.map((book) => (book.id === id ? { ...book, available: false } : book));
    return setBooks(newBooks);
  };
  const returnBook = (id) => {
    const newBooks = books.map((book) => (book.id === id ? { ...book, available: true } : book));
    return setBooks(newBooks);
  };

  return <LibraryContext.Provider value={{ books, borrowBook, returnBook }}>{children}</LibraryContext.Provider>;
};

//-----This is the custom HOOK:❗ All custom made Hooks need to have 'use' as prefix.
/* The conditional check if (!context) within the custom hook is indeed a safeguard. It's there to ensure that the hook (and thus any context values or functions) is used within a component that is wrapped by the appropriate ContextProvider. If Books is going to use uselibrary it needs to be like thi:
<LibraryContextProvider>
        <Books />
      </LibraryContextProvider>

*/
export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error('useLibrary must be used within a LibraryContextProvider');
  }
  return context;
};
