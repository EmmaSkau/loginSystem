const bcrypt = require('bcryptjs');
const sqlite3 = require('better-sqlite3');

const db = new sqlite3('users.db');

function registerUser(userid, password) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    try {
        let stmt = db.prepare('INSERT INTO users (userid, password) VALUES (?, ?)');
        stmt.run(userid, hashedPassword);
        console.log(`✅ Bruger registreret: ${userid}`);
    } catch (err) {
        console.error('❌ Fejl ved registrering:', err.message);
    }
}

// Kør scriptet med: node register.js brugernavn adgangskode
const args = process.argv.slice(2);
if (args.length === 2) {
    registerUser(args[0], args[1]);
} else {
    console.log("Brug: node register.js <brugernavn> <adgangskode>");
}

db.close();