const connection = require('../config/database')

class UserService {
    getAllUsers = async () => {
        try {
            const [users, fields] = await connection.query('SELECT * FROM `Users`');
            return users;
        } catch (error) {
            console.log(err);
        }
    }

    postCreateUser = async ([ name, email, city]) => {
        const sql = 'INSERT INTO Users ( name, email, city) VALUES (?, ?, ?)';
        try {
            const [result, fields] = await connection.query(sql, [ name, email, city]);
            //console.log('>>>> result :',result);
            return result;
        } catch (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new UserService();