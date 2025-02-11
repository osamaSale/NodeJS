const db = require('../db');

const saveMessage = async (message) => {
    const { userId, content } = message;
    const [result] = await db.query(
        'INSERT INTO messages (user_id, content) VALUES (?, ?)',
        [userId, content]
    );
    return result.insertId;
};

module.exports = { saveMessage };
