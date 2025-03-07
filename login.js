const bcrypt = require('bcryptjs');
const sqlite3 = require('better-sqlite3');

const db = new sqlite3('users.db');

function loginUser(userid, password) {
    let stmt = db.prepare('SELECT id, password FROM users WHERE userid = ?');
    let user = stmt.get(userid);

    if (user && bcrypt.compareSync(password, user.password)) {
        console.log(`✅ Login succesfuldt! ID: ${user.id}, UserID: ${userid}`);
    } else {
        console.log("❌ Login mislykkedes. Forkert brugernavn eller adgangskode.");
    }
}

// Kør scriptet med: node login.js brugernavn adgangskode
const args = process.argv.slice(2);
if (args.length === 2) {
    loginUser(args[0], args[1]);
} else {
    console.log("Brug: node login.js <brugernavn> <adgangskode>");
}

db.close();
