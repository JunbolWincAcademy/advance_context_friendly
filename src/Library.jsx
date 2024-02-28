import { Books } from "./Books";
import { LibraryContextProvider } from "./LibraryContext";// ❗ Look how we're importing the component 
//with a different name that from from the file

function Library() {

  return (
    <div className="App">
      <h1>Library</h1>
      <LibraryContextProvider>
        <Books />
      </LibraryContextProvider>
    </div>
  );
}

export default Library;
