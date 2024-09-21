const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();

mongoose.connect( process.env.MONGO_URL, {
  user: process.env.MONGO_USER, 
  pass: process.env.MONGO_PASSWORD,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
