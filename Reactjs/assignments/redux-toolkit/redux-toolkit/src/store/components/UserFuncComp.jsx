import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, deleteUserAction, updateUserAction } from "../slice/userSlice";

const UserFuncComp = () => {
  const [user, setUser] = useState({ id: "", fname: "", lname: "", email: "" });
  const [isEdit, setIsEdit] = useState(false);

  const users = useSelector((state) => state.users);
  // console.log(users)
  const dispatch = useDispatch();
  
  const clearForm = () => {
    setUser({ id: "", fname: "", lname: "", email: "" });
  };

  const handleChange = (e) => {
    let newUsers = { ...user };
    newUsers[e.target.name] = e.target.value;
    setUser(newUsers);
  };
  const handleSubmit = () => {
    dispatch(addUserAction(user));
    clearForm();
  };
  const handleEdit = (user) => {
    setIsEdit(true);
    setUser(user);
  };
  const handleDelete = (user) => {
    dispatch(deleteUserAction(user));
  };
  const handleUpdate = () => {
    dispatch(updateUserAction(user))
    clearForm()
    setIsEdit(false)
  };

  return (
    <div>
      <form>
        <label> Id </label>
        <input
          type="text"
          name="id"
          value={user.id}
          onChange={(e) => {
            handleChange(e);
          }}
          disabled={isEdit}
        />{" "}
        <br />
        <br />
        <label> First Name </label>
        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <br />
        <label> Last Name </label>
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label> Email </label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        {/* <button type="button" onClick={handleUpdate}>
          updateUser
        </button>
        <button type="button" onClick={handleSubmit}>
          addUser
        </button> */}
        {isEdit ? (
          <button type="button" onClick={handleUpdate}>
            updateUser
          </button>
        ) : (
          <button type="button" onClick={handleSubmit}>
            addUser
          </button>
        )}
      </form>
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>first Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleEdit(user);
                  }}
                >
                  edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(user);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserFuncComp;
