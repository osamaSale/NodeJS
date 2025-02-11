const express = require('express');
const multer = require('multer');
const userController = require('../controllers/userController');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/register', upload.single('image'), userController.registerUser);

module.exports = router;
