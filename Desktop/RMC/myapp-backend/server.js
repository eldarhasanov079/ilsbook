const express = require('express');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const express = require('express');
app.use(express.json());

// Open SQLite database
async function setupDatabase() {
  const db = await open({
    filename: './myappdb.sqlite',
    driver: sqlite3.Database
  });

  // Create tables if they don't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      description TEXT
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      course_id INTEGER REFERENCES courses(id),
      user_id INTEGER REFERENCES users(id),
      rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
      comment TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  return db;
}

let db;
setupDatabase().then(database => {
  db = database;
});

app.use(cors());
app.use(express.json());

// Define routes here using db object
// For example, a route to get courses:
app.get('/courses', async (req, res) => {
  try {
    const courses = await db.all('SELECT * FROM courses');
    res.json(courses);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }
  
    // Check if username already exists
    const existingUser = await db.get('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const newUser = await db.run(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, hashedPassword]
      );
      res.status(201).json({ message: "User created successfully", userId: newUser.lastID });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

  
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
    const user = await db.get('SELECT * FROM users WHERE username = ?', [username]);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: "Login successful", token });
    } else {
        res.status(401).send('Invalid credentials');
    }
    } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
    }
});


app.get('/courses', async (req, res) => {
    try {
      const courses = await db.all('SELECT * FROM courses');
      res.json(courses);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

  app.post('/reviews', async (req, res) => {
    const { courseId, rating, comment, userId } = req.body; // Ensure userId is obtained securely
  
    try {
      const newReview = await db.run(
        'INSERT INTO reviews (course_id, rating, comment, user_id) VALUES (?, ?, ?, ?)',
        [courseId, rating, comment, userId]
      );
      res.status(201).json({ message: "Review added successfully", reviewId: newReview.lastID });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  
  