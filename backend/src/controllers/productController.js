const Product = require('../models/Product');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const { getFakeData } = require('../utils/fakeData');

exports.createProduct = async (req, res) => {
  try {
    const { username, appname, org, userId } = req.body;
    const logo = req.file ? `/uploads/${uuidv4()}${path.extname(req.file.originalname)}` : '';
    const product = new Product({ username, appname, org, logo, userId });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (product.org === '') {
      return res.json(getFakeData(''));
    } else if (product.org === 'Organisation') {
      return res.json(getFakeData('Organisation'));
    } else if (product.org !== '' && product.org !== 'Organisation') {
      return res.json(product);
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
