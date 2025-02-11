const db = require('../config/db');

class User {
    static async create(data) {
        const query = `INSERT INTO users (name, email, password, image, phone, authorization, file_id) 
                       VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const [result] = await db.execute(query, [
            data.name,
            data.email,
            data.password,
            data.image,
            data.phone,
            data.authorization,
            data.file_id,
        ]);
        return result;
    }

    static async findByEmail(email) {
        const query = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await db.execute(query, [email]);
        return rows[0];
    }
}

module.exports = User;
