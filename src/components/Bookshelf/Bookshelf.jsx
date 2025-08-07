import { useState } from "react";

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({
            ...newBook,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newBook.title && newBook.author) {
            setBooks([...books, newBook]);
            setNewBook({ title: '', author: '' });
        }
    };


  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
        
      </div>
      <div className="bookCardsDiv">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} className="bookCard">
              <h4>{book.title}</h4>
              <p>by {book.author}</p>
            </div>
          ))
        ) : (
          <p>No books added yet.</p>
        )}
       
      </div>
    </div>
  );
};

export default Bookshelf;
