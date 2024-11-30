const express = require('express');
const multer = require('multer');
const { registerUser, loginUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

const upload = multer(); // To handle file uploads

router.post('/register', upload.single('image'), registerUser);
router.post('/login', loginUser);





// Add other CRUD routes

router.get('/', getAllUsers); // Read all users
router.get('/:id', getUserById); // Read a single user by ID
router.put('/:id', upload.single('image'), updateUser); // Update a user by ID
router.delete('/:id', deleteUser); // Delete a user by ID

module.exports = router;
