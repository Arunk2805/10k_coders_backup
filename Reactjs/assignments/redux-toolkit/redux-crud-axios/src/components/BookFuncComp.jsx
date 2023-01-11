import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBookAction, deleteBookAction, updateBookAction } from "../store/slice/bookSlice";

const BookFuncComp = () => {
  const [book, setBook] = useState({
    id: "",
    bookName: "",
    author: "",
  });

  const handleChange = (e) => {
    let newBooks = { ...book };
    newBooks[e.target.name] = e.target.value;
    setBook(newBooks);
  };
  const [isEdit,setIsEdit] = useState(false)

  const clearForm = ()=>{
    setBook(
      {
        id: "",
        bookName: "",
        author: "",
      }
    )
  }

  const book1 = useSelector((state) => state.books);
  console.log(book1);
  const dispatch = useDispatch();

  const handleEdit = (book) => {
    setIsEdit(true)
    setBook(book)
  };
  const handleDelete = (book) => {
    dispatch(deleteBookAction(book))
  };
  const handleSubmit = () => {
    dispatch(addBookAction(book));
    clearForm()
  };

  const handleUpdate = ()=>{
  dispatch(updateBookAction(book))
  setIsEdit(false)
  clearForm()
  }

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-4">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Id
              </label>
              <input
                type="text"
                name="id"
                value={book.id}
                className="form-control"
                id="exampleInputEmail1"
                disabled={isEdit}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Book Name
              </label>
              <input
                type="text"
                name="bookName"
                value={book.bookName}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Author
              </label>
              <input
                type="text"
                name="author"
                value={book.author}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {/* <button
              type="button"
              className=" btn btn-warning"
              onClick={handleSubmit}
            >
              addBook
            </button> */}

            {isEdit ? (
          <button type="button" onClick={handleUpdate} className="btn btn-warning">
            updateBook
          </button>
        ) : (
          <button type="button" onClick={handleSubmit} className="btn btn-warning">
            addBook
          </button>
        )}
          </form>
        </div>
        <div className="col-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {book1.books.map((book, i) => (
                <tr key={i}>
                  <td>{book.id}</td>
                  <td>{book.bookName}</td>
                  <td>{book.author}</td>
                  <td>
                    <button
                      type="button"
                      className="btn-warning btn"
                      onClick={() => {
                        handleEdit(book);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn-danger btn"
                      onClick={() => {
                        handleDelete(book);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookFuncComp;
