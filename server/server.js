const express = require('express');
const bcrypt = require('bcryptjs');
const sqlite3 = require('better-sqlite3');
const path = require('path');

const app = express();
const db = new sqlite3('users.db');

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.post("/register", async (req, res) => {
    const { userid, password } = req.body;
    if (!userid || !password) return res.json({ message: "Udfyld alle felter!" });

    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    try {
        let stmt = db.prepare('INSERT INTO users (userid, password) VALUES (?, ?)');
        stmt.run(userid, hashedPassword);
        res.json({ message: "Bruger oprettet!" });
    } catch (err) {
        res.json({ message: "Brugernavn allerede taget." });
    }
});

app.post("/login", (req, res) => {
    const { userid, password } = req.body;

    let stmt = db.prepare('SELECT id, password FROM users WHERE userid = ?');
    let user = stmt.get(userid);

    if (user && bcrypt.compareSync(password, user.password)) {
        res.json({ message: `Velkommen, ${userid}!` });
    } else {
        res.json({ message: "Forkert brugernavn eller adgangskode." });
    }
});

app.listen(3000, () => console.log("Server kører på http://localhost:3000"));
