const express = require('express');
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());


const db = mysql.createConnection({
    host: '192.168.81.120',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'nimble_db',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.post('/api/signup', (req, res) => {
    const { username, email, password } = req.body;
    const constantValues = [0, 15];

    const checkUserQuery = `SELECT * FROM users WHERE email = ?`;
    db.query(checkUserQuery, [email], (checkError, checkResults) => {
        if (checkResults.length > 0) {
            res.status(409).json({ success: false, message: 'Email already exists' });
            return;
        }
        if (checkError) {
            console.error('Error executing user check query:', checkError);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
            return;
        }

        const insertUserQuery = `INSERT INTO users (username, email, password, workouts, coins) VALUES (?, ?, ?, ?, ?)`;
        const insertValues = [username, email, password, ...constantValues];
        db.query(insertUserQuery, insertValues, (insertError, insertResults) => {
            if (insertError) {
                console.error('Error executing signup query:', insertError);
                res.status(500).json({ success: false, message: 'Internal Server Error' });
                return;
            }
            const userId = insertResults.insertId;
            res.json({ success: true, message: 'Sign up successfully', user_id: userId });

        });
    });
});

app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    db.query(query, [email, password], (error, results) => {
        if (error) {
            console.error('Error executing signin query:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
            return;
        }

        if (results.length === 0) {
            res.status(401).json({ success: false, message: 'Invalid email or password' });
        } else {
            const username = results[0].username;
            const id = results[0].id;
            res.json({
                success: true,
                message: 'Sign in successfully',
                username: username,
                user_id: id,
            });
        }
    });
});
