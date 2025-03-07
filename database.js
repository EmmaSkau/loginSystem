const sqlite3 = require('better-sqlite3');

// Opret eller forbind til databasen
const db = new sqlite3('users.db');

// Opret brugertabel, hvis den ikke eksisterer
db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userid TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
`);

console.log("✅ Database og tabel oprettet!");
db.close();
