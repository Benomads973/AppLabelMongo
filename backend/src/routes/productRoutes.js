const express = require('express');
const { createProduct, getProduct } = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/', protect, upload.single('logo'), createProduct);
router.get('/:id', protect, getProduct);

module.exports = router;
