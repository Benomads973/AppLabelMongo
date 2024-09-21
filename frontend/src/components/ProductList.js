// src/components/ProductList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createProduct, deleteProduct, editProduct } from '../features/productSlice';
import { Form, Button, ListGroup, Modal } from 'react-bootstrap';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    username: '',
    appname: '',
    org: '',
    logo: '',
    userId: '',
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [show, setShow] = useState(false);

  const handleCreate = () => {
    dispatch(createProduct(newProduct));
    setNewProduct({ username: '', appname: '', org: '', logo: '', userId: '' });
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const handleEdit = (id) => {
    const product = products.find((product) => product.id === id);
    setEditingProduct(product);
    setShow(true);
  };

  const handleUpdate = () => {
    dispatch(editProduct({ id: editingProduct.id, updatedProduct: editingProduct }));
    setEditingProduct(null);
    setShow(false);
  };

  return (
    <div>
      <h2>Product List</h2>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={newProduct.username}
            onChange={(e) => setNewProduct({ ...newProduct, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formAppName">
          <Form.Label>App Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter app name"
            value={newProduct.appname}
            onChange={(e) => setNewProduct({ ...newProduct, appname: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formOrg">
          <Form.Label>Organization</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter organization"
            value={newProduct.org}
            onChange={(e) => setNewProduct({ ...newProduct, org: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formLogo">
          <Form.Label>Logo</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setNewProduct({ ...newProduct, logo: e.target.files[0] })}
          />
        </Form.Group>
        <Form.Group controlId="formUserId">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user ID"
            value={newProduct.userId}
            onChange={(e) => setNewProduct({ ...newProduct, userId: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCreate}>
          Create Product
        </Button>
      </Form>
      <ListGroup>
        {products.map((product) => (
          <ListGroup.Item key={product.id}>
            <span>{product.username} - {product.appname} - {product.org}</span>
            <Button variant="warning" onClick={() => handleEdit(product.id)}>Edit</Button>
            <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {editingProduct && (
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formEditUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={editingProduct.username}
                  onChange={(e) => setEditingProduct({ ...editingProduct, username: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formEditAppName">
                <Form.Label>App Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter app name"
                  value={editingProduct.appname}
                  onChange={(e) => setEditingProduct({ ...editingProduct, appname: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formEditOrg">
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter organization"
                  value={editingProduct.org}
                  onChange={(e) => setEditingProduct({ ...editingProduct, org: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formEditLogo">
                <Form.Label>Logo</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setEditingProduct({ ...editingProduct, logo: e.target.files[0] })}
                />
              </Form.Group>
              <Form.Group controlId="formEditUserId">
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter user ID"
                  value={editingProduct.userId}
                  onChange={(e) => setEditingProduct({ ...editingProduct, userId: e.target.value })}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate}>
                Update Product
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
