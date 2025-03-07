const sqlite3 = require('better-sqlite3');
const db = new sqlite3('users.db');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userid TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
`);

console.log("✅ Database oprettet!");
db.close();
