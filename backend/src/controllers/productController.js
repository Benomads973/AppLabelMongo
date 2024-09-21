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
    if (!product) throw new Error('Product not found');
    else if (product?.org === '' || product?.org === 'Organisation') res.json(getFakeData(product.org));
    else return res.json(product);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
