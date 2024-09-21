const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  username: { type: String, required: true },
  appname: { type: String, required: true },
  org: { type: String, required: true },
  logo: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Product', productSchema);
