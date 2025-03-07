async function registerUser() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userid: username, password: password })
    });

    const data = await res.json();
    document.getElementById("register-message").textContent = data.message;
}

async function loginUser() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userid: username, password: password })
    });

    const data = await res.json();
    document.getElementById("login-message").textContent = data.message;
}
