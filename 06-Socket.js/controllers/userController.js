const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const imagekit = require('../config/imagekit');

exports.registerUser = async (req, res) => {
    const { name, email, password, phone, authorization } = req.body;
    const imageFile = req.file;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const uploadResponse = await imagekit.upload({
            file: imageFile.path,
            fileName: imageFile.originalname,
        });

        await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            authorization,
            image: uploadResponse.url,
            file_id: uploadResponse.fileId,
        });

        res.status(201).send('User registered successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
};
