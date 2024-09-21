import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUser, deleteUser, editUser } from '../features/userSlice';
import { Button, Form, Table } from 'react-bootstrap';

const UsersList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [editingName, setEditingName] = useState('');

  const handleCreateUser = () => {
    if (newUser.trim()) {
      dispatch(createUser(newUser));
      setNewUser('');
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user.id);
    setEditingName(user.name);
  };

  const handleSaveEdit = () => {
    if (editingName.trim()) {
      dispatch(editUser({ id: editingUser, name: editingName }));
      setEditingUser(null);
      setEditingName('');
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h2>Users List</h2>
      <Form>
        <Form.Group controlId="formNewUser">
          <Form.Label>New User</Form.Label>
          <Form.Control
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Enter user name"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCreateUser}>
          Add User
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                {editingUser === user.id ? (
                  <Form.Control
                    type="text"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUser === user.id ? (
                  <Button variant="success" onClick={handleSaveEdit}>
                    Save
                  </Button>
                ) : (
                  <Button variant="warning" onClick={() => handleEditUser(user)}>
                    Edit
                  </Button>
                )}
                <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
