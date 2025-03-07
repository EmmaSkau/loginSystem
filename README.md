# loginSystem

Dette er et simpelt login-system udviklet i **Node.js** med **Express.js** og **SQLite**.

## 📌 Funktioner
- Brugere kan **registrere sig**
- Brugere kan **logge ind**
- Adgangskoder er **hashed** med bcrypt
- **SQL-injektion beskyttelse** via prepared statements

## 📂 Projektstruktur
```plaintext
📂 ds4_login_system
 ├── 📄 database.js         # Initialisering af SQLite-database
 ├── 📄 register.js         # Brugerregistrering med bcrypt
 ├── 📄 login.js            # Login-mekanisme med bcrypt-verificering
 ├── 📄 package.json        # Projektets afhængigheder
 ├── 📄 README.md           # Dokumentation
